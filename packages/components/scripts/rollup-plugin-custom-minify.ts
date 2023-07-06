/**
 * The `minifyEsLibPlugin` function creates a Rollup plugin that minifies .js files
 * and calculates their gzipped sizes during the bundle generation phase.
 * This plugin is used to ensure proper minification and size calculation,
 * which are tasks Vite is not handling as expected in our use-case.
 *
 * This plugin:
 * 1. Iterates through each file in the generated bundle.
 * 2. If a file is a JavaScript chunk, it minifies the file using the Terser library.
 * 3. The minified code replaces the original code in the bundle.
 * 4. The gzipped size of the minified code is also calculated and stored.
 */

import { gzipSizeSync } from 'gzip-size';
import { minify } from 'terser';

export default function minifyEsLibPlugin(options = {}) {
  return {
    name: 'rollup-plugin-minify',
    async generateBundle(_outputOptions: any, bundle: any) {
      for (const fileName in bundle) {
        if (bundle[fileName].type === 'chunk' && fileName.endsWith('.js')) {
          const code = bundle[fileName].code;
          try {
            const minified = await minify(code, options);
            bundle[fileName].code = minified.code;
            bundle[fileName].gzippedSize = gzipSizeSync(minified.code!);
          } catch (error) {
            console.error(`Error minifying ${fileName}:`, error);
          }
        }
      }
    }
  };
}
