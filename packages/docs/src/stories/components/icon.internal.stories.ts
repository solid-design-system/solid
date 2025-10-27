import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookTemplate } from '../../../scripts/storybook/helper';
import { icons } from '../../../../components/src/components/icon/library.internal';

const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon/internal-lib',
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

export const Internal = {
  name: '_internal',
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
            'var(--sd-color-background-white)',
            'var(--sd-color-background-white)',
            'var(--sd-color-background-primary)'
          ]
        }
      },
      args
    })
};
