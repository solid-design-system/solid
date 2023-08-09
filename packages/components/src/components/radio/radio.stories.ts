import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes } = storybookDefaults('sd-radio');
const { generateTemplate } = storybookTemplate('sd-radio');
const { overrideArgs } = storybookHelpers('sd-radio');

export default {
  title: 'Components/sd-radio',
  component: 'sd-radio',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes
};

/**
 * Default: This shows sd-radio in its default state.
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
 * Use the `invalid` attribute to mark the element is not in a format or a value the application will accept.
 */

export const Invalid = {
  parameters: { controls: { exclude: ['invalid'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          { type: 'attribute', name: 'size' },
          { type: 'attribute', name: 'disabled' }
        ]
      },
      constants: { type: 'attribute', name: 'invalid', value: true },
      args
    });
  }
};
