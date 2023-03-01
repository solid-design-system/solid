import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-input', args);
};

Default.args = { ...getDefaultArgs('sd-input') };
