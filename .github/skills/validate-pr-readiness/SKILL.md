---
name: validate-pr-readiness
description: "Validate that a pull request meets the project's Definition of Reviewable before requesting review. Use for: PR readiness check, pre-review validation, PR checklist verification, ensuring PR completeness."
---

# Validate PR Readiness

## When to Use

- Before requesting a review on a pull request
- Validating that all PR checklist items are satisfied
- Checking PR completeness after finishing implementation
- Verifying code conventions are followed in changed files

## Prerequisites

- The implementation is complete and committed on a feature branch
- The branch is based on `main`

## Procedure

### Step 0: Read the changed files for context

Get the list of changed files and the commit log for the current branch:

```sh
git diff --name-only main...HEAD
git log --oneline main...HEAD
```

Read the changed files to understand what the PR modifies. Identify the affected component(s) from paths like `packages/components/src/components/{name}/`.

### Step 1: Check — is documentation created or updated?

Scan the changed files for evidence of documentation:

- **Component changes** → JSDoc tags must be present or updated in the component `.ts` file (`@property`, `@slot`, `@csspart`, `@event`, `@cssproperty`, `@summary`)
- **New components** → an overview MDX page must exist at `packages/docs/src/stories/components/{name}.mdx`
- **Behavior changes** → Storybook stories must be updated at `packages/docs/src/stories/components/{name}.stories.ts`

If documentation updates are missing, flag: "Documentation not created/updated — [specify what is missing]"

### Step 2: Check — is this a breaking change that needs a migration guide?

Scan changeset files in `.changeset/` for `major` version bumps.

Also check the diff for:
- Removed or renamed public properties (`@property` decorator removed or renamed)
- Removed or renamed slots (`@slot` JSDoc tag removed or renamed)
- Removed or renamed CSS parts (`@csspart` JSDoc tag removed or renamed)
- Removed or renamed CSS custom properties (`@cssproperty` JSDoc tag removed or renamed)
- Removed or renamed events (`@event` JSDoc tag removed or renamed)
- Changed default values for existing public properties

**If no breaking changes detected** — skip to Step 3.

**If breaking changes detected** — check for a migration guide in:
- Component Library migration: `packages/docs/src/stories/docs/migration/` (named by old component, e.g., `ui-button.mdx`)
- Version migration: `packages/docs/src/stories/packages/{pkg}/Migration/`

If missing, flag: "Breaking change detected but no migration guide found — [list the breaking changes]"

### Step 3: Check — are tests created or updated?

Identify what type of change was made:

**For bug fixes** — check that a regression test exists in `packages/components/src/components/{name}/{name}.test.ts`. Look for test descriptions referencing the issue number or the fixed behavior.

**For new features** — check that unit tests exist covering:
- Accessibility per variant (`await expect(el).to.be.accessible()`)
- Default property values
- New behavior

**For any component change** — verify the test file imports from `'../../../dist/solid-components'` (not from source).

If tests are missing, flag: "Tests not created/updated — [specify what coverage is missing]"

### Step 4: Check — are stories created or updated?

**For visual changes** (new components, styling fixes, new variants), verify:
- Documentation stories present: `packages/docs/src/stories/components/{name}.stories.ts`
- Test stories present for Chromatic: `packages/docs/src/stories/components/{name}.test.stories.ts`

**For non-visual changes** (logic-only fixes, event handling) — stories may not need updating. Mark as n/a.

If stories are missing for visual changes, flag: "Stories not created/updated — [specify what is missing]"

### Step 5: Check — is a changeset present?

Look for new changeset files:

```sh
git diff --name-only main...HEAD -- .changeset/
```

Exclude `config.json` and `README.md` from results.

If no changeset file is found, flag: "No changeset found — run `pnpm changeset` to create one"

If a changeset exists, verify the bump type matches the change:

| Change type | Expected bump |
|-------------|---------------|
| Bug fix | `patch` |
| New feature | `minor` |
| Breaking change | `major` |

If the bump type is wrong, flag: "Changeset bump type mismatch — expected [type] for this [change kind]"

### Step 6: Check — does the PR title follow conventional commits?

Check the branch's commit messages or the intended PR title. It must start with one of: `feat`, `fix`, `perf`, `docs`, `chore`, `ci`.

Expected pattern: `type(optional-scope): description`

Examples:
- `fix: sd-button does not emit click event when toggling disabled`
- `feat: ✨ add sd-accordion`
- `docs: update migration guide for sd-input`

If the title does not match, flag: "PR title does not follow conventional commit format — expected `type: description`"

### Step 7: Check — are CSS and import conventions followed?

Scan changed `.ts` component files for violations:

#### Arbitrary Tailwind values in `@apply`

Search for patterns like `@apply` lines containing `[var(--`, `[calc(`, or other bracket notation. These arbitrary values increase the main Tailwind CSS bundle size.

Correct approach: use plain CSS outside `@apply` for custom values.

```css
/* WRONG — arbitrary value in @apply */
@apply mt-[var(--spacing-xxl)];

/* CORRECT — plain CSS for custom values */
margin-top: var(--spacing-xxl);
```

#### Import patterns

Check for these violations in changed files:

| Violation | Expected |
|-----------|----------|
| `import { customElement } from 'lit/decorators.js'` | `import { customElement } from '../../internal/register-custom-element'` |
| Barrel imports from `solid-components.ts` in component source | Direct relative imports (`import '../icon/icon'`) |
| Test files not importing from `'../../../dist/solid-components'` | Must import the built bundle |

If violations are found, flag each with the file path and the specific violation.

### Step 8: Check — is `[skip chromatic]` used correctly?

Determine whether the PR title contains the `[skip chromatic]` flag. This flag skips Chromatic visual regression testing for the PR and saves screenshot quota. It should only be used when no visual changes are present.

First, detect whether the flag is present in the intended PR title or the latest commit message:

```sh
git log -1 --format="%s" HEAD
```

Then classify the changed files:

- **Visually relevant**: `*.test.stories.ts`, `*.stories.ts`, component `.ts` files with changes to `render()` or `static styles`
- **Non-visual**: test files (`.test.ts`), changeset files, MDX, CI config, README

Apply the following logic:

| `[skip chromatic]` in title | Visual files changed | Action |
|-----------------------------|----------------------|--------|
| No | No | 💡 Suggest adding `[skip chromatic]` to the PR title to save screenshot quota |
| No | Yes | ✅ Chromatic will run — correct, no action needed |
| Yes | No | ✅ Flag is appropriate — no action needed |
| Yes | Yes | ⚠️ Flag skips visual regression for changed stories — warn the author to confirm this is intentional |

This check is **advisory** — it does not block the PR. Report the finding as a suggestion or warning, not a failure.

### Step 9: Compile the readiness report

Present findings as a checklist:

```
## PR Readiness Report

- [x] Documentation is created/updated
- [x] Migration Guide is created/updated (or n/a)
- [x] Tests are created/updated
- [x] Stories are created/updated (or n/a)
- [x] Changeset is present with correct bump type
- [x] PR title follows conventional commit format
- [x] CSS and import conventions followed
- [x] `[skip chromatic]` used correctly (or suggestion noted)
```

Use `[x]` for passing checks, `[ ]` for failing checks, `(n/a)` where a check does not apply, and `(💡 suggestion)` for advisory items.

For each failing check, provide:
1. What is missing or incorrect
2. Where it should be added (file path)
3. A suggested action to fix it
