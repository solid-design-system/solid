import { RuleTester } from '@typescript-eslint/rule-tester';

const tester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    }
  }
});

export default tester;
