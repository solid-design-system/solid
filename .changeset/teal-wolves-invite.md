---
"@solid-design-system/tokens": minor
---

Add `tokens.tailwind.json` — a ready-to-use Tailwind v3/v4 theme config

**What changed**

A new build artefact `dist/tokens.tailwind.json` is now generated and exported via the `./tailwind` package export. It maps all design tokens to their Tailwind theme keys (`colors`, `spacing`, `fontSize`, `borderRadius`, `lineHeight`, etc.), using CSS custom property references (`var(--sd-*)`) where available so the values respond to theme switching at runtime.

Tokens that exist in the source (`tokens.json`) but are not emitted as CSS custom properties (e.g. `spacing.0`, `spacing.2.5`, `spacing.5`, all `lineHeight` values) are included using their raw design-token values so nothing is missing from the output.

**Why**

Consumers integrating Solid into a Tailwind project previously had to maintain their own mapping of design tokens to Tailwind config keys. This artefact provides an official, always-up-to-date mapping generated directly from the token source.

**How to use**

```js
// tailwind.config.js (v3)
import solidTokens from '@solid-design-system/tokens/tailwind';

export default {
  theme: {
    extend: solidTokens,
  },
};
```
