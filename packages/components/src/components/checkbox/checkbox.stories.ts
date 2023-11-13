import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
const { argTypes, parameters } = storybookDefaults('sd-checkbox');
const { generateTemplate } = storybookTemplate('sd-checkbox');
const { overrideArgs } = storybookHelpers('sd-checkbox');

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Q7E9GTBET7Gs2HyH1kbpu5/Checkbox-%2F-Checkbox-Group?type=design&node-id=0-1&mode=design&t=DV2yJRUqqYBrskyb-0'
    }
  }
};

/**
 * Default: This shows sd-checkbox in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the disabled attribute to disable an input checkbox. Clicks will be suppressed until the disabled state is removed
 */

export const DisabledAndSize = {
  name: 'Disabled × Size',
  parameters: { controls: { exclude: ['disabled', 'size', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        },
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['lg', 'sm']
          }
        ]
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
      args
    });
  }
};

/**
 * Use the `size` attribute to change the size of the input checkbox. This attribute affects the font-size within the element, while the element itself remains the same size.
 */

export const Size = {
  parameters: { controls: { exclude: ['size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'sm']
        }
      },
      args
    });
  }
};

export const MultipleLines = {
  parameters: { controls: { exclude: ['size'] } },
  render: () => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'sm']
        }
      },
      args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot<br />Second Line' }])
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
        x: [{ type: 'attribute', name: 'size', values: ['lg', 'sm'] }],
        y: { type: 'attribute', name: 'required' }
      },
      args
    });
  }
};

export const Checked = {
  parameters: { controls: { exclude: ['checked'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        },
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['lg', 'sm']
          }
        ]
      },
      constants: { type: 'attribute', name: 'checked', value: true },
      args
    });
  }
};

export const Indeterminate = {
  parameters: { controls: { exclude: ['indeterminate'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        },
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['lg', 'sm']
          }
        ]
      },
      constants: { type: 'attribute', name: 'indeterminate', value: true },
      args
    });
  }
};

/**
 * Test invalid state inside a form.
 */

export const Invalid = {
  parameters: { controls: { exclude: ['required'] } },
  render: (args: any) => {
    return html`
      <form>
        ${generateTemplate({
          args,
          constants: [{ type: 'attribute', name: 'required', value: true }]
        })}
        <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
      </form>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

export const IndeterminateInvalid = {
  parameters: { controls: { exclude: ['required', 'indeterminate'] } },
  render: (args: any) => {
    return html`
      <form>
        ${generateTemplate({
          args,
          constants: [
            { type: 'attribute', name: 'required', value: true },
            { type: 'attribute', name: 'indeterminate', value: true }
          ]
        })}
        <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
      </form>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * Use the `base`, `control--unchecked`, `control--checked`, `checked` and `label` part selectors to customize the checkbox.
 */
export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'control',
        'control--unchecked',
        'control--checked',
        'checked-icon',
        'control--indeterminate',
        'indeterminate-icon',
        'label',
        'title',
        'name',
        'value',
        'size',
        'disabled',
        'checked',
        'indeterminate',
        'form',
        'required',
        'default'
      ]
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-checkbox::part(...){outline: solid 2px red}',
          values: [
            'base',
            'control',
            'control--unchecked',
            'control--checked',
            'checked-icon',
            'control--indeterminate',
            'indeterminate-icon',
            'label'
          ].map(part => {
            return {
              title: part,
              value: `
                <style>
                    #part-${part} sd-checkbox::part(${part}){outline: solid 2px red};
                    .hidden {display: none}
                </style>
                <div id="part-${part}">${checkboxTemplate(part)}</div>
                <div class="hidden">%TEMPLATE%</div>
              `
            };
          })
        }
      },
      args
    });
  }
};

const checkboxTemplate = (part: string) => {
  switch (part) {
    case 'control--checked':
      return `<sd-checkbox checked>Default Slot</sd-checkbox>`;
    case 'checked-icon':
      return `<sd-checkbox checked>Default Slot</sd-checkbox>`;
    case 'control--indeterminate':
      return `<sd-checkbox indeterminate>Default Slot</sd-checkbox>`;
    case 'indeterminate-icon':
      return `<sd-checkbox indeterminate>Default Slot</sd-checkbox>`;
    case 'form-control-error-text':
      return `<sd-checkbox error-text="Error message" invalid>Default Slot</sd-checkbox>`;
    default:
      return `<sd-checkbox>Default Slot</sd-checkbox>`;
  }
};
