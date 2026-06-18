import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn';

const { args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/Libraries/default',
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
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: Array.isArray(iconsFromCdn?.content)
            ? iconsFromCdn.content
                .filter((icon: string): icon is string => typeof icon === 'string' && icon.length > 0)
                .map((icon: string) => `content/${icon}`)
            : []
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: '' }],
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: [
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-primary))'
          ]
        }
      },
      args
    })
};

export const System = {
  name: 'system',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        },
        y: {
          type: 'attribute',
          name: 'name',
          values: Array.isArray(iconsFromCdn?.system)
            ? iconsFromCdn.system
                .filter((icon: string): icon is string => typeof icon === 'string' && icon.length > 0)
                .map((icon: string) => `system/${icon}`)
            : []
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: '' }],
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: [
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-white))',
            'rgba(var(--sd-color-background-primary))'
          ]
        }
      },
      args
    })
};
