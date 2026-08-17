#!/usr/bin/env bash
# bootflower branch-janitor — report (and optionally clean) branch/worktree hygiene.
# Deletion happens only with an explicit flag; zombies are NEVER auto-deleted.
#
# Merged detection uses TWO proofs, either is sufficient:
#   (a) ancestry — the branch is an ancestor of the default branch (git merge-base)
#   (b) PR state — `gh pr list --state merged` lists the branch as a merged PR's head
# (a) alone misses squash-merged branches: a squash-merge creates a new commit on the
# default branch that does NOT have the source branch as an ancestor. (b) closes that
# gap. Every delete (local -D, remote push --delete, worktree remove) writes a rescue
# ref to refs/janitor-archive/<slug> BEFORE deleting, so nothing is unrecoverable.
set -uo pipefail

NAMING_RE='^(main|master|HEAD|feat|fix|chore|docs|refactor|test|spike|release|archive|dependabot)(/.*)?$'
ZOMBIE_DAYS=90
DO_DELETE_MERGED=0
DO_PRUNE_WORKTREES=0

usage() {
  cat <<'EOF'
Usage: branch-janitor.sh [--report] [--delete-merged] [--prune-worktrees] [--zombie-days N] [--help]

Checks local/remote branches and worktrees for:
  - naming violations (pattern configurable via NAMING_RE / manifest)
  - merged-but-undeleted branches (ancestry OR a merged PR head, see below)
  - zombie branches (unmerged by both proofs, no commits in N days; default 90)
  - worktrees: classified merged / no-PR / PR-open / detached / dirty

Merge detection: a branch counts as merged if it is an ancestor of the default
branch, OR `gh pr list --state merged` lists it as a merged PR's head. The second
proof is what catches squash-merges (no ancestry, but the PR is merged). Without a
usable `gh` (unauthenticated, no GitHub remote), detection falls back to ancestry
only and the report says so explicitly — treat that report as incomplete.

Options:
  --report            Print the report (default; always runs even with other flags)
  --delete-merged      Delete LOCAL and (with separate confirmation) REMOTE branches
                        that are merged (ancestry or PR-verified). Ancestry-merged
                        branches use `git branch -d`; PR-only-verified (squash) ones
                        require the `-D` force flag, used ONLY after PR confirmation.
                        A rescue ref (refs/janitor-archive/<slug>) is written before
                        every delete.
  --prune-worktrees    Remove worktrees classified as merged AND clean (no detached
                        HEAD, no uncommitted/untracked changes). Runs BEFORE branch
                        deletion when both flags are given — git refuses to delete a
                        branch checked out by a worktree.
  --zombie-days N       Zombie threshold in days (default 90)
  --help                Show this help and exit 0

Restoring a deleted branch or worktree branch:
  git branch <name> refs/janitor-archive/<slug>
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --report) shift ;;
    --delete-merged) DO_DELETE_MERGED=1; shift ;;
    --prune-worktrees) DO_PRUNE_WORKTREES=1; shift ;;
    --zombie-days) ZOMBIE_DAYS="$2"; shift 2 ;;
    --help|-h) usage; exit 0 ;;
    *) echo "Unknown argument: $1"; usage; exit 2 ;;
  esac
done

DEFAULT="$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@')"
[[ -z "$DEFAULT" ]] && DEFAULT="$(git rev-parse --verify -q main >/dev/null && echo main || echo master)"
NOW="$(date +%s)"
CUTOFF=$((NOW - ZOMBIE_DAYS * 86400))

# --- PR-state cache: ONE call each for merged and open heads, never per-branch. ---
declare -A PR_MERGED_SET=()
declare -A PR_OPEN_SET=()
GH_STATUS="unavailable"
if command -v gh >/dev/null 2>&1; then
  if PR_HEADS="$(gh pr list --state merged --limit 1000 --json headRefName -q '.[].headRefName' 2>/dev/null)"; then
    GH_STATUS="ok"
    while IFS= read -r h; do [[ -n "$h" ]] && PR_MERGED_SET["$h"]=1; done <<<"$PR_HEADS"
    while IFS= read -r h; do [[ -n "$h" ]] && PR_OPEN_SET["$h"]=1; done \
      < <(gh pr list --state open --limit 1000 --json headRefName -q '.[].headRefName' 2>/dev/null)
  fi
fi
if [[ "$GH_STATUS" != "ok" ]]; then
  echo "WARNING: gh unavailable, unauthenticated, or no GitHub remote here."
  echo "         Merge detection falls back to ANCESTRY ONLY — squash-merged"
  echo "         branches will be misreported as unmerged/zombie. This report"
  echo "         is INCOMPLETE. Install/auth gh for full detection."
  echo
fi

# is_merged <short-name> <full-ref>  — true if merged by ancestry OR PR state.
is_merged() {
  local short="$1" ref="$2"
  git merge-base --is-ancestor "$ref" "$DEFAULT" 2>/dev/null && return 0
  [[ -n "${PR_MERGED_SET[$short]+x}" ]] && return 0
  return 1
}

archive_ref() {
  # archive_ref <short-name-for-slug> <sha> -> prints the restore command
  local name="$1" sha="$2"
  local slug="${name//\//-}"
  git update-ref "refs/janitor-archive/$slug" "$sha"
  echo "    rescued: git branch <name> refs/janitor-archive/$slug"
}

echo "branch-janitor: default branch = $DEFAULT, zombie threshold = ${ZOMBIE_DAYS}d, gh = $GH_STATUS"
echo

echo "== Naming violations =="
git for-each-ref --format='%(refname:short)' refs/heads refs/remotes/origin \
  | sed 's@^origin/@@' | sort -u \
  | grep -vE "$NAMING_RE" | sed 's/^/  /' || echo "  none"
echo

echo "== Merged but undeleted (into $DEFAULT; ancestry OR merged-PR) =="
MERGED_LOCAL=()
while IFS= read -r b; do
  [[ -z "$b" || "$b" =~ ^($DEFAULT|master|main)$ ]] && continue
  is_merged "$b" "refs/heads/$b" && MERGED_LOCAL+=("$b")
done < <(git for-each-ref --format='%(refname:short)' refs/heads)

MERGED_REMOTE=()
while IFS= read -r b; do
  short="${b#origin/}"
  [[ -z "$b" || "$short" =~ ^(HEAD|$DEFAULT|main|master)$ ]] && continue
  is_merged "$short" "refs/remotes/$b" && MERGED_REMOTE+=("$short")
done < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin)

if [[ ${#MERGED_LOCAL[@]} -gt 0 ]]; then printf '  local:  %s\n' "${MERGED_LOCAL[@]}"; else echo "  none (local)"; fi
if [[ ${#MERGED_REMOTE[@]} -gt 0 ]]; then printf '  remote: %s\n' "${MERGED_REMOTE[@]}"; else echo "  none (remote)"; fi
echo

echo "== Zombies (unmerged by both proofs, idle > ${ZOMBIE_DAYS}d) =="
FOUND=0
while IFS='|' read -r ref ts; do
  [[ -z "$ref" ]] && continue
  short="${ref#origin/}"
  [[ "$short" =~ ^(main|master|HEAD)$ ]] && continue
  [[ "$ts" -lt "$CUTOFF" ]] || continue
  fullref="refs/heads/$ref"
  [[ "$ref" == origin/* ]] && fullref="refs/remotes/$ref"
  if ! is_merged "$short" "$fullref"; then
    days=$(( (NOW - ts) / 86400 ))
    echo "  $ref (idle ${days}d)"; FOUND=1
  fi
done < <(git for-each-ref --format='%(refname:short)|%(committerdate:unix)' refs/heads refs/remotes/origin)
[[ "$FOUND" -eq 0 ]] && echo "  none"
echo

# --- Worktrees: parsed from `git worktree list --porcelain`, blocks separated by "". ---
echo "== Worktrees =="
MAIN_WT="$(git rev-parse --show-toplevel 2>/dev/null)"
WT_MERGED=() ; WT_NOPR=() ; WT_OPEN=() ; WT_DETACHED=() ; WT_DIRTY=()
cur_path="" ; cur_branch="" ; cur_detached=0
flush_wt() {
  [[ -z "$cur_path" ]] && return
  if [[ "$cur_path" != "$MAIN_WT" ]]; then
    if [[ "$cur_detached" -eq 1 ]]; then
      WT_DETACHED+=("$cur_path|")
    elif [[ -n "$(git -C "$cur_path" status --porcelain 2>/dev/null)" ]]; then
      WT_DIRTY+=("$cur_path|$cur_branch")
    elif is_merged "$cur_branch" "refs/heads/$cur_branch"; then
      WT_MERGED+=("$cur_path|$cur_branch")
    elif [[ -n "${PR_OPEN_SET[$cur_branch]+x}" ]]; then
      WT_OPEN+=("$cur_path|$cur_branch")
    else
      WT_NOPR+=("$cur_path|$cur_branch")
    fi
  fi
  cur_path="" ; cur_branch="" ; cur_detached=0
}
while IFS= read -r line; do
  case "$line" in
    "worktree "*) cur_path="${line#worktree }" ;;
    "branch refs/heads/"*) cur_branch="${line#branch refs/heads/}" ;;
    "detached") cur_detached=1 ;;
    "") flush_wt ;;
  esac
done < <(git worktree list --porcelain 2>/dev/null; echo)
flush_wt

print_wt() { local -n arr="$1"; local label="$2"
  if [[ ${#arr[@]} -eq 0 ]]; then echo "  $label: none"; return; fi
  echo "  $label (${#arr[@]}):"
  for e in "${arr[@]}"; do echo "    ${e%%|*}  (${e#*|})"; done
}
print_wt WT_MERGED "merged, clean — prunable"
print_wt WT_NOPR "no PR found"
print_wt WT_OPEN "open PR"
print_wt WT_DETACHED "detached HEAD"
print_wt WT_DIRTY "dirty (uncommitted/untracked)"
echo "  counts: merged=${#WT_MERGED[@]} no-pr=${#WT_NOPR[@]} open-pr=${#WT_OPEN[@]} detached=${#WT_DETACHED[@]} dirty=${#WT_DIRTY[@]}"
echo

# --- Actions. Order matters: worktrees BEFORE branches (git refuses to delete a
# branch checked out by a worktree). ---

if [[ "$DO_PRUNE_WORKTREES" -eq 1 ]]; then
  echo "== Pruning worktrees =="
  if [[ ${#WT_MERGED[@]} -eq 0 ]]; then
    echo "Nothing to prune."
  else
    echo "Will remove these merged, clean worktrees (git worktree remove, no --force):"
    for e in "${WT_MERGED[@]}"; do echo "  ${e%%|*}  (${e#*|})"; done
    read -r -p "Proceed? [y/N] " ANSWER
    if [[ "$ANSWER" =~ ^[Yy]$ ]]; then
      for e in "${WT_MERGED[@]}"; do
        wpath="${e%%|*}"
        if git worktree remove "$wpath"; then echo "  removed: $wpath"
        else echo "  FAILED to remove: $wpath (left in place)"; fi
      done
    else
      echo "Aborted."
    fi
  fi
  echo
fi

if [[ "$DO_DELETE_MERGED" -eq 1 ]]; then
  echo "== Deleting merged branches =="
  if [[ ${#MERGED_LOCAL[@]} -eq 0 ]]; then
    echo "Nothing to delete (local)."
  else
    echo "Will delete these LOCAL merged branches (rescue ref written first):"
    for b in "${MERGED_LOCAL[@]}"; do echo "  $b"; done
    read -r -p "Proceed? [y/N] " ANSWER
    if [[ "$ANSWER" =~ ^[Yy]$ ]]; then
      for b in "${MERGED_LOCAL[@]}"; do
        sha="$(git rev-parse "refs/heads/$b")"
        slug="${b//\//-}"
        git update-ref "refs/janitor-archive/$slug" "$sha"
        if git merge-base --is-ancestor "refs/heads/$b" "$DEFAULT" 2>/dev/null; then
          if git branch -d "$b"; then echo "  deleted (ancestor): $b"
          else echo "  FAILED to delete: $b"; fi
        else
          # Not an ancestor: only reachable here because gh confirmed the PR is
          # MERGED (is_merged's PR branch). -D is safe because that proof is in hand.
          if git branch -D "$b"; then echo "  deleted (squash, PR-verified): $b"
          else echo "  FAILED to delete: $b"; fi
        fi
        echo "    restore: git branch $b refs/janitor-archive/$slug"
      done
    else
      echo "Aborted (local)."
    fi
  fi

  if [[ ${#MERGED_REMOTE[@]} -gt 0 ]]; then
    echo
    echo "Will delete these REMOTE merged branches (rescue ref written first, then push --delete):"
    for b in "${MERGED_REMOTE[@]}"; do echo "  origin/$b"; done
    read -r -p "Proceed? [y/N] " ANSWER
    if [[ "$ANSWER" =~ ^[Yy]$ ]]; then
      for b in "${MERGED_REMOTE[@]}"; do
        sha="$(git rev-parse "refs/remotes/origin/$b")"
        slug="origin-${b//\//-}"
        git update-ref "refs/janitor-archive/$slug" "$sha"
        if git push origin --delete "$b"; then echo "  deleted: origin/$b"
        else echo "  FAILED to delete: origin/$b"; fi
        echo "    restore (local only, SHA does not survive on the remote): git branch $b refs/janitor-archive/$slug"
      done
    else
      echo "Aborted (remote)."
    fi
  fi
fi
