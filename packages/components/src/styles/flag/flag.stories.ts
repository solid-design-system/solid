import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-flag');
const { overrideArgs } = storybookHelpers('sd-flag');

/**
 * A small, non-interactive label the represents a category.
 *
 * **Related templates**:
 * - [Flag](?path=/docs/templates-flag--docs)
 * - [Teaser with Chip and Flag](?path=/docs/templates-teaser-with-chip-and-flag--docs)
 */

export default {
  title: 'Styles/sd-flag',
  tags: ['!dev'],
  component: 'sd-flag',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vQ57OHDm26QE1gtZKtfb6L/Flag?type=design&node-id=804-717&mode=design&t=bdhcOj9ub57hEPZl-0'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Lorem Ipsum' }]),
  argTypes
};

export const Default = {
  name: 'Default',
  render: () => html` <div class="sd-flag">Default</div> `
};

/**
 * Use the `classes` variant for alternative appearances:
 * - neutral-200 (default): use the class `sd-flag--neutral-200`
 * - neutral-300: use the class `sd-flag--neutral-300`
 * - neutral-500: use the class `sd-flag--neutral-500`
 * - white: use the class `sd-flag--white`
 */

export const Variants = {
  name: 'Variants',
  render: () =>
    html` <div class="flex gap-4 bg-neutral-100 p-8">
      <div class="sd-flag sd-flag--neutral-200">Default</div>
      <div class="sd-flag sd-flag--neutral-300">Neutral 300</div>
      <div class="sd-flag sd-flag--neutral-500">Neutral 500</div>
      <div class="sd-flag sd-flag--white">White</div>
    </div>`
};
