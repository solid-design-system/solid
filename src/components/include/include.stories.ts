import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-include');
const { defaultTemplate } = storybookTemplates('sd-include');

export default {
  title: 'Components/sd-include',
  component: 'sd-include',
  args,
  argTypes,
};


/**
 * Default: This shows the include in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
