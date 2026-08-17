# jjsutil.github.io

Personal landing page of **Juan Sutil Palma** — software engineer in Santiago, Chile, trained in astronomy and physics education. Live at [jjsutil.github.io](https://jjsutil.github.io).

## What's on the page

- A hero whose background is a **live phase-space portrait of the Chirikov standard map** (K = 0.97), drawn point by point on a canvas over several minutes. The portrait photo acts as a massive body: passing points get captured into slow orbits around it, then escape back into the map.
- A track record and a **project explorer**: fifteen projects in a compact master-detail list, each with its own small animated SVG scene that runs while the project is selected.
- English/Spanish toggle and a light/dark theme, both remembered between visits.
- A [blog](https://jjsutil.github.io/blog/) — field notes, written in Markdown.

## Stack

[Astro](https://astro.build) static build, no UI framework. All interactivity is a few small vanilla scripts; fonts are self-hosted; the whole thing deploys to GitHub Pages from the workflow in `.github/workflows/deploy.yml`.

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the built site
```

## Write a blog post

Drop a Markdown file into `src/content/blog/`:

```markdown
---
title: The title
date: 2026-08-17
lang: en
description: One line for search engines.
---

The post.
```

The build picks it up, lists it on `/blog`, and renders it at `/blog/<filename>/`.

## Accessibility notes

The page respects `prefers-reduced-motion` (the canvas paints a single static map, the mock scenes settle into complete still frames), keeps keyboard focus visible, and the project explorer is fully keyboard-navigable (↑/↓).

## Project status

<!-- BOARD-SUMMARY:START -->
No open issues — the board at `planning/BOARD.md` fills as work takes the normal
train (issue → plan → PR).
<!-- BOARD-SUMMARY:END -->
