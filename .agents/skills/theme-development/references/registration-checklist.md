# Theme Registration Checklist

Locations a theme touches, in working order. Paths are relative to the repository root. Verify each against current source; entries change as the theme system evolves.

## Tokens

| Location                                                          | Change                                                                                  |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `packages/tokens/src/figma-variables/`                            | Updated by `fetch:figma`; contains one top-level key per Figma mode                     |
| `packages/tokens/themes/<key>/<key>.css`                          | Generated from the Figma mode, or a requested placeholder copied from the closest theme |
| `packages/tokens/themes/legacy-variables.css`                     | Add `.sd-theme-<key>` to the selector list                                              |
| `packages/tokens/scripts/tailwind/token-processors/typography.js` | Add the Figma mode to `fontWeightMap` with the font's real weights                      |

## Storybook

| Location                                                              | Change                                                                                                         |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `packages/docs/.storybook/modes.js`                                   | Add to both `themes` and `allModes` using the Storybook name                                                   |
| `packages/docs/.storybook/preview.js`                                 | Import `../../tokens/themes/<key>/<key>.css`                                                                   |
| `packages/docs/.storybook/preview-head.html`                          | Add the `.sd-theme-<key>` font-family rule; add `@font-face` rules only for a new font                         |
| `packages/docs/.storybook/assets/fonts/<font>/`                       | New `.woff2` files only for a font not already present                                                         |
| `packages/docs/.storybook/theme-protection.ts`                        | Add the Storybook name to `PROTECTED_THEMES` when protected                                                    |
| `packages/docs/.storybook/addons/theme-generator/theme-attributes.ts` | Add `sd-theme-<key>`: logos, alt text, CSS path, `font` key, icon fields; add `fontConfig` only for a new font |
| `packages/docs/.storybook/assets/images/logo-<brand>-{lg,md,sm}.svg`  | Logo files referenced by theme attributes                                                                      |
| `packages/docs/src/stories/packages/tokens/Installation.mdx`          | Font setup example for consumers                                                                               |

## Icons (only once the CELUM folder exists)

| Location                                                           | Change                                                     |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| `packages/components/src/components/icon/library.multi-theming.ts` | `themeMap` entry from theme key to CELUM folder            |
| `packages/components/src/components/icon/library.internal.ts`      | Theme entry when the theme has internal icons              |
| `packages/components/src/components/icon/icon.test.ts`             | Theme-to-folder resolution case                            |
| `packages/docs/scripts/celum/icon-libraries.ts`                    | `ICON_THEME_LIBRARIES`, kept in sync with theme attributes |
| `packages/components/scripts/figma/config.js`                      | `figmaThemeToFolder` for Figma-to-CELUM exports            |
| `packages/docs/src/stories/components/icon*.stories.ts`            | Multi-theming modes and library examples                   |

## Known Traps

- `fetch:figma` deletes the variables folder before fetching; a failed request leaves it empty until restored from Git.
- The token build only emits themes present as Figma modes. A placeholder in `themes/` survives builds but is not published.
- Theme CSS files declare `:root, .sd-theme-<key>`; the last imported theme in `preview.js` wins for `:root`, so keep the default theme's import order.
- Registering a `themeMap` entry before CELUM publishes icons makes multi-theming icons request missing SVGs.
- Duplicating a fenced example in `Installation.mdx` makes Prettier reformat the rest of the file.
- Protected themes render a placeholder message in Storybook until access is granted, which can be mistaken for a broken theme.
