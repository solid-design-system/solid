# Contributing

## For Designers (Figma)

Create new variables in Variables.

## For Developers (Code)

### Updating/Creating Themes

1. Create a token in Figma with the permissions "Design systems -> Read Variables". This has to be done by someone with a Union Investment account and be shared with the team.
2. Extract the Figma ID from the URL – if you need a specific branch, pick up the URL part after `/branch/`, otherwise the value after `/design/`
3. Create a `.env` file in the `packages/tokens` directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
4. Add your Figma credentials to the `.env` file:
   ```
   FIGMA_TOKEN=your_figma_token_here
   FIGMA_FILE_ID=your_file_id_here
   ```
5. Run the fetch command:
   ```bash
   cd packages/tokens && pnpm fetch:figma
   ```
6. Enjoy.

#### Setting up a new theme in Storybook

To register a new theme in Storybook:

1. Add the theme to both `themes` and `allModes` in `.storybook/modes`.
2. Import the theme in `.storybook/preview.js`.

#### Adding internal icons

1. Create an `icons.css` file inside `themes/<your-theme>/`.
2. Define the icon SVGs as CSS custom properties.
3. Build the `tokens` package. The build process will automatically include the icons in the generated theme CSS files.

#### Adding system and content icons

1. Ensure the icons are available in the CDN under the url https://celum-icons.fe.union-investment.de/`<your-theme-folder>`/system.json.
2. Add the CDN folder name to `ThemeMap` using the same key that references the theme throughout the project.
3. Update `icon.libraries.multi-theming.stories` by adding the new theme to both the **Content** and **System** modes.
4. Add a new example section for the theme in the **Multi-theming Library** story.

#### Adding font families

1. Add the font files to a new folder under `packages/docs/.storybook/fonts/`.
2. Register the fonts in `.storybook/preview-head.html`.
3. Update `packages/tokens/tailwind/token-processors/typography.js` with the typography configuration for the new theme.

#### Adding logos

1. Add the logo SVGs to `packages/docs/.storybook/assets/images/`.
2. Add a new entry to `theme-attributes.js` using the key `sd-theme-<your-theme>`.
3. Configure the following properties:
   - `logoLg`
   - `logoMd`
   - `logoSm`

   Each property should point to the corresponding SVG file and include appropriate alt text.

   This configuration object also defines:
   - the path to the theme CSS file (`<your-theme>/<your-theme>.css`); and
   - the CDN folder used to load the theme's icons.

### Analyzing Variable Usage

To analyze CSS variable usage across the monorepo:

```bash
cd packages/tokens && pnpm analyze:variables
```

The script:

- Extracts all `--sd-*` variables from theme files
- Searches for usage in generated bundles (components & styles)
- Categorizes variables (base vs component tokens)
- Shows usage statistics and lists unused variables

This helps identify dead variables that can be removed from the design system.

### Deleting and Renaming Variables from Figma

Variables must not be removed from themes.

If a variable is renamed or deleted in Figma but already exists in the codebase, it must stay in `legacy-variables.css` and reference the new variable or value.
This ensures that newer tokens packages remain compatible with older versions of the components and styles packages.

Removing customizable CSS variables is a breaking change, so a transition period may be required. During this period, a fallback must be added in the components to ensure the old variable continues to work. Deprecated variables must be documented in the component documentation pages using the standard sentence: <i>This custom property is deprecated. Use `NEW VARIABLE` instead.</i> The `deprecated` tag is styled automatically.
