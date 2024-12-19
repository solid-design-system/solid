# Contributing

## Overview

We present the library in a [Storybook](https://storybook.js.org/) running on the **\*DOCS** package with the following sections:

- **DOCS**: All .mdx documentation files.
- **PACKAGES**: Information about each of the SDS packages.
- **COMPONENTS**: Web Components built with Lit JS. Often more complex than Styles, and could feature reactivity, state, multiple slots, properties, and more.
- **UTILITIES**: Web Components built with Lit JS, used as SDS-internal helper components. Technically necessary to build other components and generic enough to be used multiple times. Not officially part of the design system library and no respective component existing in Figma.
- **STYLES**: These are standalone CSS files. They don't provide any logic and are often non-interactive.
- **TEMPLATES**: Demonstrate how to combine several components to solve a specific problem.
- **LEGAL**: Contains legal information.

Each component/utility/style/template contains both [docs](https://storybook.js.org/addons/@storybook/addon-docs) and [stories](https://storybook.js.org/docs/writing-stories):

![image](https://github.com/solid-design-system/solid/assets/39494579/4121e031-b5a9-4b25-9784-310101945c4a)

## Migration Guides

## Component Library (`ui-...`)

If you are creating component, which replaces old `ui-...` components, a migration guide should be placed in the `packages/docs/src/stories/docs/migration` folder. The migration guide should be based on the migration guide template (`templates/migration-guide-template.mdx`) and be named by the old component name (e.g. `ui-button.mdx`).

## Breaking Changes

If you are making a breaking change, create a new file in the `packages/docs/src/stories/packages/{PACKAGE-NAME}/Migration/from v{OLD-VERSION}` folder. Follow the naming convention and writing style of the existing migration guides in `packages/docs/src/stories/packages/components/Migration`.
