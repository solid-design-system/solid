import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-badge');
const { overrideArgs } = storybookHelpers('sd-badge');
const { generateTemplate } = storybookTemplate('sd-badge');

/**
 *
 * **Known browser issues:**
 * - When the `sd-badge` with `role="status"` is placed inside a `sd-button`, Safari is not announcing any update
 * and, in cases where there is multiple elements inside the `sd-badge`, Firefox is only announcing the content
 * of the element that has updates.
 *
 */

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  tags: ['!dev', 'autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2116-4927&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: '8' }]),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the badge’s variant:
 *
 * - `blue`
 * - `green`
 * - `red`
 *
 * __Hint:__ Select blue, green, or red notifications depending on the emphasis you desire. Blue notifications integrate smoothly with the overall design, green notifications attract more attention, and red notifications make notifications stand out the most. Don’t associate colour variants with success or error states.
 */
export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="flex gap-12">
      <sd-badge variant="blue">8</sd-badge>
      <sd-badge variant="green">8</sd-badge>
      <sd-badge variant="red">8</sd-badge>
    </div>
  `
};

/**
 * Use the `size` attribute to set the badge’s size:
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
 *
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-badge size="lg">8</sd-badge>
      <sd-badge size="md">8</sd-badge>
      <sd-badge size="sm">8</sd-badge>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  name: 'Inverted',
  render: () => html`
    <div class="flex gap-12 bg-primary p-4">
      <sd-badge inverted>8</sd-badge>
      <sd-badge variant="green" inverted>8</sd-badge>
      <sd-badge variant="red" inverted>8</sd-badge>
    </div>
  `
};

/**
 * The max value is defined by the application.
 *
 * A `+` should be used to show overflow.
 */

export const Overflow = {
  name: 'Overflow',
  render: () => html`
    <div class="flex gap-12 p-4">
      <sd-badge>99</sd-badge>
      <sd-badge>99+</sd-badge>
      <sd-badge>999</sd-badge>
      <sd-badge>999+</sd-badge>
    </div>
  `
};
