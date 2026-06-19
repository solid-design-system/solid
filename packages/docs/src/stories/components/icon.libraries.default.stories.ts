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
  tags: ['skip-playwright'],
  parameters: {
    ...parameters,
    chromatic: { disableSnapshot: true },
    controls: {
      disable: true
    }
  },
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'content/image' }], args),
  // decorator to add <styles> to the story
  decorators: [
    (story: any) =>
      html`<style>
          sd-icon {
            font-size: 1.5rem;
          }</style
        >${story()}`
  ]
};

/**
 * > Important: This list is only updated when Storybook is updated.
 */

export const Content = {
  name: 'content',
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

/**
 * > Important: This list is only updated when Storybook is updated.
 */

export const System = {
  name: 'system',
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
