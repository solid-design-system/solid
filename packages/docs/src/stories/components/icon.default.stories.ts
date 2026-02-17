import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookTemplate } from '../../../scripts/storybook/helper';
// @ts-expect-error – dynamically loaded via Vite
import iconsFromCdn from 'icons-from-cdn';

const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/default',
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

/**
 * > Important: This list is only updated when Storybook is updated.
 */

export const LibraryDefaultContent = {
  skip: true,
  name: 'union-investment/content',
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
            'rgba(var(--sd-color-primary))'
          ]
        }
      },
      args
    })
};

/**
 * > Important: This list is only updated when Storybook is updated.
 */

export const LibraryDefaultSystem = {
  skip: true,
  name: 'union-investment/system',
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
            'rgba(var(--sd-color-primary))'
          ]
        }
      },
      args
    })
};
