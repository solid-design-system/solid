# Component Authoring Conventions

Use the [component contribution guide](../../../../packages/components/CONTRIBUTING.md) and current source, not a copied draft, when they disagree with an example.

## Structure and Imports

- Extend `SolidElement` from `../../internal/solid-element` and retain `...SolidElement.styles` in static styles.
- Import `customElement` from `../../internal/register-custom-element`, not `lit/decorators.js`.
- Import `property`, `state`, and query decorators from `lit/decorators.js` as needed. Use existing controllers for slots, localization, and forms rather than reimplementing them.
- Import dependency components directly, for example `import '../icon/icon'`; do not import the source barrel from component implementation. Add their `@dependency` documentation.
- Follow the neighboring component's `classix`/`cx` pattern for conditional classes and inherited `this.emit()` for `sd-*` events. Use `import type` for type-only dependencies.

## Public API and Documentation

- Document each property inline with its purpose and default. Use `@property` decorators and union types for constrained strings. Do not duplicate auto-generated property entries in the class-level JSDoc.
- Reflect properties to attributes, except rich Array/Object values or frequently changing values where reflection is inappropriate. Mark internal reactive state `/** @internal */` and use `@state()`.
- Maintain applicable class-level `@summary`, `@documentation`, `@status`, `@since`, `@dependency`, `@slot`, `@csspart`, `@cssproperty`, and `@event` tags. Preserve actual version/status information; do not invent a release version or documentation URL.
- Keep event details and public TypeScript types aligned with the implementation. Preserve defaults and form semantics unless intentionally changing their contract.

## Styling and Accessibility

- Prefer token-connected Tailwind classes, mobile defaults before responsive overrides, and `@apply` inside Lit `css` templates. Never place arbitrary bracket values in `@apply`; write legitimate custom values as plain CSS instead.
- Direct CSS-variable assignments are appropriate where documented Figma semantic mappings require them. Do not replace them with guessed tokens or raw colors.
- Preserve host display, focus-visible styling, disabled/loading behavior, reduced-motion handling, and theme variants. Inspect existing parts and selectors before adding a styling workaround.
- Prefer native semantic controls and add ARIA only where needed. Follow the established keyboard pattern, including roving focus for composite controls rather than making every item independently tabbable. Use live regions only for changes that need announcements; avoid redundant labels on decorative icons.
- Internal component icons use approved names from `library="_internal"`. New/exported icon data follows [icon-maintenance](../../icon-maintenance/SKILL.md), not hand-edited SVG strings.
