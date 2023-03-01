import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio',
  component: 'sd-radio',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-radio', args);
};

Default.args = { ...getDefaultArgs('sd-radio') };
