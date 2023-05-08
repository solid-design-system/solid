import { minify } from 'terser';
import { gzipSizeSync } from 'gzip-size';

const componentsPath = './dist/components/es';

export default function minifyEsLibPlugin(options = {}) {
  return {
    name: 'rollup-plugin-minify',
    async generateBundle(outputOptions, bundle) {
      for (const fileName in bundle) {
        if (bundle[fileName].type === 'chunk' && fileName.endsWith('.js')) {
          const code = bundle[fileName].code;
          try {
            const minified = await minify(code, options);
            bundle[fileName].code = minified.code;
            bundle[fileName].gzippedSize = gzipSizeSync(minified.code);
          } catch (error) {
            console.error(`Error minifying ${fileName}:`, error);
          }
        }
      }
    },
  };
}
