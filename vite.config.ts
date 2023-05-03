import { defineConfig } from 'vite';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkgMinifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

const minifyHTML = (pkgMinifyHTML as any).default;

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * Build step for browsers (includes lit etc.)
   * - umd: Combined js file, faster to load, but not tree-shakeable, recommended
   * - es: Chunked js files, usable in browser, makes it possible to pick single components
   */
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/solid-components.ts'),
      name: 'Solid Components',
      fileName: (format) => `${format}/solid-components.js`,
    },
    rollupOptions: {
      output:
      {
        // Modern JS bundles (no JS compilation, ES module output)
        format: 'esm',
        chunkFileNames: 'es/[name].js',
        dir: 'dist/components',
      },
      plugins: [
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
      ],
    },
  },
});
