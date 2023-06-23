import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-mutation-observer');
const { generateTemplate } = storybookTemplate('sd-mutation-observer');

export default {
  title: 'Components/sd-mutation-observer',
  component: 'sd-mutation-observer',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-mutation-observer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
