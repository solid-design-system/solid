import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-format-bytes');
const { generateTemplate } = storybookTemplate('sd-format-bytes');

export default {
  title: 'Components/sd-format-bytes',
  component: 'sd-format-bytes',
  args,
  argTypes,
};


/**
 * Default: This shows sd-format-bytes in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
