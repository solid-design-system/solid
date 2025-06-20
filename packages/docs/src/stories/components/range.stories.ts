import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-range');
const { generateTemplate } = storybookTemplate('sd-range');
const { overrideArgs } = storybookHelpers('sd-range');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-range',
  component: 'sd-range',
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([{ type: 'attribute', name: 'value', value: '25' }]),
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return html` <div class="min-h-20">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `label` slot or  attribute to define a descriptive label for the range component, helping users understand its purpose.
 * The label is mandatory to ensure accessibility compliance and provide context for screen readers.
 */
export const Label = {
  render: (args: any) => {
    return html` <div class="min-h-20">
      ${generateTemplate({ args, constants: [{ type: 'attribute', name: 'label', value: 'Label' }] })}
    </div>`;
  }
};

/**
 * Use the `value` attribute with multiple numbers separated by a space to achieve double-knobs.
 */
export const DoubleKnob = {
  render: (args: any) => {
    return html` <div class="min-h-20">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'value', value: '33 66' }
        ]
      })}
    </div>`;
  }
};

/**
 * Use the `no-track-bar` attribute to hide the track bar. By default, the trackbar appears.
 */
export const TrackBar = {
  name: 'Track-bar',
  render: (args: any) => {
    return html` <div class="min-h-20">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'no-track-bar', value: true }
        ]
      })}
    </div>`;
  }
};

/**
 * Use the `scale-ticks` slot to insert ticks and use the sd-range-tick `subtick` attribute to change it’s appearance.
 */
export const Ticks = {
  render: (args: any) => {
    return html` <div class="flex flex-col gap-12">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'min', value: '0' },
          { type: 'attribute', name: 'max', value: '9' },
          { type: 'attribute', name: 'value', value: '3' },
          {
            type: 'slot',
            name: 'default',
            value: `
              <div slot="scale-ticks">
                <sd-range-tick>0</sd-range-tick>
                <sd-range-tick>1</sd-range-tick>
                <sd-range-tick>2</sd-range-tick>
                <sd-range-tick>3</sd-range-tick>
                <sd-range-tick>4</sd-range-tick>
                <sd-range-tick>5</sd-range-tick>
                <sd-range-tick>6</sd-range-tick>
                <sd-range-tick>7</sd-range-tick>
                <sd-range-tick>8</sd-range-tick>
                <sd-range-tick>9</sd-range-tick>
              </div>
            `
          }
        ]
      })}
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'min', value: '0' },
          { type: 'attribute', name: 'max', value: '9' },
          { type: 'attribute', name: 'value', value: '3' },
          {
            type: 'slot',
            name: 'default',
            value: `
              <div slot="scale-ticks">
                <sd-range-tick>0</sd-range-tick>
                <sd-range-tick subtick></sd-range-tick>
                <sd-range-tick subtick></sd-range-tick>
                <sd-range-tick>3</sd-range-tick>
                <sd-range-tick subtick></sd-range-tick>
                <sd-range-tick subtick></sd-range-tick>
                <sd-range-tick>6</sd-range-tick>
                <sd-range-tick subtick></sd-range-tick>
                <sd-range-tick subtick></sd-range-tick>
                <sd-range-tick>9</sd-range-tick>
              </div>
            `
          }
        ]
      })}
      <style>
        [slot='scale-ticks'] {
          display: flex;
          justify-content: space-between;
        }
      </style>
    </div>`;
  }
};

/**
 * Use the “no-tooltip” attribute to disable the tooltip when interacting with the knob.
 * By default, the tooltip appears on click or drag, positioned above the knob for clear visibility.
 */
export const Tooltip = {
  render: (args: any) => {
    return html` <div class="min-h-20">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'no-tooltip', value: true }
        ]
      })}
    </div>`;
  }
};

/**
 * Use the `help-text` slot or attribute to provide additional context or instructions.
 */
export const HelpText = {
  render: (args: any) => {
    return html` <div class="min-h-20">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'help-text', value: 'Help text' }
        ]
      })}
    </div>`;
  }
};

/**
 * Use the `disabled` attribute to disable the range.
 */
export const Disabled = {
  render: (args: any) => {
    return html` <div class="min-h-20">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Disabled' },
          { type: 'attribute', name: 'disabled', value: true }
        ]
      })}
    </div>`;
  }
};

/**
 * When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it.
 * This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 */
export const VisuallyDisabled = {
  render: (args: any) => {
    return html` <div class="min-h-40 pt-20">
      <sd-tooltip id="visually-disabled-tooltip" placement="top-start" hoist>
        <p slot="content">Visually disabled</p>
        ${generateTemplate({
          args,
          constants: [
            { type: 'attribute', name: 'label', value: 'Label' },
            { type: 'attribute', name: 'visually-disabled', value: true },
            { type: 'attribute', name: 'help-text', value: 'Help text' }
          ]
        })}
      </sd-tooltip>
      <style>
        #visually-disabled-tooltip::part(base__arrow) {
          left: 4px !important;
        }
      </style>
    </div>`;
  }
};

/**
 * Use the `min` and `max` attributes to define the minimum and maximum values of the range.
 *
 * The `step` attribute sets the interval for adjusting the value, controlling the increment or decrement when the user interacts with the slider.
 */
export const MinMaxStep = {
  name: 'Min, Max and Step',
  render: (args: any) => {
    return html` <div class="min-h-20">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'min', value: '0' },
          { type: 'attribute', name: 'max', value: '200' },
          { type: 'attribute', name: 'step', value: '25' }
        ]
      })}
    </div>`;
  }
};

/**
 * Use the custom property `--track-active-offset` to customize the initial offset of the active `track-bar`.
 */
export const CustomOffset = {
  render: (args: any) => {
    return html` <div class="flex flex-col gap-12">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'value', value: '33' }
        ]
      })}
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'min', value: '-100' },
          { type: 'attribute', name: 'max', value: '0' },
          { type: 'attribute', name: 'value', value: '-33' },
          { type: 'attribute', name: 'style', value: '--track-active-offset: 100%;' }
        ]
      })}
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'min', value: '-50' },
          { type: 'attribute', name: 'max', value: '50' },
          { type: 'attribute', name: 'value', value: '40' },
          { type: 'attribute', name: 'style', value: '--track-active-offset: 50%;' }
        ]
      })}
    </div>`;
  }
};
