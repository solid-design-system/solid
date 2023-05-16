import { defineConfig } from 'vite';
import path from 'path';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import resolve from '@rollup/plugin-node-resolve';
import minifyHtmlPlugin from 'rollup-plugin-minify-html-literals';
import summaryPlugin from 'rollup-plugin-summary';
import customMinifyPlugin from './scripts/rollup-plugin-custom-minify.js';
import versionedComponentsPlugin from './scripts/rollup-plugin-versioned-components.js';
import customElementConfig from './custom-elements-manifest.config.js';
import webTypesPlugin from './scripts/rollup-plugin-web-types.js';

const minifyHTML = (minifyHtmlPlugin as any).default;

// https://vitejs.dev/config/
export default (({ command }) => {
  return {
    plugins: [
      VitePluginCustomElementsManifest(
        command === 'build' ? customElementConfig : { ...customElementConfig, plugins: [] }
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
