[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

# Solid Design System Monorepo

Monorepo for Union Investment's Solid Design System.

## Packages

**1. Solid**

The solid package contains all the components that make up the Solid Design System.

**2. Placeholder**

The placeholder package provides placeholder images that can be used alongside the Solid Design System components during development and prototyping.

**3. Tokens**

The tokens package contains all the design tokens used in the Solid Design System.

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
```

## Contributing

We welcome contributions from the community! If you'd like to contribute to any of the packages or improve the Solid Design System, please follow our [contribution guidelines](CONTRIBUTING.md) provided in this repository.

### Handling tokens (for maintainers)

Any changes in the token set in Token Studio plugin must be in a new branch.

![Screen Shot 2024-01-19 at 11 22 24](https://github.com/solid-design-system/solid/assets/118520877/4b7ce66c-a5c7-44f3-86d4-2ae0ab4a902b)

![Screen Shot 2024-01-19 at 11 23 08](https://github.com/solid-design-system/solid/assets/118520877/82e1fd88-ce70-4de9-931b-764e228f0d22)

Note: If the token is related to Figma native style i.e.: color, choose "create styles" so Figma style and token are in sync

Then push with a commit message according to the development standards and create a PR ticket to hand over

![Screen Shot 2024-01-19 at 11 28 40](https://github.com/solid-design-system/solid/assets/118520877/6f7f1ca0-6b96-4ff6-bcab-cb66d9ef3adc)

![Screen Shot 2024-01-19 at 11 41 01](https://github.com/solid-design-system/solid/assets/118520877/56a27bce-5cd1-40ee-85b8-731196a66b66)

## License

This repository is licensed under MIT, except the fonts, icons and images, which are licensed under their respective licenses. Read the [full license](./packages/components/LICENSE.md) for more information.
