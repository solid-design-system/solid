import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
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
        <sd-step size="lg" orientation="horizontal" state="default">
          <p slot="label">Lorem ipsum dolor sit</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <p slot="label">Exercitation ullamco laboris</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
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
 * Use the orientation attribute to set the axis of a step-group.
 */

export const Orientation = {
  parameters: { controls: { exclude: 'orientation' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'orientation' }
      },
      args
    });
  },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          width: 100%;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Use the 'base' and 'body' parts to style the step-group.
 */
export const Parts = {
  parameters: {
    controls: {
      exclude: ['base', 'body']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'orientation' },
        y: {
          type: 'template',
          name: 'sd-step-group::part(...){outline: solid 2px red}',
          values: ['base', 'body'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-step-group::part(${part}){outline: solid 2px red; outline-offset: -2px;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args
    });
  }
};

/**
 * sd-steps are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-step-group');
    await waitUntil(() => el?.querySelector('sd-step')?.shadowRoot?.querySelector('button'));

    el?.querySelector('sd-step')?.shadowRoot?.querySelector('button')!.focus();
  }
};

/**
 * This sample shows how to set the active step programmatically.
 */

export const SetActiveStep = {
  parameters: {
    controls: {
      include: []
    }
  },
  name: 'Sample: Set Active Step',
  render: () => {
    return html`
      <sd-step-group id="set-active" size="lg" orientation="horizontal" active-step="0">
        <sd-step size="lg" orientation="horizontal" state="default">
          <p slot="label">Lorem ipsum dolor sit</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <p slot="label">Exercitation ullamco laboris</p>
          Lorem ipsum est dolor sit amet
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
          <p slot="label">Reprehenderit qui in e name</p>
          Lorem ipsum est dolor sit amet
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
    `;
  }
};
