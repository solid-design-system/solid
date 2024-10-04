import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs/promises';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting/index.js';

export function litTailwindPlugin(options = {}) {
  // Default patterns
  const defaultInclude = /\.(ts|js)$/; // Include .ts and .js files
  const defaultExclude = /node_modules/; // Exclude node_modules by default

  // Merge options with defaults. Options can override defaults.
  const includePattern = options.include || defaultInclude;
  const excludePattern = options.exclude || defaultExclude;

  return {
    name: 'lit-tailwind',
    setup(build) {
      // Intercept JavaScript/TypeScript files
      build.onLoad({ filter: includePattern }, async args => {
        // Check if the file should be processed based on the exclude pattern
        if (excludePattern.test(args.path)) {
          return;
        }

        // Read the file content
        const source = await fs.readFile(args.path, 'utf8');

        // Look for Lit's `css` tagged template literals
        const cssTagRegex = /css`([^`]*)`/g;
        let match;
        let transformedCode = source;

        while ((match = cssTagRegex.exec(source)) !== null) {
          const [fullMatch, cssContent] = match;

          // Process the CSS with PostCSS
          try {
            const result = await postcss([tailwindcssNesting, tailwindcss, autoprefixer, cssnano]).process(cssContent, {
              from: undefined
            });

            // Replace the original CSS in the code
            transformedCode = transformedCode.replace(fullMatch, `css\`${result.css}\``);
          } catch (error) {
            console.error(`PostCSS error: ${error}`);
          }
        }

        // Return the transformed code
        return { contents: transformedCode, loader: 'ts' };
      });
    }
  };
}
