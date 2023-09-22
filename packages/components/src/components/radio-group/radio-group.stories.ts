import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');
const { overrideArgs } = storybookHelpers('sd-radio-group');

export default {
  title: 'Components/sd-radio-group',
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
      value: `
        <label slot="label">Select an option</label>
      `
    },
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-radio value="1">Option 1</sd-radio>
        <sd-radio value="2">Option 2</sd-radio>
        <sd-radio value="3">Option 3</sd-radio>
        `
    },
    { type: 'attribute', name: 'name', value: 'radio-group' },
    { type: 'attribute', name: 'value', value: '2' }
  ]),
  argTypes
};

/**
 * Default: This shows sd-radio-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The sd-radio in all possible combinations of `orientation` and `size`.
 */

export const Orientation = {
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
  parameters: { controls: { exclude: ['invalid', 'size', 'error-text'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'size' }]
      },
      constants: [
        { type: 'attribute', name: 'invalid', value: true },
        { type: 'attribute', name: 'error-text', value: 'Error message' }
      ],
      args
    });
  }
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const Required = {
  parameters: { controls: { exclude: ['required'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [{ type: 'attribute', name: 'size' }],
        y: { type: 'attribute', name: 'required' }
      },
      args
    });
  }
};

/**
 * Use the `form-control`, `form-control-label`, `form-control-input` and `form-control-error-text` part selectors to customize the radio-group.
 */
export const Parts = {
  parameters: {
    controls: { exclude: ['form-control', 'form-control-label', 'form-control-input', 'form-control-error-text'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-radio-group::part(...){outline: solid 2px red}',
          values: ['form-control', 'form-control-label', 'form-control-input', 'form-control-error-text'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-radio-group::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'attribute', name: 'error-text', value: 'Error message' }
      ],
      args
    });
  }
};

/**
 * sd-radio-group are fully accessibile via keyboard.
 */
export const Mouseless = {
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
