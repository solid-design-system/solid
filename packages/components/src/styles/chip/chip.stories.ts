import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-chip');
const { overrideArgs } = storybookHelpers('sd-chip');
const { generateTemplate } = storybookTemplate('sd-chip');

/**
 * Used as a small, non-interactive label that represents a status, property or meta-data.
 *
 *  **Related templates**:
 * - [Chip](?path=/docs/templates-chip--docs)
 */

export default {
  title: 'Styles/sd-chip',
  component: 'sd-chip',
  tags: ['!dev'],
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
 * Use the `sd-chip` classes for alternative appearances:
 * - primary-200 is the default background color
 * - `sd-chip--primary-300`
 * - `sd-chip--primary-500`
 * - `sd-chip--white`
 */
export const Variants = {
  render: () =>
    html` <div class="flex gap-12 bg-neutral-100 p-8">
      <div class="sd-chip">primary-200</div>
      <div class="sd-chip sd-chip--primary-300">primary-300</div>
      <div class="sd-chip sd-chip--primary-500">primary-500</div>
      <div class="sd-chip sd-chip--white">white</div>
    </div>`
};
