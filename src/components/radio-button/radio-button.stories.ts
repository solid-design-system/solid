import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-radio-button', args);
};

Default.args = { ...getDefaultArgs('sd-radio-button') };
