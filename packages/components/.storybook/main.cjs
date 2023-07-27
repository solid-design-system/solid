const tsconfigPaths = require('vite-tsconfig-paths');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
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
      from: '../node_modules/@solid-design-system/placeholders/src/images',
      to: '/placeholders'
    }
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()]
    };
  },
  docs: {
    docs: true,
    autodocs: true
  }
};
