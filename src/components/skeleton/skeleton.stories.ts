import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-skeleton',
  component: 'sd-skeleton',
  args: getDefaultArgs('sd-skeleton'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-skeleton', args);
  }
};
