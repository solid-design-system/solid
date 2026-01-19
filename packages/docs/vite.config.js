import { replaceCodePlugin as ViteReplaceCodePlugin } from 'vite-plugin-replace';
import atImportPlugin from 'postcss-import';
import autoprefixer from 'autoprefixer';
import componentsPackageJson from '../components/package.json';
import customElementConfig from '../components/custom-elements-manifest.config.js';
import placeholdersPackageJson from '../placeholders/package.json';
import postcssTokenVariables from '../components/scripts/postcss-token-variables.js';
import stylesPackageJson from '../styles/package.json';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting/index.js';
import tokensPackageJson from '../tokens/package.json';
import VitePluginCreateEmptyCemIfNotExisting from './scripts/vite-plugin-create-empty-cem-if-not-existing';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
import vitePluginExtractTailwindTheme from './scripts/vite-plugin-extract-tailwind-theme.js';
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
      vitePluginExtractTailwindTheme(),
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
            from: /%TOKENS-VERSION%/g,
            to: tokensPackageJson.version
          },
          {
            from: /%PLACEHOLDERS-VERSION%/g,
            to: placeholdersPackageJson.version
          },
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
    ],
    css: {
      postcss: {
        plugins: [
          atImportPlugin({ allowDuplicates: false }),
          tailwindcssNesting,
          tailwindcss,
          autoprefixer,
          postcssTokenVariables
        ]
      }
    }
  };
};
