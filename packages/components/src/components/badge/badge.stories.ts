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
        templateBackgrounds: { alternate: 'y', colors: ['#ECF0F9', '#00358E'] }
      }
    });
  }
};

/**
 * Use the `default` slot to add content to the badge.
 *
 * If you add icons to the slot, please make sure to account for accessibility by providing an alt-text.
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
              value: `<span class='slot-highlight'>8</span>`,
              title: 'default'
            }
          ]
        }
      },
      constants: [{ type: 'template', name: 'width', value: '<div style="width: 100px">%TEMPLATE%</div>' }],
      args
    });
  }
};

/**
 * Use the `base` and `content` part selectors to customize the badge.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'content', 'size'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-badge::part(...){outline: solid 1.5px red}',
          values: ['base', 'content'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-badge::part(${part}){outline: solid 1.5px red; margin-bottom: 0;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'slot', name: 'default', value: '<span class="content">8</span>' }
      ],
      args
    });
  }
};
