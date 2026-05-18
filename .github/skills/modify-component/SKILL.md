---
name: modify-component
description: "Add features, variants, properties, slots, or other enhancements to an existing Solid Design System web component. Use for: adding new props/variants to an existing sd-* component, implementing feat: issues on existing components, extending component behavior. NOT for brand-new components — use create-component for that."
---

# Modify Component

## When to Use

- Adding a new property, variant, slot, CSS part, or event to an **existing** `sd-*` component
- Implementing a `feat:` issue that targets a component that already exists
- Extending component behavior, styling, or accessibility for a new use case
- The component already exists in `packages/components/src/components/`

> For creating a brand-new component from scratch, use the **create-component** skill instead.  
> For fixing a bug in an existing component, use the **implement-bugfix** skill instead.

## Prerequisites

- The component already exists — verified by checking `packages/components/src/components/{name}/{name}.ts`
- The change is described (via a GitHub issue, plan, or direct instruction)
- The affected component has been identified (e.g., `sd-button` → name is `button`)

## Procedure

### Step 1: Read the component and its tests

Read these files before making any changes:

1. `packages/components/src/components/{name}/{name}.ts` — component source
2. `packages/components/src/components/{name}/{name}.test.ts` — existing tests
3. `packages/docs/src/stories/components/{name}.stories.ts` — documented variants

### Step 2: Implement the change

Read the **component-conventions** skill — it covers all authoring rules: imports, class decorator, JSDoc block, properties, token system, accessibility, render method, static styles, events, and CSS rules.

Apply the change to `packages/components/src/components/{name}/{name}.ts`. When adding properties, slots, events, CSS parts, or CSS properties, always update the existing JSDoc block above the class accordingly.

### Step 3: Update tests

Use the **write-component-tests** skill to add tests for the new functionality.

Run the tests to confirm they pass:

```sh
cd packages/components && pnpm test.single.ci {name}
```

### Step 4: Update stories

Use the **write-documentation-stories** skill to add documentation stories for the new functionality.
Use the **write-test-stories** skill to add visual regression stories covering all new variant/state combinations.
Update the overview MDX page via the **write-overview-pages** skill if the new capability needs documenting.

### Step 5: Create changeset

Use the **create-changeset** skill with:
- **Package**: `@solid-design-system/components`
- **Bump type**: `minor` for new features, `patch` for non-breaking improvements
- **Summary**: `feat: ✨ {component-tag}: {short description}` with a list of what was added

### Step 6: Verify

Run from the repository root:

```sh
pnpm verify
```
