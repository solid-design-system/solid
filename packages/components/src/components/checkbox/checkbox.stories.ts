import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-checkbox');
const { generateTemplate } = storybookTemplate('sd-checkbox');
const { overrideArgs } = storybookHelpers('sd-checkbox');

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: { ...parameters }
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
        y: {
          type: 'attribute',
          name: 'size',
          values: ['sm', 'lg']
        }
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
          name: 'size'
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
          name: 'size'
        }
      },
      args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default slot<br />Second Line' }])
    });
  }
};

/**
 * Use the `invalid` attribute to mark the element is not in a format or a value the application will accept.
 */

export const Invalid = {
  parameters: { controls: { exclude: ['invalid', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['sm', 'lg']
          }
        ]
      },
      constants: [{ type: 'attribute', name: 'invalid', value: true }],
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

export const Indeterminate = {
  parameters: { controls: { exclude: ['indeterminate'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['sm', 'lg']
          }
        ]
      },
      constants: { type: 'attribute', name: 'indeterminate', value: true },
      args
    });
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
        'label'
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
