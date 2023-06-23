import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-relative-time');
const { generateTemplate } = storybookTemplate('sd-relative-time');

export default {
  title: 'Components/sd-relative-time',
  component: 'sd-relative-time',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-relative-time in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
