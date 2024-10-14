import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-option');
const { generateTemplate } = storybookTemplate('sd-option');
const { overrideArgs } = storybookHelpers('sd-option');

/**
 * Used to define selectable items within various form controls such as select.
 *
 * **Related Components**:
 * - [sd-select](?path=/docs/components-sd-select--docs)
 *
 * **Related templates**:
 * - [Autocomplete](?path=/docs/templates-autocomplete--docs)
 */

export default {
  title: 'Components/sd-option',
  tags: ['!dev'],
  component: 'sd-option',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2196-3579&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `size` attribute to change the option’s size:
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
 *
 * This will be inherited automatically from the size attribute of the parent `sd-select`.
 */

export const Size = {
  render: () =>
    html` <div class="flex flex-row gap-4 h-[260px]">
      <sd-select label="Large" placeholder="Please Select" placement="bottom" max-options-visible="3">
        <sd-option value="option-1" size="lg">Option 1</sd-option>
        <sd-option value="option-2" size="lg">Option 2</sd-option>
        <sd-option value="option-3" size="lg">Option 3</sd-option>
      </sd-select>
      <sd-select label="Medium" placeholder="Please Select" placement="bottom" max-options-visible="3" size="md">
        <sd-option value="option-1" size="md">Option 1</sd-option>
        <sd-option value="option-2" size="md">Option 2</sd-option>
        <sd-option value="option-3" size="md">Option 3</sd-option>
      </sd-select>
      <sd-select label="Small" placeholder="Please Select" placement="bottom" max-options-visible="3" size="sm">
        <sd-option value="option-1" size="sm">Option 1</sd-option>
        <sd-option value="option-2" size="sm">Option 2</sd-option>
        <sd-option value="option-3" size="sm">Option 3</sd-option>
      </sd-select>
    </div>`
};

/**
 * Use the `checkbox` attribute to make it a checkbox.
 *
 * Enabled automatically when using `sd-select` with attribute `checklist` set to `true`.
 */
export const Checkbox = {
  render: () =>
    html`<div class="h-[260px]">
      <sd-select
        class="max-w-[300px]"
        label="Checkbox"
        placeholder="Please Select"
        placement="bottom"
        max-options-visible="3"
        multiple
      >
        <sd-option value="option-1" checkbox>Checkbox Option 1</sd-option>
        <sd-option value="option-2" checkbox>Checkbox Option 2</sd-option>
        <sd-option value="option-3" checkbox>Checkbox Option 3</sd-option>
      </sd-select>
    </div> `
};

/**
 * Parent component `sd-select` controls state of `sd-option`.
 */

export const Selected = {
  render: () =>
    html`<div class="flex flex-row gap-12 h-[260px]">
      <sd-select
        label="Selected option"
        placeholder="Please Select"
        placement="bottom"
        size="lg"
        max-options-visible="3"
      >
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
      <sd-select
        label="Multiple selected option"
        placeholder="Please Select"
        placement="bottom"
        size="lg"
        max-options-visible="3"
        multiple
      >
        <sd-option value="option-1" checkbox>Checkbox Option 1</sd-option>
        <sd-option value="option-2" checkbox>Checkbox Option 2</sd-option>
        <sd-option value="option-3" checkbox>Checkbox Option 3</sd-option>
      </sd-select>
    </div>`
};

/**
 * Use the `disabled` attribute to disable an option.
 */

export const Disabled = {
  render: () =>
    html`<div class="flex flex-row gap-12 h-[260px]">
      <sd-select label="Disabled Options" placeholder="Please Select" placement="bottom" max-options-visible="3">
        <sd-option value="option-1" disabled>Option 1</sd-option>
        <sd-option value="option-2" disabled>Option 2</sd-option>
        <sd-option value="option-3" disabled>Option 3</sd-option>
      </sd-select>
      <sd-select
        label="Disabled Checkbox Options"
        placeholder="Please Select"
        placement="bottom"
        max-options-visible="3"
        multiple
      >
        <sd-option value="option-1" disabled checkbox>Checkbox Option 1</sd-option>
        <sd-option value="option-2" disabled checkbox>Checkbox Option 2</sd-option>
        <sd-option value="option-3" disabled checkbox>Checkbox Option 3</sd-option>
      </sd-select>
    </div>`
};
