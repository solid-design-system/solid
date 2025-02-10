# @solid-design-system/eslint-plugin

## Overview

This package is a custom ESLint plugin designed to extend linting capabilities in your project. It provides custom ESLint rules to the Solid Design System component library, helping to enforce coding standards and catch potential issues when working with the library.

## Installation

```bash
npm install --save-dev @solid-design-system/eslint-plugin
```

or with Yarn:

```bash
yarn add --dev @solid-design-system/eslint-plugin
```

## Configuration

### Minimal configuration

```js
import sds from '@solid-design-system/eslint-plugin';

export default [
  {
    ...sds.configs.recommended,
    files: ['**/*.{html,jsx}']
  }
];
```

### Recommended rules with some customization

```js
import sds from '@solid-design-system/eslint-plugin';

export default [
  {
    ...sds.configs.recommended,
    files: ['**/*.{html,jsx}'],
    rules: {
      ...sds.configs.recommended.rules, // Must be defined. If not, all recommended rules will be lost
      '@solid-design-system/required-sd-icon-label': 'error'
    }
  }
];
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
