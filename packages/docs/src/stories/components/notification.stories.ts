/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-notification');
const { generateTemplate } = storybookTemplate('sd-notification');
const { overrideArgs } = storybookHelpers('sd-notification');

export default {
  title: 'Components/sd-notification',
  tags: ['!dev', 'autodocs'],
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
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2265-6174&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
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

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `variant` attribute to change the theme of the notification:
 *
 * - `info` (default): suitable for notifications, conveying neutral information about an action
 * - `success`: imply a successful or positive outcome of an action
 * - `error`: indicate a destructive and irreversible outcome of an action
 * - `warning`: alert for possible issues or significant changes that must be considered
 */

export const Variants = {
  name: 'Variants',
  render: () => html`
    <style>
      .notification-list > sd-notification::part(base) {
        margin: 0;
      }
    </style>
    <div class="flex flex-col gap-12 notification-list">
      <sd-notification variant="info" open>Info Lorem ipsum dolor sit</sd-notification>
      <sd-notification variant="success" open>Success Lorem ipsum dolor sit</sd-notification>
      <sd-notification variant="error" open>Error Lorem ipsum dolor sit</sd-notification>
      <sd-notification variant="warning" open>Warning Lorem ipsum dolor sit</sd-notification>
    </div>
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
        closableNotification.addEventListener('sd-after-hide', () => {
          setTimeout(() => {
            closableNotification.open = true;
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
    <sd-notification id="duration-indicator-attribute" variant="info" open duration-indicator duration="5000">
      Notification will self close after 5 seconds
    </sd-notification>
    <script>
      var durationIndicator = document.querySelector('#duration-indicator-attribute');
      durationIndicator.addEventListener('sd-after-hide', () => {
        setTimeout(() => {
          durationIndicator.open = true;
        }, 3000);
      });
    </script>
  `
};

/**
 * Use the `toastStack` attribute to change the position of the toast notifications:
 * - `top-right` (default)
 * - `bottom-center`
 *
 * **Important:** Some screen readers may occasionally ignore live regions that are added to a page after it has already loaded.
 * Therefore, to make sure the toast stack regions are already present on page load, please make sure to render the following:
 *
 * ```html
 * <div
 *   role="region"
 *   id="sd-toast-stack--top-right"
 *   class="sd-toast-stack sd-toast-stack--top-right"
 *   aria-label="Top right notifications"
 *  ></div>
 *  <div
 *   role="region"
 *   id="sd-toast-stack--bottom-center"
 *   class="sd-toast-stack sd-toast-stack--bottom-center"
 *   aria-label="Bottom center notifications"
 *  ></div>
 * ```
 *
 * __Hints:__
 * - It requires the use of the `toast` method to work. Click on the `Show code` button to see the JavaScript code responsible for generating the toast notification.
 * - Click on one of the buttons below to see the corresponding toast notification.
 *
 * <h4 class="sd-headline sd-headline--size-lg">Toast placement top right</h4>
 *
 * Use the `data-notification-position` attribute with the value `top-right` to align the toast to the top right.
 *
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
            duration: Infinity,
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
 * <h4 class="sd-headline sd-headline--size-lg">Toast placement bottom center</h4>
 *
 * Use the `data-notification-position` attribute with the value `bottom-center` to align the toast to the bottom center.
 */
export const ToastBottomCenter = {
  name: ' ',
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
