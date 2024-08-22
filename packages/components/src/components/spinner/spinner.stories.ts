import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-spinner');
const { generateTemplate } = storybookTemplate('sd-spinner');

/**
 * Visual indicator with a looping animation that shows loading is in process.
 */

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
  tags: ['!dev'],
  args,
  argTypes,
  parameters
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Offers `color` variants for alternate experiences:
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
 * Use the `font-size` in CSS to scale the spinner proportionally.
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
