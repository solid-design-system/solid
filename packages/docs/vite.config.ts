import customElementConfig from '../components/custom-elements-manifest.config';
import VitePluginCreateEmptyCemIfNotExisting from './scripts/vite-plugin-create-empty-cem-if-not-existing';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import VitePluginFetchIconsFromCdn from './scripts/vite-plugin-fetch-icons-from-cdn';
import VitePluginGetPlaywrightVersion from './scripts/vite-plugin-get-playwright-version';
import VitePluginGetTailwindTheme from './scripts/vite-plugin-get-tailwind-theme';
import VitePluginLitTailwind from '../components/scripts/vite-plugin-lit-tailwind';
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      VitePluginCustomElementsManifest({
        ...customElementConfig,
        files: ['../components/src/**/!(*.stories|*.spec|*.test|*.style).ts'],
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        plugins: customElementConfig.plugins.filter(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          plugin => ['solid-custom-tags', 'remove-html-members'].includes(plugin.name)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call
        ) as any[]
      })
    ]
  };
}) as unknown as typeof defineConfig;
