import { RuleTester } from 'eslint';
import parser from '@html-eslint/parser';

const tester = new RuleTester({
  languageOptions: {
    parser
  }
});

export default tester;
