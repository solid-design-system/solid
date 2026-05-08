---
name: style-conventions
description: "Coding conventions for Solid Design System CSS style modules. Use for: reference when implementing or modifying any sd-* CSS style module. Covers JSDoc comment block, BEM naming, Tailwind @apply, Mobile First, CSS nesting, Figma variable mapping, and icon integration."
---

# Style Conventions

All `sd-*` CSS style modules in `packages/styles/src/modules/` must follow these conventions.

---

## Change-Type Reference

When extending an existing style module, use this table to identify everything that needs updating:

| Change type | What to modify |
|---|---|
| New variant | Add `@variant` to JSDoc block, add new BEM modifier class |
| New boolean modifier | Add `@boolean` to JSDoc block, add new BEM modifier class |
| New CSS custom property | Add `@cssproperty` to JSDoc block, use the variable in the CSS |
| New size | Add/extend `@variant { sm \| lg }`, add responsive size classes |
| Icon integration | Add `sd-icon` nested selector inside the base class |
| Responsive change | Adjust existing classes to follow Mobile First breakpoint pattern |

---

## JSDoc-like Comment Block

Add a documentation comment at the top of every CSS file. This auto-generates Storybook controls:

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

| Tag | Effect |
|---|---|
| `@variant { options } sd-{name}--prefix` | Generates BEM modifier classes (e.g., `sd-headline--size-xl`) |
| `@boolean sd-{name}--modifier` | Generates a boolean BEM modifier class |
| `@cssproperty --sd-{name}--prop` | Documents a CSS custom property |

---

## BEM Class Naming

Use [BEM methodology](https://getbem.com) for all class names:

- **Block**: `sd-{name}` — the base class applied to the root element
- **Modifier**: `sd-{name}--{modifier}` — variant, size, or state (e.g., `sd-headline--size-xl`, `sd-headline--inverted`)
- **Element**: `sd-{name}__{element}` — child elements within the block (rare in style modules)

---

## Tailwind `@apply`

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
- **No arbitrary values in `@apply`**: Do NOT use `@apply mt-[var(--spacing-xxl)]` — add custom values as plain CSS outside `@apply`
- **Nesting**: Use CSS nesting for modifier and state selectors within the base class block

---

## Mobile First

Use the mobile token as the unsuffixed default Tailwind class, override with the desktop token at the breakpoint:

```css
/* mobile = text-3xl (32px), desktop sm: = text-4xl (40px) */
@apply text-3xl sm:text-4xl leading-tight;

/* mobile = text-3xl (32px), desktop lg: = text-4xl (40px) */
@apply text-3xl lg:text-4xl leading-tight;
```

Never use the desktop token as the default and add a responsive override — always start small and scale up.

---

## CSS Nesting

Use CSS nesting for modifiers and states within the base block:

```css
.sd-{name} {
  @apply text-primary;

  &.sd-{name}--inverted {
    @apply text-white;
  }

  &.sd-{name}--size-lg {
    @apply text-xl sm:text-2xl;
  }
}
```

---

## Figma Variable Mapping

When a Figma variable name differs from the CSS property, directly assign the CSS variable instead of using `@apply`:

```css
background-color: var(--sd-color-icon-fill-neutral-800, var(--sd-color-neutral-800));
```

---

## Icon Integration

When a style module supports an `sd-icon` child element, add the icon selector nested inside the base class:

```css
.sd-{name} {
  @apply flex font-bold text-primary;

  sd-icon {
    @apply text-[3rem] text-primary shrink-0;
  }
}
```
