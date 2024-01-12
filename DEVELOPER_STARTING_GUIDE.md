# Developer Starting Guide

## Table of Contents

- [Developer Starting Guide](#developer-starting-guide)
  - [Table of Contents](#table-of-contents)
  - [Get Started](#get-started)
  - [SOLID Library Concepts](#solid-library-concepts)
    - [Web **Components** \& CSS **Styles**](#web-components--css-styles)
    - [Samples \& Patterns](#samples--patterns)
  - [Shoelace](#shoelace)
  - [Storybook](#storybook)
    - [Storybook Docs](#storybook-docs)
    - [Storybook Stories](#storybook-stories)
    - [Storybook Helpers](#storybook-helpers)
  - [Work Process](#work-process)
    - [Components](#components)
    - [Styles](#styles)
  - [Repository Overview](#repository-overview)
  - [Technologies](#technologies)
  - [SOLID Design Principles in Software Development](#solid-design-principles-in-software-development)

## Get Started

- Familiarize yourself with the [Principles of Solid Design System](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/), which serves as a reference for design guidelines, components, and patterns used in this project. Adhering to these principles will help maintain consistency and a cohesive user experience.

- Have a look at the [demo project](https://solid-design-system.github.io/solid-design-system-demo/) to get a better understanding of the design system and its components. You can even [install it locally and play around](https://github.com/solid-design-system/solid-design-system-demo) to explore its features and functionalities.

- Solid Components follows a monorepo structure with packages (e. g. `components`) managed by `pnpm` (which is a replacement for `npm`). Linting and Formatting is centralized at root level. Packages have to be run individually (e.g. `cd packages/components && pnpm dev` to start development server). Run `pnpm verify` at the root directory periodically, particularly, before pushing changes when a pull request is already opened.

## SOLID Library Concepts

### Web **Components** & CSS **Styles**

We are creating a library that comprises a lean combination of reusable [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) and [BEM format](https://css-tricks.com/bem-101/) CSS Classes that adhere to [Union design standards](https://www.figma.com/files/1075429990769806468/project/67503549/Solid-DS-Documentation?fuid=883643809929820461). Each have their own technology and purpose:

- **Styles (aka style-components)**: These are standalone CSS files. They don't provide any logic and are often non-interactive.
- **Components**: These are Web Components. They are often more complex than Styles, and could feature reactivity, state, multiple slots, properties, and more. They can be used in any framework.
  - [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) allow for easy element nesting ([Lit: Working with Shadow DOM](https://lit.dev/docs/components/shadow-dom/))
  - [parts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part) allow external manipulation of CSS.
  - [events](https://lit.dev/docs/components/events/) make critical information available outside of a component.

### Samples & Patterns

Alongside the documentation for Styles and Components, we also present Samples and Patterns. These differ in their scope:

- **Samples**: Tied to a specific component, these show its use in a particular context. They are added as "Sample" stories in the component's documentation.
- **Patterns**: More advanced, they demonstrate how to combine several components to solve a specific problem. They are added as stories in the "Patterns" section.

## Shoelace

The [Shoelace](https://shoelace.style/) web component library is our working inspiration. Components are copied directly from their [source code](https://github.com/shoelace-style/shoelace) and pasted in the `packages/components/src/_components` folder.

_There may have been updates since the files there were copied to our repo!_

Additionally we have taken things like the `FormControlController` directly from Shoelace and are slowly adapting them to our needs. If something is broken, missing, or working in an unexpected manner, there may be things that were missed / misconfigured / not yet addressed in our library.

A good rule of thumb: **when in doubt, refer to Shoelace!**

## Storybook

We present the library in a [Storybook](https://storybook.js.org/) with the following sections:

- **DOCS**: All .mdx documentation files.
- **COMPONENTS**: Web Components built with Lit JS. Often more complex than Styles, and could feature reactivity, state, multiple slots, properties, and more.
- **UTILITIES**:
- **STYLES**: These are standalone CSS files. They don't provide any logic and are often non-interactive.
- **PATTERN**: Demonstrate how to combine several components to solve a specific problem.

Each component / utility / style / pattern contains both [docs](https://storybook.js.org/addons/@storybook/addon-docs) and [stories](https://storybook.js.org/docs/writing-stories):

![image](https://github.com/solid-design-system/solid/assets/39494579/4121e031-b5a9-4b25-9784-310101945c4a)

### Storybook Docs

The [docs](https://storybook.js.org/addons/@storybook/addon-docs) serve as a quick interactive reference for developers. Comments at the top of each component file and above properties and methods are automatically compiled into the docs.

- `@property` decorators appear in the Storybook "ATTRIBUTES" section
- `@slot` decorators appear in the Storybook "SLOTS" section
- `@csspart` decorators appear in the Storybook "CSS SHADOW PARTS" section
- `@dependency` decorators appear in the Storybook "PROPERTIES" section under "dependencies".
- `@state` decorators appear in the Storybook "PROPERTIES" section. These should generally be made private so they do not appear in the docs.
- `@event` decorators appear in the Storybook "EVENTS" section

### Storybook Stories

The individual [stories](https://storybook.js.org/docs/writing-stories) should attempt to show the component in every possible visual state for quick visual testing with [Chromatic](https://www.chromatic.com/).

Ask yourself: _"How many visual states can this component or style have and in which combinations?"_ Attempt to write stories that concisely present these visuals states.

We have a limited number of "runs" meaning every time an active Pull Request branch is pushed to, we pay for Chromatic to analyze each story. Therefore, we try to limit the amount of stories written and avoid excessive pushes to active PR branches.

### Storybook Helpers

To make things easier, @mariohamann has authored some [Storybook Helpers](https://socket.dev/npm/package/@mariohamann/wc-storybook-helpers)

These will allow you to do things like present various properties along two axes for quick visual comparison.
![image](https://github.com/solid-design-system/solid/assets/39494579/b6b4c3c4-47b0-4497-a1f6-1778e3109c03)

## Work Process

### Components

If you are working on a component, follow the steps below:

1. Move the component folder from `packages/components/src/_components` to `packages/components/src/components` or run `$pnpm plop` to generate a blank component template.
2. **Open the component's Storybook Docs or default Story.** Ensure this is working properly. You'll want to have a place to observe the component as you work.
3. **Check the [Shoelace repo components folder](https://github.com/shoelace-style/shoelace/tree/next/src/components) for the latest published component code.** If you need to re-copy updated source code, ensure you _copy the whole component folder not just the component file_ (includes tests and styles) AND rename contained imports, variables, components etc... prefixed with `sl` to `sd` (e.g. `sl-component` becomes `sd-component` ) and likewise `Shoelace` to `Solid` (e.g. `ShoelaceFormControl` becomes `SolidFormControl`).
4. **Remove any properties from the copied Shoelace code that are irrelevant to our design** (e.g. `pill` is a re-occurring prop in Shoelace that alters a component's border radius, our designs do not offer this). Refer to the [Figma design documentation](https://www.figma.com/files/1075429990769806468/project/67503549/Solid-DS-Documentation?fuid=883643809929820461) for the component you are working on.
5. **Compare the old UI component to the newly adapted Shoelace component.** Refer to the [UI Component Library](https://component-library.dev.fe.union-investment.de/integration/storybook/index.html) to get an idea of what is being changed. This helps to see what is being lost or improved upon and should be summarized in the migration guide.
6. **Keep the technical props and features of the Shoelace component that feel relevant.** It is easier to decide which ones can be removed at the end.
7. **Convert the component styles to use a Tailwind first approach.** Shoelace does not use Tailwind and includes CSS files for every component. These should be carefully inspected and adapted. Work your way through the render() method of the component and remove CSS classes one by one, replacing them with a combination of Tailwind classes that implement our design. Keep in mind our designs may differ from the original styles applied by Shoelace, however, there are many small details (regarding `display`, `position`, or interaction states etc.) that should be carefully observed and adapted.
8. **Implement any missing behavior.** Once the Shoelace component has been reduced and re-styled with Tailwind, add any missing functions that may be necessary to meet the component's requirements.
9. **Write concise comments build up the auto-generated Storybook docs.** We rely primarily on the docs to communicate to the library users (developers). Write descriptive comments and organize properties semantically to the best of your ability.
10. **Write concise Storybook stories to cover all visual scenarios.** See the Storybook section above for further information. All stories can furthermore be observed together in the docs.
11. **Start with the jest tests from Shoelace.** Inside of `packages/components` you can test individual components with `pnpm test.component input` (where input is akin to the sd-input component). These will likely contain some misnamed properties or improper default values. Adapt them as needed to fit our use case.
12. **Add any tests that are needed for new component behavior.** Motto: “Test the behavior, not the implementation.” Write tests that verify your components meet the expected requirements and specifications, ensuring they function correctly from the user's perspective. Don’t get too tied up trying to test all the technical details.
13. **Author the full migration guide.** The migration guide should be placed in the `packages/components/src/docs/Migration` folder. The migration guide should be based on the migration guide template (`templates/migration-guide-template.mdx`) and be named by the old component name (e.g. ui-button.mdx).

**Run `pnpm verify` in the root directory before creating a PR.** This will check that all formatting, tests, and build processes are working correctly to allow the pipeline to run successfully.

### Styles

If you are working on a style, follow the steps below:
...

## Repository Overview

- `packages`
  - `components`
    - `src`
      - `_components`: components previously copied from Shoelace that have replace `sl` prefixes with `sd` prefixes
      - **`components`**: Primary folder containing our Web Components. Added as stories in the "COMPONENTS" section.
        - `accordion`: Lit JS web component that implements an accordion. The comments are automatically compiled into the Storybook docs and should be used for user clarification.
        - `accoridion.tests.ts`: Suite of jest tests for the accordion component. Critical for deployment and maintenance.
        - `accordion.stories.ts`: Collection of Storybook stories that are primarily used for visual testing with Chromatic. Any **samples** are added as stories here.
      - `docs`: all ".mdx" doc files that appear in the "DOCS" section of our Storybook
        - `migration`: Individual component migration guides
      - `internal`: A set of utilities that are reusable internally. Check here should you need something like a debounce, it may have already been implemented.
      - **`patterns`**: Demonstrate how to combine several components to solve a specific problem. Added as stories in the "PATTERNS" section.
      - **`styles`**: These are standalone CSS files. They don't provide any logic and are often non-interactive. Added as stories in the "STYLES" section.

## Technologies

- pnpm
- Web Components
- Lit JS
- Tailwind
- Storybook
- Jest
- Chromatic
- Vite
- PostCSS

//TBD: Do we keep them and apply them even thought the nome does not come from the SOLID principles?

## SOLID Design Principles in Software Development

[SOLID](https://www.freecodecamp.org/news/solid-design-principles-in-software-development/) is a set of five design principles that aid in designing robust, testable, extensible, and maintainable object-oriented software systems. Each principle addresses specific challenges in software development.

- **Single Responsibility Principle (SRP)**

  - A class, module, or function should have only one reason to change, i.e., it should perform a single responsibility.
  - Example: Separating classes for animal information, sound, and feeding.

- **Open-Closed Principle (OCP)**

  - Classes, modules, and functions should be open for extension but closed for modification.
  - Example: Using abstraction to add new animal types without modifying existing code.

- **Liskov Substitution Principle (LSP)**

  - Child classes must be substitutable for their parent classes, ensuring seamless replacement.
  - Example: Dog and Cat classes replacing the parent Animal class.

- **Interface Segregation Principle (ISP)**

  - Clients should not be forced to implement interfaces or methods they do not use.
  - Example: Breaking down large interfaces into smaller, specific ones.

- **Dependency Inversion Principle (DIP)**
  - High-level modules should not depend on low-level modules; both should depend on abstractions.
  - Example: Using abstractions to decouple high-level and low-level modules.

Implementing SOLID principles leads to a large but maintainable codebase, enabling developers to make changes without causing major issues. These principles contribute to bug-free, flexible, scalable, and reusable software systems.
