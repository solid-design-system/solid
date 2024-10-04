import '../../solid-components';
import {
  type ConstantDefinition,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate
} from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

const { argTypes, parameters } = storybookDefaults('sd-combobox');
const { generateTemplate } = storybookTemplate('sd-combobox');
const { overrideArgs } = storybookHelpers('sd-select');

const threeOptionsConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value:
    '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
};

const labelConstant: ConstantDefinition = { type: 'attribute', name: 'label', value: 'Label' };

export default {
  title: 'Components/sd-combobox',
  tags: ['!dev'],
  component: 'sd-combobox',
  args: overrideArgs([
    threeOptionsConstant,
    labelConstant,
    { type: 'attribute', name: 'placeholder', value: 'Please Select' },
    { type: 'attribute', name: 'max-options-visible', value: 3 }
  ]),
  argTypes: {
    ...argTypes
  },
  parameters: {
    ...parameters
  }
};

export const Default = {
  render: (args: any) => {
    return html`<div class="h-[260px] w-[400px]">${generateTemplate({ args })}</div>`;
  }
};
