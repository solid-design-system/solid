import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-option',
  component: 'sd-option',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-option', args);
};

Default.args = { ...getDefaultArgs('sd-option') };
