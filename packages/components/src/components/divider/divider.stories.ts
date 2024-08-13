import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-divider');
const { overrideArgs } = storybookHelpers('sd-divider');

/**
 * Used to separate content or sections from each other and make the content easier to read for the user.
 */

export default {
  title: 'Components/sd-divider',
  tags: ['!dev'],
  component: 'sd-divider',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: { ...parameters }
};

export const Default = {
  name: 'Default',
  render: () => html`<sd-divider orientation="horizontal" class="w-[120px]"></sd-divider>`
};

/**
 * Set the component's size with width (horizontal) or height (vertical) via CSS or inline-styles
 */
export const Size = {
  name: 'Size',
  render: () => {
    return html` <div class="flex items-center gap-12">
      <sd-divider orientation="horizontal" class="w-[50px]"></sd-divider>
      <sd-divider orientation="horizontal" class="w-[150px]"></sd-divider>
      <sd-divider orientation="vertical" class="h-[50px]"></sd-divider>
      <sd-divider orientation="vertical" class="h-[150px]"></sd-divider>
    </div>`;
  }
};

/**
 * Use the `orientation` attribute to set the axis of a divider.
 */
export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-divider orientation="horizontal" class="w-[120px]"></sd-divider>
      <sd-divider orientation="vertical" class="h-[120px]"></sd-divider>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  name: 'Inverted',
  render: () => {
    return html`
      <div class="flex items-center gap-12 bg-primary p-8">
        <sd-divider orientation="horizontal" class="w-[120px]" inverted></sd-divider>
      </div>
    `;
  }
};
