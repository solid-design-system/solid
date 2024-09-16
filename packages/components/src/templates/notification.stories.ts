/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../solid-components';
import { html } from 'lit';

export default {
  title: 'Templates/Notification',
  tags: ['!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2951-15059&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

export const InfoNotification = {
  name: 'Info Notification',
  render: (_args: Record<string, any>) => {
    return html`
      <style>
        sd-notification.info-variant::part(message) {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      </style>

      <sd-notification class="info-variant" variant="info" open>
        Editing is restricted
        <sd-button variant="secondary" class="mr-4">Request to edit</sd-button>
      </sd-notification>
    `;
  }
};

export const InfoToastNotification = {
  name: 'Info Toast Notification',
  render: (_args: Record<string, any>) => {
    return html`
      <sd-button
        variant="secondary"
        data-notification-type="info"
        data-notification-position="bottom-center"
        class="toast-button"
      >
        Show toast
      </sd-button>

      <script>
        var button = document.querySelector('.toast-button');

        function notifyBottomCenter(variant = 'info') {
          const notification = Object.assign(document.createElement('sd-notification'), {
            closable: true,
            variant: variant,
            toastStack: 'bottom-center',
            duration: Infinity,
            innerHTML: 'Event deleted <sd-button class="ml-4" variant="secondary" size="sm">Undo</sd-button>'
          });

          notification.style.width = '250px';

          document.body.append(notification);
          return notification.toast();
        }

        button.addEventListener('click', () => {
          notifyBottomCenter(button.getAttribute('data-notification-type'));
        });
      </script>
    `;
  }
};

export const SuccessNotification = {
  name: 'Success Notification',
  render: (_args: Record<string, any>) => {
    return html`
      <style>
        sd-notification.success-variant::part(message) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      </style>

      <sd-notification class="success-variant" variant="success" open>
        <b>Congratulations</b>
        <p class="sd-paragraph">You have successfully subscribed.</p>
      </sd-notification>
    `;
  }
};

export const ErrorNotification = {
  name: 'Error  Notification',
  render: (_args: Record<string, any>) => {
    return html`
      <sd-notification variant="error" open closable>
        <p class="sd-paragraph">
          A problem occurred while submitting your data. <sd-link size="inherit" href="#">More information</sd-link>
        </p>
      </sd-notification>
    `;
  }
};

export const WarningNotification = {
  name: 'Warning Notification',
  render: (_args: Record<string, any>) => {
    return html`
      <sd-notification variant="warning" open>
        <b>Update information</b>
        <p class="sd-paragraph">You have 7 days left to update your billing information.</sd-link></p>
        <sd-button variant="secondary" class="mt-4">More information</sd-button>
      </sd-notification>
    `;
  }
};
