import { createFilter } from '@rollup/pluginutils';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting';

interface LitTailwindPluginOptions {
  include?: RegExp[] | string[];
  exclude?: RegExp[] | string[];
}

export default function litTailwindPlugin(options: LitTailwindPluginOptions = {}) {
  // Default patterns
  const defaultInclude = [/\.ts$/, /\.js$/]; // Include .ts and .js files
  const defaultExclude = [/node_modules/]; // Exclude node_modules by default

  // Merge options with defaults. Options can override defaults.
  const includePatterns = options.include || defaultInclude;
  const excludePatterns = options.exclude || defaultExclude;

  // Create a filter using the specified include and exclude patterns
  const filter = createFilter(includePatterns, excludePatterns);

  return {
    name: 'lit-tailwind',
    async transform(code: string, id: string) {
      if (!filter(id)) {
        return;
      }

      // Look for Lit's `css` tagged template literals
      const cssTagRegex = /css`([^`]*)`/g;
      let match;
      let transformedCode = code;

      while ((match = cssTagRegex.exec(code)) !== null) {
        const [fullMatch, cssContent] = match;

        // Process the CSS with PostCSS
        try {
          const result = await postcss([tailwindcssNesting, tailwindcss, autoprefixer])
            .process(cssContent, { from: undefined })
            .then(result => result.css);

          // Replace the original CSS in the code
          transformedCode = transformedCode.replace(fullMatch, `css\`${result}\``);
        } catch (error: unknown) {
          console.error(`PostCSS error: ${error as string}`);
        }
      }

      // eslint-disable-next-line consistent-return
      return {
        code: transformedCode
      };
    }
  };
}
