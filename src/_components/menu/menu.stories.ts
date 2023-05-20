import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-menu');
const { generateTemplate } = storybookTemplate('sd-menu');

export default {
  title: 'Components/sd-menu',
  component: 'sd-menu',
  args,
  argTypes,
};


/**
 * Default: This shows sd-menu in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
