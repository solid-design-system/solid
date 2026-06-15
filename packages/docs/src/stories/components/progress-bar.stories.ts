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
 * Use the `label` attribute to add a label to the progress bar for accessibility reasons. Use the `showLabel` attibute to show the label.
 *
 * For labels that contain HTML, use the `label` slot instead.
 */
export const Label = {
  render: () => {
    return html`
      <style>
        sd-progress-bar {
          height: 100%;
        }
      </style>
      <div class="flex flex-row gap-4 items-baseline">
        <sd-progress-bar value="35" max="100" label="Label" show-label></sd-progress-bar>
        <sd-progress-bar value="35" max="100" show-label
          ><div slot="label" class="text-lg">Label slot</div></sd-progress-bar
        >
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
 * Use the `value-position` attribute to set the position of the value on the progress bar.
 *
 * - `right` (default)
 * - `bottom`
 */
export const ValuePosition = {
  render: () => {
    return html` <div class="flex flex-row gap-4">
      <sd-progress-bar value="35" max="100" value-position="bottom"></sd-progress-bar
      ><sd-progress-bar value="35" max="100" value-position="right"></sd-progress-bar>
    </div>`;
  }
};

/**
 * The progress bar will display an indeterminate animation automatically when no value is provided, or if is set to `null`, `undefined` or `NaN`.
 */
export const Loading = {
  render: () => {
    return html`<div class="w-[300px]"><sd-progress-bar max="100"></sd-progress-bar></div> `;
  }
};

/**
 * Use the CSS property `--height` to adjust the height of the progress bar.
 */
export const CustomHeight = {
  name: 'Custom height',
  render: () => {
    return html`
      <div class="w-[300px]"><sd-progress-bar style="--height: 12px" value="35" max="100"></sd-progress-bar></div>
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

/**
 * Use the `inverted` attribute when displayed on primary background.
 */
export const valueFormatter = {
  name: 'Value Formatter',
  render: () => {
    return html`
      <div class="p-4 bg-primary">
        <sd-progress-bar inverted value="35" max="100" class="w-[300px]"></sd-progress-bar>
      </div>
    `;
  }
};
