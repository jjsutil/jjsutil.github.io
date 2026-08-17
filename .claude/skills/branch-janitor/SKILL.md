---
name: branch-janitor
description: Wrap scripts/branch-janitor.sh — report wrongly named, merged-but-undeleted, and zombie branches, then propose cleanup. Never force-deletes without explicit confirmation. Use on "limpia las ramas", "branch cleanup", "ramas muertas", or weekly via maintenance schedule.
---

# branch-janitor

The logic lives in `scripts/branch-janitor.sh`; this skill runs it and negotiates
cleanup.

## Run

```bash
scripts/branch-janitor.sh --report
```

Reports, for local and remote branches, plus worktrees:

- **Naming violations** — branches not matching the manifest's pattern
  (default `^(main|master|feat|fix|chore|docs|refactor|spike)(/|$)`).
- **Merged-but-undeleted** — merged into the default branch by **either** proof:
  ancestry (`git merge-base --is-ancestor`) **or** a merged PR head
  (`gh pr list --state merged`). Ancestry alone misses squash-merges — a squash-merge
  creates a new commit on the default branch that does not have the source branch as
  an ancestor. Without a usable `gh` (unauthenticated, no GitHub remote), the script
  falls back to ancestry only and says so explicitly; treat that report as incomplete.
- **Zombies** — unmerged by *both* proofs, no commits in >90 days (script flag
  `--zombie-days`).
- **Worktrees** — classified merged-and-clean (prunable) / no PR found / open PR /
  detached HEAD / dirty (uncommitted or untracked changes). A worktree is never
  touched unless it is clean and provably merged.

> [!IMPORTANT]
> **Worktrees are pruned before branches, always.** Git refuses to delete a branch
> checked out by a worktree, so any cleanup that touches both does worktrees first.

## Cleanup protocol

1. Present the report grouped by category with the exact delete commands.
2. **Worktrees first.** Run `branch-janitor.sh --prune-worktrees` for the
   merged-and-clean bucket only (`git worktree remove`, no `--force`). Never touch
   detached, dirty, no-PR, or open-PR worktrees — a dirty worktree may hold
   uncommitted work or a symlink into real data (see the `foja-eval` incident:
   excluding dirty worktrees is what kept a client-data symlink untouched).
3. **Branches second.** Merged-but-undeleted (local and remote, separate
   confirmations) — run `branch-janitor.sh --delete-merged`. Every delete writes a
   rescue ref (`refs/janitor-archive/<slug>`, local-only even for remote deletes,
   since it's the one place the SHA survives `push --delete`) *before* deleting.
   Ancestry-merged branches use `git branch -d`; squash-merged branches (PR-verified
   only, never blind) use `-D`, because git's ancestry check refuses `-d` on them.
4. **Restore** any deleted branch from its rescue ref:
   `git branch <name> refs/janitor-archive/<slug>`.
5. Zombies: **never** force-delete without per-branch confirmation — a zombie may hold
   unmerged work. Offer alternatives: rescue into an issue (via `issue-writer`), tag
   (`archive/<branch>`) then delete, or keep.
6. Naming violations on active branches: propose a rename; on dead ones, fold into the
   buckets above.

Findings feed `repo-health-report`. Update `last_run` in the maintenance schedule.
