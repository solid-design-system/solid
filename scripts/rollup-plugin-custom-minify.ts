import { minify } from 'terser';
import { gzipSizeSync } from 'gzip-size';

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
            bundle[fileName].gzippedSize = gzipSizeSync(minified.code as string);
          } catch (error) {
            console.error(`Error minifying ${fileName}:`, error);
          }
        }
      }
    }
  };
}
