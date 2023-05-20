import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-progress-ring');
const { generateTemplate } = storybookTemplate('sd-progress-ring');

export default {
  title: 'Components/sd-progress-ring',
  component: 'sd-progress-ring',
  args,
  argTypes,
};


/**
 * Default: This shows sd-progress-ring in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
