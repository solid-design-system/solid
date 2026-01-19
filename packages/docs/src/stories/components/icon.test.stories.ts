import '../../../../components/src/solid-components';
import { icons } from '../../../../components/src/components/icon/library.internal';
import { icons as statusIcons } from '../../../../components/src/components/icon/library.status';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/Screenshots: sd-icon',
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'union-investment/content/image' }], args),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const LibraryDefault = {
  name: 'Library: default',
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

export const LibraryInternal = {
  name: 'Library: internal',
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
        { type: 'attribute', name: 'library', value: '_internal' },
        { type: 'attribute', name: 'name', value: 'check' }
      ],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    })
};

export const StatusLibrary = {
  name: 'Library: status assets',
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
          values: Object.keys(statusIcons)
        }
      },
      constants: [
        { type: 'attribute', name: 'library', value: 'sd-status-assets' },
        { type: 'attribute', name: 'name', value: 'status-questionmark' }
      ],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    })
};
