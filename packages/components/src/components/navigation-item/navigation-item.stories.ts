import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { overrideArgs } = storybookHelpers('sd-navigation-item');
const { argTypes, parameters } = storybookDefaults('sd-navigation-item');
const { generateTemplate } = storybookTemplate('sd-navigation-item');

// Stories
export default {
  tags: ['!dev'],
  title: 'Components/sd-navigation-item',
  component: 'sd-navigation-item',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Navigation' }]),
  argTypes,
  parameters: parameters
};

/**
 * The `sd-navigation-item` in its default state as a horizontally oriented button.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the font size of the navigation item.
 * - `sm`
 * - `base` (default)
 * - `lg`
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-6">
      <sd-navigation-item size="sm">Small</sd-navigation-item>
      <sd-navigation-item>Default</sd-navigation-item>
      <sd-navigation-item size="lg">Large</sd-navigation-item>
    </div>
  `
};

/**
 * Use the attribute `href` to change the navigation item to a link.
 * - `href` attribute - The URL to navigate to.
 * - `target` attribute - The target of the link. Can assume the values `_blank`, `_parent`, `_self`, or `_top`.
 * - `download` attribute - The filename to download the link as.
 */

export const Link = {
  render: () => html`
    <sd-navigation-item href="https://www.union-investment.de/" target="_blank">Link</sd-navigation-item>
  `
};

/**
 * Add `children` slot to the navigation item to create an accordion.
 * - Must have the `vertical` attribute.
 * - A `chevron` will be added regardless of the `chevron` attribute.
 * - The `open` attribute can be used to control the open state of the accordion.
 */
export const Accordion = {
  render: () =>
    html`<sd-navigation-item vertical>
      <div style="width: 245px; text-align: left;">Accordion</div>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 1 </sd-navigation-item>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 2 </sd-navigation-item>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 3 </sd-navigation-item>
    </sd-navigation-item>`
};

/**
 * Use the attribute `vertical` to change the orientation of the navigation item.
 */

export const Vertical = {
  render: () =>
    html` <sd-navigation-item vertical>Vertical</sd-navigation-item
      ><sd-navigation-item>Non-Vertical</sd-navigation-item>`
};

/**
 * Use the `divider` attribute to add a divider above the navigation item.
 * - Only works with `vertical` attribute.
 */

export const Divider = {
  render: () => html` <sd-navigation-item vertical divider>Link</sd-navigation-item> `
};

/**
 * Use the `chevron` attribute to add a chevron to the navigation item.
 * - Only works with `vertical` attribute.
 * - `Button` and `Link` variants show right facing chevron dependent on property.
 * - `Accordion` variant always show up / down chevron to reflect open state.
 */

export const Chevron = {
  render: () => html` <sd-navigation-item vertical chevron>Chevron</sd-navigation-item>`
};

/**
 * Use the `description` to provide a description for the navigation item.
 * - Only works with `vertical` attribute.
 */

export const Description = {
  render: () =>
    html` <sd-navigation-item vertical>
      With a description
      <p slot="description">Lorem ipsum dolor sit amet.</p>
    </sd-navigation-item>`
};

/**
 * Use `indented` attribute to add padding to the left side.
 * - Only works with `vertical` attribute.
 */

export const Indented = {
  render: () => html`<sd-navigation-item vertical indented>Indented</sd-navigation-item>`
};

/**
 * Use `relaxed` attribute to add padding to both sides.
 * - Only works with `vertical` attribute.
 */

export const Relaxed = {
  render: () => html`<sd-navigation-item vertical relaxed>Relaxed</sd-navigation-item>`
};

/**
 * Use the `current` attribute to change the navigation item to a current state.
 */

export const Current = {
  render: () =>
    html`<div class="flex flex-col gap-6">
      <sd-navigation-item class="w-[100px]" current>Current</sd-navigation-item
      ><sd-navigation-item vertical current>Vertical Current</sd-navigation-item>
    </div>`
};

/**
 * Use the `disabled` attribute to disable the navigation item.
 */

export const Disabled = {
  render: () => html` <sd-navigation-item disabled>Disabled</sd-navigation-item> `
};
