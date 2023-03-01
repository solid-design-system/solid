import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-rating',
  component: 'sd-rating',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-rating', args);
};

Default.args = { ...getDefaultArgs('sd-rating') };
