const tsconfigPaths = require('vite-tsconfig-paths');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
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
