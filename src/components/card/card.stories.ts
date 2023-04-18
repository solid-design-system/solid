import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-card');
const { defaultTemplate } = storybookTemplates('sd-card');

export default {
  title: 'Components/sd-card',
  component: 'sd-card',
  args,
  argTypes,
};


/**
 * Default: This shows the card in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
