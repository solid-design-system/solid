import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-divider');
const { generateTemplate } = storybookTemplate('sd-divider');

export default {
  title: 'Components/sd-divider',
  component: 'sd-divider',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-divider in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
