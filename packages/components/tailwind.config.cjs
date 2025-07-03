const plugin = require('tailwindcss/plugin');
const theme = require('../tokens/src/create-theme.cjs');

// Brandshape uses background color in Figma but is a SVG on our side, therefore we have add the color here
theme.fill.neutral[100] = theme.backgroundColor.neutral[100].replace('/*', '/* Only needed for brandshape –');

theme.extend = {
  ...theme.extend,
  keyframes: {
    'loader-color-primary': {
      '0%, 100%': { color: 'var(--sd-color-primary, #00358E)' },
      '50%': { color: 'var(--sd-color-primary, #00358E)', opacity: '20%' }
    },
    'loader-color-white': {
      '0%, 100%': { color: 'var(--sd-color-white, #FFFFFF)' },
      '50%': { color: 'var(--sd-color-white, #FFFFFF)', opacity: '20%' }
    },
    'loader-color-current': {
      '0%, 100%': { color: 'currentColor' },
      '50%': { color: 'currentColor', opacity: '20%' }
    },
    grow: {
      '0%': { width: '0%' },
      '100%': { width: '100%' }
    },
    'bounce-once': {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-18px)' },
      '100%': { transform: 'translateY(0)' }
    },
    wave: {
      '0%, 60%, 100%': { transform: 'initial' },
      '30%': { transform: 'translateY(-5px)' }
    }
  },
  animation: {
    'bounce-once': 'bounce-once var(--sd-duration-medium, 300ms) ease-in-out',
    grow: 'grow linear',
    'loader-primary': 'wave 1s infinite, loader-color-primary 2s infinite',
    'loader-white': 'wave 1s infinite, loader-color-white 2s infinite',
    'loader-current': 'wave 1s infinite, loader-color-current 2s infinite'
  }
};

// Check if the script triggered is from the docs package
const isStorybookPackage = process.env.npm_package_name === '@solid-design-system/docs';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: isStorybookPackage
    ? ['./src/**/*.ts', './src/**/*.mdx']
    : [
        './src/components/**/*.ts',
        '!./src/components/**/*.stories.ts',
        '!./src/components/**/*.test.ts',
        './src/utilities/autocomplete-config.ts'
      ],
  theme,
  plugins: [
    require('@mariohamann/tailwindcss-var'),
    plugin(({ addVariant }) => {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('hover', '&:hover:not([disabled])');
      addVariant('active', '&:active:not([disabled])');
    }),
    plugin(({ addComponents, theme: twTheme }) => {
      addComponents({
        '.focus-outline': {
          outlineStyle: 'solid',
          outlineWidth: twTheme('borderWidth.2'),
          outlineOffset: twTheme('borderWidth.2'),
          outlineColor: theme.outlineColor.primary.DEFAULT.replace('<alpha-value>', '1')
        },
        '.focus-outline-inverted': {
          outlineStyle: 'solid',
          outlineWidth: twTheme('borderWidth.2'),
          outlineOffset: twTheme('borderWidth.2'),
          outlineColor: theme.outlineColor.white.replace('<alpha-value>', '1')
        }
      });
    })
  ],
  safelist: isStorybookPackage
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
