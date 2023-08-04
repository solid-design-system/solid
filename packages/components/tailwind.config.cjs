const plugin = require('tailwindcss/plugin');
const theme = require('../tokens/src/create-theme.cjs');

// Brandshape uses background color in Figma but is a SVG on our side, therefore we have add the color here
theme.fill.neutral[100] = theme.backgroundColor.neutral[100].replace('/*', '/* Only needed for brandshape –');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.ts', '!./src/**/*.{stories,styles,test}.*'],
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
