import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-checkbox-group');
const { generateTemplate } = storybookTemplate('sd-checkbox-group');
const { overrideArgs } = storybookHelpers('sd-checkbox-group');

export default {
  title: 'Components/sd-checkbox-group',
  component: 'sd-checkbox-group',
  args: overrideArgs([
    { type: 'slot', name: 'label', value: `<legend slot="label">Select an option</legend>` },
    {
      type: 'slot',
      name: 'default',
      value: `<sd-checkbox name="test" value="1">test 1</sd-checkbox><sd-checkbox name="test" value="2">test 2</sd-checkbox>`
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
