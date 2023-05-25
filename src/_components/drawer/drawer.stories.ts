import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-drawer');
const { generateTemplate } = storybookTemplate('sd-drawer');

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',
  args,
  argTypes,
};


/**
 * Default: This shows sd-drawer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
