import { defineConfig } from 'vite';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkgMinifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

process.env.VITE_BUILD = 'lib';

const minifyHTML = (pkgMinifyHTML as any).default;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // minify: 'terser',
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/solid-components.ts'),
      name: 'Solid Components',
      fileName: (format) => `${format}/solid-components.js`,
    },
    rollupOptions: {
      // input: {
      //   main: path.resolve(__dirname, 'src/solid-components.ts'),
      // },
      external: ['@floating-ui/dom', '@shoelace-style/animations', 'lit', 'qr-creator'],
      output:
      {
        // Modern JS bundles (no JS compilation, ES module output)
        format: 'esm',
        chunkFileNames: 'es/[name].js',
        // entryFileNames: 'solid-components.js',
        dir: 'dist/components',
        // inlineDynamicImports: true,
        // plugins: [htmlPlugin.api.addOutput('modern')],
      },
      plugins: process.env['npm_lifecycle_event'] === 'build' ? [
        // Resolve bare module specifiers to relative paths
        resolve(),
        // Minify HTML template literals
        minifyHTML(),
        terser({
          ecma: 2020,
          module: true,
          compress: { defaults: true, passes: 2 },
          mangle: true
        }),
        // Print bundle summary
        summary({ showGzippedSize: true }),
      ] : [],
    },
  },
});
