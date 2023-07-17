# Contributing to Solid Components

## Table of Contents

- [Functionality & Integration](#functionality--integration)
- [How We Work](#how-we-work)
- [Development Guidelines](#development-guidelines)
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
- Extensive documentation and examples for each component can be found in Storybook. [Explore components and interact with them](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/).
- End-to-End (E2E) tests with Playwright and Visual Regression Tests with Chromatic. You can also run various tests by converting components into a story using Storybook.

## Development Guidelines

- Solid Components follows a monorepo structure with packages, such as the `components` package.
- **IMPORTANT:** Make sure to have `pnpm` installed
- Centralized Linting and Formatting at the Root Level
- Packages have to be run individually (eg: `cd packages/components` → `pnpm dev` to start development server)
- Run `pnpm verify` at the root directory periodically, particularly, before pushing changes when a pull request is already opened.
- Every branch should be associated with a PR.

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

**Remark:** Always think from the perspective of the person using our packages/components – will the final distribution/bundle change? If so, then it's always `feat` `fix` or `perf` – if not, it's one of the others. Please reach out if you're unsure.

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
$ cd components
  && pnpm dev        // start dev server
  && pnpm test       // run tests
```
