import './preview.css';
import '../../tokens/themes/kid/kid.css';
import '../../tokens/themes/bb/bb.css';
import '../../tokens/themes/vb/vb.css';
import '../../tokens/themes/sp/sp.css';
import '../../tokens/themes/ui-dark/ui-dark.css';
import '../../tokens/themes/ui-light/ui-light.css';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';
import { withThemeByClassName } from './addons/with-theme.js';
import { storybookUtilities } from '../scripts/storybook/helper.js';
import docsCodepenEnhancer from '../scripts/storybook/docs-codepen-enhancer.js';
import { initDeprecatedBadgeEnhancer } from '../scripts/storybook/deprecated-badge-enhancer.js';
import { themes, allModes, DEFAULT_THEME } from './modes.js';

const theme = withThemeByClassName({
  defaultTheme: DEFAULT_THEME,
  themes: themes.reduce((acc, { id, name }) => {
    acc[name] = id;
    return acc;
  }, {})
});

const deprecatedBadgeDecorator = Story => {
  initDeprecatedBadgeEnhancer();
  return Story();
};

export const preview = {
  decorators: [theme, deprecatedBadgeDecorator],
  parameters: {
    options: {
      storySort: (a, b) => {
        const titleA = a?.title || '';
        const titleB = b?.title || '';
        const isSdIconA = titleA.startsWith('Components/sd-icon');
        const isSdIconB = titleB.startsWith('Components/sd-icon');

        if (!(isSdIconA && isSdIconB)) {
          return 0;
        }

        const rank = title =>
          title.includes('/Libraries/') || title === 'Components/sd-icon/Libraries'
            ? 2
            : title.includes('/Screenshots:')
              ? 1
              : 0;
        const rankA = rank(titleA);
        const rankB = rank(titleB);

        if (rankA !== rankB) {
          return rankA - rankB;
        }

        if (rankA === 2 && rankB === 2) {
          const getLabel = story => {
            const title = story?.title || '';
            const name = story?.name || '';

            if (title === 'Components/sd-icon/Libraries') {
              return name;
            }

            if (title.startsWith('Components/sd-icon/Libraries/')) {
              return title.replace('Components/sd-icon/Libraries/', '').split('/')[0] || name;
            }

            return title;
          };

          const labelA = getLabel(a).toLowerCase().replace(/^_+/, '');
          const labelB = getLabel(b).toLowerCase().replace(/^_+/, '');
          const byLabel = labelA.localeCompare(labelB, undefined, { numeric: true });

          if (byLabel !== 0) {
            return byLabel;
          }

          return (a?.name || '').localeCompare(b?.name || '', undefined, { numeric: true });
        }

        return titleA.localeCompare(titleB, undefined, { numeric: true });
      }
    },
    chromatic: {
      disableSnapshot: true,
      modes: themes.reduce((acc, { id }) => {
        acc[id] = allModes[id];
        return acc;
      }, {})
    },
    docs: {
      story: { inline: true },
      toc: true,
      // `@summary` JSDoc (already the single source of truth for the custom "Overview" page and
      // the mcp metadata) is used for the autodocs description too, instead of a separate hand-written
      // JSDoc comment above each story file's default export.
      extractComponentDescription: tagName => {
        try {
          return getWcStorybookHelpers(tagName)?.manifest?.summary ?? '';
        } catch {
          return '';
        }
      },
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
  options: {
    storySort: (a, b) => {
      const titleA = a?.title || '';
      const titleB = b?.title || '';
      const isSdIconA = titleA.startsWith('Components/sd-icon');
      const isSdIconB = titleB.startsWith('Components/sd-icon');

      if (!(isSdIconA && isSdIconB)) {
        return 0;
      }

      const rank = title =>
        title.includes('/Libraries/') || title === 'Components/sd-icon/Libraries'
          ? 2
          : title.includes('/Screenshots:')
            ? 1
            : 0;
      const rankA = rank(titleA);
      const rankB = rank(titleB);

      if (rankA !== rankB) {
        return rankA - rankB;
      }

      if (rankA === 2 && rankB === 2) {
        const getLabel = story => {
          const title = story?.title || '';
          const name = story?.name || '';

          if (title === 'Components/sd-icon/Libraries') {
            return name;
          }

          if (title.startsWith('Components/sd-icon/Libraries/')) {
            return title.replace('Components/sd-icon/Libraries/', '').split('/')[0] || name;
          }

          return title;
        };

        const labelA = getLabel(a).toLowerCase().replace(/^_+/, '');
        const labelB = getLabel(b).toLowerCase().replace(/^_+/, '');
        const byLabel = labelA.localeCompare(labelB, undefined, { numeric: true });

        if (byLabel !== 0) {
          return byLabel;
        }

        return (a?.name || '').localeCompare(b?.name || '', undefined, { numeric: true });
      }

      return titleA.localeCompare(titleB, undefined, { numeric: true });
    }
  },
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
