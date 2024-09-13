import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');
const { overrideArgs } = storybookHelpers('sd-radio-group');

/**
 * Used to group multiple input radio or radio buttons so they function as a single form control.
 *
 *  **Related components**:
 * - [sd-radio](?path=/docs/components-sd-radio--docs)
 * - [sd-radio-button](?path=/docs/components-sd-radio-button--docs)
 */

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2213-9389&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'label',
      value: `<label slot="label">Group Label</label>`
    },
    {
      type: 'slot',
      name: 'default',
      value: `<sd-radio value="1">Radio 1</sd-radio><sd-radio value="2">Radio 2</sd-radio><sd-radio value="3">Radio 3</sd-radio>`
    },
    { type: 'attribute', name: 'name', value: 'radio-group' },
    { type: 'attribute', name: 'value', value: '1' },
    { type: 'attribute', name: 'boldLabel', value: true }
  ]),
  argTypes
};

/**
 * Default: This shows sd-radio-group in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" size="lg" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>

      <sd-radio-group name="radio-group" size="sm" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `label` attribute to add a label on top. Include the 'boldLabel' attribute to make the label bold. (This is required for accessibility.)
 */

export const Label = {
  name: 'Label',
  render: () => html`
    <sd-radio-group name="radio-group" value="1" label="Group Label" boldLabel>
      <sd-radio value="1">Radio 1</sd-radio>
      <sd-radio value="2">Radio 2</sd-radio>
      <sd-radio value="3">Radio 3</sd-radio>
    </sd-radio-group>
  `
};

/**
 * Use the `orientation` attribute to set the orientation of the radio buttons.
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" orientation="vertical" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>

      <sd-radio-group name="radio-group" orientation="horizontal" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 *
 *
 * **Accessibility:** To ensure screen-reader compatibility, consider including a statement such as "Fields marked with an asterisk (*) are required" at the start of the form.
 */

export const Required = {
  name: 'Required',
  render: () => html`
    <form id="required-form" class="flex flex-col gap-8">
      <sd-radio-group name="radio-group" required boldlabel>
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Required Group</label>
      </sd-radio-group>

      <div class="flex gap-2">
        <sd-button class="w-min" type="submit">Submit</sd-button>
        <sd-button class="w-min" type="reset" variant="secondary">Reset</sd-button>
      </div>
    </form>

    <script type="module">
      // Wait for custom elements to be defined
      await Promise.all([customElements.whenDefined('sd-radio-group'), customElements.whenDefined('sd-button')]).then(
        () => {
          const form = document.getElementById('required-form');

          form.addEventListener('submit', event => {
            event.preventDefault();
            alert('This field is valid!');
          });
        }
      );
    </script>
  `
};

/**
 * Use the `disabled` attribute to disable the radio group.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
      <sd-radio-group name="radio-group" required boldLabel>
        <sd-radio value="1" disabled>Radio 1</sd-radio>
        <sd-radio value="2" disabled>Radio 2</sd-radio>
        <sd-radio value="3" disabled>Radio 3</sd-radio>
        <label slot="label">Disabled Group</label>
      </sd-radio-group>
    </form>
  `
};

/**
 * The component gets the `invalid` state when the form is not valid.
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
