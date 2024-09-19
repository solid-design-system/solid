import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Radio Button Group',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2636-24287&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * This shows sd-radio-group composed of sd-radio-buttons.
 */
export const Default = {
  name: 'Radio Button Group',
  render: () =>
    html` <sd-radio-group value="1">
      <sd-radio-button value="1">
        <sd-icon library="global-resources" name="system/list" slot="icon"></sd-icon> List
      </sd-radio-button>
      <sd-radio-button value="2">
        <sd-icon library="global-resources" name="system/position" slot="icon"></sd-icon> Map
      </sd-radio-button>
    </sd-radio-group>`
};
