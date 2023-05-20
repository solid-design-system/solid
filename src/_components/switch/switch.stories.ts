import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-switch');
const { generateTemplate } = storybookTemplate('sd-switch');

export default {
  title: 'Components/sd-switch',
  component: 'sd-switch',
  args,
  argTypes,
};


/**
 * Default: This shows sd-switch in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
