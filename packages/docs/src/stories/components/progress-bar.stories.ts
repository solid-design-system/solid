import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-progress-bar');
const { overrideArgs } = storybookHelpers('sd-progress-bar');
const { generateTemplate } = storybookTemplate('sd-progress-bar');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-progress-bar',
  component: 'sd-progress-bar',
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: '35' },
    { type: 'attribute', name: 'max', value: '100' }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs'
    }
  }
};

export const Default = {
  render: (args: any) => html`<div class="w-[300px]">${generateTemplate({ args })}</div>`
};

/**
 * Use the `label` attribute to add a label to the progress bar.
 *
 * For labels that contain HTML, use the `label` slot instead.
 */
export const Label = {
  render: () => {
    return html`
      <div class="flex flex-row gap-4 items-baseline">
        <sd-progress-bar value="35" max="100" label="Label"></sd-progress-bar>
        <sd-progress-bar value="35" max="100"><div slot="label" class="text-lg">Label slot</div></sd-progress-bar>
      </div>
    `;
  }
};

/**
 * Use the `value` and `max` attributes to set the progress value and maximum value of the progress bar.
 *
 * The default value is `0` and the default max is `100`. The component will calculate the percentage based on these two values.
 */
export const ValueMax = {
  name: 'Value and Max',
  render: () => {
    return html` <div class="w-[300px]"><sd-progress-bar value="35" max="70"></sd-progress-bar></div>`;
  }
};

/**
 * Use the `value-right` attribute to add a value on the right side of the progress bar.
 */
export const ValueRight = {
  name: 'Value right',
  render: () => {
    return html` <div class="w-[300px]"><sd-progress-bar value="35" max="100" value-right></sd-progress-bar></div> `;
  }
};

/**
 * Use the `value-bottom` attribute to add a value on the bottom of the progress bar.
 */
export const ValueBottom = {
  name: 'Value bottom',
  render: () => {
    return html` <div class="w-[300px]"><sd-progress-bar value="35" max="100" value-bottom></sd-progress-bar></div> `;
  }
};

/**
 * Use the `loading` attribute to add a loading state to the progress bar.
 *
 * __Note:__ The value will be ignored when the `loading` attribute is set.
 */
export const Loading = {
  render: () => {
    return html`<div class="w-[300px]"><sd-progress-bar loading max="100"></sd-progress-bar></div> `;
  }
};

/**
 * Use the CSS property `--height` to adjust the height of the progress bar.
 */
export const CustomHeight = {
  name: 'Custom height',
  render: () => {
    return html`
      <style>
        .custom-height {
          --height: 12px;
        }
      </style>
      <div class="w-[300px]"><sd-progress-bar class="custom-height" value="35" max="100"></sd-progress-bar></div>
    `;
  }
};

/**
 * Use the CSS property `--gap-color` to adjust the gap color of the progress bar.
 */
export const GapColor = {
  name: 'Gap color',
  render: () => {
    return html`
      <style>
        .background {
          background-color: rgba(var(--sd-color-neutral-100));
        }
        .custom-gap-color {
          --gap-color: rgba(var(--sd-color-neutral-100));
        }
      </style>
      <div class="background p-4">
        <sd-progress-bar class="custom-gap-color w-[300px]" value="35" max="100"></sd-progress-bar>
      </div>
    `;
  }
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */
export const Inverted = {
  render: () => {
    return html`
      <div class="p-4 bg-primary">
        <sd-progress-bar inverted value="35" max="100" class="w-[300px]"></sd-progress-bar>
      </div>
    `;
  }
};
