# Tokens

The Solid Design System Tokens package provides a collection of design tokens for colors, typography and spacing. It ensures design consistency and collaboration between our designers and developers when building components for the Solid Design System.

Check out the [full documentation](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/) for detailed information.

### Handling tokens (for Figma maintainers ONLY)

Any changes in the token set in Token Studio plugin must be in a new branch branched from `main`.

![Screen Shot 2024-01-19 at 11 22 24](https://github.com/solid-design-system/solid/assets/118520877/4b7ce66c-a5c7-44f3-86d4-2ae0ab4a902b)

![Screen Shot 2024-01-19 at 11 23 08](https://github.com/solid-design-system/solid/assets/118520877/82e1fd88-ce70-4de9-931b-764e228f0d22)

> Note: If the token is related to Figma native style i.e.: color, choose "create styles" so Figma style and token are in sync

Then push with a commit message according to the development standards and create a PR ticket to hand over

![Screen Shot 2024-01-19 at 11 28 40](https://github.com/solid-design-system/solid/assets/118520877/6f7f1ca0-6b96-4ff6-bcab-cb66d9ef3adc)

![Screen Shot 2024-01-19 at 11 41 01](https://github.com/solid-design-system/solid/assets/118520877/56a27bce-5cd1-40ee-85b8-731196a66b66)

After front-end's approval and all tests are passed (quality gate, Chromatic tests etc.) hit `Squash and Merge` button, write a message (especially if there's any changes in token naming or deprecating note "BREAKING CHANGE: ..."
