---
name: modify-style-component
description: "Add variants, modifiers, CSS custom properties, or other enhancements to an existing Solid Design System CSS style module. Use for: adding new variants/sizes/states to an existing sd-* style, implementing feat: issues on existing style modules, extending style behavior. NOT for brand-new styles — use create-style-component for that."
---

# Modify Style Component

## When to Use

- Adding a new variant, size modifier, boolean modifier, or CSS custom property to an **existing** `sd-*` style module
- Implementing a `feat:` issue that targets a style that already exists
- Extending styling, responsive behavior, or icon integration for a new use case
- The style already exists in `packages/styles/src/modules/`

> For creating a brand-new style module from scratch, use the **create-style-component** skill instead.

## Prerequisites

- The style module already exists — verified by checking `packages/styles/src/modules/{name}.css`
- The change is described (via a GitHub issue, plan, or direct instruction)
- The affected style has been identified (e.g., `sd-headline` → name is `headline`)

## Procedure

### Step 1: Read the existing style module and its stories

Read these files before making any changes:

1. `packages/styles/src/modules/{name}.css` — CSS module source (pay attention to the JSDoc comment block — it lists all existing `@variant` and `@boolean` tags)
2. `packages/docs/src/stories/styles/{name}.stories.ts` — documentation stories

### Step 2: Implement the change

Read the **style-conventions** skill — it covers all authoring rules: JSDoc comment block, BEM naming, Tailwind `@apply`, Mobile First, CSS nesting, Figma variable mapping, and icon integration.

Apply the change to `packages/styles/src/modules/{name}.css`. Always update the JSDoc comment block at the top of the file when adding new variants, modifiers, or CSS properties.

### Step 3: Update stories

Use the **write-documentation-stories** skill to add or update documentation stories covering the new variants or modifiers.
Use the **write-test-stories** skill to extend the visual regression stories with new variant/state combination matrices for Chromatic.
Update the overview MDX page via the **write-overview-pages** skill if the new capability needs documenting.

### Step 4: Create changeset

Use the **create-changeset** skill with:
- **Package**: `@solid-design-system/styles`
- **Bump type**: `minor` for new features, `patch` for non-breaking improvements
- **Summary**: `feat: ✨ {style-tag}: {short description}` with a list of what was added

### Step 5: Verify

Run from the repository root:

```sh
pnpm verify
```
