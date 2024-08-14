import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-spinner');

/**
 * A visual indicator with a looping animation that shows loading is in process in the background.
 */

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
  tags: ['!dev'],
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: () => html`<sd-spinner color="currentColor"></sd-spinner>`
};

/**
 * Offers 4 `color` variants for alternate experiences:
 * - `primary` (default): is the default color on light backgrounds
 * - `neutral-500`: is only used for disabled buttons
 * - `neutral-600`: is only used for inverted disabled buttons
 * - `white`: is used on primary backgrounds and for inverted buttons
 * - `currentColor`: is used to inherit the color from the parent element
 */

export const Variants = {
  name: 'Variants',
  parameters: { controls: { exclude: 'color' } },
  render: () =>
    html` <div class="flex flex-row items-center gap-12">
      <div class="p-4">
        <sd-spinner color="primary"></sd-spinner>
      </div>
      <div class="p-4 text-neutral-500">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
      <div class="p-4 text-neutral-600">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
      <div class="bg-primary p-4">
        <sd-spinner color="white"></sd-spinner>
      </div>
      <div class="bg-neutral-100 p-4">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
    </div>`
};

/**
 * Spinner has no size properties. It can scale proportionally.
 *
 * Use the `font-size` in css to scale the spinner.
 */

export const Size = {
  name: 'Size',
  render: () =>
    html`<div class="flex flex-row gap-12">
      <div style="font-size: inherit">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
      <div style="font-size: 1rem">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
      <div style="font-size: 2rem">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
      <div style="font-size: 4rem">
        <sd-spinner color="currentColor"></sd-spinner>
      </div>
    </div>`
};
