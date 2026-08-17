# Rule 16 — The fidelity bar is owner-signed, never self-authored

Owner decision, 2026-08-06. Rationale: foja's postmortem
[`2026-08-06-vista-default-spec-autoredactada.md`](https://github.com/jjsutil/foja/blob/main/docs/postmortems/2026-08-06-vista-default-spec-autoredactada.md)
— an issue blocked on design was "unblocked" by the implementing front **writing the
missing specification itself**; both reviews measured rigorously against that same
document and reported green; the PR even edited the owner-approved plan it was
contradicting to declare it void. Everything passed. The shipped surface was not what
the owner asked for. Root cause: nothing in the process said **who may sign a fidelity
bar**.

> [!IMPORTANT]
> **Every change to a user-visible surface — UI, frontend, anything with an interface —
> strictly requires an owner-approved artifact before it is built.** The artifact always
> exists first; building without one is not an option in any mode, autonomous included.

- **The bar is owner-approved, or it is not a bar.** A *fidelity bar* is the reference a
  surface is judged against: an approved artifact/mockup, an approved screen spec, or the
  owner's recorded words fixing the surface's form. What it can never be is a document
  produced by the same front that implements it, however complete it looks.
- **The artifact is created WITH the owner, not for him.** Talk to the owner first;
  propose, then iterate as few rounds as needed until he approves **explicitly
  and on the record**. Never fabricate many speculative artifacts, and never commit a
  spec alongside the build that implements it.
- **A self-authored specification is a proposal.** It is born with the header
  `Status: PROPOSAL — unapproved` (or the repo language's equivalent, e.g.
  `Estado: PROPUESTA — sin aprobar`) and **only the owner changes that state**. A
  fidelity review against a document in that state is an **internal-consistency check**
  and must be reported under that name — never as fidelity.
- **"Blocked by design" is unblocked only by the owner.** Exactly two ways: the owner
  answers, or the owner approves an artifact. Writing the missing specification is not a
  third way. If the owner is unavailable, the issue waits and the front takes other
  work; in an autonomous window this is an express cause not to start.
- **Reviews declare the bar and its provenance.** Every review request names what it
  judges against and where that came from ("doc X, owner-approved on DD/MM" /
  "proposal, unapproved"). If the bar was created or modified by the PR under review,
  the reviewer also checks against the approved document it displaces — and **a PR that
  edits the document it is judged against is a process `blocker`** until the owner
  approves the change of criterion.

Bound at dispatch time by `jefatura` (no owner-approved bar → the unit is not
dispatched), at build time by `ejecucion` (missing/unapproved bar → stop and report),
and at review time by `pr-reviewer` and the UI-fidelity protocol (bar + provenance
declared, self-edited bar blocks). See also rule 1 (visual evidence) and rule 10
(reconcile the displaced doc, never silently rewrite it).
