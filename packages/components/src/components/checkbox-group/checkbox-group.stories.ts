import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-checkbox-group');
const { generateTemplate } = storybookTemplate('sd-checkbox-group');
const { overrideArgs } = storybookHelpers('sd-checkbox-group');

export default {
  title: 'Components/sd-checkbox-group',
  component: 'sd-checkbox-group',
  args: overrideArgs([
    { type: 'slot', name: 'label', value: `<label slot="label">Group Label</label>` },
    {
      type: 'slot',
      name: 'default',
      value: `<sd-checkbox name="checkbox" value="1">Checkbox 1</sd-checkbox><sd-checkbox name="checkbox" value="2">Checkbox 2</sd-checkbox><sd-checkbox name="checkbox" value="3">Checkbox 3</sd-checkbox>`
    }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Default: This shows sd-checkbox-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The sd-checkbox in all possible combinations of `orientation` and `size`.
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
 * Use the disabled attribute to disable a input checkbox. Clicks will be suppressed until the disabled state is removed
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
                  '<sd-checkbox value="1" disabled>Option 1</sd-checkbox><sd-checkbox value="2">Option 2</sd-checkbox><sd-checkbox value="3">Option 3</sd-checkbox>',
                title: 'true'
              },
              {
                value:
                  '<sd-checkbox value="1">Option 1</sd-checkbox><sd-checkbox value="2">Option 2</sd-checkbox><sd-checkbox value="3">Option 3</sd-checkbox>',
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
 * Use the `form-control`, `form-control-label` and `form-control-input` part selectors to customize the checkbox-group.
 */
export const Parts = {
  parameters: {
    controls: { exclude: ['form-control', 'form-control-label', 'form-control-input'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-checkbox-group::part(...){outline: solid 2px red}',
          values: ['form-control', 'form-control-label', 'form-control-input'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-checkbox-group::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
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
 * sd-checkbox-group are fully accessibile via keyboard.
 */
export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-checkbox-group');
    await waitUntil(() => el?.shadowRoot?.querySelector('label'));

    if (el?.shadowRoot) {
      const label = el.shadowRoot.querySelector('label');
      if (label) {
        await userEvent.type(label, '{space}', { pointerEventsCheck: 0 });
      }
    }
  }
};
