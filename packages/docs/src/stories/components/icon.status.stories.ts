import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookTemplate } from '../../../scripts/storybook/helper';
import { icons } from '../../../../components/src/components/icon/library.status';

const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/status-assets',
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

export const SdStatusAssets = {
  name: 'sd-status-assets',
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
      constants: [{ type: 'attribute', name: 'library', value: 'sd-status-assets' }],
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['white', 'white', 'var(--sd-color-primary)'] }
      },
      args
    })
};
