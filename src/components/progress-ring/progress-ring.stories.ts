import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-progress-ring',
  component: 'sd-progress-ring',
  args: getDefaultArgs('sd-progress-ring'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-progress-ring', args);
  }
};
