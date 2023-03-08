import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-card',
  component: 'sd-card',
  args: getDefaultArgs('sd-card'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-card', args);
  }
};
