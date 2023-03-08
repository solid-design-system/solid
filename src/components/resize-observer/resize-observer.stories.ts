import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-resize-observer',
  component: 'sd-resize-observer',
  args: getDefaultArgs('sd-resize-observer'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-resize-observer', args);
  }
};
