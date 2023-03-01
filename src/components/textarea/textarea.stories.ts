import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-textarea',
  component: 'sd-textarea',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-textarea', args);
};

Default.args = { ...getDefaultArgs('sd-textarea') };
