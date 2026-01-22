/* eslint-disable no-console */
import * as esbuild from 'esbuild';
import { globby } from 'globby';

(async () => {
  const entryPoints = await globby([`src/**/*.ts`, '!src/**/*.spec.ts', '!src/**/*.d.ts']);
  esbuild
    .build({
      entryPoints,
      outdir: 'dist',
      bundle: false,
      minify: false,
      platform: 'node',
      target: 'esnext'
    })
    .then(() => console.log('✅ Build successful!'))
    .catch(error => console.log('❌', error.message));
})();
