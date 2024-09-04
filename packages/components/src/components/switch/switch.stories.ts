import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
const { argTypes, parameters } = storybookDefaults('sd-switch');
const { generateTemplate } = storybookTemplate('sd-switch');
const { overrideArgs } = storybookHelpers('sd-switch');

export default {
  title: 'Components/sd-switch',
  component: 'sd-switch',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/sFzAnWIy3ck28dF4vv1RnE/Switch?node-id=642%3A1032&mode=dev'
    }
  }
};

/**
 * Default: This shows sd-switch in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the disabled attribute to disable an input switch. Clicks will be suppressed until the disabled state is removed
 */

export const Disabled = {
  parameters: { controls: { exclude: ['disabled', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        }
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
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
        y: { type: 'attribute', name: 'required' }
      },
      args
    });
  }
};

/**
 * Use the checked attribute to activate the switch.
 */

export const Checked = {
  parameters: { controls: { exclude: ['checked'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        }
      },
      constants: { type: 'attribute', name: 'checked', value: true },
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

/**
 * Use the `base`, `control--unchecked`, `control--checked`, `checked` and `label` part selectors to customize the switch.
 */

export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'control',
        'control--unchecked',
        'control--checked',
        'label',
        'title',
        'name',
        'value',
        'size',
        'disabled',
        'checked',
        'form',
        'thumb',
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
          name: 'sd-switch::part(...){outline: solid 2px red}',
          values: ['base', 'control', 'control--unchecked', 'control--checked', 'thumb', 'label'].map(part => {
            return {
              title: part,
              value: `
                <style>
                    #part-${part} sd-switch::part(${part}){outline: solid 2px red};
                    .hidden {display: none}
                </style>               
                <div id="part-${part}">${
                  part.includes('control--checked')
                    ? '<sd-switch checked>Default Slot</sd-switch>'
                    : '<sd-switch>Default Slot</sd-switch>'
                }</div>
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
