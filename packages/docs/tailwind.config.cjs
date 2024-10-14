const componentsTheme = require('../components/tailwind.config.cjs'); // Import

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...componentsTheme,
  content: ['../components/src/**/*.ts', './src/stories/**/*.stories.ts']
};
