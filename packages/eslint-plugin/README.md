# @solid-design-sysmte/eslint-plugin

## Overview

This package is a custom ESLint plugin designed to extend linting capabilities in your project. It provides custom ESLint rules to the Solid Design System component library, helping to enforce coding standards and catch potential issues when working with the library.

## Features

- Custom linting rules specific to your project’s needs.
- Seamless integration with existing ESLint configurations.

## Installation

```bash
npm install --save-dev @solid-design-system/eslint-plugin
```

or with Yarn:

```bash
yarn add --dev @solid-design-system/eslint-plugin
```

## Configuration

1. Add the plugin to your ESLint configuration file:

```js
import sds, { parser as sdsParser } from '@solid-design-system/eslint-plugin';

export default [
  {
    files: ['**/*.{html,jsx}'],
    languageOptions: {
      parser: sdsParser
    },
    plugins: { 'solid-design-system': sds },
    rules: {
      'solid-design-system/rule-name': 'error'
    }
  }
];
```

2. Replace `rule-name` with the specific rule(s) you want to enable. Refer to the [Rules](docs/rules.md).

3. Run ESLint to see the custom rules in action:

```bash
npx eslint .
```

## Adding New Rules

1. Create a new file for the rule under the `src/rules` directory.
2. Implement the rule logic and export it.
3. Update the `index.ts` file in `src/rules` to include the new rule.
4. Add corresponding documentation under `docs/rules/`.
5. Create necessary tests to cover both valid and invalid scenarios.

## Testing

Run the tests to verify rule behavior:

```bash
npm test
```
