import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Step Group',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
/**
 * Example of how to set the active step in a step group.
 *
 * ```
 * ```
 */
export const NonInteractiveStepGroup = {
  render: () => html`
    <sd-step-group size="lg" orientation="horizontal" active-step="0" not-interactive>
      <sd-step size="lg" orientation="horizontal" state="default">
        <div slot="label">Make an appointment</div>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" state="current">
        <span slot="label">Select funds for savings plan</span>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" state="disabled">
        <span slot="label">Open a securities account</span>
      </sd-step>
    </sd-step-group>
  `
};

export const NonInteractiveStepGroupWithIcon = {
  render: () => html`
    <sd-step-group size="lg" orientation="horizontal" active-step="0" not-interactive>
      <sd-step size="lg" orientation="horizontal" state="default">
        <sd-icon slot="circle-content" name="content/calendar" class="h-12 w-12"></sd-icon>
        <div slot="label">1. Make an appointment</div>
        <div slot="description">Lorem ipsum est dolor sit amet</div>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" state="current">
        <sd-icon slot="circle-content" name="content/chess-piece" class="h-12 w-12"></sd-icon>
        <span slot="label">2. Select funds for savings plan</span>
        <div slot="description">Lorem ipsum est dolor sit amet</div>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" state="disabled">
        <sd-icon slot="circle-content" name="content/certificate" class="h-12 w-12"></sd-icon>
        <span slot="label">3. Open a securities account</span>
        <div slot="description">Lorem ipsum est dolor sit amet</div>
      </sd-step>
    </sd-step-group>
  `
};
