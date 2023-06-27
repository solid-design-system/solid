import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-alert');
const { generateTemplate } = storybookTemplate('sd-alert');

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-alert in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
