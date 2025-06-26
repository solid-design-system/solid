import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Switch',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=15034-649&t=obZU2ca0L5CjCDA4-4'
    }
  }
};

/**
 * ### Switch with Tooltip
 */
export const Default = {
  name: 'Switch with Tooltip',
  render: () => html`
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <sd-select style label="Investment product type" placeholder="Please Select" max-options-visible="2">
        <sd-option value="option-1">Equity fund</sd-option>
        <sd-option value="option-2">Bond fund</sd-option>
      </sd-select>
      <sd-select style label="Regional focus" placeholder="Please Select" max-options-visible="3">
        <sd-option value="option-1">Global</sd-option>
        <sd-option value="option-2">Europe</sd-option>
      </sd-select>
      <sd-select style label="Recommended investment horizon" placeholder="Please Select" max-options-visible="3">
        <sd-option value="option-1">Short-term (1-3 years)</sd-option>
        <sd-option value="option-2">Medium-term (3-5 years)</sd-option>
        <sd-option value="option-3">Long-term (5+ years)</sd-option>
      </sd-select>
      <sd-switch>
        With sustainability strategy (47)
        <sd-tooltip slot="tooltip" size="sm" content="Lorem ipsum"></sd-tooltip>
      </sd-switch>
      <sd-switch>
        Eligible for savings plan (162)
        <sd-tooltip slot="tooltip" size="sm" content="Lorem ipsum"></sd-tooltip>
      </sd-switch>
    </div>
  `
};
