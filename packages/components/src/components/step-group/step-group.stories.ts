import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-step-group');
const { overrideArgs } = storybookHelpers('sd-step-group');
const { generateTemplate } = storybookTemplate('sd-step-group');

/**
 * Used as navigation bar that guides users through the steps of a process or task
 *
 * **Related Components:**
 * - [sd-step](?path=/docs/components-step--docs)
 *
 * **Related Templates:**
 * - [sd-step-group](?path=/docs/templates-step-group--docs)
 */
export default {
  title: 'Components/sd-step-group',
  tags: ['!dev'],
  component: 'sd-step-group',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-step size="lg" orientation="horizontal" state="default">
          <p slot="label">Lorem ipsum dolor sit</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <p slot="label">Exercitation ullamco laboris</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
          <p slot="label">Reprehenderit qui in e name</p>
        </sd-step>`
    },
    {
      type: 'attribute',
      name: 'active-step',
      value: `1`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-step-group in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div style="height:250px">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `orientation` attribute to set the axis of a step-group.
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="space-y-5">
      <sd-step-group size="lg" orientation="horizontal" active-step="1">
        <sd-step size="lg" orientation="horizontal" state="default">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
          <p slot="label">Label</p>
        </sd-step>
      </sd-step-group>

      <div class="flex gap-12 h-[20vh]">
        <sd-step-group size="lg" orientation="vertical" active-step="1">
          <sd-step size="lg" orientation="vertical" state="default">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" state="current">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" state="disabled">
            <p slot="label">Label</p>
          </sd-step>
        </sd-step-group>
      </div>
    </div>
  `
};

/**
 * Use the `size` attribute to set the size of the step-group.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="space-y-5">
      <sd-step-group size="lg" orientation="horizontal" active-step="1">
        <sd-step size="lg" orientation="horizontal" state="default">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
          <p slot="label">Label</p>
        </sd-step>
      </sd-step-group>

      <sd-step-group size="sm" orientation="horizontal" active-step="1">
        <sd-step size="sm" orientation="horizontal" state="default">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="sm" orientation="horizontal" state="current">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="sm" orientation="horizontal" state="disabled">
          <p slot="label">Label</p>
        </sd-step>
      </sd-step-group>

      <div class="flex gap-12 h-[20vh]">
        <sd-step-group size="lg" orientation="vertical" active-step="1">
          <sd-step size="lg" orientation="vertical" state="default">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" state="current">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" state="disabled">
            <p slot="label">Label</p>
          </sd-step>
        </sd-step-group>

        <sd-step-group size="sm" orientation="vertical" active-step="1">
          <sd-step size="sm" orientation="vertical" state="default">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="sm" orientation="vertical" state="current">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="sm" orientation="vertical" state="disabled">
            <p slot="label">Label</p>
          </sd-step>
        </sd-step-group>
      </div>
    </div>
  `
};

/**
 * Use the `active-step` attribute to set the current step in the step-group.
 */

export const ActiveStep = {
  name: 'Active Step',
  render: () => html`
    <div class="space-y-5">
      <sd-step-group size="lg" orientation="horizontal" active-step="0">
        <sd-step size="lg" orientation="horizontal" state="default">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <p slot="label">Label</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
          <p slot="label">Label</p>
        </sd-step>
      </sd-step-group>

      <div class="flex gap-12 h-[20vh]">
        <sd-step-group size="lg" orientation="vertical" active-step="1">
          <sd-step size="lg" orientation="vertical" state="default">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" state="current">
            <p slot="label">Label</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" state="disabled">
            <p slot="label">Label</p>
          </sd-step>
        </sd-step-group>
      </div>
    </div>
  `
};

/**
 * Use the `not-interactive` attribute to create a non-interactive step group.
 */

export const notInteractive = {
  name: 'Not Interactive',
  render: () => html`
    <div>
      <sd-step-group size="lg" orientation="horizontal" active-step="0" not-interactive>
        <sd-step size="lg" orientation="horizontal" state="default">
          <div slot="label">Label</div>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <span slot="label">Label</span>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
          <span slot="label">Label</span>
        </sd-step>
      </sd-step-group>
    </div>
  `
};
