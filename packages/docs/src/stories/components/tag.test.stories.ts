import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from 'storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-tag');
const { generateTemplate } = storybookTemplate('sd-tag');
const { overrideArgs } = storybookHelpers('sd-tag');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-tag/Screenshots: sd-tag',
  component: 'sd-tag',
  tags: ['!autodocs'],
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Tag' }),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

/**
 * Default: This shows sd-tag in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The tag in all possible combinations of `selected` and `size`.
 */

export const selectedAndSize = {
  name: 'Selected × Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'selected' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * The tag in all possible combinations of `removable` and `size`.
 */

export const removableAndSize = {
  name: 'Removable × Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'removable' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Use the `disabled` attribute to disable a tag. Clicks will be suppressed until the disabled state is removed.
 *
 * __Hint:__ If the href attribute is set i.e. the tag is rendered as a link (`<a>`),
 * the disabled attribute is ignored, as links may not be disabled.
 * To disable the tag in this case the href attribute has to be removed as well.
 */

export const Disabled = {
  name: 'Disabled',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'selected' },
        y: { type: 'attribute', name: 'removable' }
      },
      constants: [
        {
          type: 'attribute',
          name: 'disabled',
          value: 'true'
        }
      ],
      args
    });
  }
};

/**
 * Use the `default` slot to add content to the tag.
 * Use the `removable-indicator` slot to change the removability indicator.
 *
 * If you add icons to the slot, please make sure to account for accessibility by providing an alt-text.
 */

export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return html`
      ${['default', 'removable-indicator'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  title: slot,
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--background slot--border h-auto w-[108px] text-[8px]"></div>`
                      : `<div slot="removable-indicator" class="slot slot--background slot--border h-auto w-4 text-[8px]" aria-label="open"></div>`
                }
              ]
            }
          },
          args,
          constants: [
            { type: 'attribute', name: 'removable', value: 'true' },
            { type: 'attribute', name: 'size', value: 'lg' }
          ]
        })
      )}
    `;
  }
};

/**
 * Use the `base`, `content` and `removable-indicator` part selectors to customize the button.
 */

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-tag::part(...){outline: solid 2px red}',
          values: ['base', 'content', 'removable-indicator'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-tag::part(${part}){outline: solid 2px red;} #part-${part} .${part}{outline: solid 2px red;}</style><div id='part-${part}'>%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        {
          type: 'slot',
          name: 'default',
          value: '<span class="content">Tag</span>'
        },
        {
          type: 'slot',
          name: 'removable-indicator',
          value:
            '<sd-icon slot="removable-indicator" library="_internal" name="close" label="remove" class="removable-indicator">'
        },
        { type: 'attribute', name: 'removable', value: 'true' },
        { type: 'attribute', name: 'size', value: 'lg' }
      ],
      args
    });
  }
};

/**
 * sd-tags are fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-tag');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));

    if (el?.shadowRoot) {
      const button = el.shadowRoot.querySelector('button');
      if (button) {
        await userEvent.type(button, '{space}', { pointerEventsCheck: 0 });
      }
    }
  }
};

export const Combination = generateScreenshotStory([
  Default,
  selectedAndSize,
  removableAndSize,
  Disabled,
  Slots,
  Parts,
  Mouseless
]);
