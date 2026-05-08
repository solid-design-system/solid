---
name: create-style-component
description: "Scaffold and implement a brand-new CSS-based style component for the Solid Design System from scratch. Use for: new style component implementation, style scaffolding, implementing a new sd-* CSS style module from a GitHub issue spec. NOT for adding variants/modifiers to an existing style — use modify-style-component for that."
---

# Create Style Component

## When to Use

- Implementing a **brand-new** CSS-based style module from a GitHub issue (New Style Component Issue Template, labels `🙌 Epic` and `style-components`)
- Scaffolding a new `sd-*` style module with all required files
- The style does **not yet exist** in `packages/styles/src/modules/`

> For adding variants, modifiers, or other extensions to an **existing** style module, use the **modify-style-component** skill instead.

## Prerequisites

- The style name must start with `sd-` (e.g., `sd-headline`, `sd-mark`)
- The style module does not yet exist — verified by checking `packages/styles/src/modules/`
- A GitHub issue should exist with the style spec (Props/variants, Stories)
- The issue has label `🙌 Epic` and label `style-components`

## Procedure

### Step 0: Read an existing style module for reference

Before implementing, read one existing style module matching your target complexity:
- **Simple (no variants)**: read `packages/styles/src/modules/mark.css`
- **With variants and sizes**: read `packages/styles/src/modules/headline.css`
- **With complex nesting**: read `packages/styles/src/modules/table.css`

Also read the corresponding story for pattern reference:
- **Simple story**: read `packages/docs/src/stories/styles/mark.stories.ts`
- **Complex story**: read `packages/docs/src/stories/styles/headline.stories.ts`

### Step 1: Scaffold with plop

Run the plop generator to create the initial file structure:

```sh
cd packages/styles && pnpm plop
```

When prompted, enter the style name (e.g., `sd-my-style`). This creates:

| File | Location |
|------|----------|
| CSS module | `packages/styles/src/modules/{name}.css` |
| Documentation story | `packages/docs/src/stories/styles/{name}.stories.ts` |
| Test story | `packages/docs/src/stories/styles/{name}.test.stories.ts` |
| Index update | Updated `packages/styles/src/index.css` (or `prose.css`) |

Where `{name}` is the style name without the `sd-` prefix (e.g., `headline` for `sd-headline`).

### Step 2: Implement the CSS module

Read the **style-conventions** skill — it covers all authoring rules: JSDoc comment block, BEM naming, Tailwind `@apply`, Mobile First, CSS nesting, Figma variable mapping, and icon integration.

Edit `packages/styles/src/modules/{name}.css` and implement the full variant/modifier spec from the issue.

### Step 3: Check — does this style need `sd-icon` integration?

If the spec includes icon support, follow the icon integration pattern from the **style-conventions** skill.

If the spec does NOT include icons — skip to Step 4.

### Step 4: Implement stories

Use the **write-documentation-stories** skill to create documentation stories:
- Stories title: `'Styles/sd-{name}'` (not `'Components/...'`)
- Use raw HTML in stories since styles are CSS-only (no Lit component)

Use the **write-test-stories** skill to create visual regression test stories covering all variant combinations for Chromatic.

Use the **write-overview-pages** skill to create the overview MDX page.

### Step 5: Create changeset

Use the **create-changeset** skill with:
- **Package**: `@solid-design-system/styles`
- **Bump type**: `minor`
- **Summary**: `feat: ✨ add sd-{name}` with a list of supported variants

### Step 6: Verify

Run from the repository root:

```sh
pnpm verify
```
