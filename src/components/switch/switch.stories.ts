import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-switch');
const { defaultTemplate } = storybookTemplates('sd-switch');

export default {
  title: 'Components/sd-switch',
  component: 'sd-switch',
  args,
  argTypes,
};


/**
 * Default: This shows sd-switch in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
