import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-display');
const { overrideArgs } = storybookHelpers('sd-display');
const { generateTemplate } = storybookTemplate('sd-display');

/**
 * Used to provide larger text sizes that are not used as headlines.
 */

export default {
  title: 'Styles/sd-display',
  tags: ['!dev'],
  component: 'sd-display',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2b3TvrfxawUSvpnQEqSowL/Display?type=design&node-id=954-4198&mode=design&t=JogAvP1YEInWjWEF-0'
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
 * Use `sd-display` modifiers for alternative appearances.
 * - `sd-display--size-default`
 * - `sd-display--size-3xl`
 * - `sd-display--size-4xl`
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-6">
      <div class="sd-display sd-display--size-4xl">Lorem ipsum</div>
      <div class="sd-display sd-display--size-3xl">Lorem ipsum</div>
      <div class="sd-display sd-display--size-default">Lorem ipsum</div>
    </div>
  `
};

/**
 * Use the `sd-display--inverted` class to make a display with inverted colors.
 */

export const Inverted = {
  render: () => {
    return html`<div class="p-4 bg-primary"><div class="sd-display sd-display--inverted">Inverted</div></div>`;
  }
};
