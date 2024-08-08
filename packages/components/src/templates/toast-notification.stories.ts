/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../solid-components';
import { html } from 'lit';
import { userEvent } from '@storybook/test';

export default {
  title: 'Templates/Toast Notification',
  tags: ['!dev'],
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Display a toast notification at the top-right of the screen by using the `toast` method. Click on the **Show code** button to see the JavaScript code responsible for generating the toast notification. The default position is `top-right`.
 */
export const ToastNotification = {
  name: 'Toast Notification',
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
 * Display a toast notification positioned at the bottom-center of the screen by setting the `toastStack` attribute to `bottom-center`. Click on the **Show code** button to see the JavaScript code responsible for generating the toast notification.
 */
export const ToastBottomCenter = {
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
