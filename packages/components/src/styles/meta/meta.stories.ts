import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-meta');
const { overrideArgs } = storybookHelpers('sd-meta');
const { generateTemplate } = storybookTemplate('sd-meta');

/**
 * Used to display meta information like file size, date or whatever needed.
 *
 * Separated by pipes.
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
  args: overrideArgs({ type: 'slot', name: 'default', value: '11. August 2023' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<time class="%CLASSES%" datetime="2023-08-11">%SLOT%</time>' },
      args
    });
  }
};

/**
 * Meta can be used in 2 colors alternatives:
 *
 * - black (default)
 * - `sd-meta--light`: neutral-700
 */

export const Variants = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <time class="sd-meta" datetime="2023-08-11">Black</time>
      <time class="sd-meta sd-meta--light" datetime="2023-08-11">Neutral-700</time>
    </div>`
};

/**
 * Use `sd-meta` modifiers for alternative appearances:
 *
 * - Large is the default size.
 * - `sd-meta--size-sm`: Small can be used as an alternative in tight spaces.
 */

export const Size = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <time class="sd-meta sd-meta--pipe" datetime="2023-08-11">Large</time>
      <time class="sd-meta sd-meta--size-sm sd-meta--pipe" datetime="2023-08-11">Small</time>
    </div>`
};

/**
 * Use the `sd-meta--inverted` to make information with inverted color.
 *
 * Once inverted meta can be used in 2 colors alternatives:
 * - white (default)
 * - `sd-meta--light`: primary-400
 */
export const Inverted = {
  render: () =>
    html` <div class="p-4 bg-primary flex flex-row gap-12">
      <time class="sd-meta sd-meta--inverted" datetime="2023-08-11">White</time>
      <time class="sd-meta sd-meta--inverted sd-meta--light" datetime="2023-08-11">Primary-400</time>
    </div>`
};

/**
 * Use the `sd-meta--pipe` class to separate meta information with a pipe.
 */
export const Pipe = {
  render: () =>
    html`<time class="sd-meta sd-meta--pipe" datetime="2023-08-11">With Pipe</time>
      <time class="sd-meta sd-meta--pipe" datetime="2023-08-11">With Pipe</time>
      <time class="sd-meta" datetime="2023-08-11">With Pipe</time>
      <time class="sd-meta ml-12" datetime="2023-08-11">Without Pipe</time>`
};
