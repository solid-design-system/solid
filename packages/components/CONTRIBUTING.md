# Contributing

## Quick Start

If you are working on a component, follow the steps below:

1. run `cd packages/components && pnpm plop` to generate a new component. This creates:
   1. A new TS file: `./packages/components/src/components/*/*.ts`
   2. A new Test file: `./packages/components/src/components/*/*.test.ts`
   3. A new documentation story: `./packages/docs/src/stories/components/*/*.stories.ts`
   4. A new test story: `./packages/docs/src/stories/components/*/*.test.stories.ts`
   5. An update to `./packages/components/src/solid-components.ts` to include the new component.
2. Run `cd packages/docs && pnpm dev` to start the development server.
3. Run `pnpm verify` from root before PRs to ensure everything works.

### CSS inside components

We ensure consistency and try to minimize bundle size by following these rules:

- Use TailwindCSS classes (which are connected to design tokens) for all Solid components.
- Convert BEM-style CSS to TailwindCSS utility classes where possible.
- Utilize IDs or part selectors for any custom CSS needs.
- Use `@apply` inside `css` tagged template literals to generate CSS, but do not use arbitrary values like `mt-[var(--spacing-xxl)]` there (!), as this increases the bundle size of the main TailwindCSS file. Add those custom values as plain CSS outside the `@apply` directive

#### Consistency with Figma

In Figma, some design variables are used differently than in code. For example, Figma might use a variable like `icon-fill-color`, whereas in code, the corresponding property could be `background-color`.

To maintain consistency with Figma’s naming conventions, certain styles in the codebase directly assign CSS variables to properties instead of relying on Tailwind utilities.

```css
background-color: var(--sd-color-icon-fill-neutral-800, var(--sd-color-neutral-800));
```

### Importing other components

When you use a component inside another component, you need to import it in the component file to ensure stability with Cherry Picking. E. g. if you use the `sd-icon` component inside your component, you need to import it like this:

```ts
import '../icon/icon';
```

Remember to add `@dependency sd-icon` to your JSDoc comment so that the component is included in the documentation (see [Documentation](#documentation)).

### Reflecting properties

Properties should always be reflected, the exceptions are rich data properties (eg. Array, Object...) or properties that require to be frequently updated (eg. currentDuration in a video).

```
  @property({ type: Boolean, reflect: true }) animated = false;
```

This is needed so that all selected properties are displayed in the DOM. This is specifically required when web components are used within React 19 but also to make developer experience more predictable.

### Icons inside components

Maintain component icons in the [Figma Theming Icon Asset Library](https://www.figma.com/design/hXMcJwfG2u2K6jy7kjtrd2?node-id=0-1). UI internal icons and status assets are bundled; VB, BB and SP internal icons are published through CELUM.

#### Update Bundled Icons

1. Run **Update Bundled Icons** on the branch to update. If icons changed, the action opens or updates a draft PR with a patch changeset; it does not create a CELUM ZIP.
2. Review icons in UI light/dark themes and in the components that use them.
3. Check the changeset and required PR checks before merging. If checks did not start automatically for the bot-created PR, arrange verification before merging.

Repository setup: configure the `FIGMA_TOKEN` Actions secret and allow Actions to create pull requests.

#### Add an Internal Icon

1. Add an icon only when a component needs it, and provide UI, VB, BB and SP variants in Figma.
2. Add its runtime name to `internalNames` in `scripts/figma/config.js`. If the Figma name differs, add an entry to `figmaInternalToCode` with the Figma name as key and runtime name as value. All config maps follow this direction. Request review for allowlist changes.
3. Run **Update Bundled Icons** and **Download CELUM Icons (ZIP)** to deliver the bundled and theme variants separately.

Use `sd-icon` with `library="_internal"` and the approved name. Add an accessible `label` when needed.

#### Download CELUM Icons (ZIP)

1. Run **Download CELUM Icons (ZIP)**. This action never changes component source or creates a PR.
2. Use **Download the ZIP** in the run summary, or download the `solid-celum-icons` artifact within 14 days.
3. Review the icons and `report.json`, then upload the `vb`, `bbbank` and `sparda` folders to CELUM manually.

The ZIP excludes the public UI catalog (`default`) and bundled UI/status icons. Public icon collections missing VB, BB or SP variants are skipped automatically; warnings and `report.json` list the missing themes. Complete those variants in Figma and rerun the download to include them. Missing required internal icons stop the export.

Downloading the ZIP does not publish to the CDN. The external CELUM pipeline publishes once per week and is outside the Solid team's responsibility.

#### Local Export

Set `FIGMA_TOKEN` in the ignored `packages/components/.env`, using `.env.example` as a reference. The token needs file access and `file_content:read`; keep it out of commits and logs. Use the repository's Node.js and pnpm versions.

Run from the repository root:

```sh
pnpm --dir packages/components fetch:figma --target=bundled --dry-run
pnpm --dir packages/components fetch:figma --target=bundled
pnpm --dir packages/components fetch:figma --target=celum
```

Bundled export updates the source libraries; CELUM export writes only to `packages/components/.figma-icons-celum/celum/`. Never commit downloaded SVGs or ZIPs. For local bundled changes, add a patch changeset and run `pnpm verify` before submitting a PR.

If export fails, resolve the missing Figma variants reported in the log, check token access for `401`/`403`, or retry later for `429` and temporary server errors.

### Adapting a Shoelace Component

The [Shoelace](https://shoelace.style/) web component library is our working inspiration. Components are copied directly from their [source code](https://github.com/shoelace-style/shoelace) and pasted in the `packages/components/src/_components` folder.

_There may have been updates since the files there were copied to our repo!_ In those instances, copy the updated component folder from the Shoelace repository and use that as a starting point.

Additionally we have taken things like the `FormControlController` directly from Shoelace and are slowly adapting them to our needs. If something is broken, missing, or working in an unexpected manner, there may be things that were missed / misconfigured / not yet addressed in our library.

A good rule of thumb: **when in doubt, refer to Shoelace!**

1.  **Check the [Shoelace repo components folder](https://github.com/shoelace-style/shoelace/tree/next/src/components) for the latest published component code.** If you need to re-copy updated source code, ensure you _copy the whole component folder not just the component file_ (includes tests and styles) AND rename contained imports, variables, components etc... prefixed with `sl` to `sd` (e.g. `sl-component` becomes `sd-component` ) and likewise `Shoelace` to `Solid` (e.g. `ShoelaceFormControl` becomes `SolidFormControl`).
2.  **Remove any properties from the copied Shoelace code that are irrelevant to our design** (e.g. `pill` is a re-occurring prop in Shoelace that alters a component's border radius, our designs do not offer this). Refer to the [Figma design documentation](https://www.figma.com/files/1075429990769806468/project/67503549/Solid-DS-Documentation?fuid=883643809929820461) for the component you are working on.
3.  **Compare the old UI component to the newly adapted Shoelace component.** Refer to the [UI Component Library](https://component-library.dev.fe.union-investment.de/integration/storybook/index.html) to get an idea of what is being changed. This helps to see what is being lost or improved upon and should be summarized in the migration guide.
4.  **Keep the technical props and features of the Shoelace component that feel relevant.** It is easier to decide which ones can be removed at the end.
5.  **Convert the component styles to use a Tailwind first approach.** Shoelace does not use Tailwind and includes CSS files for every component. These should be carefully inspected and adapted. Work your way through the render() method of the component and remove CSS classes one by one, replacing them with a combination of Tailwind classes that implement our design. Keep in mind our designs may differ from the original styles applied by Shoelace, however, there are many small details (regarding `display`, `position`, or interaction states etc.) that should be carefully observed and adapted.
6.  **Implement any missing behavior.** Once the Shoelace component has been reduced and re-styled with Tailwind, add any missing functions that may be necessary to meet the component's requirements.
7.  **Start with the jest tests from Shoelace.** Inside of `packages/components` you can test individual components with `pnpm test.component input` (where input is akin to the sd-input component). These will likely contain some misnamed properties or improper default values. Adapt them as needed to fit our use case.

## Documentation

The [docs](https://storybook.js.org/addons/@storybook/addon-docs) serve as a quick interactive reference for developers. Comments at the top of each component file and above properties and methods are automatically compiled into the docs.

We rely a lot on inline docs to communicate to the library users (developers). Write descriptive comments and organize properties semantically to the best of your ability.

- `@property` decorators appear in the Storybook "ATTRIBUTES" section
- `@slot` decorators appear in the Storybook "SLOTS" section
- `@csspart` decorators appear in the Storybook "CSS SHADOW PARTS" section
- `@dependency` decorators appear in the Storybook "PROPERTIES" section under "dependencies".
- `@state` decorators appear in the Storybook "PROPERTIES" section. These should generally be marked with the JSDoc annotation `/** @internal */` so they do not appear in the docs.
- `@event` decorators appear in the Storybook "EVENTS" section

## Testing

### Visual Regression Testing

Ensure to edit your test stories in `./packages/docs/src/stories/styles/*.test.stories.ts` to include all variants of your module. These are used for Visual Regression Testing on Chromatic.

Ask yourself: _"How many visual states can this component or style have and in which combinations?"_ Attempt to write stories that concisely present these visuals states.

Have a look at the existing test stories to familiarize yourself how to create screenshot tests that create stories depending on the variants of your module.

![image](https://github.com/solid-design-system/solid/assets/39494579/b6b4c3c4-47b0-4497-a1f6-1778e3109c03)

### E2E Testing

Add any tests that are needed for new component behavior as a Playwright test. Motto: “Test the behavior, not the implementation.” Write tests that verify your components meet the expected requirements and specifications, ensuring they function correctly from the user's perspective. Don’t get too tied up trying to test all the technical details.
