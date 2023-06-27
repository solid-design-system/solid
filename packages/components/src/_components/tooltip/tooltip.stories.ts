import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-tooltip');
const { generateTemplate } = storybookTemplate('sd-tooltip');

export default {
  title: 'Components/sd-tooltip',
  component: 'sd-tooltip',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-tooltip in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
