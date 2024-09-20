import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-checkbox');
const { generateTemplate } = storybookTemplate('sd-checkbox');
const { overrideArgs } = storybookHelpers('sd-checkbox');

/**
 * Used to toggle an option on or off.
 *
 * **Related components:**
 * - [sd-checkbox-group](?path=/docs/components-sd-checkbox-group--docs)
 *
 * **Related templates:**
 * - [Checkbox Group](?path=/docs/templates-checkbox-group--docs)
 */

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  tags: ['!dev'],
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Checkbox' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2216-24471&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of the input checkbox:
 * - `lg` (default)
 * - `sm`
 *
 * This attribute affects the font-size within the element, while the element itself remains the same size.
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
 * Use the `disabled` attribute to disable an input checkbox. Clicks will be suppressed until the disabled state is removed.
 */
export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
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
      <sd-checkbox required>Required</sd-checkbox>
    </div>
  `
};

/**
 * The component gets `invalid` state when the form is not valid.
 *
 * For an invalid checkbox an error-text underneath (or if used in a group underneath the checkbox-group) is mandatory.
 */

export const Invalid = {
  name: 'Invalid',
  render: () => html`
    <form id="form-example">
      <sd-checkbox id="checkbox-example" required>Invalid</sd-checkbox>
      <sd-button class="mt-4" type="submit" hidden>Submit</sd-button>
    </form>
    <script>
      var checkbox = document.querySelector('#checkbox-example');
      var form = document.querySelector('#form-example');

      setTimeout(() => {
        checkbox.setCustomValidity('Error-text');
        form.reportValidity();
      }, 500);

      checkbox.addEventListener('sd-change', () => {
        checkbox.checked ? checkbox.setCustomValidity('') : checkbox.setCustomValidity('Error-text');
      });
    </script>
  `
};
