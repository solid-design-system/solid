import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-flag');
const { overrideArgs } = storybookHelpers('sd-flag');
const { generateTemplate } = storybookTemplate('sd-flag');

/**
 * Used as a small, non-interactive label that represents a category.
 *
 * **Related templates**:
 * - [Flag](?path=/docs/templates-flag--docs)
 */

export default {
  title: 'Styles/sd-flag',
  tags: ['!dev'],
  component: 'sd-flag',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2106-34451&t=ohgrgpEVGgKzqMzU-4'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Flag' }]),
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
 * Use the `sd-flag` classes for alternative appearances:
 * - `sd-flag--neutral-200` (default)
 * - `sd-flag--neutral-300`
 * - `sd-flag--neutral-500`
 * - `sd-flag--white`
 */

export const Variants = {
  render: () =>
    html` <div class="flex gap-4 bg-neutral-100 p-8">
      <div class="sd-flag sd-flag--neutral-200">Default</div>
      <div class="sd-flag sd-flag--neutral-300">Neutral 300</div>
      <div class="sd-flag sd-flag--neutral-500">Neutral 500</div>
      <div class="sd-flag sd-flag--white">White</div>
    </div>`
};