import example from './packages/eslint-plugin/src/index.cjs';

export default [
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
  }
];
