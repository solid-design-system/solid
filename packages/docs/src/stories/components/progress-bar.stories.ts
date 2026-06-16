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
    { type: 'attribute', name: 'max', value: '100' },
    { type: 'attribute', name: 'label', value: 'Label' }
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
 * Use the `label` attribute to add an accessible label to the progress bar. To display it, use the `show-label` attribute.
 *
 * For labels that contain HTML, use the `label` slot instead.
 *
 * __Hint__: If no label is set the component receives an aria-hidden attribute of `true`.
 */
export const Label = {
  render: () => {
    return html`
      <style>
        sd-progress-bar {
          height: 100%;
        }
      </style>
      <div class="flex flex-col md:flex-row gap-4 items-end">
        <sd-progress-bar value="35" max="100" label="Label"></sd-progress-bar>
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
    return html` <div class="max-w-[300px]"><sd-progress-bar value="35" max="70"></sd-progress-bar></div>`;
  }
};

/**
 * Use the `value-position` attribute to set the position of the value on the progress bar.
 *
 * - `right`
 * - `bottom`
 */
export const ValuePosition = {
  name: 'Value position',
  render: () => {
    return html` <div class="flex flex-col gap-4">
      <sd-progress-bar class="max-w-[300px]" value="35" max="100" value-position="right"></sd-progress-bar>
      <sd-progress-bar class="max-w-[300px]" value="35" max="100" value-position="bottom"></sd-progress-bar>
    </div>`;
  }
};

/**
 * The progress bar will display an indeterminate animation automatically when no value is provided, or if is set to `null`, `undefined` or `NaN`.
 */
export const Loading = {
  render: () => {
    return html`<div class="max-w-[300px]"><sd-progress-bar max="100"></sd-progress-bar></div> `;
  }
};

/**
 * Use the `complete` attribute to display a completed progress bar. If the `value` is equal to the `max`, the progress bar will also be displayed as completed automatically.
 *
 * __Note__: ​Do not combine with "loading" - "complete" is a terminal state.
 */
export const Complete = {
  render: () => {
    return html`<div class="max-w-[300px] complete-story">
        <sd-progress-bar value="35" max="100" complete value-position="right"></sd-progress-bar>
      </div>
      <script>
        Promise.all([customElements.whenDefined('sd-progress-bar')]).then(() => {
          document.querySelector('.complete-story sd-progress-bar').valueFormatter = value => value + '%';
        });
      </script>`;
  }
};

/**
 * Use the CSS property `--height` to adjust the height of the progress bar.
 */
export const CustomHeight = {
  name: 'Custom height',
  render: () => {
    return html`
      <div class="max-w-[300px]"><sd-progress-bar style="--height: 12px" value="35" max="100"></sd-progress-bar></div>
    `;
  }
};

/**
 * Use the `valueFormatter` to customize the display of the value in the progress bar. The function receives the current value as a parameter and should return a string to display in the value-position part.
 */
export const valueFormatter = {
  name: 'Value Formatter',
  render: () => {
    return html`
      <div class="flex flex-col gap-4">
        <div class="value-formatter-story-right">
          <sd-progress-bar class="max-w-[300px]" value="4" max="10" value-position="right"></sd-progress-bar>
        </div>
        <div class="value-formatter-story-bottom max-w-[300px]">
          <sd-progress-bar value="4" max="10" value-position="bottom"></sd-progress-bar>
        </div>
      </div>
      <script>
        Promise.all([customElements.whenDefined('sd-progress-bar')]).then(() => {
          document.querySelector('.value-formatter-story-right sd-progress-bar').valueFormatter = value =>
            value + ' of 10 MB';
          document.querySelector('.value-formatter-story-bottom sd-progress-bar').valueFormatter = value =>
            '€' + value + 'k of €10k spent';
        });
      </script>
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
        <div class="max-w-[300px]">
          <sd-progress-bar inverted value="35" max="100"></sd-progress-bar>
        </div>
      </div>
    `;
  }
};
