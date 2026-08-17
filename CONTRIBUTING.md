# Contributing — jjsutil.github.io

This is a personal site, so "contributing" mostly means future-me (or an agent working
on my behalf) making changes without eroding the quality bar. The repo runs the
[bootflower](https://github.com/jjsutil/bootflower) workflow system, tailored to a
static site's reality.

## The short version

1. Branch from `main`: `feat/I-00x-slug` (or `fix/`, `chore/`, `docs/`…).
2. Substantial work gets an issue and a plan first (`planning/pr-plans/`); trivial
   mechanical changes may skip that train (rule 17's two exceptions).
3. Commit with [Conventional Commits](https://www.conventionalcommits.org/) — plain
   English, the body explains problem → solution, and names how it was verified.
4. **Anything that changes what a visitor sees ships visual evidence**: a screenshot
   added or updated under `docs/evidence/`, referenced from the PR body. Changes with
   no visible surface carry a `no-visible-surface` commit trailer instead.
5. Before opening a PR: `bash scripts/check-gates.sh` and `npm run build`, both green
   — and quote the exit code, not the adjective.
6. PR bodies are written for a human first (what changed, why, evidence); exhaustive
   detail goes in a folded `<details>` block (rule 14).

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the built site
```

Deploys happen automatically: every push to `main` runs
`.github/workflows/deploy.yml` and publishes to GitHub Pages.

## What to check by hand on visual changes

- Both themes (the ☀/☾ toggle) and both languages (EN/ES).
- 380 px viewport: no horizontal scroll.
- `prefers-reduced-motion: reduce`: mock scenes must read as complete still frames;
  the hero canvas paints a single static map.
- Keyboard: the project explorer navigates with ↑/↓ and focus stays visible.

## House specifics

- All copy lives in `src/data/i18n.ts` — never hardcode user-facing text in
  components. Both languages change together or not at all.
- Facts on the page (project names, statuses, metrics, links) are owner-approved
  content: don't "improve" them without an explicit decision recorded in the issue.
- The Chirikov hero canvas is a faithful port of an approved implementation; changes
  to its dynamics need an owner-approved proposal first (rule 16 territory).
- Mock scenes (`src/components/mocks/`) follow a contract: viewBox `0 0 220 88`,
  keyframe names prefixed by project, token colors only (`var(--ember)` etc.), and a
  base state that reads as a complete scene without animation.

## Writing a blog post

Drop a Markdown file in `src/content/blog/` with `title`, `date`, `lang` (en|es) and
optional `description` in the frontmatter. The build lists it on `/blog` and renders
it at `/blog/<filename>/`.

## Vendored system files

`.claude/skills/`, `.claude/rules/`, `scripts/check-gates.sh`,
`scripts/branch-janitor.sh` and the seeded CI workflows come from the bootflower
meta-repo and are updated **only** via `workflow-sync` (rule 9). Don't edit them here.
