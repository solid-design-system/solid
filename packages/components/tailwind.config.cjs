const plugin = require('tailwindcss/plugin');
const theme = require('./scripts/tailwind/create-theme.cjs');

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
