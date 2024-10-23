import '../../solid-components';
import { icons } from './library.system';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/Screenshots: sd-icon',
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'union-investment/content/image' }], args),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const LibraryDefault = {
  name: 'Library: default',
  parameters: {
    controls: { exclude: ['name', 'library'] },
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
          values: ['content/image', 'union-investment/content/image', 'system/image', 'union-investment/system/image']
        }
      },
      constants: [{ type: 'attribute', name: 'library', value: '' }],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    })
};

export const LibrarySystem = {
  name: 'Library: system',
  parameters: { controls: { exclude: ['name', 'library'] } },
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
          values: Object.keys(icons)
        }
      },
      constants: [
        { type: 'attribute', name: 'library', value: 'system' },
        { type: 'attribute', name: 'name', value: 'check' }
      ],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    })
};
