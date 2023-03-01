import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-popup',
  component: 'sd-popup',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-popup', args);
};

Default.args = { ...getDefaultArgs('sd-popup') };
