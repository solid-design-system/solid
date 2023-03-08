import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-dialog',
  component: 'sd-dialog',
  args: getDefaultArgs('sd-dialog'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-dialog', args);
  }
};
