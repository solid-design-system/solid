import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-chip');
const { overrideArgs } = storybookHelpers('sd-chip');
const { generateTemplate } = storybookTemplate('sd-chip');

/**
 * A small, non-interactive label the represents a status, property or meta-data.
 *
 *  **Related templates**:
 * - [Chip](?path=/docs/templates-chip--docs)
 *
 */

export default {
  title: 'Styles/sd-chip',
  component: 'sd-chip',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    backgrounds: {
      default: 'neutral-100',
      values: [{ name: 'neutral-100', value: 'var(--bg-neutral-100)' }]
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
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
 * Use the `variant` classes for alternative appearances:
 * - `--primary-200` (default): use the class `sd-chip--primary-200`
 * - `--primary-300`: use the class `sd-chip--primary-300`
 * - `--primary-500`: use the class `sd-chip--primary-500`
 * - `--white`: use the class `sd-chip--white`
 */
export const Variants = {
  name: 'Variants',
  render: () =>
    html` <div class="flex gap-12 bg-neutral-100 p-8">
      <div class="sd-chip sd-chip--primary-200">primary-200</div>
      <div class="sd-chip sd-chip--primary-300">primary-300</div>
      <div class="sd-chip sd-chip--primary-500">primary-500</div>
      <div class="sd-chip sd-chip--white">white</div>
    </div>`
};
