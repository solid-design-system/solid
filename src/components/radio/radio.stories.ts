import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio',
  component: 'sd-radio',
  args: getDefaultArgs('sd-radio'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-radio', args);
  }
};
