# Contributing to Solid Components

## Table of Contents

- [Functionality & Integration](#functionality--integration)
- [How We Work](#how-we-work)
- [Development Guidelines](#development-guidelines)
- [Migration Guides](#migration-guides)
- [Pull Requests](#pull-requests)
  - [Commit Messages](#commit-messages)
  - [Squash and Merge Your Changes](#squash-and-merge-your-changes)
- [Quick Start](#quick-start)
  - [Helpful Commands](#helpful-commands)

## Functionality & Integration

- Familiarize yourself with the [Principles of Solid Design System](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/), which serves as a reference for design guidelines, components, and patterns used in this project. Adhering to these principles will help maintain consistency and a cohesive user experience.

- Have a look at the [demo project](https://solid-design-system.github.io/solid-design-system-demo/) to get a better understanding of the design system and its components. You can even [install it locally and play around](https://github.com/solid-design-system/solid-design-system-demo) to explore its features and functionalities.

## How We Work

- Development closely works with Design.
- We heavily utilize slots and parts with reduced business logic within individual components.
- We provide extensive documentation and examples for each component in Storybook. [Explore components and interact with them](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/).
- We provide End-to-End (E2E) tests with Playwright and Visual Regression Tests with Chromatic. The latter are automatically generated from the created Storybook stories.
- We optimize our components for accessibility.
- We don't mention the names of internal or external colleagues in issues or other documents hosted on GitHub, as our project is entirely public and can be accessed by anybody. Tagging/mentioning colleagues using their GitHub profiles is fine, as they decided to be visible on GitHub.

## Development Guidelines

- Solid Components follows a monorepo structure with packages, such as the `components` package.
- **IMPORTANT:** Make sure to have `pnpm` installed
- Centralized Linting and Formatting at the Root Level
- Packages have to be run individually (eg: `cd packages/components` → `pnpm dev` to start development server)
- Run `pnpm verify` at the root directory periodically, particularly, before pushing changes when a pull request is already opened.
- Every branch should be associated with a PR.
- Nearly all styles (colors, fonts, sizes etc.) are defined by our design team and provided for usage in our code via tokens (`packages/tokens/src/token.json`).
  Components should use these tokens instead of individual styles as much as possible. Only where the tokens do not provide a styling, component specific styles should be added inside the [component-name].ts file
- Components should be optimized for accessibility. Check the website of the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) for more information on accessibility.

  ### Guide on //TODOs

  Using `TODO` comments can be a convienient way to quickly record an identified issue or give future developers bug-related hints. The problem is that these comments are not tracked anywhere and might create a pool of "issues" that are not properly recorded. Therefore developers can use TODO comments but they should always include a reference to a ticket defining the issue.

  ```
  //Example

  // TODO: This test times out: https://github.com/solid-design-system/solid/issues/387
  ```

  This ensures clarity for future developers and avoids the accumulation of unresolved problems. While it's acceptable to comment out temporarily non-functional code (eg. tests that don't work under current conditions) along with a TODO, code that requires a rework should not be commented out. If the code is essential, please add it to a ticket that explains the problem.

## Adding Dependecies

When utilizing external dependencies, it's crucial to prioritize security. Before integrating a new package, research it online, check for security advisories and community feedback, and assess its maintenance status and compatibility.

We highly recommend to use websites e.g. https://nvd.nist.gov/vuln/search to check a dependency/package before adding them to the project.

## Migration Guides

Each new component in the Solid Design System, representing an old component from the Component Library, must have a migration guide. This helps developers to easily switch from the old component to the new one. The migration guide should be placed in the `packages/components/src/docs/Migration` folder. The migration guide should base on the [migration guide template](./templates/migration-guide-template.mdx) and be named by the old component name (e.g.`ui-button.mdx`).

## Pull Requests

### Commit Messages

We use Semantic Release to automate versioning and publishing based on commit messages, ensuring consistent release practices. Pull Request titles are especially important for semantic versioning, so follow these guidelines when writing them as well.

Use the following semantic versioning in your commit messages (`feat`, `fix`, `perf`, `docs`, `chore`, `ci`, `refactor`).

```
Commits with a breaking change will be associated with a major release.
Commits with type 'feat' will be associated with a minor release.
Commits with type 'fix' will be associated with a patch release.
Commits with type 'perf' will be associated with a patch release.
```

**Remark:** Always think from the perspective of the person using our packages/components – will the final distribution/bundle change? If so, then it's always `feat` `fix` or `perf` – if not, it's one of the others. Please reach out if you're unsure.

---

### Squash and Merge Your Changes

Always perform a Squash and Merge when merging. This keeps the Git history clean by combining your commits once you are done with a feature/component.

- Remember to include the appropriate prefix (e.g., feat: ✨) at the beginning of the squash message.
- Please rewrite or delete your additional commit message, if it's really long.
- Double-check if `[skip ci]` or similar was used anywhere as this may break our release flow.

### Tests

You can take a look at tests on Github. Users might be required to log in to [Chromatic](https://www.chromatic.com/). Make sure to login using your GitHub account to avoid any errors and access the checks related to the Pull Request.

## Quick Start

To get started with the code steps, follow these instructions:

Install `pnpm` package manager globally.

- https://pnpm.io/installation

```
pnpm i
cd packages/components
pnpm dev
```

These steps will install the necessary dependencies, navigate to the "packages/components" directory, and start the development server. You can now begin working on the components.

### Helpful Commands

```
$ pnpm fix           // fix all formatting and linting in repo
$ pnpm verify        // run tests and builds in repo
$ cd packages/components
  && pnpm dev        // start dev server
  && pnpm test       // run tests
```

## Working with feature branches

As stated in the [release-guide.md](./packages/components/docs/release-guide.md#feature-branch-release) document, the SDS offers using a feature branch deployment to test the implementation of a new feature in your own project environment.

> Note: This is only intended for testing purposes. **_Do not use it in production._**

The following limitations apply to feature branch deployments:

1. Feature branches are not stable, and their versions may conflict with other versions from other feature branches or the main branch. This may lead to unexpected behavior while using versioned components.
2. The feature must be completed and merged to the main branch of the SDS repository before it can be used in any other production environment. This means the feature cannot be added to the SDS library if it is not ready before the go-live date in your own project environment.
