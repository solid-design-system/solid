import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-badge');
const { overrideArgs } = storybookHelpers('sd-badge');
const { generateTemplate } = storybookTemplate('sd-badge');

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/frKFVz9UBKAtsvErLKTeGj/Badge?type=design&node-id=0-1&mode=design&t=OeLPPGif39ASuNmf-0'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: '8' }]),
  argTypes,
  decorators: [withActions] as any
};

/**
 * This shows the badge in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The badge in all possible combinations of `variant` and `inverted`.
 */

export const VariantAndInverted = {
  name: 'Variant × Inverted',
  parameters: { controls: { exclude: ['variant', 'inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    });
  }
};

/**
 * The badge in all possible combinations of `variant` and `size`.
 */

export const VariantAndSize = {
  name: 'Variant × Size',
  parameters: { controls: { exclude: ['variant', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * The badge in all possible combinations of `variant` and `size` with overflow indicator.
 */

export const Overflown = {
  name: 'Variant × Size (Overflowing)',
  parameters: { controls: { exclude: ['variant', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'size' }
      },
      constants: [],
      args: overrideArgs(
        { type: 'slot', name: 'overflow-indicator', value: '<span slot="overflow-indicator">+</span>' },
        args
      )
    });
  }
};

/**
 * Use the `base`, `content` and `overflow-indicator` part selectors to customize the badge.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'content', 'overflow-indicator', 'size'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-badge::part(...){outline: solid 1.5px red}',
          values: ['base', 'content', 'overflow-indicator'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-badge::part(${part}){outline: solid 1.5px red; margin-bottom: 0;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'slot', name: 'default', value: '<span class="content">8</span>' },
        {
          type: 'slot',
          name: 'overflow-indicator',
          value: '<span class="overflow-indicator" slot="overflow-indicator">+</span>'
        }
      ],
      args
    });
  }
};

/**
 * Use the `default` slot to add content to the badge.
 * Use the `overflow-indicator` slot to add an overflow indicator.
 *
 * <b>Why did we add a slot for the overflow-indicator?</b>
 * Content in the shadow dom is currently not accessible by screen readers.
 * To make the overflow-indicator accessible it needs to be provided through a slot, as it will be reflected in the light dom in this case.
 *
 * <b>Hints</b>
 * - If you add icons to one of the slots, please make sure to account for accessibility by providing an alt-text.
 * - If <b>not</b> passed an element to the overflow-indicator slot, the badge will <b>not</b> add an overflow-indicator per default.
 */
export const Slots = {
  parameters: {
    controls: { exclude: ['size'] }
  },
  decorators: [
    (story: any) =>
      html`<style>
          .slot-highlight {
            color: white;
            border-radius: 6px;
            border-color: red;
            border-width: 2px;
            border-style: solid;
            --slot-height: 100%;
            --slot-width: 100%;
          }
          sd-badge::part(overflow-indicator) {
            margin-bottom: 0;
          }</style
        >${story()}`
  ],
  render: (args: any) => {
    return html`
      ${['default', 'overflow-indicator'].map(slot =>
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
                      ? `<span class="slot-highlight">8</span>`
                      : `<span slot="overflow-indicator" class="slot-highlight">+</span>`,
                  title: slot
                }
              ]
            }
          },
          constants: [{ type: 'template', name: 'width', value: '<div style="width: 100px">%TEMPLATE%</div>' }],
          args
        })
      )}
    `;
  }
};
