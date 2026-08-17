# jjsutil.github.io — docs index

Root node of the docs vault (bootflower `obsidian-vault`). Everything documented in
this repo is reachable from here.

## What this repo is

The personal landing page of Juan Sutil Palma, plus its blog. Static Astro build,
deployed to GitHub Pages. The [[../README|README]] is the front door: what the page
shows, how to run it, how to write a post.

## Map

- [[CONFIG|Config registry]] — empty by design: the site has no runtime config.
- [[ROADMAP|Roadmap]] — the (deliberately small) planning spine.
- [[../CONTRIBUTING|Contributing]] — workflow, gates, visual evidence.
- `evidence/` — committed screenshots backing UI changes (rule 1 / check-gates step 8).
- `../planning/BOARD.md` — generated board (never hand-edited, rule 7).
- `../planning/pr-plans/` — unit ERDs, one per unit of work (rule 17).

## SSoT notes

Content (copy, projects, palette) lives in `src/data/` — code, not docs. The single
source of truth for what the page *says* is `src/data/i18n.ts`; docs never duplicate it.
