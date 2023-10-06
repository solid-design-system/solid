import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

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
      name: 'default',
      value:
        '<sd-radio value="1">Option 1</sd-radio><sd-radio value="2">Option 2</sd-radio><sd-radio value="3">Option 3</sd-radio>'
    },
    { type: 'attribute', name: 'name', value: 'radio-group' },
    {
      type: 'slot',
      name: 'label',
      value: '<label slot="label">Select an option</label>'
    }
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
          values: ['sm', 'lg']
        }
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
      args
    });
  }
};

/**
 * Use the `invalid` attribute to mark the element is not in a format or a value the application will accept.
 */

export const Invalid = {
  parameters: { controls: { exclude: ['invalid', 'disabled', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          { type: 'attribute', name: 'size' },
          { type: 'attribute', name: 'disabled', values: [false, true] }
        ]
      },
      constants: { type: 'attribute', name: 'invalid', value: true },
      args
    });
  }
};
