import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-qr-code',
  component: 'sd-qr-code',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-qr-code', args);
};

Default.args = { ...getDefaultArgs('sd-qr-code') };
