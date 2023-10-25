import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-input in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<sd-input clearable></sd-input>`;
  }
};

/**
 * Dev: Temporary Dev story
 */

export const Dev = {
  render: (args: any) => {
    return html`<sd-input ${{ ...args }}>
      <span slot="prefix">prefix</span>
      <sd-icon slot="suffix" library="global-resources" name="system/picture"></sd-icon>
    </sd-input>`;
  }
};

// export const Dev = {
//   render: (args: any) => {
//     return generateTemplate({
//       constants: [
//         { type: 'attribute', name: 'value', value: 'value' },
//         { type: 'attribute', name: 'label', value: 'label' },
//         { type: 'attribute', name: 'help-text', value: 'help-text' },
//         { type: 'attribute', name: 'clearable', value: true },
//         { type: 'slot', name: 'prefix', value: '<span slot="prefix">prefix</span>' },
//         {
//           type: 'slot',
//           name: 'suffix',
//           value: '<sd-icon slot="suffix" library="global-resources" name="system/picture"></sd-icon>'
//         }
//       ],
//       args
//     });
//   }
// };
