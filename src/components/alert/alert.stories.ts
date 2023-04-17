import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
  args: getDefaultArgs('sd-alert'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-alert', args);
  }
};
