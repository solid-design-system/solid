import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-meta');
const { overrideArgs } = storybookHelpers('sd-meta');
const { generateTemplate } = storybookTemplate('sd-meta');

/**
 * Used to display meta information like file size, date or other.
 */

export default {
  title: 'Styles/sd-meta',
  tags: ['!dev'],
  component: 'sd-meta',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2706-33514&t=yS054qhxgjorbMDv-4'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Meta information' }),
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
 * Use the `sd-meta` classes for alternative appearances:
 *
 * - Black is the default color
 * - `sd-meta--light`: Neutral-700
 */

export const Variants = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <span class="sd-meta">Default</span>
      <span class="sd-meta sd-meta--light">Light</span>
    </div>`
};

/**
 * Use `sd-meta` classes for alternative appearances:
 *
 * - lg is the default size
 * - `sd-meta--size-sm`
 */

export const Size = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <span class="sd-meta">Large</span>
      <span class="sd-meta sd-meta--size-sm">Small</span>
    </div>`
};

/**
 * Use the `sd-meta--inverted` class when displayed on primary background.
 *
 * - White is the default
 * - `sd-meta--light`: Primary-400
 */
export const Inverted = {
  render: () =>
    html` <div class="p-4 bg-primary flex flex-row gap-12">
      <span class="sd-meta sd-meta--inverted">Default</span>
      <span class="sd-meta sd-meta--inverted sd-meta--light">Light</span>
    </div>`
};

/**
 * Use the `sd-meta--pipe` class to separate meta information with a pipe.
 */
export const Pipe = {
  render: () =>
    html`<span class="sd-meta sd-meta--pipe">With Pipe</span>
      <span class="sd-meta sd-meta--pipe">With Pipe</span>
      <span class="sd-meta">With Pipe</span>`
};
