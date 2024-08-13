import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-option');
const { generateTemplate } = storybookTemplate('sd-option');
const { overrideArgs } = storybookHelpers('sd-option');

/**
 * Define the selectable items within various form controls such as `sd-select`
 */

export default {
  title: 'Components/sd-option',
  tags: ['!dev'],
  component: 'sd-option',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  argTypes,
  parameters: { ...parameters, backgrounds: { default: 'primary-100' } },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-option in its default state.
 */

export const Default = {
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * There's 2 `variants` for alternative use:
 * - `default`
 * - `checkbox`: Use the `checkbox` attribute to prefix a styled checkbox. Enabled automatically when using `sd-select` with attribute `checklist` set to `true`.
 */

export const Variants = {
  name: 'Variants',
  render: () =>
    html`<div class="flex flex-row gap-4">
      <sd-option size="lg">Option</sd-option>
      <sd-option size="lg" checkbox="">Option</sd-option>
    </div>`
};

/**
 * Use the `size` attribute to change a select’s size.
 * This will be inherited automatically from the size attribute of the parent `sd-select`.
 * - `Large` is the default size.
 * - `Medium` can be used as an alternative in tight spaces.
 * - `Small` is an alternative size for use in very tight spaces.
 */

export const Size = {
  name: 'Size',
  render: () =>
    html` <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <sd-option size="lg">Option</sd-option>
        <sd-option size="md">Option</sd-option>
        <sd-option size="sm">Option</sd-option>
      </div>
      <div class="flex flex-row gap-4">
        <sd-option size="lg" checkbox="">Option</sd-option>
        <sd-option size="md" checkbox="">Option</sd-option>
        <sd-option size="sm" checkbox="">Option</sd-option>
      </div>
    </div>`
};

/**
 * Use the `disabled` attribute to disable an option.
 */

export const Disabled = {
  render: () =>
    html`<div class="flex flex-row gap-4">
      <sd-option disabled>Option</sd-option>
      <sd-option disabled checkbox>Option</sd-option>
    </div>`
};
