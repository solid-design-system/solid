import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tooltip');
const { overrideArgs } = storybookHelpers('sd-tooltip');
const { generateTemplate } = storybookTemplate('sd-tooltip');

export default {
  title: 'Components/sd-tooltip',
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
  parameters: { ...parameters },
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
  render: (args: any) => {
    return html`<div class="template-position template-height">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

export const Placement = {
  parameters: { controls: { exclude: 'placement' } },
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
  parameters: { controls: { exclude: 'size' } },
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
  parameters: { controls: { exclude: 'disabled' } },
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

/**
 * In case of having the content longer than the space available, the tooltip can be set to scrollable by overriding the `pointer-events` property to auto. In this case the padding-right should also be adjusted via `sd-tooltip::part(body)`. This behavior is heavily discouraged, but it is available in case of need.
 *
 */
export const LongContent = {
  parameters: {
    controls: { exclude: 'content' }
  },
  render: () => {
    return html` <div>
      <style>
        sd-tooltip::part(body) {
          padding-right: 8px;
        }
        .long-content {
          padding-right: 8px;
        }
      </style>
      ${generateTemplate({
        axis: {
          x: {
            type: 'slot',
            name: 'content',
            values: [
              {
                value: `<div class='long-content' slot='content' style='pointer-events:auto; width: 100px;'>Lorem ipsum sic semper dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla euismod, nisl quis ultrices aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Lorem ipsum sic semper dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl. Nulla euismod, nisl quis ultrices aliquam, nunc nisl aliqu et nunc, quis ali qu am nisl nisl quis nisl.</div>`,
                title: 'long with fixed width'
              }
            ]
          }
        },
        args: overrideArgs([
          {
            type: 'attribute',
            name: 'open',
            value: true
          },
          {
            type: 'attribute',
            name: 'placement',
            value: 'bottom'
          }
        ]),
        constants: [
          {
            type: 'template',
            name: 'width',
            value: '<div class="template-position">%TEMPLATE%</div>'
          }
        ]
      })}
    </div>`;
  }
};

export const Slots = {
  parameters: {
    controls: { exclude: ['default', 'content'] }
  },
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
              value: `<div class="slot slot--border slot--background slot--text" slot='content' style="--slot-content: ''; --slot-height: 22px; --slot-width: 82px;"></div>`,
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
  parameters: {
    controls: {
      exclude: ['open']
    }
  },
  render: (args: any) => {
    return html`<div class="mouseless template-position template-height">${generateTemplate({ args })}</div>`;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-tooltip');
    await waitUntil(() => el?.shadowRoot?.querySelector('#tooltip'));
    await waitUntil(() => el?.shadowRoot?.querySelector('sd-icon'));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.type(el!.shadowRoot!.querySelector('sd-icon')!, '{return}', { pointerEventsCheck: 0 });
  }
};
