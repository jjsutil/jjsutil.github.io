# HANDOFF — jjsutil.github.io

Updated: 2026-08-17 (session that created the repo)

## State: shipped

The landing is live at https://jjsutil.github.io — Astro static build, deployed by
`.github/workflows/deploy.yml` on every push to `main` (Pages build type: workflow).

Done in this session:

- Full Astro port of the approved single-file landing (`../index.html` in the owner's
  working folder was the content source; copy is verbatim, both languages).
- Compact project explorer (master-detail, keyboard ↑/↓, accordion under 860 px) with
  the fifteen animated scenes at final staging.
- Blog shell: `/blog` with an honest empty state; posts are Markdown files dropped in
  `src/content/blog/`.
- QA: 13 automated browser checks (see commit bodies), fresh-agent fidelity review
  PASS with no defects, Lighthouse mobile 98/100/100/100. Evidence in `docs/evidence/`.
- Bootflower v0.4.0 adopted — PR #1 merged 2026-08-17 with the owner's explicit
  approval; `bash scripts/check-gates.sh` green on merged `main` (0 blockers,
  0 warnings). The visual-evidence rule for `src/` is now active.

## Pending / next

1. First blog post, whenever there is something to say (frontmatter documented in
   README and CONTRIBUTING).
2. Optional later: RSS, static `/es/` routes for Spanish SEO. Deliberately out of
   scope now.

## Notes for the next session

- Dev: `npm run dev` · build: `npm run build` · QA harness used in this session lives
  in the session scratchpad (not committed); rebuild it from the commit bodies if
  needed, or just re-run Lighthouse + a manual pass.
- Visual-evidence rule: once PR #1 merges, any change under `src/` needs a screenshot
  in `docs/evidence/` or a `no-visible-surface` commit trailer.
- The Chirikov canvas is a faithful port of the approved dynamics — do not "improve"
  it without an owner-approved proposal.
