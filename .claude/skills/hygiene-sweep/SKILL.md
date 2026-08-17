---
name: hygiene-sweep
description: Use when a repo's hygiene has drifted from reality — the README/board summary is stale, resolved issues are still open, merged branches linger, docs describe finished work as pending, or scheduled maintenance has never run. Also weekly via the maintenance schedule, as the acting counterpart to repo-health-report.
---

# hygiene-sweep

The acting counterpart to `repo-health-report`. That skill *detects* every drift
signal; this one *acts* on them — **applies the fixes that are safe and provable,
reports the ones that need your judgment.** It computes nothing novel: it runs the
existing skills in their apply modes and negotiates the rest.

## When to use

- The README board summary contradicts reality (a closed issue shown open, a done
  epic shown pending). The generated board drifted because nobody regenerated it.
- Issues that a merged PR resolved are still open.
- Merged branches never got deleted; docs describe shipped work as "pending".
- The maintenance schedule shows tasks that have never run.
- Weekly, as the scheduled sweep.

## Two buckets

Every signal from `repo-health-report` falls into exactly one:

| Auto-apply (safe + **provable** + reversible) | Report only (judgment) |
|---|---|
| Regenerate README board + `planning/BOARD.md` via `roadmap-board` (generated output, Rule 7) | Zombie branches — may hold unmerged work; per-branch decision via `branch-janitor` |
| Close an issue **only when proof exists**: a merged PR closing-references it, or its objective done-criteria hold. Cite the evidence in the close comment | Issues that look stale but aren't provably done — list each with why |
| Prune worktrees whose branch is **provably merged** and whose tree is clean, via `branch-janitor` | Worktrees that are dirty, `detached HEAD`, PR-less or PR-open — every one is a per-worktree decision |
| Delete merged-but-undeleted branches via `branch-janitor --delete-merged` | Doc reconciliation needing interpretation (a spec section describing done-as-pending, Rule 10) — propose the edit, don't rewrite silently |
| Update `last_run` stamps in the maintenance schedule for tasks run | Stale/abandoned PRs + dependency-bump backlog — recommend merge or close, don't act |
| | Dead config params / orphan CONFIG.md entries (`config-registry`); open cost risks (`cost-guard`) |

## Worktrees are part of the sweep, and they come first

> [!IMPORTANT]
> **Prune worktrees BEFORE deleting branches.** Git refuses to delete a branch that is
> checked out in a worktree, so the reverse order fails silently on exactly the branches
> that accumulated the most. This ordering is not a preference; it is the only one that
> works.

Worktrees are the largest hygiene surface in a repo that follows the branch-per-worktree
convention, and until 2026-08 nothing in this skill or in `branch-janitor` knew they
existed. Measured on foja's first real sweep: **141 live worktrees holding 29 GB**, of
which 113 had a merged PR. The create path (`superpowers:using-git-worktrees`) is invoked
constantly; the destroy path had no owner.

**Never prune on staleness.** A worktree is prunable only when its branch is provably
merged — ancestor of the default branch, or its PR in state `MERGED` — *and* its
`git status --porcelain` is empty. Four categories are excluded without exception:

| Excluded | Why |
|---|---|
| Dirty (any uncommitted or untracked file) | May hold work that exists nowhere else |
| `detached HEAD` | No branch to check a PR state against |
| No PR for its branch | May hold work never pushed |
| PR open | Work in flight |

That exclusion list is load-bearing, not defensive padding. On foja's sweep it is what
surfaced the sweep's only security finding: a dirty worktree was skipped, and inspecting
*why* it was dirty revealed an untracked symlink pointing at a client's real case files
(foja#718). A more aggressive sweep would have deleted the evidence instead of reading it.

**Use `git worktree remove` without `--force`, never `rm -rf`.** The command refuses on a
dirty tree, which is a second line of defence behind the classification above, and it
never touches a directory that is not a registered worktree.

## Protocol

1. **Detect.** Derive the signal inventory yourself: worktrees, branches, issues, PRs, the
   maintenance schedule. If `repo-health-report` ran recently enough that its output is
   still on screen, reuse it — but **do not wait for it and do not assume it exists.** It
   is a skill, not a script: it leaves no artifact and caches nothing, so there is
   normally nothing to inherit. (This step used to read "run `repo-health-report` first,
   don't re-derive". On foja that skill had never run once in 425 PRs, so the instruction
   pointed at an inventory that did not exist and the sweep re-derived everything anyway.)
2. **Preview — and make it runnable.** List the exact auto-apply actions and the
   report-only findings *before* touching anything, as a **dry run**: every worktree that
   would be pruned and every branch that would be deleted, named, with the proof beside
   it. Nothing runs until that list is shown. A sweep that cannot show its plan before
   acting is not ready to act.
3. **Apply the safe bucket.** File changes (regenerated board, mechanical doc reconciliation) go into **one branch + PR** — never a direct commit to the default branch. Issue closes and branch deletes are direct API/git actions, executed only with the proof cited.
4. **Report the judgment bucket**, worst first, each finding naming the exact command/skill to act with — same format as `repo-health-report`.
5. **Stamp.** Update `last_run` for `hygiene-sweep` (and any sub-skill it ran) in the maintenance schedule, inside the same PR.

## Safety rules

- **Provable-only, for every destructive action.** Never close an issue, delete a branch or prune a worktree on staleness, inactivity, or a hunch. Proof means: for an issue, a merged PR that closing-references it or objective done-criteria; for a branch or worktree, ancestry into the default branch or a PR in state `MERGED`. **Ancestry alone is not enough where the repo squash-merges** — a squash produces a new commit that does not carry the branch as an ancestor, so the PR state is the authoritative signal. No proof → report bucket, untouched.
- **Nothing destructive is irreversible.** Before deleting a branch, `branch-janitor` writes a rescue ref (`refs/janitor-archive/<branch>`); the sweep reports how to restore from it. A delete you cannot undo is not a hygiene action.
- **Everything file-shaped goes through a PR.** No direct commits to the default branch; the PR is where a human sees the diff.
- **Generated is regenerated, never hand-edited** (Rule 7). Vendored skills/rules are never forked here (Rule 9) — behavior changes go upstream to the meta-repo.
- **Idempotent.** A clean repo → a no-op: no PR, nothing closed, nothing deleted.
- **Read the target before overwriting a doc.** If its content contradicts how the drift signal described it, surface that instead of overwriting.

## Red flags — STOP

- About to close an issue you can't tie to a merged PR or done-criteria → move it to the report bucket.
- About to `git push --delete` a branch that isn't fully merged → that's a zombie; report it, don't delete.
- About to prune a worktree that is dirty, `detached HEAD`, PR-less or PR-open → stop. Read *why* it is dirty before deciding; that inspection is where the real findings live.
- About to delete branches before pruning worktrees → wrong order; git will refuse on exactly the branches that matter.
- About to reach for `rm -rf` because `git worktree remove` refused → the refusal is the safety mechanism working. Reclassify the worktree, don't override it.
- About to hand-edit the board summary or a generated section → regenerate via `roadmap-board` instead.
- Rewriting a spec's prose to "reconcile" it based on your own read of what's done → propose it in the report, let the human confirm.

## Output

A short PR (regenerated board + any mechanical reconciliations + schedule stamps) plus
a markdown report of the judgment bucket. If the repo is already clean, say so and open
nothing. Update `last_run` in `.claude/maintenance-schedule.md`.
