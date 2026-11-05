---
name: write-migration-guide
description: Document migration from legacy ui-* components to SDS or between SDS package versions after breaking API, behavior, selector, or token changes. Not routine component examples or unchanged APIs.
---

# Write Migration Guide

1. Establish the old and new public contracts from source, versioned documentation, and the task. Record the affected package and versions where applicable. If the old API is unavailable, request its source/specification or state the gap; do not infer removals from the new API alone.
2. Select the correct format from the [docs contribution guide](../../../packages/docs/CONTRIBUTING.md#migration-guides):

   | Migration                                 | Destination                                               | Starting point                                                                                        |
   | ----------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
   | Legacy Component Library `ui-*` to `sd-*` | `packages/docs/src/stories/docs/migration/{old-name}.mdx` | [Migration template](../../../templates/migration-guide-template.mdx) and an existing legacy guide    |
   | Breaking SDS package upgrade              | `packages/docs/src/stories/packages/{package}/Migration/` | [Existing component version guides](../../../packages/docs/src/stories/packages/components/Migration) |

   Follow the existing version-guide filename and MDX conventions, such as `from-v6.mdx`; do not manufacture a `from v{version}` directory just because an old draft suggests one. Use the package's current conventions if they differ.

3. Compare properties/attributes, defaults, slots, CSS parts/custom properties, events/details, methods, styling selectors/tokens, and observable keyboard/form behavior. Distinguish added, updated, removed, and genuinely unchanged items. Verify exact names, types, defaults, and replacement values.
4. For a legacy guide, fill applicable sections of the existing template and remove untouched placeholders or irrelevant sections. For a version guide, follow the nearest version page rather than forcing the legacy template into it.
5. Provide concise before/after examples and exact old-to-new mappings. Explain required consumer actions and unsupported behavior with alternatives. Do not claim a replacement is equivalent where it changes semantics. Mention migration automation only when a working tool exists.
6. Link the guide from the relevant documentation and [breaking changeset](../create-changeset/SKILL.md). Keep a major bump aligned with the actual compatibility break, not just renamed internal implementation.
7. Verify examples against the new public API, links against current docs routes, and MDX rendering with the relevant docs checks. Run root `pnpm verify` before submission and report any unrun checks. Do not publish, commit, or push automatically.
