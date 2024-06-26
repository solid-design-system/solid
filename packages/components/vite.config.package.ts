import addTypesPlugin from './scripts/rollup-plugin-add-types';
import customMinifyHTMLLiteralsPlugin from './scripts/rollup-plugin-minify-html-literals';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import summaryPlugin from 'rollup-plugin-summary';
import VitePluginLitTailwind from './scripts/vite-plugin-lit-tailwind';
import type { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default (() => {
  return {
    /**
     * Build step for npm (excludes lit etc.)
     * - es: Chunked js files, usable in browser, makes it possible to pick single components
     */
    build: {
      outDir: 'dist',
      modulePreload: false,
      minify: false,
      rollupOptions: {
        input: {
          'solid-components': path.resolve(__dirname, 'src/solid-components.package.ts')
        },
        preserveEntrySignatures: 'strict',
        output: {
          // Modern JS bundles (no JS compilation, ES module output)
          format: 'esm',
          dir: 'dist/package',
          preserveModules: true,
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
          preserveModulesRoot: 'src'
        },
        external: (id: string) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return (
            id.includes('floating-ui') || (id.includes('lit') && !id.includes('utilities')) || id.includes('classix')
          );
        },
        plugins: [
          VitePluginLitTailwind({
            include: [/src\/components\/.*\.ts$/, /src\/utilities\/autocomplete-config.ts/]
          }),
          // Resolve bare module specifiers to relative paths
          resolve({
            moduleDirectories: ['node_modules']
          }),
          // Minify HTML template literals
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          customMinifyHTMLLiteralsPlugin(),
          // Print bundle summary
          summaryPlugin(),
          // add types to package
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          addTypesPlugin()
        ]
      }
    }
  };
}) as unknown as typeof defineConfig;
