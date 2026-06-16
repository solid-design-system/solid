import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-progress-bar');
const { overrideArgs } = storybookHelpers('sd-progress-bar');
const { generateTemplate } = storybookTemplate('sd-progress-bar');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-progress-bar/Screenshots: sd-progress-bar',
  component: 'sd-progress-bar',
  tags: ['!autodocs'],
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: '35' },
    { type: 'attribute', name: 'max', value: '100' },
    { type: 'attribute', name: 'label', value: 'Label' }
  ]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          width: 392px;
          min-width: 392px;
        }

        td.template > * {
          width: 100%;
        }
      </style>
      ${story()}
    `
  ]
};

export const Default = {
  name: 'Default',
  render: (args: any) => generateTemplate({ args })
};

export const LabelValuePosition = {
  name: 'Label & Value Positions',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'value-position', values: ['right'] },
          { type: 'attribute', name: 'value-position', values: ['bottom'] },
          { type: 'attribute', name: 'show-label', values: [true] }
        ]
      },
      constants: [{ type: 'attribute', name: 'label', value: ['Label'] }],
      args
    })
};

export const ValueMax = {
  name: 'Value x Max',
  render: (args: any) =>
    generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'value',
          values: ['50', '100']
        },
        x: {
          type: 'attribute',
          name: 'max',
          values: ['100', '200']
        }
      },
      args
    })
};

export const Loading = {
  name: 'Loading',
  render: (args: any) =>
    generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'value',
          values: ['Without value', '35']
        }
      },
      constants: [{ type: 'attribute', name: 'max', value: '100' }],
      args
    })
};

export const Complete = {
  name: 'Complete x Value',
  render: (args: any) =>
    generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'value',
          values: ['100', '35']
        },
        x: {
          type: 'attribute',
          name: 'complete',
          values: [true, false]
        }
      },
      constants: [{ type: 'attribute', name: 'max', value: '100' }],
      args
    })
};

export const Inverted = {
  name: 'Inverted',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'value-position', values: ['right'] },
          { type: 'attribute', name: 'value-position', values: ['bottom'] },
          { type: 'attribute', name: 'show-label', values: [true] },
          { type: 'attribute', name: 'value', values: ['Loading'] },
          { type: 'attribute', name: 'complete', values: [true] }
        ]
      },
      constants: [
        { type: 'attribute', name: 'inverted', value: true },
        { type: 'attribute', name: 'label', value: ['Label'] }
      ],
      options: { templateBackground: 'rgba(var(--sd-color-background-primary))' },
      args
    })
};

export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          x: {
            type: 'slot',
            name: 'label',
            title: 'slot=...',
            values: [
              {
                title: 'label',
                value: `<span slot="label" class="slot slot--border slot--background h-5">Label slot</span>`
              }
            ]
          }
        },
        constants: [{ type: 'attribute', name: 'show-label', value: true }],
        args
      })}
    `;
  }
};

const parts = ['base', 'label', 'bar', 'track', 'indicator'];
const valueParts = ['value-right', 'value-bottom'];

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          y: {
            type: 'template',
            name: 'sd-progress-bar::part(...){outline: solid 2px red}',
            values: parts.map(part => ({
              title: part,
              value: `<style>#part-${part} sd-progress-bar::part(${part}){outline: solid 2px red; outline-offset: 2px}</style><div id="part-${part}">%TEMPLATE%</div>`
            }))
          }
        },
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'show-label', value: true }
        ],
        args
      })}
      ${generateTemplate({
        axis: {
          x: {
            type: 'attribute',
            name: 'value-position',
            values: ['right', 'bottom']
          },
          y: {
            type: 'template',
            name: 'sd-progress-bar::part(...){outline: solid 2px red}',
            values: valueParts.map(part => ({
              title: part,
              value: `<style>#part-${part} sd-progress-bar::part(${part}){outline: solid 2px red; outline-offset: 2px}</style><div id="part-${part}">%TEMPLATE%</div>`
            }))
          }
        },
        constants: [
          { type: 'attribute', name: 'label', value: 'Label' },
          { type: 'attribute', name: 'show-label', value: true }
        ],
        args
      })}
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  LabelValuePosition,
  ValueMax,
  Loading,
  Complete,
  Inverted,
  Slots,
  Parts
]);
