import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-resize-observer');
const { generateTemplate } = storybookTemplate('sd-resize-observer');

export default {
  title: 'Components/sd-resize-observer',
  component: 'sd-resize-observer',
  args,
  argTypes,
};


/**
 * Default: This shows sd-resize-observer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
