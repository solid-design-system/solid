import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-radio');
const { generateTemplate } = storybookTemplate('sd-radio');

export default {
  title: 'Components/sd-radio',
  component: 'sd-radio',
  args,
  argTypes,
};


/**
 * Default: This shows sd-radio in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
