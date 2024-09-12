import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Checkbox Group',
  parameters: {
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
