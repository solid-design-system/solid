import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-menu-item');
const { generateTemplate } = storybookTemplate('sd-menu-item');

export default {
  title: 'Components/sd-menu-item',
  component: 'sd-menu-item',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-menu-item in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
