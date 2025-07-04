import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-spinner');
const { generateTemplate } = storybookTemplate('sd-spinner');
const { overrideArgs } = storybookHelpers('sd-select');

/**
 *
 * <sd-notification variant="warning" open class="mb-4">**Warning:** The \`sd-spinner\` will be deprecated in the future. Please use the \`sd-loader\` component instead.</sd-notification>
 *
 * **Known browser issues:**
 * - The 'sd-spinner' component may experience spinner animation issues in Safari, causing them to appear wobbly.
 *
 */

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
  tags: ['!dev', 'autodocs'],
  args: overrideArgs({ type: 'attribute', name: 'color', value: 'primary' }),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2115-17681&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `color` attribute to set the spinner's color:
 * - `currentColor` (default): used to inherit the `text-color` from the parent element
 * - `primary`: used on light backgrounds
 * - `white`: used on primary backgrounds
 */

export const Variants = {
  render: () =>
    html` <div class="flex flex-row items-center gap-12">
      <div class="p-4">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
      <div class="p-4">
        <sd-spinner color="primary"></sd-spinner>
      </div>
      <div class="bg-primary p-4">
        <sd-spinner color="white"></sd-spinner>
      </div>
    </div>`
};

/**
 * Use the CSS property `font-size` to scale the spinner proportionally.
 */
export const Size = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <div style="font-size: inherit">
        <sd-spinner color="primary"></sd-spinner>
      </div>
      <div style="font-size: 2rem">
        <sd-spinner color="primary"></sd-spinner>
      </div>
      <div style="font-size: 4rem">
        <sd-spinner color="primary"></sd-spinner>
      </div>
    </div>`
};
