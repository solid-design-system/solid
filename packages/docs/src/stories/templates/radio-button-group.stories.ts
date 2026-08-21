import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Radio Button Group',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2636-23682&p=f&t=Y01QLfgFA6EP0DBr-0'
    }
  }
};

/**
 * Example of how to use the radio button group as a segmented toggle for switching between two views. Each option combines an icon with a label, and the active selection is filled — shown here as a List/Map view switcher.
 */

export const Default = {
  render: () => html`
    <sd-radio-group name="radio-group" value="list">
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
