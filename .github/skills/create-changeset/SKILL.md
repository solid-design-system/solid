---
name: create-changeset
description: "Create a properly formatted changeset for a Solid Design System pull request. Use for: version bump, changelog entry, release preparation, creating a changeset file, documenting changes for the changelog."
---

# Create Changeset

## When to Use

- Every pull request that should trigger a release or version bump
- After implementing a new feature, bug fix, or breaking change
- When documentation-only changes should trigger a docs deployment
- Creating an empty changeset for non-release changes (e.g., CI config, refactors)

## Changeset Configuration

The project uses [Changesets](https://changesets-docs.vercel.app) for versioning and changelogs. Each changeset is a markdown file in `.changeset/` that describes what changed, which package(s) are affected, and what version bump to apply.

### Fixed packages (version-locked)

These packages are version-locked together (configured in `.changeset/config.json`). A bump to any one bumps all three:
- `@solid-design-system/components`
- `@solid-design-system/styles`
- `@solid-design-system/tokens`

### Package names

| Directory | npm package name |
|-----------|-----------------|
| `packages/components` | `@solid-design-system/components` |
| `packages/docs` | `@solid-design-system/docs` |
| `packages/styles` | `@solid-design-system/styles` |
| `packages/tokens` | `@solid-design-system/tokens` |
| `packages/placeholders` | `@solid-design-system/placeholders` |
| `packages/theming` | `@solid-design-system/theming` |
| `packages/eslint-plugin` | `@solid-design-system/eslint-plugin` |
| `packages/versioning` | `@solid-design-system/versioning` |

### Deployment types

The release pipeline checks the last commit message to determine deployment:
- **`code`**: commit starts with `chore(release): components` → deploys everything to CDN
- **`docs`**: commit starts with `chore(release):` (includes `docs` package) → deploys only Storybook
- **`none`**: anything else → skips CDN deployment

## Procedure

### Inspect the branch changes first

Before creating a changeset, use the `get_changed_files` tool to see what files changed on the current branch. Load it first via `tool_search` with the query `"get_changed_files"`, then call it with no arguments to get all staged and unstaged changes.

### Determine affected package(s)

Use the output to determine:

1. **Which package(s) are affected** — map changed file paths to package names using this table:

   | Changed path prefix | Affected package |
   |---------------------|-----------------|
   | `packages/components/src/` | `@solid-design-system/components` |
   | `packages/styles/src/` | `@solid-design-system/styles` |
   | `packages/tokens/src/` | `@solid-design-system/tokens` |
   | `packages/docs/src/` | `@solid-design-system/docs` |
   | `packages/placeholders/src/` | `@solid-design-system/placeholders` |
   | `packages/theming/src/` | `@solid-design-system/theming` |
   | `packages/eslint-plugin/src/` | `@solid-design-system/eslint-plugin` |
   | `packages/versioning/` | `@solid-design-system/versioning` |

   Remember: `components`, `styles`, and `tokens` are version-locked — a change to any one should include all three in the changeset.

2. **What bump type is appropriate** — infer from the nature of the changes:
   - New files or new exported API surface → `minor`
   - Bug fix → `patch`
   - Removed or renamed public API → `major`
   - Only story/doc files under `packages/docs/` → `patch` on `@solid-design-system/docs` only

3. **What the summary should say** — read the diff of the changed source files (not tests or stories) to understand what changed from a user perspective, then write the summary following the Writing Style rules below.

### Option A: Interactive (recommended for complex changes)

Run the interactive changeset command from the repository root:

```sh
pnpm changeset
```

1. **Select package(s)**: Use arrow keys and space to select affected packages
2. **Select bump type**: Choose `major`, `minor`, or `patch` for each selected package
3. **Write summary**: Enter a description of the changes

A file will be created in `.changeset/` (e.g., `.changeset/happy-dogs-dance.md`).

### Option B: Empty changeset (no release)

For changes that should NOT trigger a version bump (CI, docs-only without deployment, refactors):

```sh
pnpm changeset --empty
```

This creates a changeset with no package selections, which prevents the Changesets bot from warning about missing changesets.

## Version Bump Rules

Follow [semantic versioning](https://semver.org/):

| Change type | Bump | Examples |
|-------------|------|----------|
| Breaking API change | `major` | Removing a property, renaming a tag, changing default behavior |
| New feature (backward compatible) | `minor` | New component, new property, new event, new slot |
| Bug fix (backward compatible) | `patch` | Fix rendering issue, fix accessibility, fix event handling |
| Documentation only | `patch` on `@solid-design-system/docs` | Update stories, fix typos, add migration guide |

### Special cases

- **Breaking change**: Must also include a migration guide (see `write-migration-guide` skill). Use `major` bump.
- **Docs-only deployment**: Add a changeset with `@solid-design-system/docs` as `patch`. This triggers the `docs` deployment type on Azure CDN (see CONTRIBUTING.md Release Process).
- **Multiple packages affected**: Include all affected packages in one changeset.
- **Dependency dashboard PRs**: If the PR is for the dependency dashboard ticket, the changeset summary must be exactly: `Dependencies updated. For further details, please refer to the associated Pull Request`.
- **Unrelated changes**: Split into separate changeset files when changes across packages are not related to each other. For example, a component change and a docs-only change should be in two separate changeset files, each listing only the package it affects.

## Changeset Content Guidelines

The changeset summary ends up in the CHANGELOG.md. Write it to be useful for **Design System consumers** — developers integrating `sd-*` components into their apps. They don't care about how the internals work; they care about what they can now do, what broke, or what was fixed.

### Golden Rule: Write for the end user, not the implementer

Ask yourself: *"If I'm a developer using this component, does this bullet tell me something actionable?"*

- ✅ `sd-dialog now uses the native <dialog> element, improving screen reader support and z-index stacking`
- ❌ `Removed Modal class and replaced lockBodyScrolling calls with showModal()`

Internal details (class names, CSS selectors changed, removed imports, implementation refactors) belong in the PR description — **not** in the changeset.

### Writing Style (based on existing CHANGELOGs)

Write changesets in the same style that appears in package changelogs (`components`, `docs`, `styles`, `tokens`, `theming`, `placeholders`, `eslint-plugin`, `versioning`):

- Use short, user-facing, sentence-case summaries in past tense
- Start with clear verbs like `Added`, `Fixed`, `Improved`, `Updated`, `Removed`, `Replaced`
- Keep the first line focused on the main outcome
- Add follow-up bullets only when details are needed
- Name affected components, attributes, tokens, CSS variables, or APIs explicitly
- Use a colon before grouped details, then list specific items
- Keep internal implementation details out unless they affect consumers
- For simple fixes, prefer one concise sentence
- For larger changes, use one summary line plus compact detail bullets
- For breaking changes, add a dedicated `BREAKING CHANGE:` line with exact migration guidance and old-to-new mappings

### Do

- Describe **what** changed and **why** from the user's perspective
- List affected features, properties, or components
- Mention breaking changes explicitly
- Keep wording release-note friendly (human-readable, not commit-message style)

### Don't

- Write vague summaries like "various fixes" or "updates"
- Include internal implementation details — e.g. which class was removed, which CSS property changed, which import was added. Describe the **outcome**, not the mechanism.
- List refactoring steps that have no visible effect on component behavior or API
- Reference internal ticket numbers without context
- Start the summary with conventional commit prefixes or emojis (avoid `feat: ✨`, `fix: 🤔`, etc.)
- Rewrite the dependency dashboard summary line; keep it exactly as stated above.
- Combine unrelated package changes (e.g. `components` and `docs`) into one changeset; use separate files instead.

### Examples

**Patch fix — Don't (too much implementation detail in bullets):**
```markdown
---
'@solid-design-system/styles': patch
---

Fixes and improvements for multi-theming:

- `sd-container`: fixed the triangle variable by changing the selector to target the correct element for multi-theming
- `sd-copyright`: fixed shadow styling by switching from `box-shadow` to `text-shadow` and adjusting the values
- `sd-footnotes`: fixed text colors by removing an unnecessary selector and adjusting the color values
```

**Patch fix — Do (outcome-focused, concise bullets):**
```markdown
---
'@solid-design-system/styles': patch
---

Fixes and improvements for multi-theming:

- `sd-container`: fixed the triangle variable for multi-theming
- `sd-copyright`: fixed shadow styling
- `sd-footnotes`: fixed text colors
```

---

**Components + docs change — Don't (combined into one changeset):**
```markdown
---
'@solid-design-system/components': minor
'@solid-design-system/docs': minor
---

Extended `sd-brandshape` with new transparent variants to be used on image backgrounds:

- `primary|80`
- `white|80`

Added new templates showcasing usage of transparent variant `primary|80` and variant `image` together with `sd-copyright`.
```

**Components + docs change — Do (split into separate changesets):**

File 1 — component change:
```markdown
---
'@solid-design-system/components': minor
---

Extended `sd-brandshape` with new transparent variants to be used on image backgrounds:

- `primary|80`
- `white|80`
```

File 2 — docs change:
```markdown
---
'@solid-design-system/docs': minor
---

Added new templates showcasing usage of new `sd-brandshape` variants together with images and `sd-copyright`.
```

---

**Breaking change:**
```markdown
---
'@solid-design-system/components': major
---

Updated `sd-teaser` variant values.

BREAKING CHANGE: The `variant` attribute values for `sd-teaser` have changed:
- `white` → `default`
- `primary-100` → `primary`

See the migration guide for details.
```

---

**Dependency dashboard PR:**
```markdown
---
'@solid-design-system/components': patch
---

Dependencies updated. For further details, please refer to the associated Pull Request.
```

## Verification

After creating the changeset:

1. Check that the `.changeset/` directory contains your new file
2. The Changesets GitHub bot will automatically detect it in your PR
3. Review the changeset content — it will appear in the CHANGELOG.md upon release
4. If you need to edit the changeset, you can modify the markdown file directly in the `.changeset/` directory before merging the PR.
