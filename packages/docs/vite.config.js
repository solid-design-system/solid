import { replaceCodePlugin as ViteReplaceCodePlugin } from 'vite-plugin-replace';
import componentsPackageJson from '../components/package.json';
import customElementConfig from '../components/custom-elements-manifest.config.js';
import stylesPackageJson from '../styles/package.json';
import VitePluginCreateEmptyCemIfNotExisting from './scripts/vite-plugin-create-empty-cem-if-not-existing';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import VitePluginFetchIconsFromCdn from './scripts/vite-plugin-fetch-icons-from-cdn';
import VitePluginGetPlaywrightVersion from './scripts/vite-plugin-get-playwright-version';
import VitePluginGetTailwindTheme from './scripts/vite-plugin-get-tailwind-theme';
import VitePluginLitTailwind from './scripts/vite-plugin-lit-tailwind.js';
import VitePluginSolidStyles from './scripts/vite-plugin-solid-styles/index.js';

// https://vitejs.dev/config/
export default () => {
  return {
    plugins: [
      VitePluginFetchIconsFromCdn(),
      VitePluginLitTailwind({
        include: [
          /src\/internal\/solid-element.ts/,
          /src\/components\/.*\.ts$/,
          /src\/utilities\/autocomplete-config.ts/
        ],
        exclude: [/node_modules/]
      }),
      VitePluginSolidStyles({
        srcDir: '../styles/src'
      }),
      VitePluginGetPlaywrightVersion(),
      VitePluginGetTailwindTheme(),
      VitePluginCreateEmptyCemIfNotExisting(),
      VitePluginCustomElementsManifest({
        ...customElementConfig,
        files: ['../components/src/**/!(*.stories|*.spec|*.test|*.style).ts'],

        plugins: customElementConfig.plugins.filter(plugin =>
          ['solid-custom-tags', 'remove-html-members'].includes(plugin.name)
        )
      }),
      ViteReplaceCodePlugin({
        // replace %COMPONENTS-VERSION% with version from ../components/package.json
        replacements: [
          {
            from: /%COMPONENTS-VERSION%/g,
            to: componentsPackageJson.version
          },
          {
            from: /%DASHED-COMPONENTS-VERSION%/g,
            to: componentsPackageJson.version.replaceAll('.', '-')
          },
          {
            from: /%STYLES-VERSION%/g,
            to: stylesPackageJson.version
          },
          {
            from: /%DASHED-STYLES-VERSION%/g,
            to: stylesPackageJson.version.replaceAll('.', '-')
          }
        ]
      })
    ]
  };
};