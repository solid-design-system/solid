---
name: create-style-component
description: "Scaffold and implement a CSS-based style component for the Solid Design System. Use for: new style component implementation, style scaffolding, implementing a style from a GitHub issue spec, adding a new sd-* CSS style module."
---

# Create Style Component

## When to Use

- Implementing a new CSS-based style component from a GitHub issue (New Style Component Issue Template)
- Scaffolding a new `sd-*` style module with all required files
- Adding a style to the Solid Design System styles package

## Prerequisites

- The style name must start with `sd-` (e.g., `sd-headline`, `sd-mark`)
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

Edit `packages/styles/src/modules/{name}.css` following these conventions:

#### JSDoc-like comment block

Add a documentation comment at the top of the file. This auto-generates Storybook controls:

```css
/**
 * Description of the style module. Starts with a noun or description of purpose.
 * @name sd-{name}
 * @status experimental | stable
 * @since {version}
 * @variant { value1 | value2 } sd-{name}--... Description of the variant.
 * @variant { sm | lg } sd-{name}--size-... Description of the size variant.
 * @boolean sd-{name}--inverted Inverts the style.
 * @cssproperty --sd-{name}--property - Description of the CSS custom property.
 */
```

Tag reference:
- `@variant { options } sd-{name}--prefix` → generates BEM modifier classes (e.g., `sd-headline--size-xl`)
- `@boolean sd-{name}--modifier` → generates a boolean BEM modifier class
- `@cssproperty --sd-{name}--prop` → documents a CSS custom property

#### BEM class naming

Use [BEM methodology](https://getbem.com) for all class names:
- **Block**: `sd-{name}` (the base class)
- **Modifier**: `sd-{name}--{modifier}` (variant, size, state)
- **Element**: `sd-{name}__{element}` (child elements, rare in styles)

#### Tailwind `@apply` usage

Use Tailwind's `@apply` directive for all styling connected to design tokens:

```css
.sd-{name} {
  @apply text-primary font-bold leading-tight;
}

.sd-{name}--size-xl {
  @apply text-xl sm:text-2xl;
}

.sd-{name}--inverted {
  @apply text-white;
}
```

Rules:
- **Mobile First**: Always use the mobile token as the unsuffixed default, override with desktop at the breakpoint (e.g., `text-3xl sm:text-4xl`)
- **No arbitrary values in `@apply`**: Do NOT use `@apply mt-[var(--spacing-xxl)]` — add custom values as plain CSS outside `@apply`
- **Nesting**: Use CSS nesting for variant and state selectors within the base class

#### Figma consistency

When a Figma variable name differs from the CSS property, directly assign the CSS variable:

```css
background-color: var(--sd-color-icon-fill-neutral-800, var(--sd-color-neutral-800));
```

### Step 3: Check — does this style need `sd-icon` integration?

Many style modules support an `sd-icon` child element for icon decoration.

**If the spec does NOT include icons** — skip to Step 4.

**If the spec includes icon support** — add `sd-icon` styling nested inside the base class:

```css
.sd-{name} {
  @apply flex font-bold text-primary;

  sd-icon {
    @apply text-[3rem] text-primary shrink-0;
  }
}
```

### Step 4: Implement stories

Documentation stories (`packages/docs/src/stories/styles/{name}.stories.ts`) and test stories (`{name}.test.stories.ts`) must be created for the new style.

Use the **write-component-stories** skill, adapted for styles:
- Stories title: `'Styles/sd-{name}'` (not `'Components/...'`)
- Import path: `'../../../../styles/src/modules/{name}.css'` is NOT needed — styles are globally available
- Use raw HTML in stories since styles are CSS-only (no Lit component)

Test stories should cover all visual variant combinations for Chromatic visual regression.

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

This runs linting, tests, and builds across all packages.
