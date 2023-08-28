import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tag');
const { generateTemplate } = storybookTemplate('sd-tag');
const { overrideArgs } = storybookHelpers('sd-tag');

export default {
  title: 'Components/sd-tag',
  component: 'sd-tag',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Tag' }),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-tag in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The tag in all possible combinations of `removable` and `selected` for both sizes.
 */

export const removableAndSelected = {
  name: 'Removable × Selected',
  parameters: { controls: { exclude: ['size', 'selected', 'removable', 'disabled'] } },
  render: (args: any) => {
    return html`
      ${['lg', 'sm'].map(size =>
        generateTemplate({
          axis: {
            x: { type: 'attribute', name: 'selected', values: ['false', 'true'] },
            y: { type: 'attribute', name: 'removable', values: ['false', 'true'] }
          },
          constants: [{ type: 'attribute', name: 'size', value: size }],
          args,
          options: { title: `size='${size}'` }
        })
      )}
    `;
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
  parameters: { controls: { exclude: ['size', 'selected', 'removable', 'disabled'] } },
  render: (args: any) => {
    return html`
      ${['lg', 'sm'].map(size =>
        generateTemplate({
          axis: {
            x: { type: 'attribute', name: 'selected', values: ['false', 'true'] },
            y: { type: 'attribute', name: 'removable', values: ['false', 'true'] }
          },
          constants: [
            { type: 'attribute', name: 'size', value: size },
            {
              type: 'attribute',
              name: 'disabled',
              value: 'true'
            }
          ],
          args,
          options: { title: `size='${size}'` }
        })
      )}
    `;
  }
};

/**
 * Use the `default` slot to add content to the tag.
 *
 * If you add icons to the slot, please make sure to account for accessibility by providing an alt-text.
 */

export const Slots = {
  parameters: {
    controls: { exclude: ['size', 'selected', 'removable', 'disabled'] }
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
              title: 'default',
              value: `<slot-comp style="--slot-content: ''; height: 16px; --slot-width: 108px; font-size: 8px">Replace this slot</slot-comp>`
            }
          ]
        }
      },
      args,
      constants: [{ type: 'attribute', name: 'removable', value: 'true' }]
    });
  }
};

/**
 * Use the `base`, `content` and `removable-indicator` part selectors to customize the button.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'content', 'removable-indicator', 'size', 'selected', 'removable', 'disabled'] }
  },
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
        { type: 'attribute', name: 'removable', value: 'true' }
      ],
      args
    });
  }
};

/**
 * sd-tags are fully accessibile via keyboard.
 */

export const Mouseless = {
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
