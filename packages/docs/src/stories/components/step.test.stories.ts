import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  ConstantDefinition,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-step');
const { overrideArgs } = storybookHelpers('sd-step');
const { generateTemplate } = storybookTemplate('sd-step');
const { generateScreenshotStory } = storybookUtilities;

// We need to wrap step into a step-group due to accessibility tests. However, the step-group will change the layout of the step to avoid without failing the accessibility tests, a div with "list" role will be added instead of the sd-step-group.
const listWrapper: ConstantDefinition = {
  type: 'template',
  name: '',
  value: `<div role="list" class="h-32">%TEMPLATE%</div>`
};

export default {
  title: 'Components/sd-step/Screenshots: sd-step',
  tags: ['!autodocs'],
  component: 'sd-step',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'label',
      value: `<span slot="label">Step name</span>`
    }
  ]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-step in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div role="list">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the orientation attribute to set the axis of a step.
 */

export const Orientation = {
  name: 'Orientation',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'orientation' }
      },
      args,
      constants: [listWrapper]
    });
  },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          height: 150px;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Use the `default` slot to set a description for the step. Alternatively, you can use the `description` attribute.
 */

export const Description = {
  name: 'Description',
  render: () => {
    return html`
      <div role="list">
        ${generateTemplate({
          args: overrideArgs([
            {
              type: 'slot',
              name: 'default',
              value: `Lorem ipsum est dolor sit amet`
            },
            {
              type: 'slot',
              name: 'label',
              value: `<span slot="label">Step name</span>`
            }
          ])
        })}
      </div>
    `;
  }
};

/**
 * Use the `description` and `label` attributes to set the respective text on the step. These are used as alternatives to using the `default` and `label` slots.
 */

export const DescriptionAndLabelUsingAttributes = {
  name: 'Description and Label (using attributes)',
  render: () => {
    return html` <div role="list">
      ${generateTemplate({
        args: overrideArgs([
          {
            type: 'slot',
            name: 'default',
            value: ``
          },
          {
            type: 'slot',
            name: 'label',
            value: ``
          },
          {
            type: 'attribute',
            name: 'label',
            value: `This label was set using the "label" attribute.`
          },
          {
            type: 'attribute',
            name: 'description',
            value: `This description was set using "description" attribute.`
          }
        ])
      })}
    </div>`;
  }
};

/**
 * Use the 'base', 'circle-and-tail-container','circle', 'text-container', 'label' and 'description' parts to style the step.
 */
export const Parts = {
  name: 'Parts',
  render: () => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-step::part(...){outline: solid 2px red}',
          values: ['base', 'circle-and-tail-container', 'circle', 'tail', 'label', 'description', 'text-container'].map(
            part => {
              return {
                title: part,
                value: `<style>#part-${part} sd-step::part(${part}){outline: solid 2px red; outline-offset: -2px;}</style><div id="part-${part}">%TEMPLATE%</div>`
              };
            }
          )
        }
      },
      args: overrideArgs([
        {
          type: 'slot',
          name: 'default',
          value: `Lorem ipsum est dolor sit amet`
        },
        {
          type: 'slot',
          name: 'label',
          value: `<span slot="label">Step name</span>`
        }
      ]),
      constants: [listWrapper]
    });
  },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          width: 33%;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Use the 'default', 'label', 'index', 'circle-content' slots to add content to the step..
 */

export const Slots = {
  name: 'Slots',
  render: () => {
    return html`
      ${['default', 'label', 'index', 'circle-content'].map(slot =>
        generateTemplate({
          axis: {
            y: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background h-12"></div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background h-12"></div>`,
                  title: slot
                }
              ]
            }
          },
          args: overrideArgs([
            {
              type: 'attribute',
              name: 'current',
              value: true
            },
            {
              type: 'slot',
              name: 'default',
              value: `Lorem ipsum est dolor sit amet`
            },
            {
              type: 'slot',
              name: 'label',
              value: `<span slot="label">Step name</span>`
            }
          ]),
          constants: [listWrapper]
        })
      )}
    `;
  }
};

/**
 * sd-steps are fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless" role="list">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-step');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    // We have to catch the event as otherwise Storybook will break
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Orientation,
  Description,
  DescriptionAndLabelUsingAttributes,
  Parts,
  Slots,
  Mouseless
]);
