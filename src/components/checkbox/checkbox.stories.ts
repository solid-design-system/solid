import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  args: getDefaultArgs('sd-checkbox'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-checkbox', args);
  }
};
