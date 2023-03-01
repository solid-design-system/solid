import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-mutation-observer',
  component: 'sd-mutation-observer',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-mutation-observer', args);
};

Default.args = { ...getDefaultArgs('sd-mutation-observer') };
