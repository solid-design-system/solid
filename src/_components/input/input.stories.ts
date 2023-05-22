import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
  args,
  argTypes,
};


/**
 * Default: This shows sd-input in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
