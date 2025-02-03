import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/**/*.ts'],
    outdir: 'dist',
    bundle: false,
    minify: false,
    platform: 'node',
    target: 'es2018'
  })
  .then(() => console.log('✅ Build successful!'))
  .catch(error => console.log('❌', error.message));
