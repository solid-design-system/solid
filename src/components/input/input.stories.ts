import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
  args: getDefaultArgs('sd-input'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-input', args);
  }
};
