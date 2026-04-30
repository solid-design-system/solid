import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-step-group');
const { overrideArgs } = storybookHelpers('sd-step-group');
const { generateTemplate } = storybookTemplate('sd-step-group');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-step-group/Screenshots: sd-step-group',
  tags: ['!autodocs'],
  component: 'sd-step-group',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Lorem ipsum dolor sit</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" current>
          <p slot="label">Exercitation ullamco laboris</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" waiting>
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
  parameters: {
    ...parameters,
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            id: 'landmark-unique',
            enabled: false
          }
        ]
      }
    }
  }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div style="height:250px">${generateTemplate({ args })}</div>`;
  }
};

export const Orientation = {
  name: 'Orientation',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'orientation' }
      },
      args,
      options: {
        templateRenderer: ({ attributes, slots }) => {
          const attrs = Object.entries(attributes)
            .map(([attr, value]) => `${attr}='${value}'`)
            .join(' ');

          const slotted = Object.entries(slots ?? {})
            .map(([, slot]) => slot)
            .join('\n');

          return `<sd-step-group ${attrs} label=${attributes.orientation}>${slotted}</sd-step-group>`;
        }
      }
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

export const notInteractive = {
  name: 'Not Interactive X Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'not-interactive' },
        y: { type: 'attribute', name: 'size' }
      },
      args,
      options: {
        templateRenderer: ({ attributes, slots }) => {
          const attrs = Object.entries(attributes)
            .map(([attr, value]) => `${attr}='${value}'`)
            .join(' ');

          const slotted = Object.entries(slots ?? {})
            .map(([, slot]) => slot)
            .join('\n');

          return `<sd-step-group ${attrs} label="${attributes.size}-${attributes['not-interactive']}">${slotted}</sd-step-group>`;
        }
      }
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

export const Parts = {
  name: 'Parts',
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

            <sd-step size="lg" orientation="horizontal" waiting>
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

export const SetActiveStep = {
  name: 'Sample: Set Active Step',
  render: () => {
    return html`
      <sd-step-group id="set-active" size="lg" orientation="horizontal" active-step="0">
        <sd-step size="lg" orientation="horizontal">
          <p slot="label">Lorem ipsum dolor sit</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" waiting>
          <p slot="label">Exercitation ullamco laboris</p>
        </sd-step>

        <sd-step size="lg" orientation="horizontal" waiting>
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

export const SampleNotInteractive = {
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

export const ManualStateManagement = {
  name: 'Manual Step State Management',
  render: () => {
    return html`
      <sd-step-group size="lg" orientation="horizontal" active-step="-1">
        <sd-step>
          <p slot="label">Default</p>
        </sd-step>

        <sd-step current>
          <p slot="label">Current</p>
        </sd-step>

        <sd-step disabled>
          <p slot="label">Disabled</p>
        </sd-step>

        <sd-step waiting>
          <p slot="label">Waiting</p>
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
