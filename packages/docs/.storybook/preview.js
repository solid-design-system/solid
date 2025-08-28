import './preview.css';
import '../../styles/src/solid-styles.css';
import '../../tokens/themes/dark.css';
import '../../tokens/themes/light.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { storybookUtilities } from '../scripts/storybook/helper.js';
import docsCodepenEnhancer from '../scripts/storybook/docs-codepen-enhancer.js';
import { LIGHT_THEME, DARK_THEME } from './modes.js';

const theme = withThemeByClassName({
  defaultTheme: LIGHT_THEME,
  parentSelector: 'body',
  themes: {
    [DARK_THEME]: 'dark',
    [LIGHT_THEME]: 'light'
  }
});

export const preview = {
  decorators: [theme],
  parameters: {
    chromatic: {
      disableSnapshot: true,
      modes: {
        light: { theme: 'light' },
        dark: { theme: 'dark' }
      }
    },
    docs: {
      story: { inline: true },
      toc: true,
      source: {
        transform: (code, storyContent) => {
          let output = code;

          // This fixes the usage of self built html`` string literals
          if (output.trim().startsWith('&lt;')) {
            output = output
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&amp;/g, '&')
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'");
          }

          output = storybookUtilities.codeOptimizer(output);

          return docsCodepenEnhancer(output, storyContent);
        },
        format: 'html'
      }
    },
    backgrounds: {
      options: {
        white: { name: 'white', value: '#fff' },
        primary: { name: 'primary', value: 'rgb(var(--sd-color-primary-100, 0,53,142))' },
        primary100: { name: 'primary-100', value: 'rgb(var(--sd-color-primary-100, 236 240 249))' },
        neutral200: { name: 'neutral-200', value: 'rgb(var(--sd-color-neutral-100, 233 233 233))' }
      }
    }
  },
  initialGlobals: {
    backgrounds: { value: 'white' }
  }
};

export default preview;

export const parameters = {
  docs: {
    story: { inline: true },
    toc: true,
    codePanel: true,
    source: {
      transform: (code, storyContent) => {
        let output = code;

        // This fixes the usage of self built html`` string literals
        if (output.trim().startsWith('&lt;')) {
          output = output
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
        }

        output = storybookUtilities.codeOptimizer(output);

        return docsCodepenEnhancer(output, storyContent);
      },
      format: 'html'
    }
  },
  backgrounds: {
    options: {
      white: { name: 'white', value: '#fff' },
      primary: { name: 'primary', value: 'rgb(var(--sd-color-primary, 0 53 142))' },
      black: { name: 'black', value: '#000000' },
      primary100: { name: 'primary-100', value: 'rgb(var(--sd-color-primary-100, 236 240 249))' },
      neutral200: { name: 'neutral-200', value: 'rgb(var(--sd-color-neutral-200, 242 242 242))' }
    }
  },
  initialGlobals: {
    backgrounds: { value: 'white' }
  }
};
