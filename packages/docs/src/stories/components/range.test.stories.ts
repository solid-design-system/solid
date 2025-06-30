import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-range');
const { overrideArgs } = storybookHelpers('sd-range');
const { generateTemplate } = storybookTemplate('sd-range');
const { generateScreenshotStory } = storybookUtilities;

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-range/Screenshots: sd-range',
  component: 'sd-range',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'value', value: '25' }
  ]),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Label = {
  name: 'Label',
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'attribute', name: 'label', value: 'Label' }] });
  }
};

export const DoubleKnob = {
  name: 'Double Knob',
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'attribute', name: 'value', value: '33 66' }] });
  }
};

export const NoTrackbar = {
  name: 'No Track-bar',
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'attribute', name: 'no-track-bar', value: true }] });
  }
};

export const HelpText = {
  name: 'Help Text',
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'attribute', name: 'help-text', value: 'Help text' }] });
  }
};

export const Ticks = {
  render: (args: any) => {
    return html` <div class="flex flex-col gap-12">
      ${generateTemplate({
        args,
        constants: [
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

export const Disabled = {
  name: 'Disabled',
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

export const VisuallyDisabled = {
  name: 'Visually Disabled',
  render: (args: any) => {
    return html` <div class="min-h-40 pt-20">
      <sd-tooltip id="visually-disabled-tooltip" placement="top-start" hoist open>
        <p slot="content">Visually disabled</p>
        ${generateTemplate({
          args,
          constants: [
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

export const CustomOffset = {
  name: 'Custom Offset',
  render: (args: any) => {
    return html` <div class="flex flex-col gap-12">
      ${generateTemplate({
        args,
        constants: [{ type: 'attribute', name: 'value', value: '33' }]
      })}
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'min', value: '-100' },
          { type: 'attribute', name: 'max', value: '0' },
          { type: 'attribute', name: 'value', value: '-33' },
          { type: 'attribute', name: 'style', value: '--track-active-offset: 100%;' }
        ]
      })}
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'min', value: '-50' },
          { type: 'attribute', name: 'max', value: '50' },
          { type: 'attribute', name: 'value', value: '40' },
          { type: 'attribute', name: 'style', value: '--track-active-offset: 50%;' }
        ]
      })}
    </div>`;
  }
};

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    const parts = [
      'form-control',
      'form-control-label',
      'form-control-help-text',
      'base',
      'input-wrapper',
      'track-wrapper',
      'track-click-helper',
      'track',
      'active-track',
      'scale-ticks'
    ];

    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-range::part(...){outline: solid 2px red}',
          values: parts.map(part => ({
            title: part,
            value: `<style>#part-${part} sd-range::part(${part}){outline: solid 2px red;} #part-${part} .${part}{outline: solid 2px red;} #part-${part} {width: 300px;}</style><div id='part-${part}'>%TEMPLATE%</div>`
          }))
        }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Label,
  DoubleKnob,
  NoTrackbar,
  Disabled,
  VisuallyDisabled,
  CustomOffset,
  Parts
]);
