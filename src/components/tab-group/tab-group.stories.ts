import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
  args: getDefaultArgs('sd-tab-group'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-tab-group', args);
  }
};
