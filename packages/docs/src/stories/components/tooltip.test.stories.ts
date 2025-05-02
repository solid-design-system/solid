import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tooltip');
const { overrideArgs } = storybookHelpers('sd-tooltip');
const { generateTemplate } = storybookTemplate('sd-tooltip');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-tooltip/Screenshots: sd-tooltip',
  tags: ['!autodocs'],
  component: 'sd-tooltip',
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'open',
      value: true
    },
    {
      type: 'attribute',
      name: 'content',
      value: 'Lorem ipsum'
    }
  ]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [
    withActions,
    (story: any) =>
      html` <style>
          .template-position {
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .template-height {
            height: 110px;
          }
          .placement-story td.template,
          #story--components-sd-tooltip--skidding td.template,
          #story--components-sd-tooltip--distance td.template {
            position: relative;
            overflow: auto;
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * Default: This shows sd-tooltip in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div class="template-position template-height">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

export const Placement = {
  name: 'Placement',
  render: (args: any) => {
    return html`<div class="placement-story">
      ${['top', 'bottom'].map(value =>
        generateTemplate({
          axis: {
            x: {
              type: 'attribute',
              name: 'placement',
              values: [value, `${value}-start`, `${value}-end`]
            }
          },
          args,
          constants: [
            {
              type: 'template',
              name: 'placement',
              value: `<div class="template-height template-position">%TEMPLATE%</div>`
            }
          ]
        })
      )}
    </div> `;
  }
};

export const Size = {
  name: 'Size',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size'
        }
      },
      args,
      constants: [
        { type: 'template', name: 'width', value: '<div class="template-position">%TEMPLATE%</div>' },
        {
          type: 'attribute',
          name: 'placement',
          value: 'bottom'
        }
      ]
    })
};

export const Disabled = {
  name: 'Disabled',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled'
        }
      },
      args,
      constants: [
        { type: 'template', name: 'width', value: '<div class="template-position">%TEMPLATE%</div>' },
        {
          type: 'attribute',
          name: 'placement',
          value: 'bottom'
        }
      ]
    })
};

export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'default',
          title: 'slot=...',
          values: [
            {
              value: `<div class="slot slot--border slot--background slot--text" style="--slot-content: ''; --slot-height: 24px; --slot-width: 24px;"></div>`,
              title: 'default'
            },
            {
              value: `<div class="slot slot--border slot--background slot--text slot--inverted" slot='content' style="--slot-content: ''; --slot-height: 22px; --slot-width: 82px;"></div>`,
              title: 'content'
            }
          ]
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'width',
          value: '<div class="template-position">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'placement',
          value: 'bottom'
        }
      ]
    });
  }
};

export const Mouseless = {
  name: 'Mouseless',
  render: () => {
    return html`<div class="mouseless template-position template-height">
      <sd-tooltip content="Lorem ipsum"></sd-tooltip>
    </div>`;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-tooltip');
    await waitUntil(() => el?.shadowRoot?.querySelector('#tooltip'));
    await waitUntil(() => el?.shadowRoot?.querySelector('sd-icon'));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.type(el!.shadowRoot!.querySelector('sd-icon')!, '{return}', { pointerEventsCheck: 0 });
  }
};

export const Combination = generateScreenshotStory([Default, Placement, Size, Disabled, Slots, Mouseless]);
