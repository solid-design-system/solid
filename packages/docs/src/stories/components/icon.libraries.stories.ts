import '../../../../components/src/solid-components';
import { html } from 'lit';
import { icons } from '../../../../components/src/components/icon/library.internal';
import { icons as statusIcons } from '../../../../components/src/components/icon/library.status';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-icon');
const { overrideArgs } = storybookHelpers('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/Libraries',
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'union-investment/content/image' }], args),
  argTypes,
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

export const LibraryInternal = {
  name: 'Library: _internal',
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
      constants: [{ type: 'attribute', name: 'library', value: '_internal' }],
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
