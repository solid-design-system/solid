---
name: create-changeset
description: Assess SDS release impact and create or update Changesets with accurate package names, semantic version bumps, and consumer-facing summaries. Use for changelog entries, release notes, or deciding whether a change needs a release.
---

# Create Changeset

1. Read the actual diff, including staged, unstaged, and relevant untracked files. Use the intended PR base when available; [validate-pr-readiness](../validate-pr-readiness/SKILL.md) describes the read-only inspection. Do not depend on a particular editor's changed-files tool.
2. Read [the current Changesets configuration](../../../.changeset/config.json), affected package manifests, and [contribution policy](../../../CONTRIBUTING.md#changesets). Package names come from manifests, not a copied mapping table. The fixed release group currently contains components, styles, tokens, and MCP; Changesets propagates fixed-group versions. Do not add unrelated packages merely to reproduce an obsolete three-package list.
3. Choose release impact:

   | Consumer impact                                                            | Bump                                                            |
   | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
   | Backward-compatible fix                                                    | `patch`                                                         |
   | Backward-compatible new public feature                                     | `minor`                                                         |
   | Removed/renamed public API or incompatible behavior/default                | `major`, with a migration guide                                 |
   | Docs-only change that should deploy Storybook                              | `patch` on the docs package                                     |
   | Repository-only tooling, skills, CI, or guidance without a package release | No package bump; follow the repository's empty-changeset policy |

   New internal files do not automatically mean a minor release. A refactor that changes distributed code may still need a release; assess its effect rather than classifying by filename alone.

4. Reuse an existing changeset for the same unfinished change when appropriate; do not rewrite unrelated release notes. Create a new changeset with `pnpm changeset` from root, or write equivalent valid frontmatter using verified package names. For a non-release change requiring an empty changeset, use `pnpm changeset --empty`; never bump a package just to silence a missing-changeset warning.
5. Write short consumer-facing summaries such as `Fixed sd-button keyboard activation when disabled.` Name affected components/APIs and explain the outcome, not internal refactoring steps. Use existing changelog style, without conventional-commit prefixes or decorative symbols. For unrelated release outcomes, prefer separate entries.
6. For a breaking change, include exact migration mappings and use [write-migration-guide](../write-migration-guide/SKILL.md). For dependency-update tasks generally, not only dashboard tasks, use this exact single-line summary: `Dependencies updated. For further details, please refer to the associated Pull Request`.
7. Review the resulting frontmatter, selected packages, bump type, and summary against the diff. Do not edit generated changelogs/package versions or run release/version/publish commands as part of creating a changeset. Report the release decision and file, without committing or pushing unless asked.
