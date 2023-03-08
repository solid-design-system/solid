import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-details',
  component: 'sd-details',
  args: getDefaultArgs('sd-details'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-details', args);
  }
};
