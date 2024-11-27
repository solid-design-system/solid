import customElementConfig from './custom-elements-manifest.config';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import summaryPlugin from 'rollup-plugin-summary';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import VitePluginLitTailwind from '../docs/scripts/vite-plugin-lit-tailwind';
import type { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default (() => {
  return {
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      VitePluginLitTailwind({
        include: [/src\/components\/.*\.ts$/, /src\/utilities\/autocomplete-config.ts/],
        exclude: [/node_modules/]
      }),
      VitePluginCustomElementsManifest(customElementConfig)
    ],
    /**
     * Build step for browsers (includes lit etc.)
     * - umd: Combined js file, faster to load, but not tree-shakeable, recommended
     * - es: Chunked js files, usable in browser, makes it possible to pick single components
     */
    build: {
      outDir: 'dist',
      lib: {
        entry: path.resolve(__dirname, 'src/solid-components.ts'),
        name: 'SolidComponents',
        fileName: (format: string) => `${format}/solid-components.js`
      },
      rollupOptions: {
        output: {
          // Modern JS bundles (no JS compilation, ES module output)
          format: 'esm',
          chunkFileNames: 'es/[name].js',
          dir: 'dist/components'
        },
        plugins: [
          // Resolve bare module specifiers to relative paths
          resolve(),
          // Print bundle summary
          summaryPlugin({ showGzippedSize: true })
        ]
      }
    }
  };
}) as unknown as typeof defineConfig;
