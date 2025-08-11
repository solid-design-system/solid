import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Drawer',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3000-10344&t=JCsisVFNkWSlhSSN-4'
    },
    chromatic: { disableSnapshot: true }
  },
  decorators: [
    (story: any) =>
      html` <style>
          #anchor--templates-drawer--default .innerZoomElementWrapper {
            background-color: #ecf0f9;
            min-height: 1000px;
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * ### Tablet Navigation
 *
 * When consuming sd-header please ensure that there are no margins applied on the left, right and bottom of the dropdown. The top margin of the dropdown should be kept otherwise the first navigation item is cutted.
 */

export const Default = {
  name: 'Tablet Navigation',
  render: () => html`
    <style>
      sd-navigation-item::part(content) {
        display: flex;
        align-items: center;
      }
      sd-drawer::part(panel) {
        border-top: 2px solid #e9e9e9;
        border-right: 2px solid #e9e9e9;
      }
      sd-drawer::part(overlay) {
        background-color: #051530;
        opacity: 0.9;
      }
    </style>
    <sd-button id="open-menu-navigation">Open Drawer</sd-button>

    <sd-drawer open id="navigation-drawer" placement="end" label="Navigation drawer menu" class="group relative block">
      <sd-button slot="header" variant="tertiary" class="navigation-nav--close">
        <sd-icon name="system/arrow-left" label="Close submenu"></sd-icon>
      </sd-button>

      <div class="flex flex-col h-full -mx-4 overflow-x-hidden">
        <nav
          aria-label="Main"
          class="navigation-nav group relative flex flex-col justify-between flex-1 pt-1 transition-transform duration-medium data-[submenu-open]:-translate-x-full"
        >
          <ul>
            <li>
              <sd-navigation-item href="javascript:void(0)" vertical current>Home</sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item divider vertical chevron>About Us</sd-navigation-item>
              <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                <div>
                  <p class="sd-headline sd-headline--size-lg px-4 py-3 !text-primary">About Us</p>
                  <ul>
                    <li>
                      <sd-navigation-item divider vertical>
                        <span>Union Investment for privat customers</span>
                        <span slot="description">Find out more about us and what we stand for</span>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Investor protection
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Distinction
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Our Management
                        </sd-navigation-item>
                      </sd-navigation-item>
                      <sd-navigation-item vertical> Sustainability at Union Investment </sd-navigation-item>
                      <sd-navigation-item vertical> Union Investment Group </sd-navigation-item>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <sd-navigation-item href="javascript:void(0)" divider vertical>Markets</sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item href="javascript:void(0)" divider vertical>Press service</sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item href="javascript:void(0)" divider vertical>Sustainability</sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item href="javascript:void(0)" divider vertical>Career</sd-navigation-item>
            </li>
          </ul>

          <div class="py-2 bg-neutral-100">
            <ul>
              <li>
                <sd-navigation-item href="javascript:void(0)" vertical>
                  <sd-icon name="system/user" class="text-xl mr-2"></sd-icon>
                  My depot
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" divider vertical>
                  <sd-icon name="system/lock-locked" class="text-xl mr-2"></sd-icon>
                  My application
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" divider vertical>
                  <sd-icon name="system/website" class="text-xl mr-2"></sd-icon>
                  Our further appearances
                </sd-navigation-item>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </sd-drawer>

    <style>
      [data-submenu][inert] {
        display: none;
      }

      sd-navigation-item:has([slot='children']):has(sd-navigation-item[current])::part(content),
      sd-navigation-item:has(+ [data-submenu] sd-navigation-item[current])::part(content) {
        font-weight: bold;
      }

      sd-navigation-item + div[data-submenu]:not([data-active-submenu]) {
        pointer-events: none;
        opacity: 0;
      }

      sd-navigation-item:has([slot='children'])[open] span:not([slot='description']),
      sd-navigation-item:has([slot='children'][current]) span:not([slot='description']) {
        font-weight: bold;
      }
    </style>

    <!-- Mobile drawer logic -->
    <script type="module">
      const drawer = document.getElementById('navigation-drawer');
      const drawerTrigger = document.getElementById('open-menu-navigation');
      const innerTrigger = drawerTrigger.shadowRoot.querySelector('button');

      innerTrigger.setAttribute('aria-controls', 'navigation-drawer');
      innerTrigger.setAttribute('aria-expanded', 'false');
      drawerTrigger.addEventListener('click', () => drawer.show());
      drawer.addEventListener('sd-hide', () => innerTrigger.setAttribute('aria-expanded', 'false'));
      drawer.addEventListener('sd-show', () => innerTrigger.setAttribute('aria-expanded', 'true'));
    </script>

    <!--
        The navigation-menu script can be found here:
        https://github.com/solid-design-system/solid/blob/main/packages/docs/.storybook/assets/scripts/navigation-menu.js
      -->
    <script src="./scripts/navigation-menu.js"></script>
    <script type="module">
      const getNavigationItemTitle = item =>
        item.shadowRoot
          .querySelector('[part="content"]')
          .assignedNodes({ flatten: true })
          .reduce((acc, node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              return acc + node.innerText;
            } else if (node.nodeType === Node.TEXT_NODE) {
              return acc + node.textContent;
            }
            return acc;
          }, '');

      document.querySelectorAll('.navigation-nav').forEach(container => {
        const megamenu = new NavigationMenu(container, NavigationMenuVerticalItem, {
          backButton: document.getElementById('navigation-drawer').querySelector('.navigation-nav--close')
        });
        megamenu.focusController = new VerticalFocusController(megamenu);

        const drawer = container.closest('sd-drawer');
        if (drawer) {
          drawer.addEventListener('sd-hide', e => {
            if (e.target !== drawer) return;
            megamenu.reset();
          });
        }
      });
    </script>
  `
};
