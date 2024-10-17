import customElementConfig from './custom-elements-manifest.config';
import VitePluginCreateEmptyCemIfNotExisting from './scripts/vite-plugin-create-empty-cem-if-not-existing';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import VitePluginFetchIconsFromCdn from './scripts/vite-plugin-fetch-icons-from-cdn';
import VitePluginGetPlaywrightVersion from './scripts/vite-plugin-get-playwright-version';
import VitePluginGetTailwindTheme from './scripts/vite-plugin-get-tailwind-theme';
import VitePluginLitTailwind from './scripts/vite-plugin-lit-tailwind';
import type { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default (() => {
  return {
    plugins: [
      VitePluginFetchIconsFromCdn(),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      VitePluginLitTailwind({
        include: [/src\/components\/.*\.ts$/, /src\/utilities\/autocomplete-config.ts/],
        exclude: [/node_modules/]
      }),
      VitePluginGetPlaywrightVersion(),
      VitePluginGetTailwindTheme(),
      VitePluginCreateEmptyCemIfNotExisting(),
      VitePluginCustomElementsManifest({
        ...customElementConfig,
        plugins: customElementConfig.plugins.filter(
          plugin => ['solid-custom-tags', 'remove-html-members'].includes(plugin.name)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ) as any[]
      })
    ]
    /**
     * Build step for browsers (includes lit etc.)
     * - umd: Combined js file, faster to load, but not tree-shakeable, recommended
     * - es: Chunked js files, usable in browser, makes it possible to pick single components
     */
  };
}) as unknown as typeof defineConfig;
