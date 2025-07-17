import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
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
    <div class="flex flex-col gap-8">
      <div class="flex flex-row gap-4 py-6">
        <sd-button variant="secondary">Maybe later</sd-button>
        <sd-button variant="primary">Cancel subscription</sd-button>
      </div>
      <div class="flex flex-row gap-2 py-6">
        <sd-button variant="secondary">
          <sd-icon name="system/log-out" slot="icon-left"></sd-icon>Exit portal
        </sd-button>
        <sd-button variant="secondary">
          <sd-icon name="system/download" slot="icon-left"></sd-icon>Download PDF
        </sd-button>
        <sd-button variant="primary">Accept terms of use</sd-button>
      </div>
      <div class="flex flex-row gap-2 py-6">
        <sd-button variant="secondary" size="sm">
          <sd-icon name="system/download" slot="icon-left"></sd-icon>PIF
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
    <div class="flex flex-col gap-4 w-[190px]">
      <sd-button variant="primary" size="sm">Open your first investment account</sd-button>
      <sd-button variant="secondary" size="sm"> Get personalized advice from our experts </sd-button>
    </div>
  `
};

/**
 * Primary action is stacked on top.
 */
export const ButtonGroupVerticalFullWidth = {
  render: () => html`
    <div class="flex flex-col gap-4 w-[375px]">
      <sd-button variant="primary">Start investment</sd-button>
      <sd-button variant="secondary">
        <sd-icon name="system/download" slot="icon-left"></sd-icon> Download report
      </sd-button>
      <sd-button variant="tertiary">
        <sd-icon name="system/eye-open" slot="icon-left"></sd-icon> Add to watchlist
      </sd-button>
    </div>
  `
};
/**
 *
 * **Accessibility:**
 * - Move away from disabling buttons if possible.
 * - Rely on default values to keep the button enabled by default.
 * - Prefer validating on submit and guide users directly to errors with sensible error messages.
 * - Use live validation only for fields like email or password to meet specific formatting requirements in real-time.
 *
 * If you need to use disabled buttons, consider ways to make them focusable and useful
 * by also making them more inclusive and providing a way out for customers.
 *
 * **Suggestion:**
 * - Use `visually-disabled` attribute and tooltip.
 */
export const InclusiveDisabledButtonWithTooltip = {
  name: 'Inclusive Disabled Button with Tooltip',
  render: () => html`
    <div class="flex flex-col gap-4 w-[500px]">
      <p class="text-neutral-700 text-sm">Fields marked with * are required.</p>
      <sd-textarea
        id="message-textarea"
        label="Your message *"
        placeholder="What can we help you with today?"
      ></sd-textarea>
      <div class="flex justify-end">
        <sd-tooltip
          id="tooltip"
          content="Enter a message to enable the button."
          trigger="hover focus"
          size="sm"
          placement="top"
          style="--max-width:136px"
        >
          <sd-button id="disabled-button" variant="primary" visually-disabled>Send</sd-button>
        </sd-tooltip>
      </div>
    </div>

    <script type="module">
      await Promise.all([customElements.whenDefined('sd-textarea'), customElements.whenDefined('sd-button')]);

      const button = document.getElementById('disabled-button');
      const textarea = document.getElementById('message-textarea');
      const tooltip = document.getElementById('tooltip');

      const updateButtonState = () => {
        const hasContent = textarea.value.trim().length > 0;

        button.toggleAttribute('visually-disabled', !hasContent);
        tooltip.toggleAttribute('disabled', hasContent);
      };

      updateButtonState();

      textarea.addEventListener('input', updateButtonState);
    </script>
  `
};
