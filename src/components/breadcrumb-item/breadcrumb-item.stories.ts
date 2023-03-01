import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-breadcrumb-item', args);
};

Default.args = { ...getDefaultArgs('sd-breadcrumb-item') };
