import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-display');
const { overrideArgs } = storybookHelpers('sd-display');
const { generateTemplate } = storybookTemplate('sd-display');

export default {
  title: 'Styles/sd-display',
  tags: ['!dev', 'autodocs'],
  component: 'sd-display',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2705-24820&t=yS054qhxgjorbMDv-4'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};

/**
 * Use the `sd-display--size-*` classes for alternative appearances.
 * - `sd-display` (default)
 * - `sd-display--size-3xl`
 * - `sd-display--size-xl`
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-6">
      <div class="sd-display">Lorem ipsum</div>
      <div class="sd-display sd-display--size-3xl">Lorem ipsum</div>
      <div class="sd-display sd-display--size-xl">Lorem ipsum</div>
    </div>
  `
};

/**
 * Use the `sd-display--inverted` class when displayed on primary background.
 */

export const Inverted = {
  render: () => {
    return html` <div class="p-4 bg-primary">
      <div class="sd-display sd-display--inverted">Lorem Ipsum</div>
    </div>`;
  }
};
