import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { args, argTypes, parameters } = storybookDefaults('sd-radio-button');
// const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-radio-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [
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
      ]
    });
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
      args,
      constants: [
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
      ]
    });
  }
};

/**
 * Use the disabled attribute to disable a input radio. Clicks will be suppressed until the disabled state is removed
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
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      constants: [
        { type: 'attribute', name: 'disabled', value: true },
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
      ],
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
      constants: [
        {
          type: 'slot',
          name: 'icon',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>'
        },
        { type: 'attribute', name: 'showLabel', value: true },
        {
          type: 'slot',
          name: 'default',
          value: '<div>Label</div>'
        }
      ],
      args
    });
  }
};

/**
 * Label only
 */

export const LabelOnly = {
  parameters: { controls: { exclude: ['icon', 'label', 'showLabel'] } },
  render: (args: any) => {
    return generateTemplate({
      constants: [
        { type: 'attribute', name: 'showLabel', value: true },
        {
          type: 'slot',
          name: 'default',
          value: '<div>Label</div>'
        }
      ],
      args
    });
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
      constants: [
        {
          type: 'slot',
          name: 'icon',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>'
        },
        { type: 'attribute', name: 'showLabel', value: true },
        {
          type: 'slot',
          name: 'default',
          value: '<div>Label</div>'
        }
      ]
    });
  }
};
