import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Radio Button Group',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2636-23682&p=f&t=Y01QLfgFA6EP0DBr-0'
    }
  }
};

export const Default = {
  render: () => html`
    <sd-radio-group name="radio-group">
      <sd-radio-button value="list">
        <sd-icon slot="icon" name="system/list"></sd-icon>
        List
      </sd-radio-button>
      <sd-radio-button value="map">
        <sd-icon slot="icon" name="system/position"></sd-icon>
        Map
      </sd-radio-button>
    </sd-radio-group>
  `
};
