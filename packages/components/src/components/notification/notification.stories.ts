/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
const { argTypes, parameters } = storybookDefaults('sd-notification');
const { generateTemplate } = storybookTemplate('sd-notification');
const { overrideArgs } = storybookHelpers('sd-notification');

export default {
  title: 'Components/sd-notification',
  component: 'sd-notification',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-8 my-auto w-full">Default slot</div>`
    }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * This shows sd-notification in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to change the theme of the notification.
 */

export const Variants = {
  parameters: { controls: { exclude: ['variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' }
      },
      args
    });
  }
};

/**
 * Use the `closable` attribute to toggle a close button.
 */

export const Closable = {
  parameters: { controls: { exclude: ['closable'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'closable' }
      },
      args
    });
  }
};

/**
 * Use the `duration` attribute to set the duration(in milliseconds) of the notification.
 */

export const Duration = {
  parameters: { controls: { exclude: ['duration'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'duration', values: [Infinity, 90000] }
      },
      args
    });
  }
};

/**
 * Use the `duration-indicator` attribute to enable an animation that visualizes the duration of a notification.
 */

export const DurationIndicator = {
  parameters: { controls: { exclude: ['duration-indicator'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'duration-indicator' }
      },
      args,
      constants: { type: 'attribute', name: 'duration', value: [90000] }
    });
  }
};

/**
 * Create a toast notification by using the `toast` method and select a positioning using `toastStack`.
 */
export const Toast = {
  render: () => {
    return html`
      <div class="toast-button-wrapper">
        <sd-button role="button" id="toast-generator" variant="primary">Create Toast</sd-button>
      </div>
      <script>
        const button = document.querySelector('sd-button');

        function notify(variant = 'info', toastStack = 'top-right') {
          const notification = Object.assign(document.createElement('sd-notification'), {
            closable: true,
            toastStack: toastStack,
            innerHTML: 'Lorem ipsum dolor sit amet.'
          });

          document.body.append(notification);
          return notification.toast(variant);
        }

        button.addEventListener('click', () => {
          notify();
        });
      </script>
    `;
  }
  // play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
  //   const button = canvasElement.querySelector('#toast-generator');
  //   await userEvent.click(button!);
  // }
};

/**
 * Use the `base`, `icon`, `content`, `message`, `duration-indicator-current`, `duration-indicator-total` and `close-button`, part selectors to customize the notification.
 */

export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'icon',
        'content',
        'message',
        'duration-indicator-current',
        'duration-indicator-total',
        'close-button'
      ]
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-notification::part(...){outline: solid 2px red}',
          values: [
            'base',
            'icon',
            'content',
            'message',
            'duration-indicator-current',
            'duration-indicator-total',
            'close-button'
          ].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-notification::part(${part}){border: solid 2px red; z-index: 2;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: [
        { type: 'attribute', name: 'duration', value: [Infinity] },
        { type: 'attribute', name: 'duration-indicator', value: [true] },
        { type: 'attribute', name: 'closable', value: [true] }
      ]
    });
  }
};

/**
 * sd-notifications are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args,
        constants: [
          { type: 'attribute', name: 'closable', value: [true] },
          { type: 'attribute', name: 'open', value: 'true' }
        ]
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-notification');
    await waitUntil(() => el?.shadowRoot?.querySelector('#notification'));
    // We have to catch the event as otherwise Storybook will break
    await userEvent.type(el!.shadowRoot!.querySelector('#notification')!, '{return}', { pointerEventsCheck: 0 });
  }
};
