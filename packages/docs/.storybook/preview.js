import '../../styles/src/solid-styles.css';
import './preview.css';
import 'normalize.css';
import { storybookUtilities } from '../scripts/storybook/helper';
import docsCodepenEnhancer from '../scripts/storybook/docs-codepen-enhancer';

export const preview = {
  decorators: [],
  parameters: {
    chromatic: {
      disableSnapshot: true
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
