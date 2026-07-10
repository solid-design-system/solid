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

const TEMPLATE_FOOTER_ID = 'template-global-footer';
const SD_TAG_REGEX = /<(sd-[a-z][a-z0-9-]*)/g;
const TITLE_REGEX = /title\s*:\s*['"`]([^'"`]+)['"`]/;
const LINE_COMMENT_REGEX = /\/\/[^\n]*/g;
const BLOCK_COMMENT_REGEX = /\/\*[\s\S]*?\*\//g;

const COMPONENT_LABEL_OVERRIDES = {
  'sd-textarea': 'Text Area'
};

const getComponentLabel = tagName => {
  if (COMPONENT_LABEL_OVERRIDES[tagName]) {
    return COMPONENT_LABEL_OVERRIDES[tagName];
  }

  return tagName
    .replace('sd-', '')
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
};

const buildTemplateComponentMap = () => {
  const sources = import.meta.glob('../src/stories/templates/*.stories.ts', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const map = {};

  Object.values(sources).forEach(rawSource => {
    const stripped = rawSource.replace(BLOCK_COMMENT_REGEX, '').replace(LINE_COMMENT_REGEX, '');

    const titleMatch = stripped.match(TITLE_REGEX);
    if (!titleMatch) return;

    const tags = new Set();
    let tagMatch;
    SD_TAG_REGEX.lastIndex = 0;
    while ((tagMatch = SD_TAG_REGEX.exec(stripped)) !== null) {
      tags.add(tagMatch[1]);
    }

    if (tags.size === 0) return;
    map[titleMatch[1]] = [...tags].sort();
  });

  return map;
};

const TEMPLATE_COMPONENT_MAP = buildTemplateComponentMap();

const buildLinksFromTags = tags =>
  tags.map(tag => ({
    label: getComponentLabel(tag),
    href: `./?path=/docs/components-${tag}-overview--docs`
  }));

const removeTemplateFooter = () => {
  document.getElementById(TEMPLATE_FOOTER_ID)?.remove();
};

const createTemplateFooter = ({ title, links }) => {
  const footer = document.createElement('footer');
  footer.id = TEMPLATE_FOOTER_ID;
  footer.className = 'template-global-footer';

  const linksMarkup = links
    .map(
      ({ label, href }) =>
        `<a href="${href}" class="sd-paragraph sd-paragraph--size-sm text-primary underline hover:text-primary-500 active:text-primary-800 text-base">${label}</a>`
    )
    .join('');

  footer.innerHTML = `
    <div class="template-global-footer__inner">
      <p class="sd-headline sd-headline--size-base m-0 !text-xl">${title}</p>
      <div class="template-global-footer__links">
        ${linksMarkup}
      </div>
    </div>
  `;
  return footer;
};

const renderTemplateFooter = (storyTitle, templateFooterConfig) => {
  const tags = TEMPLATE_COMPONENT_MAP[storyTitle];
  if (!tags || tags.length === 0) return;

  const targetRoot = document.getElementById('storybook-docs');
  if (!targetRoot) return;

  const signature = `${storyTitle}::${tags.join('|')}`;
  const existingFooter = document.getElementById(TEMPLATE_FOOTER_ID);

  if (
    existingFooter &&
    existingFooter.parentElement === targetRoot &&
    existingFooter.dataset.componentSignature === signature
  ) {
    return;
  }

  if (existingFooter) {
    existingFooter.remove();
  }

  const title = templateFooterConfig?.title || 'Utilized Components and Styles';
  const links = buildLinksFromTags(tags);
  const footer = createTemplateFooter({ title, links });
  footer.dataset.componentSignature = signature;

  targetRoot.appendChild(footer);
};

let activeTemplateStoryTitle = null;
let activeTemplateFooterConfig = null;

const channel = addons.getChannel?.();
if (channel) {
  const handleRender = () => {
    if (!activeTemplateStoryTitle) {
      removeTemplateFooter();
      return;
    }
    renderTemplateFooter(activeTemplateStoryTitle, activeTemplateFooterConfig);
  };

  channel.on(DOCS_RENDERED, handleRender);
  channel.on(STORY_RENDERED, handleRender);
}

const templateFooterDecorator = (Story, context) => {
  const isTemplatePage = context.title?.startsWith('Templates/');

  if (isTemplatePage) {
    activeTemplateStoryTitle = context.title;
    activeTemplateFooterConfig = context.parameters?.templateFooter;
  } else {
    activeTemplateStoryTitle = null;
    activeTemplateFooterConfig = null;
    removeTemplateFooter();
  }

  return Story();
};

export const preview = {
  decorators: [theme, deprecatedBadgeDecorator, templateFooterDecorator],
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
