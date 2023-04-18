import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-dialog');
const { defaultTemplate } = storybookTemplates('sd-dialog');

export default {
  title: 'Components/sd-dialog',
  component: 'sd-dialog',
  args,
  argTypes,
};


/**
 * Default: This shows the dialog in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
