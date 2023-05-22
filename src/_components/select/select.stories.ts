import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args,
  argTypes,
};


/**
 * Default: This shows sd-select in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
