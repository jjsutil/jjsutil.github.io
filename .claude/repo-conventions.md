# Repo conventions — jjsutil.github.io

<!-- Created by bootflower repo-bootstrap. This file is REPO-SPECIFIC DATA:
     workflow-sync never touches it. Tailoring happens HERE, by selection and
     parameters — never by editing vendored skill text (rule 9). -->

docs_language: en
workflow_version: 0.4.0

## Repo profile

Static personal landing page (Astro → GitHub Pages). No backend, no database, no
paid APIs, no runtime configuration: everything is resolved at build time. The
manifest keys below reflect that honestly instead of inventing structure (rule 12:
collapse, don't pad).

## Conventions

- Branch naming: `feat/I-003-slug` (types: feat|fix|chore|docs|refactor|test|spike)
- Conventional Commits: mandatory (rule 2, enforced by CI)
- PR size soft limit: see `pr_size_limit` below (rule 3)
- `APP_MODE`: not applicable — static site, no runtime, no paid APIs. The dormant
  cost-guard still watches for the first paid-SDK import (rule 5 activates then).
- Config registry: all non-secret runtime config in the global registry, single read
  path (rule 6). Locations for THIS repo:
  <!-- check-gates.sh MACHINE-READS the three keys below: the value is everything
       after the first colon on the key's line. Keep them bare `key: value` lines. -->
  - config_seed: none
    (no runtime config — the site is fully static; register the first config file
    here and in docs/CONFIG.md the day one appears)
  - config_module: none
    (no runtime read path exists)
  - gateway_path: none
    (no paid APIs; cost-guard stays dormant until the first paid integration)
  - ui_surface_glob: src
    (the whole site is user-visible surface — any change under src/ needs visual
    evidence per rule 1 / check-gates step 8)
  - ui_evidence_glob: docs/evidence
    (committed screenshots live here; a src/ diff must add or update an image here,
    or the commit carries a `no-visible-surface` trailer)
- Plan store: where this repo keeps the **unit ERD** of every unit of work (rule 17).
  - plan_store: planning/pr-plans

## Issue frontmatter schema

```yaml
---
id: I-014
type: bug | feature | chore | spike
status: backlog | ready | in-dev | review | staging | production
impact: high | low
cost: high | low
epic: E02          # optional
screens: [S03]     # optional
created: YYYY-MM-DD
---
```

## Workflow manifest

Enabled skills and their parameters. All skills install by default — including
cost-guard in repos with no paid APIs today (dormant guards catch the first paid
integration).

Portfolio-scope skills (`scope: portfolio` in their frontmatter) are **not** listed here
and are not vendored into this repo: they install once at `~/.claude/skills/` (user scope),
above every repository. See `BOOTFLOWER.md`, "Skills — portfolio scope".

| skill | enabled | parameters |
|---|---|---|
| pr-writer | true | |
| issue-writer | true | |
| pr-reviewer | true | |
| docs-guardian | true | |
| config-registry | true | dormant: no runtime config yet |
| cost-guard | true | dormant: no paid APIs yet |
| roadmap-board | true | staleness_in_dev_days: 14, staleness_review_days: 7 |
| obsidian-vault | true | |
| changelog-keeper | true | |
| release-notes | true | |
| security-sweep | true | |
| onboarding-doc | true | |
| todo-harvester | true | |
| dependency-doctor | true | |
| repo-health-report | true | |
| branch-janitor | true | zombie_days: 90 |
| negocio | true | |
| jefatura | true | |
| ejecucion | true | |

- pr_size_limit: 400
  (generated files, lockfiles and vendored bootflower assets don't count)
