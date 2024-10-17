import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */

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
      <div class="flex flex-row gap-8">
        <sd-button variant="secondary">Secondary Action</sd-button>
        <sd-button variant="primary">Primary Action</sd-button>
      </div>
      <div class="flex flex-row gap-8">
        <sd-button variant="secondary">Secondary Action</sd-button>
        <sd-button variant="secondary">Secondary Action</sd-button>
        <sd-button variant="primary">Primary Action</sd-button>
      </div>
      <div class="flex flex-row gap-8">
        <sd-button variant="tertiary">Tertiary Action</sd-button>
        <sd-button variant="secondary">Secondary Action</sd-button>
        <sd-button variant="primary">Primary Action</sd-button>
      </div>
      <div class="flex flex-row gap-8">
        <sd-button variant="secondary">
          <sd-icon name="system/more-functions" label="Icon only"></sd-icon>
        </sd-button>
        <sd-button variant="primary">Primary Action</sd-button>
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
      <sd-button variant="primary">Primary Action</sd-button>
      <sd-button variant="secondary">Secondary Action</sd-button>
      <sd-button variant="tertiary">Tertiary Action</sd-button>
    </div>
  `
};

export const ButtonGroupVerticalFullWidth = {
  render: () => html`
    <div class="flex flex-col gap-4">
      <sd-button variant="primary">Primary Action Full width</sd-button>
      <sd-button variant="secondary">Secondary Action Full width</sd-button>
    </div>
  `
};
