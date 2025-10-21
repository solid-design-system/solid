import { compile } from '@tailwindcss/node';
import { minifyHTMLLiterals } from 'minify-html-literals';
import { readFile } from 'node:fs/promises';
import { Scanner } from '@tailwindcss/oxide';
import autoprefixer from 'autoprefixer';
import cssnested from 'postcss-nested';
import postcss from 'postcss';
import path from 'node:path';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';

export async function processTailwind(source, options = { standalone: false, storybook: false, from: undefined }) {
  const base = path.resolve(fileURLToPath(import.meta.url), '../../');

  const prepend = [
    `${options.standalone ? '@import' : '@reference'} 'tailwindcss/preflight';`,
    `${options.standalone ? '@import' : '@reference'} '${path.resolve(base, '../tokens/themes/tailwind.css')}';`
  ];

  if (options.storybook) {
    prepend.push(`@source '${path.resolve(base, '../docs/src')}';`);

    /* Safelist */
    prepend.push(`@source inline('w-{1.5}');`);
  }

  const css = `${prepend.join('\n')} ${source}`;

  try {
    /**
     * Step 1: Compile the css content
     */
    const compiler = await compile(css, {
      base: options.from ? options.from : base,
      onDependency: () => {}
    });

    let candidates = [];
    if (compiler.features > 0) {
      let sources = [...compiler.sources];
      if (compiler.root === null) {
        sources.push({ base, pattern: '**/*', negated: false });
      }
      let scanner = new Scanner({
        sources
      });
      candidates = scanner.scan();
    }

    const compiled = compiler.build(candidates);

    /**
     * Step 2: Use PostCSS to resolve nested CSS, autoprefix and minify
     */
    const plugins = [cssnested, tailwindcss, autoprefixer];

    let result = await postcss(plugins)
      .process(compiled, { from: undefined })
      .then(r => r.css);

    return result;
  } catch (error) {
    console.error(`PostCSS error: ${error}`);
    return 'postcss error: ' + error;
  }
}

/**
 * Escapes tailwind special characters in a string and wraps it in a CSS template literal.
 *
 * @param source - The source string where the replacement occurs.
 * @returns The updated source string with the replacement applied.
 */
export async function processCssTags(source) {
  const cssTagRegex = /css`([^`]*)`/g;
  let match;

  while ((match = cssTagRegex.exec(source)) !== null) {
    const [fullMatch, cssContent] = match;

    const result = await processTailwind(cssContent, {
      standalone: source.includes('default class SolidElement')
    });
    source = source.replace(
      fullMatch,
      `css\`${result
        .replaceAll('\\', '\\\\') // Escape backslashes
        .replaceAll('`', '\\`')}\``
    );
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
    async setup(build) {
      build.onLoad({ filter: includePattern }, async ({ path }) => {
        if (excludePattern.test(path)) {
          return;
        }

        let source = await readFile(path, 'utf8');

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
          const minified = minifyHTMLLiterals(preparedCode, { fileName: path });

          if (minified) {
            source = restoreDynamicTags(minified.code, true);
          }
        } catch (error) {
          console.error(`Error minifying HTML literals in ${path}: ${error}`);
        }

        // Return the fully transformed code
        return { contents: source, loader: 'ts' };
      });
    }
  };
}
