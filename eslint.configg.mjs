import { fileURLToPath } from 'node:url';
import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import _import from 'eslint-plugin-import';
import chaiExpect from 'eslint-plugin-chai-expect';
import chaiFriendly from 'eslint-plugin-chai-friendly';
import example from './packages/eslint-plugin/src/index.cjs';
import globals from 'globals';
import js from '@eslint/js';
import lit from 'eslint-plugin-lit';
import litA11Y from 'eslint-plugin-lit-a11y';
import path from 'node:path';
import sortImportsEs6Autofix from 'eslint-plugin-sort-imports-es6-autofix';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import wc from 'eslint-plugin-wc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      '**/.cache',
      '**/dist',
      '**/node_modules',
      'packages/components/cdn',
      'packages/components/cdn-versioned',
      'packages/components/custom-elements-manifest.config.js',
      'packages/components/declaration.d.ts',
      'packages/components/dist',
      'packages/components/dist-versioned',
      'packages/components/examples',
      'packages/components/scripts',
      'packages/components/src/_components',
      'packages/components/src/react',
      'packages/docs/custom-elements-manifest.config.ts',
      'packages/docs/.storybook',
      'packages/docs/scripts',
      'packages/docs/src/stories',
      'packages/placeholders/types/',
      'packages/theming/types/'
    ]
  },

  {
    files: ['**/example.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest'
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { example },
    rules: {
      'example/enforce-foo-bar': 'error'
    }
  },

  ...compat.extends(
    'eslint:recommended',
    'plugin:wc/recommended',
    'plugin:wc/best-practice',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      wc,
      lit,
      'lit-a11y': litA11Y,
      'chai-expect': chaiExpect,
      'chai-friendly': chaiFriendly,
      import: fixupPluginRules(_import),
      'sort-imports-es6-autofix': sortImportsEs6Autofix
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      },

      ecmaVersion: 2023,
      sourceType: 'module'
    },

    rules: {
      'no-template-curly-in-string': 'error',
      'array-callback-return': 'error',
      'comma-dangle': 'off',
      'consistent-return': 'error',
      curly: 'off',
      'default-param-last': 'error',
      eqeqeq: 'error',
      'lit-a11y/click-events-have-key-events': 'off',
      'no-constructor-return': 'error',
      'no-empty-function': 'warn',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-floating-decimal': 'error',
      'no-implicit-coercion': 'off',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-return-assign': 'warn',
      'no-script-url': 'error',
      'no-self-compare': 'warn',
      'no-sequences': 'warn',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'warn',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'warn',
      'prefer-promise-reject-errors': 'error',
      radix: 'off',
      'require-await': 'error',
      'wrap-iife': ['warn', 'inside'],
      'no-shadow': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-multi-assign': 'warn',
      'no-new-object': 'error',
      'no-useless-computed-key': 'warn',
      'no-useless-rename': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      'prefer-numeric-literals': 'warn',
      'prefer-object-spread': 'warn',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'off',
      'no-else-return': 'off',
      'func-names': ['warn', 'never'],
      'one-var': ['warn', 'never'],
      'operator-assignment': 'warn',
      'prefer-arrow-callback': 'warn',

      'no-restricted-imports': [
        'warn',
        {
          paths: [
            {
              name: '.',
              message: 'Usage of local index imports is not allowed.'
            },
            {
              name: './index',
              message: 'Import from the source file instead.'
            }
          ]
        }
      ],

      'import/no-duplicates': 'warn',

      'sort-imports-es6-autofix/sort-imports-es6': [
        2,
        {
          ignoreCase: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }
      ],

      'wc/guard-super-call': 'off'
    }
  },
  ...compat
    .extends(
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    )
    .map(config => ({
      ...config,
      files: ['**/*.ts']
    })),
  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: ['./packages/*/tsconfig.json']
      }
    },

    rules: {
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',
      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-throw-literal': 'off',
      'no-unused-expressions': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-floating-promises': 'off',

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false
        }
      ],

      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never'
        }
      ],

      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-ts-expect-error': 'warn',
      '@typescript-eslint/prefer-return-this-type': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/unified-signatures': 'warn',
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/method-signature-style': 'warn',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lit/decorators.js',
              importNames: ['customElement'],
              message: "Use import 'customElement' from '../../../src/internal/register-custom-element' instead."
            },
            {
              name: 'lit/decorators/custom-element.js',
              importNames: ['customElement'],
              message: "Use import 'customElement' from '../../../src/internal/register-custom-element' instead."
            }
          ]
        }
      ],

      'lit-a11y/no-aria-slot': 'off'
    }
  },
  ...compat
    .extends(
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    )
    .map(config => ({
      ...config,
      files: ['**/*.stories.ts']
    })),
  {
    files: ['**/*.stories.ts'],

    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },
  ...compat.extends('plugin:chai-expect/recommended', 'plugin:chai-friendly/recommended').map(config => ({
    ...config,
    files: ['**/*.test.ts']
  })),
  {
    files: ['**/*.test.ts'],

    rules: {
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },
  ...compat
    .extends(
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    )
    .map(config => ({
      ...config,
      files: ['packages/docs/**/*.ts']
    })),
  {
    files: ['packages/docs/**/*.ts'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: ['./packages/docs/tsconfig.json']
      }
    },

    rules: {
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',
      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-throw-literal': 'off',
      'no-unused-expressions': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-floating-promises': 'off',

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false
        }
      ],

      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never'
        }
      ],

      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-ts-expect-error': 'warn',
      '@typescript-eslint/prefer-return-this-type': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/unified-signatures': 'warn',
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/method-signature-style': 'warn',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lit/decorators.js',
              importNames: ['customElement'],
              message: "Use import 'customElement' from '../../../src/internal/register-custom-element' instead."
            },
            {
              name: 'lit/decorators/custom-element.js',
              importNames: ['customElement'],
              message: "Use import 'customElement' from '../../../src/internal/register-custom-element' instead."
            }
          ]
        }
      ],

      'lit-a11y/no-aria-slot': 'off'
    }
  }
];
