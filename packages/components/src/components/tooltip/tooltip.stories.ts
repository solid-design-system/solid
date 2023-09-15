import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
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
      type: 'slot',
      name: 'content',
      value: `<div slot='content'>Lorem ipsum sic semper</div>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    withActions,
    (story: any) => html` <style>
        div.slot {
          width: 24px;
          height: 24px;
        }
        sd-tooltip:not([rounded]) sd-button::part(base),
        sd-tooltip:not([rounded]) .slot {
          border-radius: 0;
        }
        td.template,
        .example,
        div.example {
          width: 120px;
          height: 70px;
        }
        .example {
          display: flex;
          flex-direction: column;
          padding: 12px;
        }
        .template-placement sd-tooltip[placement^='top'] .slot,
        .template-placement sd-tooltip[placement^='bottom'] .slot {
          width: 48px;
        }
        .template-placement sd-tooltip[placement^='left'] .slot,
        .template-placement sd-tooltip[placement^='right'] .slot {
          height: 36px;
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
    return generateTemplate({ args });
  }
};

export const Content = {
  parameters: {
    controls: { exclude: 'content' }
  },
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'attribute',
          name: 'content',
          value: 'Lorem ipsum dolor sit amet'
        }
      ],
      args
    });
  }
};

export const Placement = {
  parameters: { controls: { exclude: ['placement', 'open'] } },
  render: (args: any) => {
    return html`<div class="placement-story">
      ${['top', 'bottom', 'left', 'right'].map(value =>
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
              value: `<div class="template-placement">%TEMPLATE%</div>`
            },
            {
              type: 'slot',
              name: 'content',
              value: '<div class="slot slot--border slot--background"></div>'
            }
          ]
        })
      )}
    </div> `;
  }
};

export const Size = {
  parameters: { controls: { exclude: ['size', 'open'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size'
        }
      },
      args
    })
};

export const Other = {
  parameters: { controls: { exclude: ['size', 'open'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size'
        }
      },
      args
    })
};

export const Slots = {
  parameters: {
    controls: { exclude: ['default', 'content', 'open'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'content'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<slot-comp style="--slot-content: ''; --slot-height: 24px; --slot-width: 24px;"></slot-comp>`
                      : `<slot-comp slot='content' style="--slot-content: ''; --slot-height: 20px; --slot-width: 30px;"></slot-comp>`,
                  title: slot
                }
              ]
            }
          },
          args
        })
      )}
    `;
  }
};

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'body', 'open'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-accordion::part(...){outline: solid 2px red}',
          values: ['base', 'body'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-accordion::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'attribute', name: 'open', value: true }
      ],
      args
    });
  }
};
