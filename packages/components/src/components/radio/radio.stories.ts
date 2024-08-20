import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio');
const { generateTemplate } = storybookTemplate('sd-radio');
const { overrideArgs } = storybookHelpers('sd-radio');

/**
 * Allows the user to select a single option from a group.
 */

export default {
  title: 'Components/sd-radio',
  tags: ['!dev'],
  component: 'sd-radio',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Radio' }]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Default: This shows sd-radio in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of the input radio. This attribute affects the font-size within the element, while the element itself remains the same size.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio value="1" size="lg">Large</sd-radio>
      <sd-radio value="2" size="sm">Small</sd-radio>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable a input radio.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio value="1" disabled>Disabled</sd-radio>
    </div>
  `
};

/**
 * For an invalid radio-group (since radios always come in groups) an error-text underneath the group is mandatory.
 */

export const Invalid = {
  name: 'Invalid',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio value="1" invalid>Invalid</sd-radio>
    </div>
  `
};
