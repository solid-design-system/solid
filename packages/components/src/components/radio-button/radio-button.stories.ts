import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-radio-button');
const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');

/**
 * The `sd-radio-button` is a type of a radio-group-item, same as the `sd-radio`. Radio button provides a button-style control for users to select one option from a group. They are specifically designed for integration within radio groups.
 */

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'icon',
      value: '<sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>'
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
        y: { type: 'attribute', name: 'size' }
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
  parameters: { controls: { exclude: ['icon', 'default', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      args,
      constants: [{ type: 'slot', name: 'default', value: '<div>Label</div>' }]
    });
  }
};

/**
 * Label only
 */

export const LabelOnly = {
  name: 'Label only',
  parameters: { controls: { exclude: ['icon', 'default'] } },
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
        { type: 'slot', name: 'default', value: '<div>Label</div>' },
        {
          type: 'slot',
          name: 'icon',
          value: ''
        }
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
