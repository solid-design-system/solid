import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-option');
const { generateTemplate } = storybookTemplate('sd-option');
const { overrideArgs } = storybookHelpers('sd-option');

/**
 * Defines selectable items within various form controls such as select.
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
  parameters
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
 * Use the `variant` attribute to set the option’s variant.
 * - `default`
 * - `checkbox`: Enabled automatically when using `sd-select` with attribute `checklist` set to `true`.
 *
 * **Hint:**
 * Option can only be selected when utilized in sd-select.
 */

export const Variants = {
  render: () =>
    html`<div class="flex flex-row gap-4">
      <sd-option size="lg">Default Option</sd-option>
      <sd-option size="lg" checkbox="">Checkbox Option</sd-option>
    </div>`
};

/**
 * Use the `size` attribute to change the option’s size.
 * This will be inherited automatically from the size attribute of the parent `sd-select`.
 */

export const Size = {
  render: () =>
    html` <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <sd-option size="lg">Large</sd-option>
        <sd-option size="md">Medium</sd-option>
        <sd-option size="sm">Small</sd-option>
      </div>
      <div class="flex flex-row gap-4">
        <sd-option size="lg" checkbox>Large</sd-option>
        <sd-option size="md" checkbox>Medium</sd-option>
        <sd-option size="sm" checkbox>Small</sd-option>
      </div>
    </div>`
};

/**
 * Parent component `sd-select` controls state of `sd-option`.
 */

export const Selected = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <sd-select
        class="h-[160px] w-[420px]"
        label="Label"
        placeholder="Please Select"
        placement="bottom"
        size="lg"
        max-options-visible="3"
      >
        <sd-option value="option-1">Selected Option</sd-option>
      </sd-select>
      <sd-select
        class="h-[160px] w-[420px]"
        label="Label"
        placeholder="Please Select"
        placement="bottom"
        size="lg"
        max-options-visible="3"
      >
        <sd-option value="option-1" checkbox>Selected Option</sd-option>
      </sd-select>
    </div>`
};

/**
 * Use the `disabled` attribute to disable an option.
 */

export const Disabled = {
  render: () =>
    html`<div class="flex flex-row gap-4 bg-neutral-100">
      <sd-option disabled>Disabled</sd-option>
      <sd-option disabled checkbox>Disabled</sd-option>
    </div>`
};
