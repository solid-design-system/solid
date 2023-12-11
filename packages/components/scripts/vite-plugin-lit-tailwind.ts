import { createFilter } from '@rollup/pluginutils';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

export default function litTailwindPlugin(options = {}) {
  // Default patterns
  const defaultInclude = [/\.ts$/, /\.js$/]; // Include .ts and .js files
  const defaultExclude = [/node_modules/]; // Exclude node_modules by default

  // Merge options with defaults. Options can override defaults.
  const includePatterns = options.include || defaultInclude;
  const excludePatterns = options.exclude || defaultExclude;

  console.log('includePatterns', includePatterns);
  console.log('excludePatterns', excludePatterns);
  // Create a filter using the specified include and exclude patterns
  const filter = createFilter(includePatterns, excludePatterns);

  return {
    name: 'lit-tailwind',
    async transform(code, id) {
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
          const result = await postcss([tailwindcss, autoprefixer])
            .process(cssContent, { from: undefined })
            .then(result => result.css);

          // Replace the original CSS in the code
          transformedCode = transformedCode.replace(fullMatch, `css\`${result}\``);
        } catch (error) {
          this.error(`PostCSS error: ${error}`);
        }
      }

      return {
        code: transformedCode,
        map: null // Provide source maps if necessary
      };
    }
  };
}
