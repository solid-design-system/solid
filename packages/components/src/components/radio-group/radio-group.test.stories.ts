import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');
const { overrideArgs } = storybookHelpers('sd-radio-group');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-radio-group/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-radio-group',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LP6fOKJjWupBBAL0rylL7H/Radio-%2F-Radio-Group?type=design&node-id=0-1&mode=design&t=ksZl4QS9N7UeLysz-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'label',
      value: `<label slot="label">Group Label</label>`
    },
    {
      type: 'slot',
      name: 'default',
      value: `<sd-radio value="1">Radio 1</sd-radio><sd-radio value="2">Radio 2</sd-radio><sd-radio value="3">Radio 3</sd-radio>`
    },
    { type: 'attribute', name: 'name', value: 'radio-group' },
    { type: 'attribute', name: 'value', value: '1' },
    { type: 'attribute', name: 'boldLabel', value: true }
  ]),
  argTypes
};

/**
 * Default: This shows sd-radio-group in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The sd-radio in all possible combinations of `orientation` and `size`.
 */

export const Orientation = {
  name: 'Orientation',
  parameters: { controls: { exclude: ['orientation', 'size', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'orientation' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Use the disabled attribute to disable a input radio. Clicks will be suppressed until the disabled state is removed
 */

export const Disabled = {
  name: 'Disabled x Size',
  parameters: { controls: { exclude: ['size', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          {
            type: 'slot',
            name: 'default',
            title: 'disabled',
            values: [
              {
                value:
                  '<sd-radio value="1" disabled>Option 1</sd-radio><sd-radio value="2">Option 2</sd-radio><sd-radio value="3">Option 3</sd-radio>',
                title: 'true'
              },
              {
                value:
                  '<sd-radio value="1">Option 1</sd-radio><sd-radio value="2">Option 2</sd-radio><sd-radio value="3">Option 3</sd-radio>',
                title: 'false'
              }
            ]
          }
        ],
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Use the `invalid` attribute to mark the element is not in a format or a value the application will accept.
 */

export const Invalid = {
  name: 'Invalid',
  parameters: { controls: { exclude: ['size', 'value', 'required', 'invalid'] } },
  render: (args: any) => {
    return html`<form>
      ${generateTemplate({
        constants: [
          { type: 'attribute', name: 'required', value: true },
          { type: 'attribute', name: 'value', value: '' }
        ],
        args
      })}
      <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
    </form>`;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * Use the `form-control`, `form-control-label` and `form-control-input` part selectors to customize the radio-group.
 */
export const Parts = {
  name: 'Parts',
  parameters: {
    controls: { exclude: ['form-control', 'form-control-label', 'form-control-input'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-radio-group::part(...){outline: solid 2px red}',
          values: ['form-control', 'form-control-label', 'form-control-input'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-radio-group::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [{ type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }],
      args
    });
  }
};

/**
 * sd-radio-group are fully accessibile via keyboard.
 */
export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-radio-group');
    await waitUntil(() => el?.shadowRoot?.querySelector('label'));

    if (el?.shadowRoot) {
      const label = el.shadowRoot.querySelector('label');
      if (label) {
        await userEvent.type(label, '{space}', { pointerEventsCheck: 0 });
      }
    }
  }
};

/**
 * This shows `sd-radio-group` using multiple `sd-radio-buttons` in it's default state.
 */

export const RadioButtons = {
  name: 'Radio Buttons',
  parameters: { controls: { exclude: ['default', 'size', 'value', 'required', 'invalid', 'label', 'orientation'] } },
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [
        {
          type: 'slot',
          name: 'default',
          value:
            '<sd-radio-button value="1" showLabel><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon><div>Label</div></sd-radio-button><sd-radio-button value="2" showLabel><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon><div>Label</div></sd-radio-button><sd-radio-button value="3" showLabel><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon><div>Label</div></sd-radio-button>'
        },
        {
          type: 'slot',
          name: 'label',
          value: ``
        }
      ]
    });
  }
};

/**
 * `sd-radio-group` with multiple `sd-radio-buttons` is fully accessibile via keyboard.
 */

export const MouselessWithRadioButtons = {
  name: 'Mouseless with Radio Buttons',
  parameters: { controls: { exclude: ['default', 'size', 'value', 'required', 'invalid', 'label', 'orientation'] } },
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<sd-radio-button value="1"><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon></sd-radio-button><sd-radio-button value="2"><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon></sd-radio-button><sd-radio-button value="3"><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-radio-button>'
          },
          {
            type: 'attribute',
            name: 'value',
            value: `2`
          },
          {
            type: 'slot',
            name: 'label',
            value: ``
          }
        ]
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelectorAll('.mouseless sd-radio-button')[1];
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    el?.shadowRoot?.querySelector('button')!.focus();
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Orientation,
  Disabled,
  Invalid,
  Parts,
  Mouseless,
  RadioButtons,
  MouselessWithRadioButtons
]);
