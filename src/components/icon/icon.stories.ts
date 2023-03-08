import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
  args: getDefaultArgs('sd-icon'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-icon', args);
  }
};
