const plugin = require('tailwindcss/plugin');
const theme = require('../tokens/src/create-theme.cjs');

// Brandshape uses background color in Figma but is a SVG on our side, therefore we have add the color here
theme.fill.neutral[100] = theme.backgroundColor.neutral[100].replace('/*', '/* Only needed for brandshape –');

theme.extend = {
  keyframes: {
    grow: {
      '0%': { width: '0%' },
      '100%': { width: '100%' }
    }
  },
  animation: {
    grow: 'grow linear'
  }
};

// Check if the script triggered is a Storybook script, e. g. `pnpm build/storybook` or `pnpm storybook`
const includeStorybookStories = process.env.npm_lifecycle_event?.includes('storybook');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.ts',
    './src/patterns/**/*.ts',
    `!./src/**/*.{${includeStorybookStories ? '' : 'stories,'}styles,test}.*`
  ],
  theme,
  plugins: [
    require('@mariohamann/tailwindcss-var'),
    plugin(({ addVariant }) => {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('hover', '&:hover:not([disabled])');
      addVariant('active', '&:active:not([disabled])');
    })
  ]
};
