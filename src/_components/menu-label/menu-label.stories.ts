import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-menu-label');
const { generateTemplate } = storybookTemplate('sd-menu-label');

export default {
  title: 'Components/sd-menu-label',
  component: 'sd-menu-label',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-menu-label in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
