import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
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
 * Example of how to set the horizontal inline step with label only in a step group.
 */
export const HorizontalInlineWithLabelStepGroup = {
  name: 'Step Group Horizontal Inline with Label for current step only',
  render: () => html`
    <style>
      .hide-label sd-step:not([current])::part(label) {
        position: absolute;
        visibility: hidden;
        width: 1px;
        height: 1px;
        pointer-events: none;
      }
    </style>
    <div class="h-32 gap-16 w-[500px]">
      <sd-step-group size="sm" orientation="horizontal" active-step="0" class="w-full hide-label" label="Account">
        <sd-step orientation="horizontal" horizontal-inline current>
          <span slot="label">Account</span>
        </sd-step>
        <sd-step waiting orientation="horizontal" horizontal-inline label="Step 2"></sd-step>
        <sd-step orientation="horizontal" waiting horizontal-inline label="Step 3"></sd-step>
      </sd-step-group>
    </div>

    <div class="h-32 gap-16 w-[500px]">
      <sd-step-group size="sm" orientation="horizontal" active-step="1" class="w-full hide-label" label="Payment">
        <sd-step orientation="horizontal" horizontal-inline label="Step 1"></sd-step>
        <sd-step orientation="horizontal" horizontal-inline current>
          <span slot="label">Payment</span>
        </sd-step>
        <sd-step orientation="horizontal" waiting horizontal-inline label="Step 3"></sd-step>
      </sd-step-group>
    </div>

    <div class="h-32 gap-16 w-[500px]">
      <sd-step-group size="sm" orientation="horizontal" active-step="2" class="w-full hide-label" label="Confirmation">
        <sd-step orientation="horizontal" horizontal-inline label="Step 1"></sd-step>
        <sd-step orientation="horizontal" horizontal-inline label="Step 2"></sd-step>
        <sd-step orientation="horizontal" horizontal-inline current>
          <span slot="label">Confirmation</span>
        </sd-step>
      </sd-step-group>
    </div>
  `
};

/**
 * Example of how to set the active step in a step group.
 */
export const NonInteractiveStepGroup = {
  render: () => html`
    <sd-step-group label="Non-Interactive Step Group" size="lg" orientation="horizontal" not-interactive>
      <sd-step size="lg" orientation="horizontal">
        <p slot="label">Make an appointment</p>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" current>
        <span slot="label">Select funds for saving plan</span>
      </sd-step>

      <sd-step size="lg" orientation="horizontal" disabled>
        <span slot="label"
          >Open a new <br />
          account</span
        >
      </sd-step>

      <sd-step size="lg" orientation="horizontal" disabled>
        <span slot="label"
          >Provide <br />
          documents</span
        >
      </sd-step>
    </sd-step-group>
  `
};

/**
 * Example of how to set the horizontal inline step with description in a step group.
 */
export const NonInteractiveStepGroupWithIcon = {
  name: 'Non-Interactive Step Group with Icon',
  render: () => html`
    <sd-step-group
      label="Non-Interactive Step Group with Icon"
      size="sm"
      orientation="horizontal"
      active-step="0"
      not-interactive
    >
      <sd-step size="sm" orientation="horizontal" horizontal-inline state="default">
        <sd-icon slot="circle-content" name="content/calendar" class="h-8 w-8"></sd-icon>
        <span slot="label">Book appointment</span>
        <p class="sd-paragraph">Get advice from our partner banks and find the right plan for you.</p>
      </sd-step>

      <sd-step size="sm" orientation="horizontal" horizontal-inline state="current">
        <sd-icon slot="circle-content" name="content/chess-piece" class="h-8 w-8"></sd-icon>
        <span slot="label">Select fund</span>
        <p class="sd-paragraph">Choose the right fund for your plan from a wide range of funds.</p>
      </sd-step>

      <sd-step size="sm" orientation="horizontal" horizontal-inline state="disabled">
        <sd-icon slot="circle-content" name="content/certificate" class="h-8 w-8"></sd-icon>
        <span slot="label">Security account</span>
        <p class="sd-paragraph">Open your own securities account together with your bank advisor.</p>
      </sd-step>
    </sd-step-group>
  `
};

export const StepGroupForExtraSmallVariant = {
  name: 'Step Group for Extra Small Variant',
  render: () => html`
    <div class="w-[340px]">
      <sd-step-group id="step-group-xs" size="xs" orientation="vertical" not-interactive>
        <sd-step size="xs" orientation="vertical" label="Login">
          <p class="step-text">Log in to your bank's online banking using your access credentials.</p>
        </sd-step>

        <sd-step size="xs" orientation="vertical" label="Personal Data">
          <p class="step-text">
            Enter your personal data along with your tax identification number in the online banking portal or the
            Banking App.
          </p>
        </sd-step>

        <sd-step size="xs" orientation="vertical" label="Select a product">
          <p class="step-text">
            The product finder helps you find an investment solution that matches your preferences. Immediately after
            making your selection, you can configure your first transaction.
          </p>
        </sd-step>

        <sd-step size="xs" orientation="vertical" label="Check details">
          <p class="step-text">
            Check your entered data, confirm the legal documents, and approve everything using the VR SecureGo plus app.
          </p>
        </sd-step>

        <sd-step size="xs" orientation="vertical" label="Complete identification">
          <p class="step-text">
            Identify yourself via Video-Ident or the eID service. After successful completion, you will receive a
            confirmation and access to your securities account (depot).
          </p>
        </sd-step>
      </sd-step-group>
    </div>
  `
};
