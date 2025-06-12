import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Button',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3783-5108&t=RbtZGyoiJWkCznM8-4'
    }
  }
};

/**
 * Primary action is displayed on the right-hand side.
 */
export const ButtonGroupHorizontal = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <div class="flex flex-row gap-4 py-12">
        <sd-button variant="secondary">Maybe later</sd-button>
        <sd-button variant="primary">Cancel subscription</sd-button>
      </div>

      <div class="flex flex-row gap-4 py-12">
        <sd-button variant="secondary"
          ><sd-icon name="system/log-out" slot="icon-left"></sd-icon>Exit portal
        </sd-button>
        <sd-button variant="secondary"
          ><sd-icon name="system/download" slot="icon-left"></sd-icon>Download PDF</sd-button
        >
        <sd-button variant="primary">Accept terms of use</sd-button>
      </div>

      <div class="flex flex-row gap-4 py-12">
        <sd-button variant="secondary" size="sm">
         <sd-icon name="system/download" slot="icon-left"></sd-icon>PIF</sd-icon>
        </sd-button>
        <sd-button variant="secondary" size="sm">
          <sd-icon name="system/eye-open" slot="icon-left"></sd-icon>Add to watchlist
        </sd-button>
        <sd-button variant="secondary" size="sm">
          <sd-icon name="system/table" slot="icon-left"></sd-icon>Compare funds
        </sd-button>
        <sd-button variant="tertiary" size="sm">
          <sd-icon name="system/more-functions" slot="icon-left"></sd-icon>More actions
        </sd-button>
      </div>
    </div>
  `
};

/**
 * Primary action is stacked on top.
 */
export const ButtonGroupVertical = {
  render: () => html`
    <div class="flex flex-col gap-4" style="width: 208px">
      <sd-button variant="primary">Start investment</sd-button>
      <sd-button variant="secondary"
        ><sd-icon name="system/download" slot="icon-left"></sd-icon>Download report</sd-button
      >
      <sd-button variant="secondary">
        <sd-icon name="system/eye-open" slot="icon-left"></sd-icon>Add to watchlist</sd-button
      >
    </div>
  `
};

export const ButtonGroupVerticalFullWidth = {
  render: () => html`
    <div class="flex flex-col gap-4" style="width: 375px">
      <sd-button variant="primary">Start investment</sd-button>
      <sd-button variant="secondary">Learn about funds</sd-button>
    </div>
  `
};
