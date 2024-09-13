/* eslint-disable lit/attribute-value-entities */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');
const { overrideArgs } = storybookHelpers('sd-select');

const threeOptionsConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value:
    '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
};
const labelConstant: ConstantDefinition = { type: 'attribute', name: 'label', value: 'Label' };

/**
 * Used to choose items from a menu of predefined options.
 *
 * **Related templates:**
 * - [Select Grouping](?path=/docs/templates-select--docs)
 * - [Select with Tooltip](?path=/docs/templates-select--docs#select%20with%20tooltip)
 */
export default {
  title: 'Components/sd-select',
  tags: ['!dev'],
  component: 'sd-select',
  args: overrideArgs([
    threeOptionsConstant,
    labelConstant,
    { type: 'attribute', name: 'placeholder', value: 'Please Select' },
    { type: 'attribute', name: 'max-options-visible', value: 3 }
  ]),
  argTypes: {
    ...argTypes,
    'value-attr': {
      name: 'value',
      table: {
        category: 'attributes',
        defaultValue: ''
      },
      description:
        'The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the value attribute will be a space-delimited list of values based on the options selected, and the value property will be an array. **For this reason, values must not contain spaces.**',
      control: 'text'
    }
  },
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2555-46781&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

/**
 * This shows sd-select in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div class="h-[260px] w-[400px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `size` attribute the size. It will cascade to slotted `sd-option` elements.
 */

export const Size = {
  render: () => html`
    <div class="flex gap-12 h-[500px]">
      <sd-select size="lg" label="Label" placeholder="Large" placement="bottom" value="" class="test">
        <sd-option value="option-1" size="lg">Option 1</sd-option>
        <sd-option value="option-2" size="lg">Option 2</sd-option>
        <sd-option value="option-3" size="lg">Option 3</sd-option>
        <sd-option value="option-4" size="lg">Option 4</sd-option>
        <sd-option value="option-5" size="lg">Option 5</sd-option>
      </sd-select>

      <sd-select size="md" label="Label" placeholder="Medium" placement="bottom" value="" class="test">
        <sd-option value="option-1" size="md">Option 1</sd-option>
        <sd-option value="option-2" size="md">Option 2</sd-option>
        <sd-option value="option-3" size="md">Option 3</sd-option>
        <sd-option value="option-4" size="md">Option 4</sd-option>
        <sd-option value="option-5" size="md">Option 5</sd-option>
      </sd-select>

      <sd-select size="sm" label="Label" placeholder="Small" placement="bottom" value="">
        <sd-option value="option-1" size="sm">Option 1</sd-option>
        <sd-option value="option-2" size="sm">Option 2</sd-option>
        <sd-option value="option-3" size="sm">Option 3</sd-option>
        <sd-option value="option-4" size="sm">Option 4</sd-option>
        <sd-option value="option-5" size="sm">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `placement` attribute to define where the select panel should appear.
 */

export const Placement = {
  render: () => html`
    <div class="flex items-center gap-12 h-[500px]">
      <sd-select class="self-baseline" size="lg" label="Label" placement="bottom" value="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>

      <sd-select size="lg" label="Label" placement="top" value="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `label` attribute to give the select element an accessible label.<br />For labels that contain HTML, use the `label` slot instead.
 */

export const Label = {
  render: () => html`
    <div class="flex gap-12 h-[500px]">
      <sd-select size="lg" label="Label Attribute" placement="bottom" value="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>

      <sd-select size="lg" placement="bottom" value="">
        <div slot="label" class="text-lg">Label Slot</div>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `placeholder` attribute to show a placeholder when no option is selected.
 */

export const Placeholder = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-select size="lg" label="Label" placeholder="Placeholder example" placement="bottom" value="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable the select.
 */

export const Disabled = {
  render: () => html`
    <div class="w-[400px]">
      <sd-select size="lg" label="Label" placeholder="Disabled" placement="bottom" value="" disabled>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `help-text` attribute to provide additional context or instructions.
 */

export const HelpText = {
  render: () => html`
    <div class="flex gap-12 h-[500px]">
      <sd-select size="lg" label="Label" placement="bottom" value="" help-text="Help text Attribute">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>

      <sd-select size="lg" label="Label" placement="bottom" value="">
        <div slot="help-text" class="text-lg">Help text Slot</div>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `clearable` attribute to add a clear button that removes the selected value.
 */

export const Clearable = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-select size="lg" label="Label" placement="bottom" clearable="" value="option-1">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `multiple` attribute to allow multiple options to be selected.
 */

export const Multiple = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-select size="lg" label="Label" placement="bottom" multiple="" value="option-1 option-2">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `useTags` attribute to display selected options as tags using the `sd-tag` component.
 *
 * **Hint:** it requires the `multiple` attribute to be set.
 */

export const useTags = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-select size="lg" label="Label" placement="bottom" multiple="" value="option-1 option-2" useTags>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `max-options-visible` attribute to define the maximum number of selected options that will be visible.
 *
 * **Hint:** it requires the `multiple` and `useTags` attributes to be set.<br />After the maximum number of options is reached, the select will display a message indicating how many more options are selected.<br />To remove the limit, set the attribute to `0`.
 */

export const MaxOptionsVisible = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-select
        size="lg"
        label="Label"
        placement="bottom"
        multiple=""
        value="option-1 option-2 option-3"
        useTags
        max-options-visible="2"
      >
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const Required = {
  render: () => html`
    <div class="w-[400px] h-[400px]">
      <sd-select size="lg" label="Required" placeholder="Please Select" placement="bottom" value="" required="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
    </div>
  `
};

/**
 * The component gets `valid` state when the input is valid.<br />Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

export const Valid = {
  render: () => html`
    <style>
      sd-select.valid-example::part(display-input) {
        color: #181818;
      }
    </style>
    <div class="w-[400px] h-[400px]">
      <sd-select
        size="lg"
        placement="bottom"
        label="Label"
        placeholder="Please Select"
        style-on-valid=""
        value="option-1"
        class="valid-example"
      >
        <sd-option class="option" value="option-1">Option 1</sd-option>
        <sd-option class="option" value="option-2">Option 2</sd-option>
        <sd-option class="option" value="option-3">Option 12</sd-option>
      </sd-select>
    </div>

    <script>
      var validSelect = document.querySelector('.valid-example');
      var options = validSelect.querySelectorAll('.option');
      setTimeout(() => {
        validSelect.checkValidity();
        validSelect.reportValidity();
      }, 500);
    </script>
  `
};

/**
 * The component gets `invalid` state when the form is not valid.
 */

export const Invalid = {
  render: () => html`
    <div class="w-[400px] h-[300px]">
      <sd-select
        size="lg"
        placement="bottom"
        label="Label"
        placeholder="Please Select"
        style-on-valid=""
        value=""
        required=""
        clearable=""
        class="invalid-example"
      >
        <sd-option class="option" value="option-1">Option 1</sd-option>
        <sd-option class="option" value="option-2">Option 2</sd-option>
        <sd-option class="option" value="option-3">Option 3</sd-option>
      </sd-select>
    </div>

    <script>
      var invalidSelect = document.querySelector('.invalid-example');
      setTimeout(() => {
        invalidSelect.checkValidity();
        invalidSelect.reportValidity();
        invalidSelect.setCustomValidity('Error text');
      }, 500);
    </script>
  `
};
