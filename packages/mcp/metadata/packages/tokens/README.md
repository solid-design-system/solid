<div className="flex gap-2">
  ![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
  ![NPM Version](https://img.shields.io/npm/v/%40solid-design-system%2Ftokens)
</div>

# @solid-design-system/tokens

The `@solid-design-system/tokens` package is the foundation of the Solid Design System. It ships **Design Tokens** — the raw values (colors, spacing, typography, etc.) that power every component and style. It ensures design consistency and collaboration between our designers and developers when building components for the Solid Design System.

These tokens are exposed in two forms:

- **Themes** — pre-built CSS files that resolve tokens into a visual style (e.g. `ui-light`, `ui-dark`, brand themes). Themes are loaded once per page and inherited by all components automatically.
- **Token utilities** — CSS variables, SCSS variables, and Tailwind configuration that let you consume tokens directly when building custom components or layouts.
