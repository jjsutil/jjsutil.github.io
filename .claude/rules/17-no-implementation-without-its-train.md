# Rule 17 — No implementation without its train

Owner decision, 2026-08-12. Rationale: the discipline existed in pieces — rule 12 fixes the
hierarchy, `ejecucion` stops without an approved plan, the dispatch contract asks for "a PR
plan, never a whole issue" — but nothing said the whole train is **mandatory**, nothing said
what to do when the structure the train needs does not exist yet, and nothing said **who
writes the implementation document and who executes it**. The gap shows up as the same
failure every time: a builder handed half a plan explores the repo to finish it, becomes its
own planner, and ships something nobody specified.

> [!IMPORTANT]
> **Nothing is implemented until its train exists: a tagged issue stating and discussing the
> problem, a place in the planning hierarchy, and a unit ERD detailing the whole
> implementation.** The unit ERD is written by a top-tier agent (**Opus**; Fable only for the
> exceptionally hard) and must be executable by one or more **Sonnet** builders **without
> further exploration**. Author ≠ builder ≠ reviewer.

- **The train, in order.** (1) An **issue** carrying its tags/labels, the problem stated, and
  the discussion that shaped it — decisions recorded in the thread, not in an agent's memory.
  (2) Its **place in the hierarchy** (rule 12): the epic exists and the unit hangs from it,
  with its planned PRs enumerated. (3) The **unit ERD** in the repo's plan store. (4) The
  **build**, dispatched to one or more Sonnet agents. A step skipped is a step owed, not a
  step gone.
- **If the structure does not exist, creating it is part of the train.** The planner checks
  the plan store and the epic for this unit; where they are missing it reviews what already
  exists, registers the epic with its issues and planned PRs, and creates the store —
  **before** any ERD is written. Finding the scaffolding absent is never a licence to skip
  it; it is the first task of the unit.
- **A unit ERD is not the project ERD.** `docs/ERD.md` (written once, by `design-to-repo`)
  is the project's technical shape: architecture, stack, ER-xx requirements. The unit ERD is
  **one per unit of work / planned PR**, and lives in the repo's plan store — `plan_store` in
  `.claude/repo-conventions.md`, defaulting to `planning/pr-plans/`. Same name, different
  altitude: the unit ERD **cites** the project's document (or whichever design doc plays that
  role in the repo) and never restates it.
- **Completeness bar: the builder must never have to explore.** Every unit ERD carries the
  bar it will be judged against and that bar's provenance (rule 16), the current state
  **verified against the code** with `file:line` evidence, the explicit file list, ordered
  steps of roughly one commit each, done-criteria tied to the issue's acceptance criteria,
  the exact test commands, and the non-goals. A hole in any of these is a defect of the
  planner, never of the builder: the builder reports the gap and stops.
- **The authorship tier is part of the rule.** The unit ERD is written by an Opus agent —
  the research and the design judgement it needs are exactly what the cheap tier cannot
  supply — and executed by Sonnet builders against an issue whose acceptance criteria are
  already written. Nobody reviews their own work, and nobody builds from a document they
  authored. This is the **one named exception** to "Opus is never a dispatch default": the
  ERD is bought once and read by every builder after it, so the model policy's cheapest-
  sufficient rule lands on Opus here, and nowhere else by default.
- **Scalable by construction.** Splitting one ERD across several Sonnet builders working in
  parallel is the expected shape, so the steps are written to be separable and their
  dependencies stated. **An ERD that cannot be split is a unit that was scoped too large** —
  split the unit, never widen the worker.
- **Research belongs to planning, not to building.** Exploration happens once, while the ERD
  is written; workers read the files the ERD names and their direct imports. This is the
  dispatch contract, restated here only to say where the exploration went.
- **Exceptions, and only these two.** A **mechanical change with no design decision** — a
  typo, a dependency bump, regenerating a generated view, a revert. And a **production
  breakage**: fix first, then write the ERD retroactively in the same PR, or in the follow-up
  issue the fix opens. Everything else takes the train, however small it looks; "it's only a
  few lines" is the sound of a unit that was never planned.

Bound at dispatch time by `jefatura` (no unit ERD → the unit is not dispatched, and the
dispatch names the tier), at build time by `ejecucion` (missing or incomplete ERD → stop and
report the gap), and at review time by `pr-reviewer` (the review names the unit ERD it judges
against). Written by `pr-plan` or `superpowers:writing-plans`; the issue by `issue-writer`;
the hierarchy it fills is rule 12's. See also rule 1 (the pre-PR gate the build still owes),
rule 12 (goals → milestones → epics → issues → planned PRs) and rule 16 (the fidelity bar is
owner-signed, never written by the front that implements it).
