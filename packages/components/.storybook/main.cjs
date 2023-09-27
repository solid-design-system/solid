const tsconfigPaths = require('vite-tsconfig-paths');
module.exports = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/styles/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/patterns/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-actions',
    '@storybook/addon-interactions'
  ],
  staticDirs: [
    './assets',
    {
      from: '../../placeholders/src/images',
      to: '/placeholders'
    }
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  async viteFinal(config) {
    if (config.build === undefined) config.build = {}; // fallback if build is not defined
    config.build.target = 'esnext'; // to allow top level await
    config.plugins = [...config.plugins, tsconfigPaths.default()];
    return config;
  },
  docs: {
    docs: true,
    autodocs: true
  }
};
