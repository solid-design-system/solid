import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Navigation Item Badge',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?node-id=5072-26390'
    }
  }
};

/**
 * Navigation items with badges aligned horizontally, showing notification counts and status indicators.
 */
export const NavigationItemWithBadge = {
  name: 'Navigation Item with Badge',
  render: () => html`
    <nav aria-label="Main navigation" class="flex items-center gap-1">
      <sd-navigation-item href="#"> Overview </sd-navigation-item>
      <sd-navigation-item href="#" current>
        <span class="inline-flex items-center gap-2">
          Requests
          <sd-badge role="status">
            12
            <span class="sr-only">open requests</span>
          </sd-badge>
        </span>
      </sd-navigation-item>
      <sd-navigation-item href="#">
        <span class="inline-flex items-center gap-2">
          Messages
          <sd-badge variant="red" role="status">
            3
            <span class="sr-only">unread messages</span>
          </sd-badge>
        </span>
      </sd-navigation-item>
      <sd-navigation-item href="#">
        <span class="inline-flex items-center gap-2">
          Notifications
          <sd-badge variant="green" role="status">
            99+
            <span class="sr-only">new notifications</span>
          </sd-badge>
        </span>
      </sd-navigation-item>
      <sd-navigation-item href="#"> Reports </sd-navigation-item>
    </nav>
  `
};
