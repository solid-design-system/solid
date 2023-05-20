import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
  args,
  argTypes,
};


/**
 * Default: This shows sd-radio-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
