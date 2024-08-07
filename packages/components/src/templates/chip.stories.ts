import '../solid-components';
import { FlagSamples } from '../styles/flag/flag.stories';
import { html } from 'lit-html';

/**
 * Examples of usage of the component.
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Chip',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IUiRoK2jiW8ydM77uiY2RX/Chip?node-id=0-1&t=AZrPY5M4MtrvP04v-0'
    }
  }
};

export const Default = {
  render: () => html`<div class="sd-chip">Lorem ipsum</div>`
};

export const ChipSamples = FlagSamples;
