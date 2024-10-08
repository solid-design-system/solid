import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Tab',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3687-40468&t=ilrs806pHHSfnwKM-4'
    }
  }
};

/**
 * Example of a centered tab group.
 * To implement this sample, adjust the tabs CSS part as follows:
 *
 * ```css
 * sd-tab-group::part(tabs) {
    justify-content: center;
  }
 * ```
 */
export const TabCentered = {
  name: 'Tab Center Aligned',
  render: () =>
    html` <style>
        sd-tab-group#centered::part(tabs) {
          justify-content: center;
        }
      </style>
      <sd-tab-group activation id="centered">
        <sd-tab slot="nav" panel="tab-1">Gender</sd-tab>
        <sd-tab-panel name="tab-1">
          <div class="slot slot--text slot--border">Tab panel - Gender</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2">Age diversity</sd-tab>
        <sd-tab-panel name="tab-2">
          <div class="slot slot--text slot--border">Tab panel - Age diversity</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3">Education</sd-tab>
        <sd-tab-panel name="tab-3">
          <div class="slot slot--text slot--border">Tab panel - Education</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-4">Background</sd-tab>
        <sd-tab-panel name="tab-4">
          <div class="slot slot--text slot--border">Tab panel - Background</div>
        </sd-tab-panel>
      </sd-tab-group>`
};

export const TabWithBadge = {
  name: 'Tab with Badge',
  render: () =>
    html` <sd-tab-group activation>
      <sd-tab slot="nav" panel="tab-1">
        Notifications
        <sd-badge class="ml-2">3</sd-badge>
      </sd-tab>
      <sd-tab-panel name="tab-1">
        <div class="slot slot--text slot--border">Tab panel - Notifications</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2">Reminders</sd-tab>
      <sd-tab-panel name="tab-2">
        <div class="slot slot--text slot--border">Tab panel - Reminders</div>
      </sd-tab-panel>
    </sd-tab-group>`
};

export const TabWithIconBadge = {
  name: 'Tab with Icon and Badge',
  render: () => html`
    <sd-tab-group activation>
      <sd-tab slot="nav" panel="tab-1">
        <sd-icon slot="left" name="system/dashboard" class="pr-2"></sd-icon>
        Dashboard
      </sd-tab>
      <sd-tab-panel name="tab-1">
        <div class="slot slot--text slot--border">Tab panel - Dashboard</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2">
        <sd-icon slot="left" name="system/folder"></sd-icon>
        <sd-badge size="sm" class="mb-2 mr-2"></sd-badge>
        Files
      </sd-tab>
      <sd-tab-panel name="tab-2">
        <div class="slot slot--text slot--border">Tab panel - Files</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3">
        <sd-icon slot="left" name="system/highlighter" class="pr-2"></sd-icon>
        Notes
      </sd-tab>
      <sd-tab-panel name="tab-3">
        <div class="slot slot--text slot--border">Tab panel - Notes</div>
      </sd-tab-panel>
    </sd-tab-group>
  `
};
