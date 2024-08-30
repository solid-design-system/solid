import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-meta');
const { overrideArgs } = storybookHelpers('sd-meta');
const { generateTemplate } = storybookTemplate('sd-meta');

/**
 * List of meta information like file size, date or whatever needed. Seperated by pipes.
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
 * Use `sd-meta` classes for alternative sizes:
 * - Default: Large is the default size.
 * - `sd-meta--size-sm`: Small can be used as an alternative in tight spaces.
 */

export const Size = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <time class="sd-meta" datetime="2023-08-11">Default</time>
      <time class="sd-meta sd-meta--size-sm" datetime="2023-08-11">Small</time>
    </div>`
};

/**
 * Use the `sd-meta--light` class to display a different color.
 */

export const Light = {
  render: () =>
    html`<div class="flex flex-row gap-12">
      <time class="sd-meta" datetime="2023-08-11">Default</time>
      <time class="sd-meta sd-meta--light" datetime="2023-08-11">Light</time>
    </div>`
};

/**
 * Use the `sd-meta--pipe` class to separate meta information with a pipe.
 */
export const Pipe = {
  render: () => html` <time class="sd-meta sd-meta--pipe" datetime="2023-08-11">With Pipe</time>`
};

/**
 * Use the `sd-meta--inverted` to make information with inverted color.
 */
export const Inverted = {
  render: () =>
    html` <div class="p-4 bg-primary">
      <time class="sd-meta sd-meta--inverted" datetime="2023-08-11">Inverted</time>
    </div>`
};
