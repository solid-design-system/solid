import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-display');
const { overrideArgs } = storybookHelpers('sd-display');
const { generateTemplate } = storybookTemplate('sd-display');

/**
 * Used to provide larger text sizes that are not used as headlines.
 *
 * **Related templates**:
 * - [Headline, Display and Leadtext with Mark](?path=/docs/templates-headline-display-and-leadtext-with-mark--docs)
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

 * - `sd-display--size-4xl`: 4xl can be used as an alternative
* - `sd-display--size-3xl`: 3xl can be used as an alternative
 * - Extra large is the default display size
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-6">
      <div class="sd-display sd-display--size-4xl">Lorem ipsum</div>
      <div class="sd-display sd-display--size-3xl">Lorem ipsum</div>
      <div class="sd-display">Lorem ipsum</div>
    </div>
  `
};

/**
 * Use the `&--inverted` class when displayed on primary background.
 */

export const Inverted = {
  render: () => {
    return html`<div class="p-4 bg-primary"><div class="sd-display sd-display--inverted">Lorem Ipsum</div></div>`;
  }
};
