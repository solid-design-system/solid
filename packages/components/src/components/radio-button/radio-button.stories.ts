import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-radio-button');
const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'icon',
      value: '<sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>'
    },
    {
      type: 'slot',
      name: 'default',
      value: '<div>Label</div>'
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-radio-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of the input radio. This attribute affects the font-size within the element, while the element itself remains the same size.
 */

export const Size = {
  parameters: { controls: { exclude: ['size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Use the show-label attribute to show the label of the radio button.
 */

export const LabelAndSize = {
  name: 'Label × Size',
  parameters: { controls: { exclude: ['icon', 'label', 'showLabel', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'showLabel',
          values: [false, true]
        },
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      args
    });
  }
};

/**
 * Label only
 */

export const LabelOnlyAndSize = {
  name: 'Label only × Size',
  parameters: { controls: { exclude: ['icon', 'label', 'showLabel'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      constants: [
        { type: 'attribute', name: 'showLabel', value: true },
        { type: 'attribute', name: 'hideIcon', value: true }
      ],
      args
    });
  }
};

/**
 * Use the disabled attribute to disable an input radio. Clicks will be suppressed until the disabled state is removed. `Checked` is an "internal" attribute but is shown here as an example of all possible combinations.
 */

export const DisabledAndChecked = {
  name: 'Disabled × Checked',
  parameters: { controls: { exclude: ['disabled', 'checked', 'default'] } },
  render: () => {
    return html`
      <div class="flex flex-col gap-4 w-[260px] p-4">
        <sd-radio-button showLabel>
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          <slot>Default</slot>
        </sd-radio-button>
        <sd-radio-button disabled showLabel>
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          <slot>Disabled</slot>
        </sd-radio-button>
        <sd-radio-button checked showLabel>
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          <slot>Checked</slot>
        </sd-radio-button>
        <sd-radio-button checked disabled showLabel>
          <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
          <slot class="whitespace-nowrap">Disabled and Checked</slot>
        </sd-radio-button>
      </div>
    `;
  }
};

/**
 * Radio buttons can be grouped together using the `sd-radio-group` component. Another example can be found there. Background options of white, neutral-100 and primary-100 can be used.
 */
export const GroupsAndBackgrounds = {
  parameters: { controls: { exclude: ['disabled', 'checked', 'default'] } },
  render: () => {
    return html`
      <div class="flex flex-col gap-4 w-fit">
        <div class="bg-white p-6">
          <sd-radio-group value="1">
            <sd-radio-button value="1">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
            <sd-radio-button value="2">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
            <sd-radio-button value="3">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
          </sd-radio-group>
        </div>
        <div class="bg-neutral-100 p-6">
          <sd-radio-group value="1">
            <sd-radio-button value="1">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
            <sd-radio-button value="2">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
            <sd-radio-button value="3">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
          </sd-radio-group>
        </div>
        <div class="bg-primary-100 p-6">
          <sd-radio-group value="1">
            <sd-radio-button value="1">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
            <sd-radio-button value="2">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
            <sd-radio-button value="3">
              <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
            </sd-radio-button>
          </sd-radio-group>
        </div>
      </div>
    `;
  }
};

/**
 * Use the `base`, `button`, `button--checked`, `icon` and `label` part selectors to customize the radio-button.
 */
export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'button', 'button--checked', 'default', 'icon', 'label'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-radio-button::part(...){outline: solid 2px red,}',
          values: ['base', 'button', 'button--checked', 'icon', 'label'].map(part => {
            return {
              title: part,
              value: `
              <style>#part-${part} sd-radio-button::part(${part}){outline: solid 2px red}</style>
              <div id="part-${part}">
                %TEMPLATE%
                ${
                  part === 'button--checked'
                    ? `<script>document.querySelector("#part-${part} sd-radio-button").checked = true;</script>`
                    : ''
                }
              </div>
            `
            };
          })
        }
      },
      args,
      constants: [{ type: 'attribute', name: 'showLabel', value: true }]
    });
  }
};

/**
 * `sd-radio-button` is fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-radio-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    el?.shadowRoot?.querySelector('button')!.focus();
  }
};
