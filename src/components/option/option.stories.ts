import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-option');
const { defaultTemplate } = storybookTemplates('sd-option');

export default {
  title: 'Components/sd-option',
  component: 'sd-option',
  args,
  argTypes,
};


/**
 * Default: This shows the option in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
