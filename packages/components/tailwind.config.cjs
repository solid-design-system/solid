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
  content: includeStorybookStories
    ? ['./src/**/*.ts', './src/**/*.mdx']
    : ['./src/components/**/*.ts', '!./src/components/**/*.stories.ts', '!./src/components/**/*.test.ts'],
  theme,
  plugins: [
    require('@mariohamann/tailwindcss-var'),
    plugin(({ addVariant }) => {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('hover', '&:hover:not([disabled])');
      addVariant('active', '&:active:not([disabled])');
    })
  ],
  safelist: includeStorybookStories
    ? // If we are in Storybook, we need to include more classes to show all the different tokens
      (() => {
        const safeList = [];
        const tokenNamesToTailwindClasses = {
          spacing: 'w',
          zIndex: 'z',
          opacity: 'opacity',
          fontSize: 'text',
          fontWeight: 'font',
          borderRadius: 'rounded',
          boxShadow: 'shadow',
          aspectRatio: 'aspect'
        };

        Object.entries(theme)
          .filter(([names]) => Object.keys(tokenNamesToTailwindClasses).includes(names))
          .forEach(([key, value]) => {
            key = tokenNamesToTailwindClasses[key] || key;
            if (typeof value === 'object') {
              Object.entries(value).forEach(([subKey, subValue]) => {
                if (typeof subValue === 'object') {
                  Object.keys(subValue).forEach(subSubKey => {
                    safeList.push(`${key}-${subKey}-${subSubKey}`);
                  });
                } else {
                  safeList.push(`${key}-${subKey}`);
                }
              });
            }
          });
        return safeList;
      })()
    : []
};
