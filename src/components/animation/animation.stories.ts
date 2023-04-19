import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-animation');
const { defaultTemplate } = storybookTemplates('sd-animation');

export default {
  title: 'Components/sd-animation',
  component: 'sd-animation',
  args,
  argTypes,
};


/**
 * Default: This shows sd-animation in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
