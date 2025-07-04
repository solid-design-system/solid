import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { overrideArgs } = storybookHelpers('sd-navigation-item');
const { argTypes, parameters } = storybookDefaults('sd-navigation-item');
const { generateTemplate } = storybookTemplate('sd-navigation-item');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-navigation-item',
  component: 'sd-navigation-item',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Navigation' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3051-15144&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the font size of the navigation item:
 * - `sm`: Used for 3rd level navigation
 * - `base` (default)
 * - `lg`: Used for 2nd level navigation
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
 * Use the `vertical` attribute to set the axis of the navigation-item.
 */

export const Orientation = {
  render: () =>
    html`<sd-navigation-item>Horizontal Navigation</sd-navigation-item>
      <sd-navigation-item vertical>Vertical Navigation</sd-navigation-item>`
};

/**
 * - Use the `href`attribute to change the navigation item to a link. Allows to set the URL to navigate to.
 * - Use the `target` attribute to specify where to open the link. Can assume the values `_blank`, `_parent`, `_self`, or `_top`.
 * - Use the `download` attribute to tell the browser to download the linked file as this filename.
 */
export const AsLink = {
  name: 'As Link',
  render: () => html`
    <sd-navigation-item href="https://www.union-investment.de/" target="_blank">Link</sd-navigation-item>
  `
};

/**
 * Use the `current` attribute to change the navigation item to a current state and make it bold.
 */
export const Current = {
  render: () =>
    html`<div class="flex flex-col gap-6">
      <sd-navigation-item class="w-[174px]" current>Current Horizontal</sd-navigation-item>
      <sd-navigation-item vertical current>Current Vertical</sd-navigation-item>
    </div>`
};

/**
 * Use the `disabled` attribute to disable the navigation item.
 */

export const Disabled = {
  render: () => html` <sd-navigation-item disabled>Disabled Navigation</sd-navigation-item> `
};

/**
 * Use the `divider` attribute to add a divider above the navigation item.
 *
 * __Hint:__ Only works with `vertical` attribute.
 */

export const Divider = {
  render: () => html` <sd-navigation-item vertical divider>Vertical Navigation with Divider</sd-navigation-item> `
};

/**
 * Use the `chevron` attribute to add a chevron to the navigation item.
 *
 * __Hints:__
 * - Only works with `vertical` attribute.
 * - `Button` and `Link` variants show right facing chevron dependent on property.
 * - `Accordion` variant always show up / down chevron to reflect open state.
 */

export const Chevron = {
  render: () => html` <sd-navigation-item vertical chevron>Vertical Navigation with Chevron</sd-navigation-item>`
};

/**
 * Add `children` slot to the navigation item to create an accordion.
 *
 * __Hints:__
 * - Only works with `vertical` attribute.
 * - A `chevron` will be added regardless of the `chevron` attribute.
 * - The `open` attribute can be used to control the open state of the accordion.
 */
export const Accordion = {
  render: () =>
    html`<sd-navigation-item vertical>
      <div>Vertical Navigation with Accordion</div>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 1 </sd-navigation-item>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 2 </sd-navigation-item>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 3 </sd-navigation-item>
    </sd-navigation-item>`
};

/**
 * Use the `separated` attribute, to have more that only one action. It is possible to use it as a link and an accordion simultaneously.
 *
 * __Hints:__
 * - Only works with a `children slot` and an `href` attribute.
 * - `target` and `download` attributes are optional.
 */
export const Separated = {
  render: () =>
    html`<sd-navigation-item href="https://www.union-investment.de/" target="_blank" vertical separated>
      <div>Vertical Navigation Separated</div>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 1 </sd-navigation-item>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 2 </sd-navigation-item>
      <sd-navigation-item vertical indented slot="children"> Sub Navigation 3 </sd-navigation-item>
    </sd-navigation-item>`
};

/**
 * Use the `description` slot to provide a description for the navigation item.
 *
 * __Hint:__ Only works with `vertical` attribute.
 */
export const Description = {
  render: () =>
    html` <sd-navigation-item vertical>
      Vertical Navigation with Description
      <p slot="description" class="sd-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullam.
      </p>
    </sd-navigation-item>`
};

/**
 * Use `indented` attribute to add padding to the left side.
 *
 * __Hint:__ Only works with `vertical` attribute.
 */

export const Indented = {
  render: () =>
    html`<div>
      <sd-navigation-item vertical indented>Indented Navigation</sd-navigation-item>
    </div>`
};

/**
 * Use `relaxed` attribute to add padding to both sides.
 *
 * __Hint:__ Only works with `vertical` attribute.
 */

export const Relaxed = {
  render: () =>
    html`<div class="w-[400px]">
      <sd-navigation-item vertical relaxed>Relaxed Navigation</sd-navigation-item>
    </div>`
};
