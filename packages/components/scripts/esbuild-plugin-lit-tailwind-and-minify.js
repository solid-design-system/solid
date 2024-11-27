import { minifyHTMLLiterals } from 'minify-html-literals';
import atImportPlugin from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs/promises';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting/index.js';

/**
 * Escapes tailwind special characters in a string and wraps it in a CSS template literal.
 *
 * @param source - The source string where the replacement occurs.
 * @param match - The substring to replace in the source string.
 * @param content - The string to be escaped and wrapped in a CSS template literal.
 * @returns The updated source string with the replacement applied.
 */
export async function processCssTags(source) {
  const cssTagRegex = /css`([^`]*)`/g;
  let match;

  while ((match = cssTagRegex.exec(source)) !== null) {
    const [fullMatch, cssContent] = match;

    try {
      const result = await postcss([
        atImportPlugin({ allowDuplicates: false }),
        tailwindcssNesting,
        tailwindcss,
        autoprefixer,
        cssnano
      ])
        .process(cssContent, { from: undefined })
        .then(result => result.css);

      source = source.replace(
        fullMatch,
        `css\`${result
          .replaceAll('\\', '\\\\') // Escape backslashes
          .replaceAll('`', '\\`')}\``
      );
    } catch (error) {
      console.error(`PostCSS error: ${error}`);
    }
  }

  return source;
}

export function litTailwindAndMinifyPlugin(options = {}) {
  const defaultInclude = /\.(ts|js)$/; // Include .ts and .js files
  const defaultExclude = /node_modules/; // Exclude node_modules by default

  const includePattern = options.include || defaultInclude;
  const excludePattern = options.exclude || defaultExclude;

  return {
    name: 'lit-tailwind-and-minify',
    setup(build) {
      build.onLoad({ filter: includePattern }, async args => {
        if (excludePattern.test(args.path)) {
          return;
        }

        // Read the file content
        let source = await fs.readFile(args.path, 'utf8');

        /**
         * Step 1: Process CSS in Lit `css` tagged template literals
         */

        processCssTags(source);

        /**
         * Step 2: Minify HTML literals
         *
         * 1. Iterates through each module in the input bundle.
         * 2. Prepares the module code for minification by replacing certain dynamic tags
         *    that would otherwise confuse the minification process.
         * 3. Minifies the HTML literals in the prepared code using the minify-html-literals library.
         * 4. If minification was successful, it reverses the replacements made during preparation
         *    to restore the original dynamic tags, and the minified code replaces the original code.
         * 5. If minification failed, it leaves the original code untouched.
         */
        const prepareCode = (codeToModify, reverse = false) => {
          const dynamicTags = [{ from: '${tag}', to: 'tag-to-be-replaced' }];
          dynamicTags.forEach(dynamicTag => {
            const from = reverse ? dynamicTag.to : dynamicTag.from;
            const to = reverse ? dynamicTag.from : dynamicTag.to;

            codeToModify = codeToModify.replaceAll(`<${from}`, `<${to}`);
            codeToModify = codeToModify.replaceAll(`</${from}`, `</${to}`);
          });
          return codeToModify;
        };

        const preparedCode = prepareCode(source, false);

        try {
          const minified = minifyHTMLLiterals(preparedCode, { fileName: args.path });

          if (minified) {
            source = prepareCode(minified.code, true);
          }
        } catch (error) {
          console.error(`Error minifying HTML literals in ${args.path}: ${error}`);
        }

        // Return the fully transformed code
        return { contents: source, loader: 'ts' };
      });
    }
  };
}
