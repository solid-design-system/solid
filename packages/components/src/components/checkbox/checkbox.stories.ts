import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-checkbox');
const { generateTemplate } = storybookTemplate('sd-checkbox');
const { overrideArgs } = storybookHelpers('sd-checkbox');

/**
 * Checkboxes allow the user to toggle an option on or off.
 */

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  tags: ['!dev'],
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Q7E9GTBET7Gs2HyH1kbpu5/Checkbox-%2F-Checkbox-Group?type=design&node-id=0-1&mode=design&t=DV2yJRUqqYBrskyb-0'
    }
  }
};

/**
 * Default: This shows sd-checkbox in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of the input checkbox. This attribute affects the font-size within the element, while the element itself remains the same size.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox size="lg">Large</sd-checkbox>
      <sd-checkbox size="sm">Small</sd-checkbox>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable an input checkbox. Clicks will be suppressed until the disabled state is removed
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox>Enabled</sd-checkbox>
      <sd-checkbox disabled>Disabled</sd-checkbox>
    </div>
  `
};

/**
 * Use the `checked` attribute to activate the checkbox.
 */

export const Checked = {
  name: 'Checked',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox>Unchecked</sd-checkbox>
      <sd-checkbox checked>Checked</sd-checkbox>
    </div>
  `
};

/**
 * Use the `indeterminate` attribute to make the checkbox indeterminate.
 */

export const Indeterminate = {
  name: 'Indeterminate',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox indeterminate>Indeterminate</sd-checkbox>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const Required = {
  name: 'Required',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox>Not required</sd-checkbox>
      <sd-checkbox required>Required</sd-checkbox>
    </div>
  `
};

/**
 * Test invalid state inside a form.
 */

export const Invalid = {
  name: 'Invalid',
  render: () => html`
    <form>
      <sd-checkbox required>Checkbox</sd-checkbox>
      <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
    </form>
  `
};
