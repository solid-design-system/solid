import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-dropdown');
const { generateTemplate } = storybookTemplate('sd-dropdown');
const { overrideArgs } = storybookHelpers('sd-dropdown');

export default {
  title: 'Components/sd-dropdown',
  component: 'sd-dropdown',
  args: overrideArgs([
    { type: 'slot', name: 'trigger', value: '<sd-button slot="trigger">Trigger</sd-button>' },
    { type: 'attribute', name: 'rounded', value: true },
    {
      type: 'slot',
      name: 'default',
      value: '<slot-comp style="width: 20px; height: 20px; --slot-content: \'\'"></slot-comp>'
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
          sd-dropdown:not([rounded]) sd-button::part(base) {
            border-radius: 0;
          }</style
        >${story()}`
  ]
};

/**
 * Default: This shows sd-dropdown in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div style="height: 200px; overflow: hidden;">${generateTemplate({ args })}</div>`;
  }
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
        args
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
          type: 'template',
          name: 'the-template',
          value:
            '<div style="height: 70px; width: 120px; overflow: hidden; display: flex; align-items: center; justify-content: center;">%TEMPLATE%</div>'
        },
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
      constants: {
        type: 'template',
        name: 'the-template',
        value:
          '<div style="height: 70px; width: 120px; overflow: hidden; display: flex; align-items: center; justify-content: center;">%TEMPLATE%</div>'
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
              value: `<slot-comp></slot-comp>`,
              title: 'default'
            },
            {
              value: `<sd-button class="slot-highlight" slot="trigger"></sd-button>`,
              title: 'trigger'
            }
          ]
        }
      },
      constants: [{ type: 'template', name: 'width', value: '<div style="width: 100px">%TEMPLATE%</div>' }],
      args
    });
  }
};
