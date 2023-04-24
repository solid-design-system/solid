import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-resize-observer');
const { defaultTemplate } = storybookTemplates('sd-resize-observer');

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
    return defaultTemplate(args);
  }
};
