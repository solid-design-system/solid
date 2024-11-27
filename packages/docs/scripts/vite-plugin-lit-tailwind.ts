import { createFilter } from '@rollup/pluginutils';
import { processCssTags } from '../../components/scripts/esbuild-plugin-lit-tailwind-and-minify';

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

      // eslint-disable-next-line consistent-return
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        code: await processCssTags(code)
      };
    }
  };
}
