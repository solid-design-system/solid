# Maintainer Skills

These skills support work **inside this repository**, not application setup for SDS consumers. They provide focused procedures on demand; package contribution guides and current source remain authoritative. There are no custom agents, mandatory MCP servers, or automatic commit/push/release steps.

## Available Workflows

| Skill                                                     | Use for                                                                                                |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [component-development](./component-development/SKILL.md) | Create, extend, or fix Lit components; load conventions and Shoelace details only as needed            |
| [style-development](./style-development/SKILL.md)         | Create or modify CSS modules and their documented variants                                             |
| [component-tests](./component-tests/SKILL.md)             | Component behavior, keyboard, form, and accessibility assertions; not visual snapshots                 |
| [storybook-authoring](./storybook-authoring/SKILL.md)     | Chromatic visual tests (`.test.stories.ts`), separately from documentation stories, MDX, and templates |
| [write-migration-guide](./write-migration-guide/SKILL.md) | Legacy-library replacement or breaking package upgrades                                                |
| [create-changeset](./create-changeset/SKILL.md)           | Assess release impact and write consumer-facing changesets                                             |
| [validate-pr-readiness](./validate-pr-readiness/SKILL.md) | Review the actual diff and verification evidence before submission                                     |
| [icon-maintenance](./icon-maintenance/SKILL.md)           | Select and use the existing CELUM/Figma scripts and workflows                                          |

## Discovery and Use

The canonical files live in `.agents/skills/<name>/`. Native Codex discovers this location. Relative per-skill aliases in `.claude/skills/` and `.github/skills/` expose the same files to Claude Code and GitHub Copilot without maintaining three copies. Edit the canonical file, not a second copy. No user-level installation or editor-specific search setting is required.

Use a checkout that preserves Git symlinks. On Windows this may require Developer Mode or symlink privileges and a symlink-enabled Git checkout. A checkout that materializes links as plain text is not supported by this layout; `pnpm test:skills` detects it. The canonical `.agents/skills` files remain available to native Codex.

Start a fresh session at the repository root. Ask which skills are available, then invoke a task explicitly: `/component-development` in Claude/Copilot where offered, or `$component-development` in Codex. Natural requests can also select skills from their descriptions. Discovery is not proof of correct automatic selection. Hosts that also scan `.agents/skills` may show an alias; it is the same skill, not another workflow.

Skills use standard `name`/`description` frontmatter and ordinary Markdown references. They do not require Claude-specific shell injection, forked contexts, tool names, argument substitutions, or custom agents. Figma/SDS MCP access can provide optional context for stories, but local source and docs are the fallback. Icon maintenance uses the deterministic scripts already in the repository; credentials are needed only for a requested network export, never for skill integrity tests.

## Selection and Provenance

Reviewed the [19 internal drafts at revision 40d83ab](https://github.com/solid-design-system/solid/tree/40d83ab2e3015d70c83148f1ba9c56716bbb297f/.github/skills) for [issue #3388](https://github.com/solid-design-system/solid/issues/3388). Selected and adapted the useful procedures instead of merging the old branch:

| Original drafts                                                                                        | Decision                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `component-conventions`, `create-component`, `modify-component`, `implement-bugfix`                    | Consolidated into component development and its focused references; corrected icon, CSS, test, and adaptation guidance                                                               |
| `style-conventions`, `create-style-component`, `modify-style-component`                                | Consolidated into style development; removed duplicate routing and invalid arbitrary-value `@apply` examples                                                                         |
| `write-component-tests`                                                                                | Retained as component tests, including built-bundle registration and current named-group execution                                                                                   |
| `write-documentation-stories`, `write-test-stories`, `write-overview-pages`, `write-template-stories`  | Consolidated into Storybook authoring; removed hardcoded MCP prefixes and blanket test-skip instructions                                                                             |
| `write-migration-guide`, `create-changeset`, `validate-pr-readiness`                                   | Retained and corrected against current migration formats, fixed release groups, working-tree changes, and actual CI gates                                                            |
| `check-issue-dor`, `check-issue-questions`, `get-github-issue-by-number`, `get-project-items-by-query` | Excluded: issue/project-refinement workflows are not code authoring and would add project/tool coupling                                                                              |
| Attached icon-update workflow                                                                          | Replaced by a small routing skill grounded in the local CELUM/Figma automation; no archive scripts, FigCli dependency, rename-message workflow, or parallel export pipeline imported |

These repository-local skills are versioned with Git. There is no separate npm/MCP distribution, independent skill version, or consumer-agent startup configuration in this change.

## Verification

Run from the root using the repository's Node.js/pnpm versions:

```sh
pnpm test:skills
pnpm exec prettier --check .agents/skills scripts/skills.test.mjs
```

The tests check selected inventory, parsed YAML metadata, resource links, and both sets of aliases. CI runs them independently of package checks. They do not evaluate prose quality, live Figma access, or agent behavior.

When changing a skill, use fresh sessions in the intended clients to check explicit invocation and relevant/non-relevant natural requests. Useful smoke cases:

| Request                                          | Expected behavior                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Fix keyboard activation in an existing component | Read the owning implementation/test, add focused regression coverage, do not scaffold again                                              |
| Add a CSS module variant                         | Read the module metadata and extend its existing visual matrix                                                                           |
| Fix an appearance regression                     | Use Storybook authoring's Visual Test Stories (`.test.stories.ts`) for Chromatic, not documentation examples or component behavior tests |
| Add a composed template                          | Verify APIs locally, use actual assets, and retain deterministic interaction coverage                                                    |
| Prepare a migration guide                        | Distinguish legacy `ui-*` migration from a package-version guide                                                                         |
| Review repository-only skill changes             | Include untracked work; do not invent a runtime package bump                                                                             |
| Prepare Figma icons for CELUM                    | Select the export ZIP path, not the bundled-library PR; no automatic upload                                                              |
| Bring CELUM changes into Figma                   | Use the current changelog PR/ZIP and require joint Design/Development review                                                             |
| Validate skills without credentials              | Run offline integrity checks; do not fetch Figma or dispatch Actions                                                                     |

Never dispatch a write-capable workflow, modify Figma, publish icons, commit, push, or merge merely to smoke-test a skill. Record client/version and actual outcomes when running client checks; do not present a passing structural test as verified three-client behavior.

### Client Check Record

Checked on 2026-10-30:

| Client              | Result                                                                                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Claude Code 2.1.201 | Fresh nonpersistent, plan-mode `/icon-maintenance` invocation with only the Skill tool enabled correctly distinguished all three workflow outputs and human handoffs; no scripts or external writes executed |
| GitHub Copilot      | Alias/resource integrity checked; fresh-client invocation and automatic selection not exercised                                                                                                              |
| Native Codex        | Canonical layout checked; CLI unavailable locally, so runtime discovery/invocation not exercised                                                                                                             |

This is a routing smoke test, not a live export, proof of automatic selection, or evaluation of every workflow's generated code.
