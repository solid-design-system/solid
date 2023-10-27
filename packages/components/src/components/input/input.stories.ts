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
    return generateTemplate({ args });
  }
};

/**
 * Dev: Temporary Dev story
 */

// export const Dev = {
//   render: (args: any) => {
//     return html`<sd-input ${{ ...args }}>
//       <span slot="label">label</span>
//       <span slot="prefix">prefix</span>
//       <sd-icon slot="suffix" library="global-resources" name="system/picture"></sd-icon>
//       <span slot="help-text">help-text</span>
//     </sd-input>`;
//   }
// };

export const Dev = {
  render: (args: any) => {
    return generateTemplate({
      constants: [
        { type: 'attribute', name: 'value', value: 'value' },
        { type: 'attribute', name: 'label', value: 'label' },
        { type: 'attribute', name: 'help-text', value: 'help-text' },
        { type: 'attribute', name: 'clearable', value: true },
        { type: 'slot', name: 'prefix', value: '<span slot="prefix">prefix</span>' },
        {
          type: 'slot',
          name: 'suffix',
          value: '<sd-icon slot="suffix" library="global-resources" name="system/picture"></sd-icon>'
        }
      ],
      args
    });
  }
};

export const Form = {
  render: (args: any) => {
    return html` <form action="" method="get" id="testForm" name="testForm">
      ${generateTemplate({
        constants: [
          { type: 'attribute', name: 'required', value: true },
          { type: 'attribute', name: 'form', value: 'testForm' },
          { type: 'attribute', name: 'name', value: 'testField' },
          { type: 'attribute', name: 'placeholder', value: 'placeholder' },
          { type: 'attribute', name: 'label', value: 'label' },
          { type: 'attribute', name: 'help-text', value: 'help-text' },
          { type: 'attribute', name: 'clearable', value: true },
          { type: 'slot', name: 'prefix', value: '<span slot="prefix">prefix</span>' },
          {
            type: 'slot',
            name: 'suffix',
            value: '<sd-icon slot="suffix" library="global-resources" name="system/picture"></sd-icon>'
          }
        ],
        args
      })}
      <input type="submit" value="SUBMIT" />
    </form>`;
  }
};
