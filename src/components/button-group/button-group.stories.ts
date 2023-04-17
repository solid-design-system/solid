import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-button-group',
  component: 'sd-button-group',
  args: getDefaultArgs('sd-button-group'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-button-group', args);
  }
};
