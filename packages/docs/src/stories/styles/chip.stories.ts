import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-chip');
const { overrideArgs } = storybookHelpers('sd-chip');
const { generateTemplate } = storybookTemplate('sd-chip');

/**
 *
 * <sd-notification variant="info" open class="only-theme-kid mb-4">Add "shadow-sm" manually with css property box-shadow.</sd-notification>
 *
 */

export default {
  title: 'Styles/sd-chip',
  component: 'sd-chip',
  tags: ['!dev', 'autodocs'],
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Chip' }),
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2106-26033&t=yS054qhxgjorbMDv-4'
    }
  },
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<span class="%CLASSES%">%SLOT%</span>' },
      args
    });
  }
};

/**
 * Use the `&--color-*` classes to switch between color families:
 *
 * - sd-chip--color-primary is the default appearance
 * - `sd-chip--color-neutral`
 * - `sd-chip--color-white`
 */
export const Color = {
  render: () =>
    html`<div class="flex gap-12 items-center">
      <div class="sd-chip sd-chip--color-primary">primary</div>
      <div class="sd-chip sd-chip--color-neutral">neutral</div>
      <div class="sd-chip sd-chip--color-white">white</div>
    </div>`
};

/**
 * Use the `&--shade-*` classes to select an emphasis level within the chosen color
 * (filled uses `subtle`–`high`, outlined uses `low`–`strong`):
 *
 * - sd-chip--shade-subtle is the default appearance
 * - `sd-chip--shade-low`
 * - `sd-chip--shade-medium`
 * - `sd-chip--shade-high`
 * - `sd-chip--shade-none` (white only)
 */
export const Shade = {
  render: () =>
    html`<div class="flex gap-12 items-center">
      <div class="sd-chip sd-chip--shade-subtle">subtle</div>
      <div class="sd-chip sd-chip--shade-low">low</div>
      <div class="sd-chip sd-chip--shade-medium">medium</div>
      <div class="sd-chip sd-chip--shade-high">high</div>
      <div class="sd-chip sd-chip--shade-none">none</div>
    </div>`
};

/**
 * Use the `sd-chip--size-lg` class to have a larger chip.
 */
export const Size = {
  render: () =>
    html`<div class="flex gap-12 items-center">
      <div class="sd-chip">sm</div>
      <div class="sd-chip sd-chip--size-lg">lg</div>
    </div>`
};

/**
 * Use the `sd-chip--outline` class to switch between a filled or border-only style.
 */
export const Outlined = {
  render: () =>
    html`<div class="flex gap-12 items-center">
      <div class="sd-chip">filled</div>
      <div class="sd-chip sd-chip--outline">outlined</div>
    </div>`
};

/**
 * Use the `sd-chip--sharp` class to switch the corner style.
 */
export const Rounded = {
  render: () =>
    html`<div class="flex gap-12 items-center">
      <div class="sd-chip">rounded</div>
      <div class="sd-chip sd-chip--sharp">sharp</div>
    </div>`
};
