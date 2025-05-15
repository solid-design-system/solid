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

## Guidelines

### Component Documentation

All components have a documentation file in the `packages/docs/src/stories/packages/components` folder. It consists of the following sections.

- **Description:** All components have an introduction text describing the functionality starting with "Used to ...", feel free to use descriptions from [shoelace](https://shoelace.style) as inspiration.
- **Related Components:** After the introduction, the `Related components` are listed.
- **Related Templates:** After the `Related components` list, `Related templates` are listed.
  - If a template for the component exists, provide a link to the template page (e.g., Badge).
  - If the component is part of another component's template, link directly to the relevant section and name it accordingly (e.g., Tab with Badge).
- **Samples** (component's "visual" feature in {component}.stories.ts):
  - For each sample exists a single story with plain HTML/CSS/JS, that shows the feature.
  - Sample description:
    - The sample has a legend with one sentence describing the functionality and what is intended to. (e. g. Use the "open" attribute to ...). Feel free to use [shoelace](https://shoelace.style) as inspiration.
    - Ensure you add a period at the end of all sentences (with exception of bullets).
    - If variants or options are shown we should list them below.
      - If a bullet list is shown, use a colon in the sentence (e.g., "Use the size attribute to change a button’s size: ").
      - In bullet lists, do not use any kind of punctuation marks at the end of the sentence (e.g., lg (default)).
    - Always use the attribute or classes nomenclature used in code (e.g., instead of "large", use lg).
    - Always add (default) in front of the default variant/size/etc. (e.g., lg (default)).
    - If there is no attribute or class for the default use a simple sentence to present the default value (e.g., lg is the default value).
  - Sample content:
    - The samples should help emphasize what is being shown. If we are talking about "Inverted" components, it should have "Inverted" in the text.
    - In Storybook, the 1st sample shows the slots. In Figma, slots are only shown if no interaction is required. When interaction is required we use the slots in the next samples.
    - On the 1st sample we use the component name when possible (eg. Button) instead of (Default).
  - Samples order:
    - Default must be in the intro and interactive
    - Variants/Open
    - Size
    - Label
    - Orientation
    - Selected/Checked/Loading/Removable
    - Disabled
    - Inverted
    - Icon/Scrollbars/Hint/Description/Slots
    - Custom width/padding/styles
    - Alignments
    - Required/Invalid (in case required and invalid exist they must be below each other)

### Screenshot tests

- All screenshot tests are added in `{component}.test.stories.ts`.
- Create a combination screenshot story with all tests.

### Migration Guides

#### Component Library (`ui-...`)

If you are creating component, which replaces old `ui-...` components, a migration guide should be placed in the `packages/docs/src/stories/docs/migration` folder. The migration guide should be based on the migration guide template (`templates/migration-guide-template.mdx`) and be named by the old component name (e.g. `ui-button.mdx`).

#### Breaking Changes

If you are making a breaking change, create a new file in the `packages/docs/src/stories/packages/{PACKAGE-NAME}/Migration/from v{OLD-VERSION}` folder. Follow the naming convention and writing style of the existing migration guides in `packages/docs/src/stories/packages/components/Migration`.
