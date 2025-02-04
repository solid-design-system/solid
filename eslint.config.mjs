import example from './packages/eslint-plugin/dist/index.js';
import parser from '@html-eslint/parser';

export default [
  {
    files: ['**/*.{html,jsx}'],
    languageOptions: {
      parser
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { example },
    rules: {
      'example/enforce-foo-bar': 'error',
      'example/sd-button-icon-label-required': 'error',
      'example/no-inline-styles': 'error'
    }
  }
];
