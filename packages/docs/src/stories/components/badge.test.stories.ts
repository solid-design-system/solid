import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-badge');
const { overrideArgs } = storybookHelpers('sd-badge');
const { generateTemplate } = storybookTemplate('sd-badge');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-badge/Screenshots: sd-badge',
  component: 'sd-badge',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/frKFVz9UBKAtsvErLKTeGj/Badge?type=design&node-id=0-1&mode=design&t=OeLPPGif39ASuNmf-0'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: '8' }]),
  argTypes
};

/**
 * This shows the badge in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The badge in all possible combinations of `variant` and `size`.
 */

export const VariantAndSize = {
  name: 'Variant × Size',
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
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['', 'rgba(var(--sd-color-primary))']
        }
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
              value: `<span class='slot slot--border slot--background'>8</span>`,
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
  name: 'Parts',
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

export const Combination = generateScreenshotStory([Default, VariantAndSize, VariantAndInverted, Slots, Parts]);
