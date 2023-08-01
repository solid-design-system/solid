/**
 * The `minifyHTMLLiteralsPlugin` function creates a Rollup plugin that minifies
 * HTML literals in your source code during the Rollup bundling process.
 *
 * This plugin:
 * 1. Iterates through each module in the input bundle.
 * 2. Prepares the module code for minification by replacing certain dynamic tags
 *    that would otherwise confuse the minification process.
 * 3. Minifies the HTML literals in the prepared code using the minify-html-literals library.
 * 4. If minification was successful, it reverses the replacements made during preparation
 *    to restore the original dynamic tags, and the minified code replaces the original code.
 * 5. If minification failed, it leaves the original code untouched.
 */

import { minifyHTMLLiterals } from 'minify-html-literals';

export default function minifyHTMLLiteralsPlugin() {
  return {
    name: 'minify-html-literals',
    transform(code: string, id: string) {
      // This function prepares code by replacing certain dynamic tags.
      // If reverse is true, the function will reverse the replacements.
      const prepareCode = (codeToModify: string, reverse = false) => {
        // eslint-disable-next-line no-template-curly-in-string
        const dynamicTags = [{ from: '${tag}', to: 'tag-to-be-replaced' }];

        // Replace all occurrences of each dynamic tag and return the modified code.
        dynamicTags.forEach(dynamicTag => {
          const from = reverse ? dynamicTag.to : dynamicTag.from;
          const to = reverse ? dynamicTag.from : dynamicTag.to;

          codeToModify = codeToModify.replaceAll(`<${from}`, `<${to}`);
          codeToModify = codeToModify.replaceAll(`</${from}`, `</${to}`);
        });

        return codeToModify; // return the modified code
      };

      // Prepare the code for minification by replacing certain dynamic tags.
      const preparedCode = prepareCode(code, false);

      // Minify the HTML literals in the prepared code.
      const minified = minifyHTMLLiterals(preparedCode, { fileName: id });

      // If minification was successful, prepare the minified code by reversing the replacements
      // made earlier. If minification failed (i.e., minified is null), return the original code.
      return minified ? prepareCode(minified.code, true) : code; // Check if minified is null or not
    }
  };
}
