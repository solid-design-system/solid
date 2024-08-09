import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-step-group');
const { overrideArgs } = storybookHelpers('sd-step-group');
const { generateTemplate } = storybookTemplate('sd-step-group');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-step-group/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-step-group',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-step size="lg" orientation="horizontal" state="default">
          <p slot="label">Lorem ipsum dolor sit</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="current">
          <p slot="label">Exercitation ullamco laboris</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" state="disabled">
          <p slot="label">Reprehenderit qui in e name</p>
        </sd-step>`
    },
    {
      type: 'attribute',
      name: 'active-step',
      value: `1`
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
  name: 'Default',
  render: (args: any) => {
    return html`<div style="height:250px">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the orientation attribute to set the axis of a step-group.
 */

export const Orientation = {
  name: 'Orientation',
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
          height: 250px;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Use the not-interactive attribute to create a non-interactive step group.
 */

export const notInteractive = {
  name: 'Not Interactive X Size',
  parameters: { controls: { exclude: 'not-interactive' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'not-interactive' },
        y: { type: 'attribute', name: 'size' }
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
  name: 'Parts',
  parameters: {
    controls: {
      exclude: ['base', 'body']
    }
  },
  render: () => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'orientation' },
        y: {
          type: 'template',
          name: 'sd-step-group::part(...){outline: solid 2px red}',
          values: ['base', 'body'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-step-group::part(${part}){outline: solid 2px red; outline-offset: 0px;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
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
        },
        {
          type: 'attribute',
          name: 'active-step',
          value: `1`
        }
      ])
    });
  }
};

/**
 * sd-steps are fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
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
  parameters: { controls: { include: [] } },
  name: 'Sample: Set Active Step',
  render: () => {
    return html`
      <sd-step-group id="set-active" size="lg" orientation="horizontal" active-step="0">
        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Lorem ipsum dolor sit</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Exercitation ullamco laboris</p>
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
    `;
  }
};

/**
 * This sample shows how to use the not-interactive attribute with content icons. The border-radius of an sd-step is larger when the not-interactive attribute is set to `true`.
 * The size of the icon is recommended to be 48px for the 'lg' size and 32px for the 'sm' size. The size can be set using font-size.
 */

export const SampleNotInteractive = {
  parameters: { controls: { include: [] } },
  name: 'Sample: Not Interactive',
  render: () => {
    return html`
      <style>
        .headline {
          padding: 16px;
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <div class="headline">size = 'lg'</div>
      <sd-step-group size="lg" orientation="horizontal" not-interactive>
        <sd-step orientation="horizontal">
          <p slot="label">Lorem ipsum dolor sit</p>
          <sd-icon class="text-[48px]" name="content/image" slot="circle-content"></sd-icon>
        </sd-step>

        <sd-step orientation="horizontal">
          <p slot="label">Exercitation ullamco laboris</p>
          <sd-icon class="text-[48px]" name="content/image" slot="circle-content"></sd-icon>
        </sd-step>

        <sd-step orientation="horizontal">
          <p slot="label">Reprehenderit qui in e name</p>
          <sd-icon class="text-[48px]" name="content/image" slot="circle-content"></sd-icon>
        </sd-step>
      </sd-step-group>
      <div class="headline">size = 'sm'</div>
      <sd-step-group size="sm" orientation="horizontal" not-interactive>
        <sd-step orientation="horizontal">
          <p slot="label">Lorem ipsum dolor sit</p>
          <sd-icon class="text-3xl" name="content/image" slot="circle-content"></sd-icon>
        </sd-step>

        <sd-step orientation="horizontal">
          <p slot="label">Exercitation ullamco laboris</p>
          <sd-icon class="text-3xl" name="content/image" slot="circle-content"></sd-icon>
        </sd-step>

        <sd-step orientation="horizontal">
          <p slot="label">Reprehenderit qui in e name</p>
          <sd-icon class="text-3xl" name="content/image" slot="circle-content"></sd-icon>
        </sd-step>
      </sd-step-group>
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Orientation,
  notInteractive,
  Parts,
  Mouseless,
  SetActiveStep,
  SampleNotInteractive
]);
