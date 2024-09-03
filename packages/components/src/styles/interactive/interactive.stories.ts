import '../../solid-components';
import { html } from 'lit';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-interactive');
const { overrideArgs } = storybookHelpers('sd-interactive');
const { generateTemplate } = storybookTemplate('sd-interactive');

/**
 * Used in interactive elements as a "quartery" button that has no paddings and no background. Its interaction states mirror those of sd-link’s.
 *
 *  * **Related templates**:
 * - [Interactive](?path=/docs/templates-interactive--docs)
 */

export default {
  title: 'Styles/sd-interactive',
  tags: ['!dev'],
  component: 'sd-interactive',
  parameters: parameters,
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Lorem Ipsum' },
    { type: 'attribute', name: 'sd-interactive--reset', value: true }
  ]),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<button class="%CLASSES%">%SLOT%</button>' },
      args
    });
  }
};

/**
 * Use the `sd-interactive--reset` class to reset the default browser styles of e. g. a button.
 */

export const Reset = {
  render: () => html`
    <div class="flex flex-row gap-12">
      <button type="button" class="sd-interactive">Lorem Ipsum</button>
      <button class="sd-interactive sd-interactive--reset">Lorem Ipsum</button>
    </div>
  `
};

/**
 * Use the `sd-interactive--inverted` class when displayed on primary background.
 *
 * On darker backgrounds text/white inverted colour will substitute primary.
 */

export const Inverted = {
  render: () => html`
    <div class="bg-primary p-4">
      <button class="sd-interactive sd-interactive--inverted sd-interactive--reset">Lorem Ipsum</button>
    </div>
  `
};

/**
 * Use the `sd-interactive--disabled` class to make an interactive element look disabled.
 *
 * This works as well when setting an `disabled` attribute on the element.
 */

export const Disabled = {
  render: () => html`
    <div class="flex flex-row gap-12">
      <button class="sd-interactive sd-interactive--reset">Lorem Ipsum</button>
      <button class="sd-interactive sd-interactive--disabled sd-interactive--reset">Lorem Ipsum</button>
    </div>
  `
};
