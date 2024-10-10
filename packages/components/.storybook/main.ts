import storybookEnvPackageVersions from '../scripts/storybook/env-package-versions';
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/styles/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/templates/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  env: storybookEnvPackageVersions({
    packagePaths: ['../components', '../tokens', '../placeholders']
  }),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    './addons/theme-generator/preset'
  ],
  staticDirs: [
    './assets',
    {
      from: '../../placeholders/src/images',
      to: '/placeholders/images'
    },
    {
      from: '../../placeholders/src/videos',
      to: '/placeholders/videos'
    },
    {
      from: '../../placeholders/src/audio',
      to: '/placeholders/audio'
    },
    {
      from: '../node_modules/countup.js/dist',
      to: '/countup'
    },
    {
      from: '../node_modules/@tarekraafat/autocomplete.js/dist',
      to: '/autocomplete'
    }
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  async viteFinal(config) {
    if (!config.build) config.build = {}; // fallback if build is not defined
    config.build.target = 'esnext'; // to allow top level await
    config.plugins = [...config.plugins, tsconfigPaths()];
    return config;
  },
  docs: {
    docs: true,
    autodocs: true
  }
};
