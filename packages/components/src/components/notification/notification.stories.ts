/* eslint-disable @typescript-eslint/no-unused-vars */
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
      value: `<div class="flex items-center h-6">Lorem ipsum dolor sit.</div>`
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
    (story: () => typeof html) => html`
      <style>
        td.template {
          width: 100%;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * This shows sd-notification in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `variant` attribute to change the theme of the notification.
 */

export const Variants = {
  parameters: { controls: { exclude: ['variant', 'open'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' }
      },
      args,
      constants: { type: 'attribute', name: 'open', value: true }
    });
  }
};

/**
 * Use the `closable` attribute to toggle a close button.
 */

export const Closable = {
  parameters: { controls: { exclude: ['closable', 'open'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'closable' }
      },
      args,
      constants: { type: 'attribute', name: 'open', value: true }
    });
  }
};

/**
 * Use the `duration` attribute to set the duration (in milliseconds) of the notification.
 */

export const Duration = {
  parameters: { controls: { exclude: ['duration'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'duration', values: [Infinity, 5000] }
      },
      args,
      constants: { type: 'attribute', name: 'open', value: true }
    });
  }
};

/**
 * Use the `duration-indicator` attribute to enable an animation that visualizes the duration of a notification.
 */

export const DurationIndicator = {
  parameters: { controls: { exclude: ['duration', 'duration-indicator', 'open'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'duration-indicator', values: [true] }
      },
      args,
      constants: [
        { type: 'attribute', name: 'duration', value: 10000 },
        { type: 'attribute', name: 'open', value: true }
      ]
    });
  }
};

/**
 * Display a toast notification at the top-right of the screen by using the `toast` method. The default position is `top-right`.
 */
export const ToastNotification = {
  parameters: {
    controls: {
      exclude: ['open', 'closable', 'variant', 'toast-stack', 'duration', 'duration-indicator', 'default-slot']
    }
  },
  name: 'Toast Notification (Default)',
  render: (_args: Record<string, any>) => {
    return html`
      <div class="flex gap-2">
        <sd-button
          variant="secondary"
          data-notification-type="info"
          data-notification-position="top-right"
          class="w-24"
        >
          Info
        </sd-button>
        <sd-button
          variant="secondary"
          data-notification-type="success"
          data-notification-position="top-right"
          class="w-24"
        >
          Success
        </sd-button>
        <sd-button
          variant="secondary"
          data-notification-type="warning"
          data-notification-position="top-right"
          class="w-24"
          >Warning</sd-button
        >
        <sd-button
          variant="secondary"
          data-notification-type="error"
          data-notification-position="top-right"
          class="w-24"
          >Error</sd-button
        >
      </div>
      <script>
        var buttons = document.querySelectorAll('[data-notification-position="top-right"]');

        function notify(variant = 'info') {
          const notification = Object.assign(document.createElement('sd-notification'), {
            closable: true,
            variant: variant,
            toastStack: 'top-right',
            duration: 5000,
            innerHTML: 'Lorem ipsum dolor sit amet.'
          });

          document.body.append(notification);
          return notification.toast();
        }

        buttons.forEach(button => {
          button.addEventListener('click', () => {
            notify(button.getAttribute('data-notification-type'));
          });
        });
      </script>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const button = canvasElement.querySelector('#top-right');
    await userEvent.click(button!);
  }
};

/**
 * Display a toast notification positioned at the bottom-center of the screen. Set the `toastStack` attribute to `bottom-center` for the alternative position of the toast sd-notification.
 */
export const ToastBottomCenter = {
  parameters: {
    controls: {
      exclude: ['open', 'closable', 'variant', 'toast-stack', 'duration', 'duration-indicator']
    }
  },
  name: 'Toast Notification (Bottom Center)',
  render: (_args: Record<string, any>) => {
    return html`
      <div class="flex gap-2">
        <sd-button
          variant="secondary"
          data-notification-type="info"
          data-notification-position="bottom-center"
          class="w-24"
        >
          Info
        </sd-button>
        <sd-button
          variant="secondary"
          data-notification-type="success"
          data-notification-position="bottom-center"
          class="w-24"
        >
          Success
        </sd-button>
        <sd-button
          variant="secondary"
          data-notification-type="warning"
          data-notification-position="bottom-center"
          class="w-24"
          >Warning</sd-button
        >
        <sd-button
          variant="secondary"
          data-notification-type="error"
          data-notification-position="bottom-center"
          class="w-24"
          >Error</sd-button
        >
      </div>

      <script>
        var buttons = document.querySelectorAll('[data-notification-position="bottom-center"]');

        function notifyBottomCenter(variant = 'info') {
          const notification = Object.assign(document.createElement('sd-notification'), {
            closable: true,
            variant: variant,
            toastStack: 'bottom-center',
            duration: Infinity,
            innerHTML: 'Lorem ipsum dolor sit amet.'
          });

          notification.style.width = '250px';

          document.body.append(notification);
          return notification.toast();
        }

        buttons.forEach(button => {
          button.addEventListener('click', () => {
            notifyBottomCenter(button.getAttribute('data-notification-type'));
          });
        });
      </script>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const button = canvasElement.querySelector('#bottom-center');
    await userEvent.click(button!);
  }
};

/**
 * Use the `base`, `icon`, `content`, `message`, `duration-indicator__elapsed`, `duration-indicator__total` and `close-button`, part selectors to customize the notification.
 */

export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'icon',
        'content',
        'message',
        'duration-indicator__elapsed',
        'duration-indicator__total',
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
            'duration-indicator__elapsed',
            'duration-indicator__total',
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
        { type: 'attribute', name: 'duration', value: Infinity },
        { type: 'attribute', name: 'duration-indicator', value: true },
        { type: 'attribute', name: 'closable', value: true },
        { type: 'attribute', name: 'open', value: true }
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
          { type: 'attribute', name: 'closable', value: true },
          { type: 'attribute', name: 'open', value: true }
        ]
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-notification');
    await waitUntil(() => el?.shadowRoot?.querySelector('sd-button'));

    el?.shadowRoot?.querySelector('sd-button')?.focus();
  }
};
