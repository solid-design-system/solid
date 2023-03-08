import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-format-date',
  component: 'sd-format-date',
  args: getDefaultArgs('sd-format-date'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-format-date', args);
  }
};
