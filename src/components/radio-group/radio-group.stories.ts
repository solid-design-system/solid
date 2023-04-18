import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-radio-group');
const { defaultTemplate } = storybookTemplates('sd-radio-group');

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
  args,
  argTypes,
};


/**
 * Default: This shows the radio-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
