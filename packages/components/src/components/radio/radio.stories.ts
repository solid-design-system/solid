import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio');
const { generateTemplate } = storybookTemplate('sd-radio');
const { overrideArgs } = storybookHelpers('sd-radio');

/**
 * Used to allow the user to select a single option from a group.
 *
 *  **Related components**:
 * - [sd-radio-group](?path=/docs/components-sd-radio-group--docs)
 * - [sd-radio-button](?path=/docs/components-sd-radio-button--docs)
 */

export default {
  title: 'Components/sd-radio',
  tags: ['!dev'],
  component: 'sd-radio',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Radio' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2213-9389&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of the input radio (`md` equals `lg` but added for consistency reason on input elements):
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
 *
 * This attribute affects the font-size within the element, while the element itself remains the same size.
 */
export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group size="lg" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
      <sd-radio-group size="md" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
      <sd-radio-group size="sm" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable an input radio.
 */
export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <sd-radio-group label="Disabled Radio in Group" boldLabel value="1">
      <sd-radio value="1">Radio 1</sd-radio>
      <sd-radio value="2" disabled>Radio 2</sd-radio>
      <sd-radio value="3">Radio 3</sd-radio>
    </sd-radio-group>
  `
};

/**
 * The component gets “invalid” state when the form is not valid.
 *
 * For an invalid radio-group (since radios always come in groups) an error-text underneath the group is mandatory.
 */
export const Invalid = {
  name: 'Invalid',
  render: () => html`
    <form id="invalid-form" class="flex flex-col gap-8">
      <sd-radio-group name="radio-group" id="invalid-radio" required boldlabel>
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Invalid Group</label>
      </sd-radio-group>
    </form>
    <script type="module">
      // Wait for custom elements to be defined
      await Promise.all([customElements.whenDefined('sd-radio-group'), customElements.whenDefined('sd-button')]).then(
        () => {
          const input = document.getElementById('invalid-radio');
          input.reportValidity();
        }
      );
    </script>
  `
};
