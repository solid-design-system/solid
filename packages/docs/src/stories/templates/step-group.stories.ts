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
 * Example of how to set the active step in a step group.
 */
export const HorizontalInlineWithLabelStepGroup = {
  name: 'Step Group Horizontal Inline with Label for Current Step Only',
  render: () => html`
    <div class="h-32 gap-16 w-[375px]">
      <sd-step-group
        size="sm"
        orientation="horizontal"
        active-step="0        "
        class="w-full"
        label="Orientation Label"
      >
        <sd-step size="sm" orientation="horizontal" horizontal-inline current>
          <p slot="label">Account</p>
        </sd-step>

        <sd-step size="sm" orientation="horizontal" horizontal-inline disabled> </sd-step
        ><sd-step size="sm" orientation="horizontal" horizontal-inline disabled> </sd-step>
      </sd-step-group>
    </div>

    <div class="h-32 gap-16 w-[375px]">
      <sd-step-group size="sm" orientation="horizontal" active-step="1" class="w-full" label="Orientation Label">
        <sd-step size="sm" orientation="horizontal" horizontal-inline></sd-step>
        <sd-step size="sm" orientation="horizontal" horizontal-inline current>
          <p slot="label">Payment</p>
        </sd-step>
        <sd-step size="sm" orientation="horizontal" horizontal-inline disabled></sd-step>
      </sd-step-group>
    </div>

    <div class="h-32 gap-16 w-[375px]">
      <sd-step-group size="sm" orientation="horizontal" active-step="2" class="w-full" label="Orientation Label">
        <sd-step size="sm" orientation="horizontal" horizontal-inline></sd-step>

        <sd-step size="sm" orientation="horizontal" horizontal-inline></sd-step>

        <sd-step size="sm" orientation="horizontal" horizontal-inline current>
          <p slot="label">Confirmation</p>
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
    <div class="w-[800px]">
      <sd-step-group label="Non-Interactive Step Group" size="lg" orientation="horizontal" not-interactive>
        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Make an appointment</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" current>
          <span slot="label">Select funds for saving plan</span>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" disabled>
          <span slot="label">Open a new account</span>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" disabled>
          <span slot="label">Provide documents</span>
        </sd-step>
      </sd-step-group>
    </div>
  `
};

export const NonInteractiveStepGroupWithIcon = {
  name: 'Non-Interactive Step Group with Icon',
  render: () => html`
    <div class="">
      <sd-step-group
        label="Non-Interactive Step Group with Icon"
        size="sm"
        orientation="horizontal"
        active-step="0"
        not-interactive
      >
        <sd-step
          size="sm"
          orientation="horizontal"
          horizontal-inline
          state="default"
          description="Get advice from our partner banks and find the right plan for you."
        >
          <sd-icon slot="circle-content" name="content/calendar" class="h-8 w-8"></sd-icon>
          <p slot="label">Book appointment</p>
        </sd-step>

        <sd-step
          size="sm"
          orientation="horizontal"
          horizontal-inline
          state="current"
          description="Choose the right fund for your plan from a wide range of funds."
        >
          <sd-icon slot="circle-content" name="content/chess-piece" class="h-8 w-8"></sd-icon>
          <p slot="label">Select fund</p>
        </sd-step>

        <sd-step
          size="sm"
          orientation="horizontal"
          horizontal-inline
          state="disabled"
          description="Open your own securities account together with your bank advisor."
        >
          <sd-icon slot="circle-content" name="content/certificate" class="h-8 w-8"></sd-icon>
          <p slot="label">Securitiy account</p>
        </sd-step>
      </sd-step-group>
    </div>
  `
};
