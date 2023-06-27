import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-format-number');
const { generateTemplate } = storybookTemplate('sd-format-number');

export default {
  title: 'Components/sd-format-number',
  component: 'sd-format-number',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-format-number in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
