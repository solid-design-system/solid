import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-loader');
const { overrideArgs } = storybookHelpers('sd-loader');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-loader',
  component: 'sd-loader',
  args: overrideArgs([{ type: 'attribute', name: 'color', value: 'primary' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=15949-2913&p=f&m=dev'
    }
  }
};

export const Default = {
  render: () => {
    return html` <div class="text-xl">
      <sd-loader color="primary"></sd-loader>
    </div>`;
  }
};

/**
 * Use the `color` attribute to set the loader's color:
 * - `currentColor` (default): used to inherit the `text-color` from the parent element
 * - `primary`: used on light backgrounds
 * - `white`: used on primary backgrounds
 */
export const Variants = {
  render: () => html`
    <div class="flex items-center gap-12">
      <div class="inline-flex text-xl">
        <sd-loader color="currentColor"></sd-loader>
      </div>
      <div class="inline-flex text-xl">
        <sd-loader color="primary"></sd-loader>
      </div>
      <div class="inline-flex bg-primary p-12 text-xl">
        <sd-loader color="white"></sd-loader>
      </div>
    </div>
  `
};

/**
 * Use the CSS property `font-size` to scale the loader proportionally.
 */
export const Size = {
  render: () =>
    html` <div class="flex gap-12 items-center">
      <div style="font-size: 4rem">
        <sd-loader color="primary"></sd-loader>
      </div>
      <div style="font-size: 2rem">
        <sd-loader color="primary"></sd-loader>
      </div>
      <div style="font-size: inherit">
        <sd-loader color="primary"></sd-loader>
      </div>
    </div>`
};
