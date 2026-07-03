<div className="flex gap-2">
  ![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
  ![NPM Version](https://img.shields.io/npm/v/%40solid-design-system%2Ftokens)
</div>

# @solid-design-system/tokens

The `@solid-design-system/tokens` package is the foundation of the Solid Design System. It ships **Design Tokens** — the raw values (colors, spacing, typography, etc.) that power every component and style. It ensures design consistency and collaboration between our designers and developers when building components for the Solid Design System.

These tokens are exposed in two forms:

- **Themes** — pre-built CSS files that resolve tokens into a visual style (e.g. `ui-light`, `ui-dark`, brand themes). Themes are loaded once per page and inherited by all components automatically.
- **Token utilities** — CSS variables, SCSS variables, and Tailwind configuration that let you consume tokens directly when building custom components or layouts.

## Multitheming

With Multitheming, the Solid Design System can adapt its established components for different brands and touchpoints.

Each theme is a translation of a brand's corporate design into the Solid DS – not a 1:1 reproduction, but the closest possible approximation within a consistent, scalable system. Certain design decisions are defined system-wide to ensure quality, consistency, and accessibility across all brands.

Unlike a Whitelabel System – where each brand builds and maintains its own library from a blank foundation – the Solid DS retains a shared, opinionated base and adapts only the visual layer.

Regardless of the theme – the proven Solid DS quality remains intact. Structure, logic, accessibility, and maintainability are secured across the entire system. The theme determines how components look. The Solid DS determines how well they work.
