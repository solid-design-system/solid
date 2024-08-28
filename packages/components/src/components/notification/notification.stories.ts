/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-notification');
const { generateTemplate } = storybookTemplate('sd-notification');
const { overrideArgs } = storybookHelpers('sd-notification');

/**
 * Used to communicate important information or status to the user. Notifications can be displayed inline or as a toast / toast stack.
 *
 *  **Related templates**:
 * - [Notifications](?path=/docs/templates-notifications--docs)
 */

export default {
  title: 'Components/sd-notification',
  tags: ['!dev'],
  component: 'sd-notification',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text">Default slot</div>`
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
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `variant` attribute to change the theme of the notification.
 *
 * - `info`: suitable for notifications, conveying neutral information about an action.
 * - `success`: imply a successful or positive outcome of an action.
 * - `error`: indicate a destructive and irreversible outcome of an action.
 * - `warning`: alert for possible issues or significant changes that must be considered.
 */

export const Variants = {
  name: 'Variants',
  render: () => html`
    <sd-notification variant="info" open>Lorem ipsum dolor sit</sd-notification>
    <sd-notification variant="success" open>Lorem ipsum dolor sit</sd-notification>
    <sd-notification variant="error" open>Lorem ipsum dolor sit</sd-notification>
    <sd-notification variant="warning" open>Lorem ipsum dolor sit</sd-notification>
  `
};

/**
 * Use the `open` attribute to toggle the visibility of the notification.
 */

export const Open = {
  name: 'Open',
  render: () => html` <sd-notification variant="info" open>Lorem ipsum dolor sit</sd-notification> `
};

/**
 * Use the `closable` attribute to toggle a close button.
 */

export const Closable = {
  name: 'Closable',
  render: () =>
    html` <sd-notification id="closable-example" variant="info" open closable>Lorem ipsum dolor sit</sd-notification>
      <script>
        var closableNotification = document.querySelector('#closable-example');
        closableNotification.addEventListener('click', () => {
          setTimeout(() => {
            notification.open = true;
          }, 3000);
        });
      </script>`
};

/**
 * Use the `duration` attribute to set the duration (in milliseconds) of the notification.
 */

export const Duration = {
  name: 'Duration',
  render: () => html`
    <sd-notification variant="info" open duration="Infinity">Notification will stay open (Infinity)</sd-notification>
    <sd-notification id="duration-example" variant="info" open duration="5000">
      Notification will self close after 5 seconds
    </sd-notification>
    <script>
      var notificationDuration = document.querySelector('#duration-example');
      notificationDuration.addEventListener('sd-after-hide', () => {
        setTimeout(() => {
          notificationDuration.open = true;
        }, 3000);
      });
    </script>
  `
};

/**
 * Use the `duration-indicator` attribute to enable an animation that visualizes the duration of a notification.
 */

export const DurationIndicator = {
  name: 'Duration Indicator',
  render: () => html`
    <sd-notification id="duration-indicator" variant="info" open duration-indicator duration="5000"
      >Notification will self close after 5 seconds</sd-notification
    >
    <script>
      var durationIndicator = document.querySelector('#duration-indicator');
      durationIndicator.addEventListener('sd-after-hide', () => {
        setTimeout(() => {
          durationIndicator.open = true;
        }, 3000);
      });
    </script>
  `
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
  }
};
