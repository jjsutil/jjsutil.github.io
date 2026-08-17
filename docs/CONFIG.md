# Config registry — jjsutil.github.io

> [!NOTE]
> **This site has no runtime configuration.** It is a fully static Astro build: every
> value is resolved at build time and shipped as HTML/CSS/JS. There is no backend, no
> database, no paid API, and no `APP_MODE` to select.

First-run inventory (bootflower `config-registry`, 2026-08-17): no integrations, no
env reads, no config files found outside build tooling. Nothing to register.

<details>
<summary>What counts as build-time constants today (for reference, not registry entries)</summary>

| where | what |
|---|---|
| astro.config.mjs | site URL (https://jjsutil.github.io) |
| src/data/i18n.ts | all user-facing copy, both languages |
| src/data/projects.ts | the fifteen projects: names, states, stacks |
| src/scripts/palette.ts | canvas colors per theme |

These are content and code, not runtime config: changing them is a code change with
its own PR, not a parameter flip.

</details>

The day this repo gains runtime config or its first paid integration: create the
registry seed, set `config_seed` / `config_module` / `gateway_path` in
`.claude/repo-conventions.md`, and register every param here in the same PR (rule 6).
