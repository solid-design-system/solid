import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-step');
const { overrideArgs } = storybookHelpers('sd-step');
const { generateTemplate } = storybookTemplate('sd-step');

export default {
  title: 'Components/sd-step',
  tags: ['!dev', 'autodocs', 'skip-a11y-[aria-required-parent]'],
  component: 'sd-step',
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'label',
      value: 'Step name'
    },
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Default Slot</div>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3274-30758&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [
    (story: any) => html`
      <style>
        #story--components-sd-step--default--primary {
          width: min-content;
        }
      </style>
      ${story()}
    `
  ] as unknown
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * Use the `size` attribute to set the size of a step:
 *
 * - `lg`(default)
 * - `sm`
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12 w-min">
      <sd-step size="lg">
        <span slot="label">Large</span>
      </sd-step>
      <sd-step size="sm">
        <span slot="label">Small</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `orientation` attribute to set the axis of a step:
 *
 * - `horizontal`(default)
 * - `vertical`
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex gap-24 w-min">
      <sd-step orientation="horizontal">
        <span slot="label">Horizontal</span>
      </sd-step>
      <sd-step orientation="vertical">
        <span slot="label">Vertical</span>
      </sd-step>
    </div>
  `
};
/**
 * Use the `horizontal-inline` attribute to activate the inline option of the horizontal orientation.
 */
export const HorizontalInline = {
  name: 'Horizontal Inline',
  render: () => html`
    <div class="w-[255px]">
      <sd-step orientation="horizontal" horizontal-inline>
        <span slot="label">Horizontal inline</span>
      </sd-step>
    </div>
  `
};
/**
 * Use the `current` attribute to set a step as the current step.
 */

export const Current = {
  name: 'Current',
  render: () => html`
    <div class="w-min">
      <sd-step current>
        <span slot="label">Current</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `waiting` attribute to set the step as a future step.
 */

export const Waiting = {
  name: 'Waiting',
  render: () => html`
    <div class="w-min">
      <sd-step waiting>
        <span slot="label">Waiting</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable a step.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="w-min">
      <sd-step disabled>
        <span slot="label">Disabled</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `href` attribute to set a link for the step.
 */

export const AsLink = {
  name: 'As Link',
  render: () => html`
    <div class="w-min">
      <sd-step
        href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
      >
        <span slot="label">Step name</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `no-tail` attribute to remove the tail from a step.
 */

export const NoTail = {
  name: 'No Tail',
  render: () => html`
    <div class="w-min">
      <sd-step no-tail>
        <span slot="label">Completed</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `not-interactive` attribute to make a step non-interactive.
 */

export const NotInteractive = {
  name: 'Not Interactive',
  render: () => html`
    <div class="w-[220px]">
      <sd-step not-interactive>
        <span slot="label">Step name</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `circle-content` slot to add a content-icon in a non-interactive step.
 */

export const Icon = {
  name: 'Icon',
  render: () => html`
    <div class="w-[220px]">
      <sd-step not-interactive>
        <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
        <span slot="label">Step name</span>
      </sd-step>
    </div>
  `
};

/**
 * Use the `label` attribute to hide or show the step label.
 */
export const Label = {
  name: 'Label',
  render: () => html`
    <div class="w-min">
      <sd-step label="Label"></sd-step>
    </div>
  `
};

/**
 *  Use the ”default” slot to add a description to the step. Alternatively, you can use the description attribute.
 */

export const Description = {
  name: 'Description',
  render: () => html`
    <div class="h-32 mb-16 w-[200px]">
      <sd-step orientation="vertical" description="">
        <span slot="label">Step name</span>
        <p class="sd-paragraph">Description lorem ipsum sic semper</p>
      </sd-step>
    </div>
    <div class="mb-16 w-[255px]">
      <sd-step orientation="horizontal" horizontal-inline>
        <span slot="label">Step name</span>
        <p class="sd-paragraph">Description lorem ipsum sic semper</p>
      </sd-step>
    </div>
    <div class="w-[293px]">
      <sd-step orientation="horizontal">
        <span slot="label">Step name</span>
        <p class="sd-paragraph">Description lorem ipsum sic semper</p>
      </sd-step>
    </div>
  `
};

/**
 * Use the ”description” and ”label” attributes to set the respective text on the step. These are used as alternatives to using the ”default” and ”label” slots.
 */

export const DescriptionAndLabelUsingAttributes = {
  name: 'Description and Label (using attributes)',
  render: () => html`
    <div class="w-min">
      <sd-step label="Label as attribute" description="Description as attribute"></sd-step>
    </div>
  `
};
