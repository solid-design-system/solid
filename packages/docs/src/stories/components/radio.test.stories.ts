import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio');
const { generateTemplate } = storybookTemplate('sd-radio');
const { overrideArgs } = storybookHelpers('sd-radio');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-radio/Screenshots: sd-radio',
  tags: ['!autodocs'],
  component: 'sd-radio',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

/**
 * Default: This shows sd-radio in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the size attribute to set the input radio desired size and the disabled attribute to disable the element. Clicks will be suppressed until the disabled state is removed
 */

export const DisabledAndSize = {
  name: 'Disabled × Size',
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
          values: ['lg', 'sm']
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
  name: 'Size',
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
  name: 'Invalid',
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

/**
 * Use the `base`, `control--unchecked`, `control--checked`, `checked` and `label` part selectors to customize the radio.
 */
export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      constants: { type: 'attribute', name: 'value', value: '1' },
      axis: {
        y: {
          type: 'template',
          name: 'sd-radio::part(...){outline: solid 2px red}',
          values: ['base', 'control--unchecked', 'control--checked', 'checked', 'label'].map(part => {
            return {
              title: part,
              value: `
                <style>#part-${part} sd-radio::part(${part}){outline: solid 2px red}</style>
                <div id="part-${part}">
                ${
                  !part.includes('unchecked')
                    ? '<sd-radio-group value="1">%TEMPLATE%</sd-radio-group>'
                    : '<sd-radio-group>%TEMPLATE%</sd-radio-group>'
                }
                </div>
              `
            };
          })
        }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, DisabledAndSize, Size, Invalid, Parts]);
