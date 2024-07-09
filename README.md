[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

# Solid Design System Monorepo

Monorepo for Union Investment's Solid Design System.

## Packages

**1. Solid**

The solid package contains all the components that make up the Solid Design System.

**2. Placeholder**

The placeholder package provides placeholder images that can be used alongside the Solid Design System components during development and prototyping.

**3. Tokens**

The tokens package contains all the design tokens used in the Solid Design System.

**4. Theming**
The theming package provides a color calculation service for the Solid Design System.

## Quick Start

To get started with the code steps, follow these instructions:

We use `pnpm` package manager, so make sure to have it installed globally before you start.

- https://pnpm.io/installation

```
pnpm i
cd packages/components
pnpm dev
```

These steps will install the necessary dependencies, navigate to the "packages/components" directory, and start the development server. You can now take a look at our existing components or begin working on new ones.

### Helpful Commands

```
$ pnpm fix           // fix all formatting and linting in repo
$ pnpm verify        // run tests and builds in repo
$ cd packages/components
  && pnpm dev        // start dev server
  && pnpm test       // run tests
  && pnpm test.watch // run tests in watch mode
  && pnpm test.single [test-file-name] // run a specific test file
```

## Contributing

We welcome contributions from the community! If you'd like to contribute to any of the packages or improve the Solid Design System, please follow our [contribution guidelines](CONTRIBUTING.md) provided in this repository.

## License

This repository is licensed under MIT, except the fonts, icons and images, which are licensed under their respective licenses. Read the [full license](./packages/components/LICENSE.md) for more information.
