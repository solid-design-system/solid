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
 * - [Toast Notification](?path=/docs/templates-toast-notification--docs)
 */

export default {
  title: 'Components/sd-notification',
  tags: ['!dev'],
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
  name: 'Default',
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
        const closableNotification = document.querySelector('#closable-example');
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
      const notificationDuration = document.querySelector('#duration-example');
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
      const durationIndicator = document.querySelector('#duration-indicator');
      durationIndicator.addEventListener('sd-after-hide', () => {
        setTimeout(() => {
          durationIndicator.open = true;
        }, 3000);
      });
    </script>
  `
};
