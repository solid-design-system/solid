import '../../solid';
import { html, nothing } from 'lit';

export const Default = (args: any) => html`
  <sd-button
  >
    ${args.slot}
  </sd-button>
`;

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
  argTypes: {
    slot: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'Slotted Headline Content',
    },
  },
};
