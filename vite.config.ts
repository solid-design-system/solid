import customElementConfig from './custom-elements-manifest.config';
import customMinifyPlugin from './scripts/rollup-plugin-custom-minify';
import minifyHtmlPlugin from 'rollup-plugin-minify-html-literals';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import summaryPlugin from 'rollup-plugin-summary';
import versionedComponentsPlugin from './scripts/rollup-plugin-versioned-components';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import webTypesPlugin from './scripts/rollup-plugin-web-types';
import type { defineConfig } from 'vite';

// eslint-disable-next-line
const minifyHTML = (minifyHtmlPlugin as any).default;

// https://vitejs.dev/config/
export default (({ command }: { command: string }) => {
  return {
    plugins: [
      VitePluginCustomElementsManifest(
        command === 'build' ? customElementConfig : { ...customElementConfig, plugins: [] as any[] }
      )
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
        name: 'Solid Components',
        fileName: format => `${format}/solid-components.js`
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
          // Minify HTML template literals
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          minifyHTML(),
          // Minify ES and UMD bundles
          customMinifyPlugin({
            ecma: 2020,
            module: true,
            compress: { defaults: true, passes: 2 },
            mangle: true
          }),
          // Print bundle summary
          summaryPlugin({ showGzippedSize: true }),
          // Add version to component names
          versionedComponentsPlugin(),
          // Generate web types
          webTypesPlugin()
        ]
      }
    }
  };
}) as typeof defineConfig;
