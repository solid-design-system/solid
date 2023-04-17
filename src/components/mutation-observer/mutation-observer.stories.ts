import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-mutation-observer',
  component: 'sd-mutation-observer',
  args: getDefaultArgs('sd-mutation-observer'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-mutation-observer', args);
  }
};
