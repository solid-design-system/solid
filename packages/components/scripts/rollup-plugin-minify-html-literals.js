import { minifyHTMLLiterals } from 'minify-html-literals';

// Create Rollup plugin
export default function minifyHTMLLiteralsPlugin() {
  return {
    name: 'minify-html-literals',
    transform(code, id) {
      const prepareCode = (codeToModify, reverse = false) => {
        const dynamicTags = [{ from: '${tag}', to: 'tag-to-be-replaced' }];

        dynamicTags.forEach(dynamicTag => {
          const from = reverse ? dynamicTag.to : dynamicTag.from;
          const to = reverse ? dynamicTag.from : dynamicTag.to;

          // replace all occurrences and return the modified code
          codeToModify = codeToModify.replaceAll(`<${from}`, `<${to}`);
          codeToModify = codeToModify.replaceAll(`</${from}`, `</${to}`);
        });

        return codeToModify; // return the modified code
      };

      const preparedCode = prepareCode(code, false);
      const minified = minifyHTMLLiterals(preparedCode, { fileName: id });

      return minified ? prepareCode(minified.code, true) : code; // Check if minified is null or not
    }
  };
}
