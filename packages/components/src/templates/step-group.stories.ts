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
export const SetActiveStep = {
  name: 'Sample: Set Active Step',
  render: () => html`
    <sd-step-group id="set-active" size="lg" orientation="horizontal" active-step="0">
      <sd-step size="lg" orientation="horizontal">
        <p slot="label">Step 1</p>
      </sd-step>

      <sd-step size="lg" orientation="horizontal">
        <p slot="label">Step 2</p>
      </sd-step>

      <sd-step size="lg" orientation="horizontal">
        <p slot="label">Reprehenderit qui in e name</p>
      </sd-step>
    </sd-step-group>

    <sd-button class="w-20 mt-8" size="sm" id="previous">Previous</sd-button>
    <sd-button class="w-20 mt-8" size="sm" id="next">Next</sd-button>

    <script type="module">
      const stepGroup = await document.querySelector('sd-step-group#set-active');

      const nextBtn = document.querySelector('sd-button#next');
      const prevBtn = document.querySelector('sd-button#previous');

      nextBtn.addEventListener('click', () => {
        stepGroup.setActiveStep(stepGroup.activeStep + 1);
      });

      prevBtn.addEventListener('click', () => {
        stepGroup.setActiveStep(stepGroup.activeStep - 1);
      });
    </script>
  `
};
