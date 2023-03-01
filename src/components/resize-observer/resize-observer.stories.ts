import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-resize-observer',
  component: 'sd-resize-observer',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-resize-observer', args);
};

Default.args = { ...getDefaultArgs('sd-resize-observer') };
