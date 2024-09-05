import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-step');
const { overrideArgs } = storybookHelpers('sd-step');
const { generateTemplate } = storybookTemplate('sd-step');

/**
 * Used to determine a step in a process or task.
 *
 * Use the `default` slot to set a description for the step. Alternatively, you can use the `description` attribute.
 * Use the `circle-content` slot to add a content-icon in a non-interactive step.
 *
 * **Related components:**
 * - [sd-step-group](?path=/docs/components-sd-step-group--docs)
 *
 * **Related templates:**
 * - [sd-step-group](?path=/docs/templates-sd-step-group--docs)
 *
 */
export default {
  title: 'Components/sd-step',
  tags: ['!dev'],
  component: 'sd-step',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'label',
      value: `<span slot="label">Step name</span>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    withActions,
    (story: any) =>
      html`<style>
          #story--components-sd-step--default--primary {
            width: min-content;
          }</style
        >${story()}`
  ] as unknown
};

/**
 * Default: This shows sd-step in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * Use the `size` attribute to set the size of a step.
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
 * Use the `orientation` attribute to set the axis of a step.
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex items-center gap-24 w-min">
      <sd-step orientation="horizontal">
        <span slot="label">Step name</span>
      </sd-step>
      <sd-step orientation="vertical">
        <span slot="label">Step name</span>
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
        href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
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
        <span slot="label">Step name</span>
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
    <div class="w-min">
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
    <div class="w-min">
      <sd-step not-interactive>
        <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
      </sd-step>
    </div>
  `
};

/**
 * Use the `default` slot to set a description for the step. Alternatively, you can use the `description` attribute.
 */

export const Description = {
  name: 'Description',
  render: () => html`
    <div class="w-min">
      <sd-step>
        <span slot="label">Step name</span>
        <p class="sd-paragraph">Description lorem ipsum sic semper</p>
      </sd-step>
    </div>
  `
};

/**
 * Use the `description` and `label` attributes to set the respective text on the step. These are used as alternatives to using the `default` and `label` slots.
 */

export const DescriptionAndLabelUsingAttributes = {
  name: 'Description and Label (using attributes)',
  render: () => html`
    <div class="w-min">
      <sd-step label="Label as attribute" description="Description as attribute"></sd-step>
    </div>
  `
};
