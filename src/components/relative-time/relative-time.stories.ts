import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-relative-time');
const { defaultTemplate } = storybookTemplates('sd-relative-time');

export default {
  title: 'Components/sd-relative-time',
  component: 'sd-relative-time',
  args,
  argTypes,
};


/**
 * Default: This shows the relative-time in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
