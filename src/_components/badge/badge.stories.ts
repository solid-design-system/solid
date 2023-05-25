import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-badge');
const { generateTemplate } = storybookTemplate('sd-badge');

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  args,
  argTypes,
};


/**
 * Default: This shows sd-badge in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
