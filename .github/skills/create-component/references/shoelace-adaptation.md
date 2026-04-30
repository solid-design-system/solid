# Shoelace Adaptation Guide

The [Shoelace](https://shoelace.style/) web component library is the working inspiration for Solid components. Components are copied from the [Shoelace source](https://github.com/shoelace-style/shoelace/tree/next/src/components) and adapted.

> **When in doubt, refer to Shoelace!**

## Procedure

### 1. Copy the source

Check the [Shoelace repo components folder](https://github.com/shoelace-style/shoelace/tree/next/src/components) for the latest published component code. Copy the **whole component folder** (includes tests and styles), not just the component file, into `packages/components/src/_components/`.

### 2. Rename prefixes

Rename all occurrences:
- `sl-` → `sd-` (e.g., `sl-button` → `sd-button`)
- `Shoelace` → `Solid` (e.g., `ShoelaceFormControl` → `SolidFormControl`)

This applies to imports, variables, component names, and CSS custom properties.

### 3. Remove irrelevant properties

Remove properties not in the [Figma design documentation](https://www.figma.com/files/1075429990769806468/project/67503549/Solid-DS-Documentation). For example, `pill` is a recurring Shoelace prop that alters border radius — Solid designs don't offer this.

### 4. Compare with old UI component

Refer to the [UI Component Library](https://component-library.dev.fe.union-investment.de/integration/storybook/index.html) to see what the old equivalent component looked like. Note what's lost or improved — this feeds into the migration guide.

### 5. Convert CSS to Tailwind-first

Shoelace does not use Tailwind and includes separate CSS files per component. Work through the `render()` method:
- Replace CSS classes with Tailwind utility classes that implement the Solid design
- Remember Solid designs may differ from Shoelace's original styles
- Pay careful attention to `display`, `position`, and interaction state details

### 6. Keep technical Shoelace features that are relevant

It's easier to keep relevant technical props/features and remove unused ones at the end.

### 7. Implement missing behavior

After the Shoelace component is reduced and re-styled, add any missing functions required by the Solid component spec.

### 8. Adapt tests

Start with the Shoelace tests. Inside `packages/components`, test individual components:

```sh
pnpm test.component {name}
```

Tests will likely contain misnamed properties or improper defaults. Adapt them to fit the Solid use case.

## Internal utilities from Shoelace

The project has taken things like `FormControlController` directly from Shoelace and is adapting them. If something is broken, missing, or unexpected, check whether the Shoelace utility was missed or misconfigured.
