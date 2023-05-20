import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-option');
const { generateTemplate } = storybookTemplate('sd-option');

export default {
  title: 'Components/sd-option',
  component: 'sd-option',
  args,
  argTypes,
};


/**
 * Default: This shows sd-option in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
