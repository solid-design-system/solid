import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn/multi-theming';

const { args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
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
  title: 'Components/sd-icon/Libraries/Library: multi-theming',
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'content/image' }], args),
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [
    (story: any) =>
      html`${story()}<style>
          sd-icon {
            font-size: 1.5rem;
          }
        </style>`
  ]
};

export const Content = {
  name: 'content',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: (args: any) => {
    const iconsList = getCommonIconsByCategory('content');

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: iconsList.map((icon: string) => `content/${icon}`)
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'multi-theming' }],
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

export const System = {
  name: 'system',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: (args: any) => {
    const iconsList = getCommonIconsByCategory('system');

    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: iconsList.map((icon: string) => `system/${icon}`)
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: 'multi-theming' }],
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
