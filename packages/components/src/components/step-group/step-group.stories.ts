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
        <sd-step size="lg" orientation="horizontal" state="waiting">
          <span slot="label">Step name</span>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="inProgress">
          <span slot="label">Step name</span>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="finished">
          <span slot="label">Step name</span>
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
 * Default: This shows sd-step-group in its default state.
 */

export const SetActiveStep = {
  parameters: { docs: { story: { inline: false, height: '200px' } } },

  render: (args: any) => {
    return html`
      <div class="flex gap-8">
        <div class="flex flex-col gap-4 mt-8">
          <h4 class="sd-headline sd-headline--size-base">Select the step you want to set as active:</h4>

          <div class="flex gap-4">
            <sd-button class="w-min" size="sm" id="step-1">1</sd-button>
            <sd-button class="w-min" size="sm" id="step-2">2</sd-button>
            <sd-button class="w-min" size="sm" id="step-3">3</sd-button>
          </div>
        </div>

        <div class="w-full">${generateTemplate({ args })}</div>
      </div>

      <script type="module">
        const btn1 = document.querySelector('sd-button#step-1');
        const btn2 = document.querySelector('sd-button#step-2');
        const btn3 = document.querySelector('sd-button#step-3');

        const stepGroup = document.querySelector('sd-step-group');

        btn1.addEventListener('click', () => {
          stepGroup.setActiveStep(0);
        });

        btn2.addEventListener('click', () => {
          stepGroup.setActiveStep(1);
        });

        btn3.addEventListener('click', () => {
          stepGroup.setActiveStep(2);
        });
      </script>
    `;
  }
};
