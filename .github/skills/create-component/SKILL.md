---
name: create-component
description: "Scaffold and implement a brand-new Lit web component for the Solid Design System from scratch. Use for: new component implementation, component scaffolding, implementing a new sd-* web component from a GitHub issue spec. NOT for adding features/variants to an existing component — use modify-component for that."
---

# Create Component

## When to Use

- Implementing a **brand-new** web component from a GitHub issue (New Component Issue Template, label `🙌 Epic`)
- Scaffolding a new `sd-*` component with all required files
- The component does **not yet exist** in `packages/components/src/components/`

> For adding features, variants, or properties to an **existing** component, use the **modify-component** skill instead.

## Prerequisites

- The component name must start with `sd-` (e.g., `sd-button`, `sd-accordion`)
- The component does not yet exist — verified by checking `packages/components/src/components/`
- A GitHub issue should exist with the component spec (Props, Slots, Parts, CSS Properties, Stories)
- If adapting from Shoelace, the source component should be identified

## Procedure

### Step 0: Read existing component for reference

Before implementing, read one existing component file matching your target complexity:
- **Simple**: read `packages/components/src/components/badge/badge.ts`
- **Complex with form control**: read `packages/components/src/components/button/button.ts`
- **With slots and events**: read `packages/components/src/components/accordion/accordion.ts`
- **Form input**: read `packages/components/src/components/input/input.ts`

### Step 1: Scaffold with plop

Run the plop generator to create the initial file structure:

```sh
cd packages/components && pnpm plop
```

When prompted for tag name, enter the full tag (e.g., `sd-button`). This creates:

| File | Location |
|------|----------|
| Component | `packages/components/src/components/{name}/{name}.ts` |
| Tests | `packages/components/src/components/{name}/{name}.test.ts` |
| Stories | `packages/docs/src/stories/components/{name}.stories.ts` |
| Test Stories | `packages/docs/src/stories/components/{name}.test.stories.ts` |
| Overview MDX | `packages/docs/src/stories/components/{name}.mdx` |
| Export | Updated `packages/components/src/solid-components.ts` |

Where `{name}` is the tag without the `sd-` prefix (e.g., `button` for `sd-button`).

### Step 1b: Check — should this component be adapted from a Shoelace component?

Check the task description for whether this component should be based on a Shoelace component. Signals: the task mentions Shoelace, references `sl-*`, or specifies a specific Shoelace basis.

**If NOT based on Shoelace** — skip this step, continue to Step 2.

**If based on Shoelace** — read the [Shoelace adaptation guide](./references/shoelace-adaptation.md) and follow it now. This replaces the plop-generated `{name}.ts` and `{name}.test.ts` with adapted Shoelace source code. The other plop-generated files (stories, test stories, MDX, export registration) remain unchanged.

After completing the adaptation guide, continue to Step 2 to apply the project's component conventions to the adapted code.

### Step 2: Implement the component

Read the **component-conventions** skill — it covers all authoring rules: imports, class decorator, JSDoc block, properties, token system, accessibility, render method, static styles, events, and CSS rules.

Edit `packages/components/src/components/{name}/{name}.ts` and implement the full component spec from the issue (all props, slots, CSS parts, CSS properties, events).

### Step 3: Verify the export registration

Check that `packages/components/src/solid-components.ts` contains the new export. The plop generator adds it at the `/* plop:component */` marker:

```typescript
export { default as SdMyComponent } from './components/my-component/my-component.js';
/* plop:component */
```

### Step 4: Implement tests

Use the **write-component-tests** skill to create comprehensive tests.

### Step 5: Implement stories

Use the **write-documentation-stories** skill to create documentation stories.
Use the **write-test-stories** skill to create visual regression test stories.
Use the **write-overview-pages** skill to create the overview MDX page.

### Step 6: Create changeset

Use the **create-changeset** skill with:
- **Package**: `@solid-design-system/components`
- **Bump type**: `minor`
- **Summary**: `feat: ✨ add sd-{name}` with a list of supported features

### Step 7: Verify

Run from the repository root:

```sh
pnpm verify
```
