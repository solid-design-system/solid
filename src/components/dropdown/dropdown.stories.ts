import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-dropdown',
  component: 'sd-dropdown',
  args: getDefaultArgs('sd-dropdown'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-dropdown', args);
  }
};
