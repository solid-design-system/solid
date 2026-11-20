---
name: theme-development
description: Add or update an SDS brand theme (for example sd-theme-psd) across tokens, Storybook, fonts, logos, icons, and docs. Use for new partner themes, placeholder themes awaiting Figma variables, or completing a partially registered theme; not individual token values in existing themes, component styling, or CELUM/Figma icon exports.
---

# Theme Development

Run commands from the repository root. Read the [tokens contribution guide](../../../packages/tokens/CONTRIBUTING.md#updatingcreating-themes) and the most recently added theme before acting; `git log --diff-filter=A -- 'packages/tokens/themes/*/*.css'` finds it. Copy that theme's registration pattern rather than an older one. The guide and current source are authoritative; [the registration checklist](./references/registration-checklist.md) lists every location and the traps found so far.

## Establish the Inputs

1. Agree on identifiers before editing. Keep them consistent everywhere:

   | Identifier        | Example (PSD)  | Used in                                                         |
   | ----------------- | -------------- | --------------------------------------------------------------- |
   | Theme key         | `psd`          | Folder, `--sd-theme: 'psd'`, icon theme key                     |
   | Theme class / id  | `sd-theme-psd` | CSS selector, Storybook modes, theme attributes                 |
   | Storybook name    | `PSD`          | Theme switcher, Chromatic modes, theme protection               |
   | Figma mode name   | `PSD`          | Figma variables collection, typography font-weight map          |
   | CELUM icon folder | `psd`          | `cdnIconFolder`, multi-theming `themeMap`, CELUM export folders |

2. Collect the brand inputs and record which are missing. Do not invent them:
   - Figma variables mode for the theme and a working read-only Figma token (never requested in chat).
   - Font: an existing repository font (`fontConfig` in theme attributes) or `.woff2` files plus their licensed CDN or self-hosted source.
   - Logos: `logo-<brand>-lg.svg`, `-md.svg`, `-sm.svg` and alt text.
   - Icons: whether `https://celum-icons.fe.union-investment.de/<folder>/system.json` and `content.json` exist; a `404` means icons are not published yet.
   - Whether the theme is password-protected in Storybook (partner themes usually are).

3. If inputs are missing, ask which to wait for and which to scaffold. Finish the reachable work and report the rest as a precise asset list.

## Tokens

1. With a Figma mode and valid credentials, fetch and build as the guide describes:

   ```sh
   pnpm --dir packages/tokens fetch:figma
   ```

   The fetch script empties `packages/tokens/src/figma-variables/` before requesting Figma. On failure (for example `403` from an expired token) restore those files with `git checkout -- packages/tokens/src/figma-variables` before continuing. The build writes only themes that exist as Figma modes to `themes/`, `dist/`, and `cdn/`.

2. Without a Figma mode, a placeholder is acceptable only when requested: copy the closest existing theme (prefer one sharing the font) to `packages/tokens/themes/<key>/<key>.css`, rename the selector to `.sd-theme-<key>`, set `--sd-theme: '<key>'`, and add a top comment stating it is a placeholder pending the Figma mode. It is not shipped in `dist`/`cdn` and must not get a tokens changeset until real values land.

3. Register the theme selector in `legacy-variables.css` and its font weights in the typography processor. See the checklist for exact locations.

## Storybook and Docs

Follow the [Storybook section of the tokens guide](../../../packages/tokens/CONTRIBUTING.md#setting-up-a-new-theme-in-storybook) and the checklist: modes, preview import, font registration, theme protection, and theme attributes (logos, CSS path, font, icon fields). Add an installation example only when the font setup differs from an existing example; otherwise extend that example's title. Prettier rewrites `Installation.mdx` when a fenced block is duplicated, so run `pnpm exec prettier --check` on it and revert rather than accept a reformatted file.

Check that no component or style source branches on theme names (`git grep "'<similar-key>'" packages/components/src packages/styles/src`); if one does, route the change to [component-development](../component-development/SKILL.md) or [style-development](../style-development/SKILL.md). Visual coverage of the new mode belongs to [storybook-authoring: Visual Test Stories](../storybook-authoring/SKILL.md#visual-test-stories).

## Icons

Register icons only after the CELUM folder exists; until then keep `iconLibraries: []` in theme attributes with a comment, and leave the multi-theming `themeMap`, internal library map, icon stories, and CELUM changelog libraries unchanged. Once published, follow the guide's icon sections and use [icon-maintenance](../icon-maintenance/SKILL.md) for changelog seeding and Figma exports, including the brand folder mapping in the Figma export configuration. Do not dispatch icon workflows to verify a theme.

## Verify and Report

1. Run focused checks:

   ```sh
   pnpm --dir packages/tokens build
   pnpm exec prettier --check packages/docs/.storybook packages/tokens/themes
   ```

2. Start Storybook (`pnpm --dir packages/docs storybook`) and open a component story with `?globals=theme:<Storybook name>`. Confirm the `.sd-theme-<key>` class, `--sd-theme` value, and loaded font faces. Protected themes need `STORYBOOK_THEME_PASSWORD` in the ignored `packages/docs/.env` (see the [docs guide](../../../packages/docs/CONTRIBUTING.md)); never print or commit it. Template stories show the theme logo; a missing SVG is a visible broken image.
3. Use [create-changeset](../create-changeset/SKILL.md): Storybook registration is a docs change; real token values are a tokens change. Run root `pnpm verify` before submission or report it as unrun, and use [validate-pr-readiness](../validate-pr-readiness/SKILL.md) before review.
4. Report identifiers used, files changed, what is placeholder, missing assets (logos, icons, Figma mode, font), and checks run. Do not claim Figma, CELUM, or Chromatic results without evidence. Do not commit or push without instruction.
