import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  stories: [
    // General, Migration
    '../src/stories/docs/**/*.@(mdx|stories.*)',
    // Packages (custom order)
    '../src/stories/packages/Quickstart.@(mdx|stories.*)',
    '../src/stories/packages/**/Index.@(mdx|stories.*)',
    '../src/stories/packages/**/Installation.@(mdx|stories.*)',
    '../src/stories/packages/**/!(Changelog|Contributing)*.@(mdx|stories.*)',
    '../src/stories/packages/**/Contributing.@(mdx|stories.*)',
    '../src/stories/packages/**/Changelog.@(mdx|stories.*)',
    // Components, Styles, Templates
    '../src/stories/components/*.@(mdx|stories.*)',
    '../src/stories/styles/*.@(mdx|stories.*)',
    '../src/stories/templates/*.@(mdx|stories.*)',
    // Legal
    '../src/stories/legal/*.@(mdx|stories.*)'
  ],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-links',
    './addons/theme-generator/preset',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
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
  ].concat(
    process.env.NODE_ENV === 'production'
      ? [
          {
            from: '../../components/cdn',
            to: '/components/cdn'
          },
          {
            from: '../../styles/cdn',
            to: '/styles/cdn'
          }
        ]
      : []
  ),
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
    docs: true
  },

  viewportStoryGlobals: true
};
