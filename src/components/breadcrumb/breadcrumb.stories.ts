import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-breadcrumb',
  component: 'sd-breadcrumb',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-breadcrumb', args);
};

Default.args = { ...getDefaultArgs('sd-breadcrumb') };
