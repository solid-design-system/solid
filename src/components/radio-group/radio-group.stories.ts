import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
  args: getDefaultArgs('sd-radio-group'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-radio-group', args);
  }
};
