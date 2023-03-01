import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-skeleton',
  component: 'sd-skeleton',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-skeleton', args);
};

Default.args = { ...getDefaultArgs('sd-skeleton') };
