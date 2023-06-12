import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-format-date');
const { generateTemplate } = storybookTemplate('sd-format-date');

export default {
  title: 'Components/sd-format-date',
  component: 'sd-format-date',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-format-date in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
