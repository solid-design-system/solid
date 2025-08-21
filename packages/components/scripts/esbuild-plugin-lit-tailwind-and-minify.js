import { minifyHTMLLiterals } from 'minify-html-literals';
import atImportPlugin from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs/promises';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

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

    const css = `@reference './components/tailwind.css'; ${cssContent}`;

    try {
      const result = await postcss([atImportPlugin({ allowDuplicates: false }), tailwindcss, autoprefixer, cssnano])
        .process(css, { from: undefined })
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

        source = await processCssTags(source);

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

        /**
         * Extracts tag from binding e.g. ${tag} -> tag
         */
        const extractTagName = str => str.match(/<\/*\$\{([^}]+)\}/)?.[1] ?? null;
        const getPlaceholderTag = tag => `tag-to-replace--${tag}`;

        const tags = new Map();

        const replaceDynamicTags = code => {
          return (
            code
              // e.g. <${base} --> <tag-to-replace--base
              .replace(/<\$\{[^}]+\}?/g, match => {
                const tag = extractTagName(match);
                const placeholder = getPlaceholderTag(tag);
                tags.set(tag, placeholder);
                return `<${placeholder}`;
              })
              // e.g. </${base}> --> </tag-to-replace--base>
              .replace(/<\/\$\{[^}]+\}>?/g, match => {
                const tag = extractTagName(match);
                const placeholder = getPlaceholderTag(tag);
                tags.set(tag, placeholder);
                return `</${placeholder}>`;
              })
          );
        };

        const restoreDynamicTags = code => {
          for (const [original, replaced] of tags.entries()) {
            code = code
              .replace(new RegExp(`<${replaced}`, 'g'), `<\${${original}}`)
              .replace(new RegExp(`</${replaced}>`, 'g'), `</\${${original}}>`);
          }
          return code;
        };

        const preparedCode = replaceDynamicTags(source);

        try {
          const minified = minifyHTMLLiterals(preparedCode, { fileName: args.path });

          if (minified) {
            source = restoreDynamicTags(minified.code, true);
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
