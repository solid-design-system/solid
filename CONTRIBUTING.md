# Table of Contents
- [Contributing to Solid Components](#contributing-to-solid-components)
  - [Before You Get Started](#before-you-get-started)
  - [How We Work](#how-we-work)
  - [Development Guidelines](#development-guidelines)
  - [Merging](#merging)
  - [Quick Start](#quick-start)
    - [Helpful Commands](#helpful-commands)
   
    
# Contributing to Solid Components
Solid Components is a comprehensive and organized set of reusable components and guidelines that ensure consistent and efficient creation of user interfaces, fostering brand coherence and enhancing user satisfaction.

## Before You Get Started
* Familiarize yourself with the [Principles of Solid Design System](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/), which serves as a reference for design guidelines, components, and patterns used in this project. Adhering to these principles will help maintain consistency and a cohesive user experience.

* Have a look at the [demo project](https://solid-design-system.github.io/solid-design-system-demo/) to get a better understanding of the design system and its components. You can even [install it locally and play around](https://github.com/solid-design-system/solid-design-system-demo) to explore its features and functionalities.


## How We Work
* Development closely works with Design.
* We heavily utilize slots and parts with reduced business logic within individual components.
* Extensive documentation and examples for each component can be found in Storybook. [Explore components and interact with them](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/).
* End-to-End (E2E) tests with Playwright and visual regression tests are with Chromatic. Each Story in Storybook serves as a test case.

## Development Guidelines
*  Solid Components follows a monorepo structure with packages, such as the `components` package.
*  **IMPORTANT:** Make sure to have `pnpm` installed
*  Centralized Linting and Formatting at the Root Level
*  Packages have to be run individually (eg: `cd packages/components` → `pnpm dev` to start development server)
*  Run `pnpm verify` at the root directory periodically, particularly, before pushing changes when a pull request is already opened.
*  Every branch should be associated with a PR.
*  You can take a look at all the checks on [Chromatic](https://www.chromatic.com/) (you may need to log in to access tests and comments).


## Merging
We use Semantic Release to helps ensure consistent versioning and release practices. It helps streamline the release process by automating the versioning and publishing of software releases **based on commit messages**. <br/>
Use the follwoing semantic versioning in your commit messages (`feat`, `fix`, `perf`, `docs`, `chore`, `ci`, `refactor`).

```
Commits with a breaking change will be associated with a major release.
Commits with type 'feat' will be associated with a minor release.
Commits with type 'fix' will be associated with a patch release.
Commits with type 'perf' will be associated with a patch release.
```


<b>Remark: </b> Always think from the perspective of the people using our packages/components – will the final dist/bundle change? it's always `feat` `fix` or `perf` – if not, it's one of the others. Please reach out, if you're unsure. <br/>

Always do Squash and Merge, before merging and remember using `feat: ✨ ` or whatever at the beginning of the squash message. Please rewrite or delete your additional commit message, if it's really long. Definitely check, if anywhere [skip ci] or similar was used, as this may break our release flow.


## Quick Start
To get started with the code steps, follow these instructions:


Install `pnpm` package manager globally.
* https://pnpm.io/installation
```
pnpm dev
pnpm i
cd packages/components
```

These steps will install the necessary dependencies, navigate to the "packages/components" directory, and start the development server. You can now begin working on the components.

### Helpful Commands
```
$ pnpm fix           // fix all formatting and linting in repo
$ pnpm verify        // run tests and builds in repo
$ cd components
  && pnpm dev        // start dev server
  && pnpm test       // run tests
```
