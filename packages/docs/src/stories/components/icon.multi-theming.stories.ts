import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookTemplate } from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn/multi-theming';

const { generateTemplate } = storybookTemplate('sd-icon');

function getCommonIconsByCategory(category: 'content' | 'system') {
  const themes = Object.values(iconsFromCdn) as Array<{ content: string[]; system: string[] }>;

  if (!themes.length) return [] as string[];

  const commonIcons = themes
    .map(theme => theme?.[category] || [])
    .reduce((acc, current) => acc.filter(icon => current.includes(icon)));

  return commonIcons.length ? commonIcons : themes[0][category] || [];
}

export default {
  title: 'Components/sd-icon/multi-theming',
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: {
      disable: true
    }
  },
  // decorator to add <styles> to the story
  decorators: [
    (story: any) =>
      html`${story()}<style>
          sd-icon {
            font-size: 1.5rem;
          }
        </style>`
  ]
};

export const LibraryMultiThemingContent = {
  name: 'multi-theming/content',
  render: (args: any) => {
    const icons = getCommonIconsByCategory('content');

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: icons.map((icon: string) => `content/${icon}`)
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'library',
          value: 'multi-theming'
        }
      ],
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: [
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-primary))'
          ]
        }
      },
      args
    });
  }
};

export const LibraryMultiThemingSystem = {
  name: 'multi-theming/system',
  render: (args: any) => {
    const icons = getCommonIconsByCategory('system');

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: icons.map((icon: string) => `system/${icon}`)
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'library',
          value: 'multi-theming'
        }
      ],
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: [
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-primary))'
          ]
        }
      },
      args
    });
  }
};
