/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../solid-components';
import { html } from 'lit';

export default {
  title: 'Templates/Notifications',
  tags: ['!dev'],
  parameters: {
    chromatic: { disableSnapshot: true }
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
        <sd-button variant="secondary">Request to edit</sd-button>
      </sd-notification>
    `;
  }
};

export const InfoNotificationInline = {
  name: 'Info Notification Inline',
  render: (_args: Record<string, any>) => {
    return html`
      <style>
        sd-notification.inline-variant::part(content) {
          width: auto;
        }
      </style>

      <sd-notification class="inline-variant" variant="info" open closable>
        Event deleted
        <sd-button class="ml-4" variant="secondary">Undo</sd-button>
      </sd-notification>
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
        <p class="sd-paragraph">A problem occurred while submitting your data. <sd-link>More information</sd-link></p>
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
