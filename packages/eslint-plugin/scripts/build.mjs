import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    platform: 'node',
    outfile: 'dist/index.cjs'
  })
  .then(() => console.log('✅ Build successful!'))
  .catch(error => console.log('❌', error.message));
