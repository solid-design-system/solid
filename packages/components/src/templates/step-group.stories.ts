import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Step Group',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3298-8134&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * Example of how to set the active step in a step group.
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
        <p class="sd-paragraph">Get advice from our partner banks and find the right plan for you.</p>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" state="current">
        <sd-icon slot="circle-content" name="content/chess-piece" class="h-12 w-12"></sd-icon>
        <span slot="label">2. Select funds for savings plan</span>
        <p class="sd-paragraph">Choose the right fund for your plan from a wide range of funds.</p>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" state="disabled">
        <sd-icon slot="circle-content" name="content/certificate" class="h-12 w-12"></sd-icon>
        <span slot="label">3. Open a securities account</span>
        <p class="sd-paragraph">Open your own securities account together with your bank advisor.</p>
      </sd-step>
    </sd-step-group>
  `
};
