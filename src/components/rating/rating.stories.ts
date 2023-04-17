import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-rating',
  component: 'sd-rating',
  args: getDefaultArgs('sd-rating'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-rating', args);
  }
};
