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

The project uses [Changesets](https://changesets-docs.vercel.app/en) for versioning and changelogs. Each changeset is a markdown file in `.changeset/` that describes what changed, which package(s) are affected, and what version bump to apply.

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

### PR title and CI

- PR title prefixes: `feat`, `fix`, `perf`, `docs`, `chore`, `ci` — these don't influence versioning (changesets do)
- `[skip ci]`: prevents CI build (use sparingly, only for non-code changes)
- `[skip chromatic]`: skips Chromatic visual testing (only for non-visual changes)

## Procedure

### Step 0: Inspect the branch changes first

Before creating a changeset, run the following command to see what files changed on the current branch compared to `main`:

```sh
git diff --name-only main
```

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
   - Modified existing behaviour or bug fix → `patch`
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
- **Dependency dashboard PRs**: If the PR is for the dependency dashboard ticket, the changeset summary must be exactly: `Updated dependencies. See details in the Pull Request`.

## Changeset Content Guidelines

The changeset summary ends up in the CHANGELOG.md. Write it to be useful for consumers:

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
- Include internal implementation details
- Reference internal ticket numbers without context
- Start the summary with conventional commit prefixes or emojis (avoid `feat: ✨`, `fix: 🤔`, etc.)
- Rewrite the dependency dashboard summary line; keep it exactly as required.

### Examples

**New component:**
```markdown
---
'@solid-design-system/components': minor
---

Added `sd-datepicker` with calendar-based date selection.

Supported features include:
- Date selection via calendar popup
- Min/max date constraints
- Keyboard navigation
- Form integration with validation
```

**Bug fix:**
```markdown
---
'@solid-design-system/components': patch
---

Fixed `sd-button` so disabled submit buttons no longer submit parent forms.

Previously, clicking a disabled `sd-button` with `type="submit"` would still submit the parent form. The button now correctly prevents form submission in the disabled state.
```

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

## Verification

After creating the changeset:

1. Check that the `.changeset/` directory contains your new file
2. The Changesets GitHub bot will automatically detect it in your PR
3. Review the changeset content — it will appear in the CHANGELOG.md upon release
