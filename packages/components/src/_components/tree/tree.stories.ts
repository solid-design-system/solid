import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-tree');
const { generateTemplate } = storybookTemplate('sd-tree');

export default {
  title: 'Components/sd-tree',
  component: 'sd-tree',
  args,
  argTypes,
  parameters: {...parameters},
  decorators: [withActions] as any
};


/**
 * Default: This shows sd-tree in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
