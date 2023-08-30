import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-dropdown');
const { generateTemplate } = storybookTemplate('sd-dropdown');
const { overrideArgs } = storybookHelpers('sd-dropdown');

export default {
  title: 'Components/sd-dropdown',
  component: 'sd-dropdown',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'trigger',
      value: '<sd-button slot="trigger" style="position: relative">Trigger</sd-button>'
    },
    {
      type: 'slot',
      name: 'default',
      value: '<div class="slot slot--border slot--background"></div>'
    },
    {
      type: 'attribute',
      name: 'open',
      value: true
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    withActions,
    (story: any) =>
      html`<style>
          div.slot {
            width: 24px;
            height: 24px;
          }
          sd-dropdown:not([rounded]) sd-button::part(base),
          sd-dropdown:not([rounded]) .slot {
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
          .template-placement sd-dropdown[placement^='top'] .slot,
          .template-placement sd-dropdown[placement^='bottom'] .slot {
            width: 48px;
          }
          .template-placement sd-dropdown[placement^='left'] .slot,
          .template-placement sd-dropdown[placement^='right'] .slot {
            height: 36px;
          }

          #story--components-sd-dropdown--placement td.template,
          #story--components-sd-dropdown--skidding td.template,
          #story--components-sd-dropdown--distance td.template {
            position: relative;
            overflow: auto;
          }
          #anchor--components-sd-dropdown--no-auto-size .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--rounded .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--slots .innerZoomElementWrapper {
            min-height: 350px;
          }</style
        >${story()}`
  ] as unknown
};

/**
 * Default: This shows sd-dropdown in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div style="height: 200px; overflow: hidden;">
      ${generateTemplate({
        constants: {
          type: 'slot',
          name: 'default',
          value: '<div class="example"></div>'
        },
        args
      })}
    </div>`;
  }
};

/**
 * For round triggers (like e. g. default `sd-buttons`), set the `rounded` attribute. This sets a rounding on the dropdown and automatically adds a minimal distance of 1px between the trigger and the panel.
 */

export const Rounded = {
  parameters: { controls: { exclude: ['rounded', 'default'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'rounded'
        }
      },
      constants: {
        type: 'slot',
        name: 'default',
        value: '<div class="example"></div>'
      },
      args
    })
};

/**
 * The dropdown automatically adjusts its size to fit the screen. The content gets scrollable then. To disable this behavior, set the `no-auto-size` attribute.
 * Note: `no-flip` is activated here.
 */

export const NoAutoSize = {
  parameters: { controls: { exclude: ['default', 'no-flip', 'no-auto-size'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'no-auto-size'
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'default',
          value:
            '<div style="width: 120px;"><div style="height: 110vh; padding: 12px;"><div  class="slot slot--border slot--text slot--background" style="height: 100%; width: auto;">Scroll down<br><br>⬇️</div></div></div>'
        },
        {
          type: 'attribute',
          name: 'no-flip',
          value: true
        }
      ],
      args
    })
};

/**
 * The dropdown automatically flips its position to stay most visible in the viewport. To disable this behavior, set the `no-flip` attribute.
 */

export const NoFlip = {
  parameters: { controls: { exclude: ['no-flip', 'default'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'no-flip'
        }
      },
      constants: {
        type: 'slot',
        name: 'default',
        value: '<div class="example"></div>'
      },
      args
    })
};

/**
 * The preferred placement of the dropdown can be set with the `placement` attribute.
 * Note that the actual position may vary to ensure the panel remains in the viewport.
 */

export const Placement = {
  parameters: { controls: { exclude: ['placement'] } },
  render: (args: any) => {
    return html` ${['top', 'bottom', 'left', 'right'].map(value =>
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
            type: 'attribute',
            name: 'no-flip',
            value: true
          }
        ]
      })
    )}`;
  }
};

/**
 * The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.
 * Have in mind, that the default distance depends on whether the dropdown is rounded or not.
 */

export const Distance = {
  parameters: { controls: { exclude: ['rounded', 'distance', 'open', 'placement'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'rounded'
        },
        x: {
          type: 'attribute',
          name: 'distance',
          values: [{ value: undefined, title: '(default)' }, '0', '10']
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'placement',
          value: 'bottom'
        },
        {
          type: 'attribute',
          name: 'open',
          value: true
        }
      ],
      args
    });
  }
};

/**
 * The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.
 */

export const Skidding = {
  parameters: { controls: { exclude: ['placement'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'placement',
          values: ['bottom', 'right']
        },
        x: {
          type: 'attribute',
          name: 'skidding',
          values: ['0', '-20', '20']
        }
      },
      args
    });
  }
};

/**
 * Use the `default` slot to place the content of the dropdown.
 * Use the `trigger` slot to place a trigger like e. g. a button.
 */
export const Slots = {
  parameters: {
    controls: { exclude: ['size'] }
  },
  decorators: [
    (story: any) =>
      html`<style>
          .slot-highlight {
            outline: purple 1px dashed;
          }</style
        >${story()}`
  ],
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'default',
          title: 'slot=...',
          values: [
            {
              value: `<div class="slot slot--border slot--background example"></div><sd-button slot="trigger">Trigger</sd-button>`,
              title: 'default'
            },
            {
              value: `<div class="slot slot--text example"></div><sd-button class="slot slot--border" slot="trigger">Trigger</sd-button><div class="slot-overlay"  slot="trigger"></div>`,
              title: 'trigger'
            }
          ]
        }
      },
      constants: [{ type: 'slot', name: 'trigger', value: '' }],
      args
    });
  }
};

/**
 * sd-dropdowns and their content are fully accessibile via keyboard.
 */

export const Mouseless = {
  parameters: {
    controls: {
      exclude: ['rounded', 'open']
    }
  },
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<div class="example"><sd-link href="#">Link 1</sd-link><sd-link href="#">Link 2</sd-link><sd-link href="#">Link 3</sd-link></div>'
          },
          {
            type: 'attribute',
            name: 'open',
            value: false
          }
        ]
      })}
    </div>`;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const trigger = canvasElement.querySelector('.mouseless sd-button');
    const dropdown = canvasElement.querySelector('.mouseless sd-dropdown');
    await waitUntil(() => dropdown?.shadowRoot?.querySelector('#dropdown'));
    await waitUntil(() => trigger?.shadowRoot?.querySelector('button'));
    await waitUntil(() => dropdown?.shadowRoot?.querySelector('sd-popup:not([active])'));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.type(trigger!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};
