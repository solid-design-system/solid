import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-details',
  component: 'sd-details',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-details', args);
};

Default.args = { ...getDefaultArgs('sd-details'), };

