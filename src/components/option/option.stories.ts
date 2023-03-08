import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-option',
  component: 'sd-option',
  args: getDefaultArgs('sd-option'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-option', args);
  }
};
