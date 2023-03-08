import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-divider',
  component: 'sd-divider',
  args: getDefaultArgs('sd-divider'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-divider', args);
  }
};
