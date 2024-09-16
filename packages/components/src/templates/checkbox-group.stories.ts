import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Checkbox Group',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2642-24726&t=JCsisVFNkWSlhSSN-4'
    },
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Example of a checkbox group with a label and two checked checkboxes.
 */

export const Default = {
  render: () => html`
    <sd-checkbox-group size="lg">
      <label slot="label">Checkbox Group Label</label>
      <sd-checkbox value="1" checked>Checkbox 1</sd-checkbox>
      <sd-checkbox value="2" checked>Checkbox 2</sd-checkbox>
      <sd-checkbox value="3">Checkbox 3</sd-checkbox>
    </sd-checkbox-group>
  `
};
