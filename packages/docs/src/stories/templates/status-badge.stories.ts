import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Status Badge',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?node-id=18391-37775&t=LaSTkqB8MKXGCZbc-0'
    }
  }
};

/**
 * ### Status Badge with Custom Icon
 *
 * The icons used in this component, should be exclusively from the `sd-status-assets` [icon library](?path=/story/components-sd-icon-default--status-library).
 */
export const StatusBadgeWithCustomIcon = {
  render: () => html`
    <div class="grid col-span-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Available
      </div>
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Identified
      </div>
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Active
      </div>
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Approved
      </div>

      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
        Issue
      </div>
      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
        Degraded
      </div>
      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-clock" library="sd-status-assets"></sd-icon>
        Back soon
      </div>
      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-clock" library="sd-status-assets"></sd-icon>
        Maintenance
      </div>

      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
        Attention
      </div>
      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-close" library="sd-status-assets"></sd-icon>
        Canceled
      </div>
      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-close" library="sd-status-assets"></sd-icon>
        Unavailable
      </div>
      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-minus" library="sd-status-assets"></sd-icon>
        Don't disturb
      </div>

      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
        Status Info
      </div>
      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-questionmark" library="sd-status-assets"></sd-icon>
        Investigating
      </div>
      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-questionmark" library="sd-status-assets"></sd-icon>
        Unknown
      </div>
    </div>
  `
};
