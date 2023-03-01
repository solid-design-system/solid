import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-visually-hidden',
  component: 'sd-visually-hidden',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-visually-hidden', args);
};

Default.args = { ...getDefaultArgs('sd-visually-hidden') };
