import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-step-group');
const { overrideArgs } = storybookHelpers('sd-step-group');
const { generateTemplate } = storybookTemplate('sd-step-group');

export default {
  title: 'Components/sd-step-group',
  tags: ['!dev', 'autodocs'],
  component: 'sd-step-group',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Step 1</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" current>
          <p slot="label">Step 2</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" disabled>
          <p slot="label">Step 3</p>
        </sd-step>`
    },
    {
      type: 'attribute',
      name: 'active-step',
      value: `1`
    },
    {
      type: 'attribute',
      name: 'label',
      value: 'Label'
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3274-23489&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div style="height:250px">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `size` attribute to set the size of the step-group:
 *
 * - `lg`(default)
 * - `sm`
 */
export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex flex-col space-y-12">
      <sd-step-group size="lg" orientation="horizontal" active-step="1" class="w-full" label="Size Label">
        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Step 1</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" current>
          <p slot="label">Step 2</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" disabled>
          <p slot="label">Step 3</p>
        </sd-step>
      </sd-step-group>

      <sd-step-group size="sm" orientation="horizontal" active-step="1" class="w-full">
        <sd-step size="sm" orientation="horizontal">
          <p slot="label">Step 1</p>
        </sd-step>

        <sd-step size="sm" orientation="horizontal" current>
          <p slot="label">Step 2</p>
        </sd-step>

        <sd-step size="sm" orientation="horizontal" disabled>
          <p slot="label">Step 3</p>
        </sd-step>
      </sd-step-group>
    </div>
  `
};

/**
 * Use the `orientation` attribute to set the axis of a step-group:
 *
 * - `horizontal`(default)
 * - `vertical`
 *
 * **Accessibility hint:** Be aware that choosing a horizontal step group layout may cause layout issues, such as overflow, on small viewports or when the page is zoomed in; consider this when deciding between horizontal and vertical layouts.
 */
export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex flex-col space-y-12">
      <sd-step-group size="lg" orientation="horizontal" active-step="1" class="w-full" label="Orientation Label">
        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Step 1</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" current>
          <p slot="label">Step 2</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" disabled>
          <p slot="label">Step 3</p>
        </sd-step>
      </sd-step-group>

      <div class="flex h-[20em] pl-[56px]">
        <sd-step-group size="lg" orientation="vertical" active-step="1" class="w-full">
          <sd-step size="lg" orientation="vertical">
            <p slot="label">Step 1</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" current>
            <p slot="label">Step 2</p>
          </sd-step>

          <sd-step size="lg" orientation="vertical" disabled>
            <p slot="label">Step 3</p>
          </sd-step>
        </sd-step-group>
      </div>
    </div>
  `
};

/**
 * Use the `active-step` attribute to set the current step.
 */
export const ActiveStep = {
  name: 'Active Step',
  render: () => html`
    <sd-step-group size="lg" orientation="horizontal" active-step="0">
      <sd-step size="lg" orientation="horizontal">
        <p slot="label">Step 1</p>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" current>
        <p slot="label">Step 2</p>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" disabled>
        <p slot="label">Step 3</p>
      </sd-step>
    </sd-step-group>
  `
};

/**
 * Use the `not-interactive` attribute to create a non-interactive step group.
 */
export const notInteractive = {
  name: 'Not Interactive',
  render: () => html`
    <sd-step-group size="lg" orientation="horizontal" active-step="0" not-interactive>
      <sd-step size="lg" orientation="horizontal">
        <div slot="label">Label</div>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" current>
        <span slot="label">Label</span>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" disabled>
        <span slot="label">Label</span>
      </sd-step>
    </sd-step-group>
  `
};

/**
 * Use the `default` slot to add a content-icon.
 */
export const Icon = {
  name: 'Icon',
  render: () => html`
    <sd-step-group size="lg" orientation="horizontal" active-step="0" not-interactive>
      <sd-step size="lg" orientation="horizontal" not-interactive>
        <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
        <div slot="label">Label</div>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" not-interactive>
        <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
        <div slot="label">Label</div>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" not-interactive>
        <sd-icon slot="circle-content" name="content/image" class="h-12 w-12"></sd-icon>
        <div slot="label">Label</div>
      </sd-step>
    </sd-step-group>
  `
};
