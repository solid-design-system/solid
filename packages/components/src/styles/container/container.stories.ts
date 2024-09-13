import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-container');
const { overrideArgs } = storybookHelpers('sd-container');
const { generateTemplate } = storybookTemplate('sd-container');

/**
 * Used to enclose and highlight specific parts of content on a page.
 */

export default {
  title: 'Styles/sd-container',
  tags: ['!dev'],
  component: 'sd-container',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: '<div class="slot slot--border slot--text h-12">Default slot</div>'
  }),
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2106-28839&t=yS054qhxgjorbMDv-4'
    }
  },
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the variant `classes` for alternative appearances:
 *- `neutral-100` (default): use the class `sd-container--variant-neutral-100`
 *- `primary-100`: use the class `sd-container--variant-primary-100`
 *- `primary`: use the class `sd-container--variant-primary`
 *- `border-neutral-400`: use the class `sd-container--border-neutral-400`
 *- `white`: use the class `sd-container--variant-white`
 */

export const Variants = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-4">
      <div class="sd-container sd-container--variant-neutral-100">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-primary-100">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-primary">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-border-neutral-400">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-white">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>
    </div>`
};

/**
 * Use the `padding-sm` class to adapt the container to smaller component widths.
 */

export const Padding = {
  render: () =>
    html`<div class="sd-container sd-container--padding-sm">
      <div class="slot slot--border slot--text h-12">Default slot</div>
    </div>`
};

/**
 * You can override the default padding values via CSS.
 */

export const CustomPadding = {
  render: () =>
    html`<div class="sd-container" style="padding:4rem;">
      <div class="slot slot--border slot--text h-12">Default slot</div>
    </div>`
};

/**
 * You can add a triangle indentation to the container using the `triangle-class` appended with one of the following positions 'top', 'right', 'bottom', 'left' (e.g. sd-container--triangle-top).
 *
 * - A triangle can be shown to draw attention.
 * - Triangle position can be `top`, `bottom`, `left` or `right`.
 * - Default background option is white and can be overridden if desired.
 */

export const TrianglePosition = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-4">
      <div class="sd-container sd-container--variant-primary sd-container--triangle-top">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-primary sd-container--triangle-right">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-primary sd-container--triangle-bottom">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-primary sd-container--triangle-left">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>
    </div>`
};

/**
 * For the `sd-container--variant-border-neutral-400`, an alternate set of classes must be used to create a triangle with a border.
 */

export const TriangleBorder = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-4">
      <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-top-border">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-right-border">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-bottom-border">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>

      <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-left-border">
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>
    </div>`
};

/**
 * Use the CSS property `--triangle-background` to set the triangle cut-out color.
 */

export const TriangleColor = {
  name: 'Triangle Color',
  render: () =>
    html`<div class="bg-primary p-4">
      <div
        style="--triangle-background: rgb(var(--sd-color-primary-600, 0 53 142) / 1);"
        class="sd-container sd-container--variant-white sd-container--triangle-top sd-container--padding-"
      >
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>
    </div>`
};
