import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-step-group');
const { overrideArgs } = storybookHelpers('sd-step-group');
const { generateTemplate } = storybookTemplate('sd-step-group');

export default {
  title: 'Components/sd-step-group',
  component: 'sd-step-group',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-step size="lg" orientation="horizontal" state="finished">
          <p slot="label">Lorem ipsum dolor sit</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="inProgress">
          <p slot="label">Exercitation ullamco laboris</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="waiting">
          <p slot="label">Reprehenderit qui in e name</p>
          Lorem ipsum est dolor sit amet
        </sd-step>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-step-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * This sample shows how to set the active step programmatically.
 */

export const SetActiveStep = {
  name: 'Sample: Set Active Step',
  render: () => {
    return html`
      <sd-step-group id="set-active" size="lg" orientation="horizontal" activestep="0">
        <sd-step size="lg" orientation="horizontal" state="finished">
          <p slot="label">Lorem ipsum dolor sit</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="inProgress">
          <p slot="label">Exercitation ullamco laboris</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="waiting">
          <p slot="label">Reprehenderit qui in e name</p>
          Lorem ipsum est dolor sit amet
        </sd-step>
      </sd-step-group>

      <sd-button class="w-min mt-8" size="sm" id="next">Next</sd-button>

      <script type="module">
        const stepGroup = document.querySelector('sd-step-group#set-active');
        stepGroup.setActiveStep(1);

        const nextBtn = document.querySelector('sd-button#next');

        nextBtn.addEventListener('click', () => {
          stepGroup.setActiveStep(stepGroup.activeStep + 1);
        });
      </script>
    `;
  }
};
