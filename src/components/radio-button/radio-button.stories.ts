import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
  args: getDefaultArgs('sd-radio-button'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-radio-button', args);
  }
};
