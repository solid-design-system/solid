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
      url: 'https://www.figma.com/file/Um1B3fI5fvdFVJv6LO7kZG/Meta-Information?type=design&node-id=0-1&mode=design&t=I2fDQn7HjSc75K1V-0'
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
 * Use `sd-meta` modifiers for alternative appearances.
 *
 * - Black is the default
 * - `sd-meta--light`: Neutral-700 can be used to deemphasize text content
 */

export const Variants = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <span class="sd-meta">Black</span>
      <span class="sd-meta sd-meta--light">Neutral-700</span>
    </div>`
};

/**
 * Use `&--size-*` class for alternative appearances.
 *
 * - lg is the default size
 * - `sd-meta--size-sm`: sm can be used as an alternative in tight spaces
 */

export const Size = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <span class="sd-meta">Large</span>
      <span class="sd-meta sd-meta--size-sm">Small</span>
    </div>`
};

/**
 * Use the `&--inverted` class when displayed on primary background.
 *
 * - White is the default
 * - `sd-meta--light`: Primary-400 can be used to deemphasize text content
 */
export const Inverted = {
  render: () =>
    html` <div class="p-4 bg-primary flex flex-row gap-12">
      <span class="sd-meta sd-meta--inverted">White</span>
      <span class="sd-meta sd-meta--inverted sd-meta--light">Primary-400</span>
    </div>`
};

/**
 * Use the `&--pipe` class to separate meta information with a pipe.
 */
export const Pipe = {
  render: () =>
    html`<span class="sd-meta sd-meta--pipe">With Pipe</span>
      <span class="sd-meta sd-meta--pipe">With Pipe</span>
      <span class="sd-meta">With Pipe</span>`
};
