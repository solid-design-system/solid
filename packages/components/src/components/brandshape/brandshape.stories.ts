import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');

export default {
  title: 'Components/sd-brandshape',
  component: 'sd-brandshape',
  parameters: { ...parameters },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes
};

/**
 * Default: This shows sd-brandshape in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 *  The brandshape in all possible `variant` and `form` combinations.
 */

export const VariantAndForm = {
  name: 'Variant x Form',
  parameters: { controls: { exclude: ['variant', 'form'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'form' }
      },
      args
    });
  }
};
