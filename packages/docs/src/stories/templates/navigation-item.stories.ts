import { html } from 'lit-html';
import '../../../../components/src/solid-components';

export default {
  tags: ['!dev'],
  title: 'Templates/Navigation Item',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const MegaMenu = {
  name: 'Mega Menu',
  render: () => {
    return html`
      <style>
        #anchor--templates-navigation-item--mega-menu .innerZoomElementWrapper {
          height: 900px;
        }
      </style>

      <sd-header fixed style="--sd-header-padding: 12px 48px 0;">
        <div class="flex justify-between items-center my-0 pb-3 lg:pb-0 lg:my-3">
          <a class="inline-flex sd-interactive" href="#">
            <img class="h-8 md:h-12 lg:h-14" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
          </a>

          <sd-navigation-item id="open-menu-mega-menu" class="flex lg:hidden">
            <sd-icon name="system/menu" label="Open navigation" class="text-xl -my-[1.5px] -mx-1"></sd-icon>
          </sd-navigation-item>
        </div>

        <nav aria-label="Main" class="hidden lg:flex relative justify-between">
          <ul class="flex -ms-4">
            <li>
              <sd-dropdown>
                <sd-navigation-item class="font-bold" slot="trigger"> Funds & Depot </sd-navigation-item>

                <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                  <li>
                    <sd-navigation-item vertical current href="javascript:void(0)">
                      <span class="font-bold">Funds & Depot Overview</span>
                      <p slot="description">Everything you need to know about our funds and the UnionDepot</p>
                    </sd-navigation-item>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold">Find Funds</span>
                      <p slot="description">Get to our funds quickly</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Top funds </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Fund prices </sd-navigation-item>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold">Understanding Funds</span>
                      <p slot="description">Funds explained simply and understandably for you</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Sustainability-related disclosures
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Lexicon </sd-navigation-item>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold">UnionDepot</span>
                      <p slot="description">Manage your funds flexibly with UnionDepot</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          UnionDepot in Online Banking
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> UnionDepotOnline </sd-navigation-item>
                      </li>
                    </ul>
                  </li>
                </ul>
              </sd-dropdown>
            </li>
            <li>
              <sd-dropdown>
                <sd-navigation-item slot="trigger" class="font-bold"> About Us </sd-navigation-item>

                <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold">Union Investment at a glance</span>
                      <p slot="description">Partnership is the basis of our actions.</p>
                    </sd-navigation-item>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold text-black"> Union Investment for private clients </span>
                      <p slot="description">Learn more about us and what we stand for</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Investor protection
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Award </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Our management </sd-navigation-item>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold text-black"> Sustainability at Union Investment </span>
                      <p slot="description">Learn about our values, principles, and commitment to sustainability.</p>
                    </sd-navigation-item>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold text-black"> Union Investment Group </span>
                      <p slot="description">Find out more about Union Investment as a group of companies</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Cooperative Financial Group
                        </sd-navigation-item>
                      </li>
                    </ul>
                  </li>
                </ul>

                <sd-divider class="m-6"></sd-divider>
                <p class="sd-headline sd-headline--size-base mx-6">
                  Not a private customer? Discover more solutions for every need
                </p>

                <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold"> Institutional Clients </span>
                      <p slot="description">Solutions for professional investors.</p>
                    </sd-navigation-item>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold"> Real Estate Customers </span>
                      <p slot="description">Investing - Renting - Investing</p>
                    </sd-navigation-item>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold"> Journalists </span>
                      <p slot="description">Press releases and contacts can be found here</p>
                    </sd-navigation-item>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold"> Career </span>
                      <p slot="description">
                        Where professionals are people - insights into our working world and job offers
                      </p>
                    </sd-navigation-item>
                  </li>
                </ul>
              </sd-dropdown>
            </li>
            <li>
              <sd-navigation-item href="javascript:void(0)" class="font-bold">Savings</sd-navigation-item>
            </li>
            <li>
              <sd-dropdown>
                <sd-navigation-item slot="trigger" class="font-bold"> Investing </sd-navigation-item>
                <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold">Investing at a glance</span>
                      <p slot="description">Investing money – with flexible solutions from Union Investment</p>
                    </sd-navigation-item>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold text-black">Structuring your assets</span>
                      <p slot="description">Benefit from modern solutions for your assets</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Private Funds </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          UniDistribution Fund
                        </sd-navigation-item>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold text-black">Investing money according to ESG </span>
                      <p slot="description">Shaping the future responsibly with your investments</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Funds with a sustainability strategy
                        </sd-navigation-item>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)">
                      <span class="font-bold text-black">Calculators</span>
                      <p slot="description">Manage your funds flexibly with UnionDepot</p>
                    </sd-navigation-item>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Investment planner </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Wealth planner </sd-navigation-item>
                      </li>
                    </ul>
                  </li>
                </ul>
              </sd-dropdown>
            </li>
            <li>
              <sd-dropdown>
                <sd-navigation-item class="font-bold" slot="trigger"> Our Services </sd-navigation-item>
                <ul class="grid grid-cols-4 justify-between gap-x-6 px-6 py-8">
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Investing at a glance
                    </sd-navigation-item>
                  </li>
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Current news
                    </sd-navigation-item>
                  </li>
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Subscription
                    </sd-navigation-item>
                  </li>
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Our calculators
                    </sd-navigation-item>
                  </li>
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Contact
                    </sd-navigation-item>
                  </li>
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Forms and Downloads
                    </sd-navigation-item>
                  </li>
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Media
                    </sd-navigation-item>
                  </li>
                  <li>
                    <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                      Frequently Asked Questions
                    </sd-navigation-item>
                  </li>
                </ul>
              </sd-dropdown>
            </li>
          </ul>
          <ul class="flex">
            <li>
              <sd-navigation-item href="javascript:void(0)">
                <sd-icon name="system/user" class="text-xl mr-2"></sd-icon>
                <span>Login</span>
              </sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item href="javascript:void(0)">
                <sd-icon name="system/website" class="text-xl" label="Website"></sd-icon>
              </sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item href="javascript:void(0)">
                <sd-icon name="system/magnifying-glass" class="text-xl" label="Search"></sd-icon>
              </sd-navigation-item>
            </li>
          </ul>
        </nav>
      </sd-header>

      <sd-drawer id="mega-menu-drawer" placement="end" no-header class="group relative block">
        <nav class="-mx-4 pt-20 pb-1 transition-transform duration-medium group-data-[submenu-open]:-translate-x-full">
          <ul>
            <li>
              <sd-navigation-item vertical href="javascript:void(0)" class="font-bold"> Home </sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item vertical current chevron divider class="font-bold">
                Funds & Depot
              </sd-navigation-item>
              <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                <sd-button variant="tertiary" class="ms-2 my-2">
                  <sd-icon name="system/arrow-left" label="Close Funds & Depot submenu"></sd-icon>
                </sd-button>
                <div class="mt-4">
                  <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Funds & Depot</p>
                  <ul>
                    <li>
                      <sd-navigation-item vertical current divider href="javascript:void(0)">
                        <span class="font-bold"> Funds & Depot Overview </span>
                        <p slot="description">Everything you need to know about our funds and the UnionDepot</p>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical>
                        <span class="font-bold">Find Funds</span>
                        <p slot="description">Get to our funds quickly</p>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Top funds
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Fund prices
                        </sd-navigation-item>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical>
                        <span class="font-bold">Understanding Funds</span>
                        <p slot="description">Funds explained simply and understandably for you</p>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Sustainability-related disclosures
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Lexicon
                        </sd-navigation-item>
                      </sd-navigation-item>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <sd-navigation-item vertical chevron divider class="font-bold"> About Us </sd-navigation-item>
              <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                <sd-button variant="tertiary" class="ms-2 my-2">
                  <sd-icon name="system/arrow-left" label="Close About Us submenu"></sd-icon>
                </sd-button>
                <div class="mt-4">
                  <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">About us</p>

                  <ul>
                    <li>
                      <sd-navigation-item vertical divider href="javascript:void(0)" class="font-bold">
                        Union Investment at a glance
                        <p slot="description">Partnership is the basis of our actions.</p>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical>
                        <span class="font-bold"> Union Investment for private clients </span>
                        <p slot="description">Learn more about us and what we stand for</p>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Investor protection
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Award
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Our management
                        </sd-navigation-item>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical class="font-bold" href="javascript:void(0)">
                        Sustainability at Union Investment
                        <p slot="description">Learn about our values, principles, and commitment to sustainability.</p>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical>
                        <span class="font-bold"> Union Investment Group </span>
                        <p slot="description">Find out more about Union Investment as a group of companies</p>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Cooperative Financial Group
                        </sd-navigation-item>
                      </sd-navigation-item>
                    </li>
                  </ul>

                  <sd-divider class="my-6 mx-4"></sd-divider>
                  <p class="sd-headline sd-headline--size-base mx-4 mb-6">
                    Not a private customer? Discover more solutions for every need
                  </p>

                  <ul>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Institutional Clients
                        <p slot="description">Solutions for professional investors.</p>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Real Estate Customers
                        <p slot="description">Investing - Renting - Investing</p>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Journalists
                        <p slot="description">Press releases and contacts can be found here</p>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Career
                        <p slot="description">
                          Where professionals are people - insights into our working world and job offers
                        </p>
                      </sd-navigation-item>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <sd-navigation-item vertical divider href="javascript:void(0)" class="font-bold">
                Saving
              </sd-navigation-item>
            </li>
            <li>
              <sd-navigation-item vertical chevron divider class="font-bold"> Investing </sd-navigation-item>
              <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                <sd-button variant="tertiary" class="ms-2 my-2">
                  <sd-icon name="system/arrow-left" label="Close Investing submenu"></sd-icon>
                </sd-button>
                <div class="mt-4">
                  <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Investing</p>

                  <ul>
                    <li>
                      <sd-navigation-item vertical divider href="javascript:void(0)">
                        <span class="font-bold"> Investing at a glance </span>
                        <p slot="description">Quickly access our funds</p>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical>
                        <span class="font-bold"> Structuring your assets </span>
                        <p slot="description">Benefit from modern solutions for your assets</p>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Private Funds
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          UniDistribution Fund
                        </sd-navigation-item>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical>
                        <span class="font-bold"> Investing money according to ESG </span>
                        <p slot="description">Shaping the future responsibly with your investments</p>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Funds with a sustainability strategy
                        </sd-navigation-item>
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical>
                        <span class="font-bold"> Calculators </span>
                        <p slot="description">Manage your funds flexibly with UnionDepot</p>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Investment planner
                        </sd-navigation-item>
                        <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                          Wealth planner
                        </sd-navigation-item>
                      </sd-navigation-item>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <sd-navigation-item vertical chevron divider class="font-bold"> Our Services </sd-navigation-item>
              <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                <sd-button variant="tertiary" class="ms-2 my-2">
                  <sd-icon name="system/arrow-left" label="Close Our Services submenu"></sd-icon>
                </sd-button>
                <div class="mt-4">
                  <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Our Services</p>

                  <ul>
                    <li>
                      <sd-navigation-item vertical divider href="javascript:void(0)" class="font-bold">
                        Services at a glance
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Current news
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Subscription
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Our calculators
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Contact
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Forms and Downloads
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Media
                      </sd-navigation-item>
                    </li>
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
                        Frequently Asked Questions
                      </sd-navigation-item>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <nav
          aria-label="footer"
          slot="footer"
          class="bg-neutral-100 -mx-4 -mb-4 transition-transform duration-medium group-data-[submenu-open]:-translate-x-full"
        >
          <sd-navigation-item vertical href="javascript:void(0)" class="flex align-center">
            <sd-icon name="system/user" class="text-xl mr-2"></sd-icon>
            Portfolio
          </sd-navigation-item>
          <sd-navigation-item vertical divider href="javascript:void(0)" class="flex align-center">
            <sd-icon name="system/lock-locked" class="text-xl mr-2"></sd-icon>
            Application
          </sd-navigation-item>
          <sd-navigation-item vertical divider href="javascript:void(0)" class="flex align-center">
            <sd-icon name="system/website" class="text-xl mr-2"></sd-icon>
            Our further appearances
          </sd-navigation-item>
        </nav>
      </sd-drawer>

      <style>
        sd-dropdown:has(sd-navigation-item[slot='trigger'])::part(base__popup) {
          left: 0;
          width: 100%;
        }

        sd-navigation-item[slot='trigger'][current] {
          background: rgb(246 246 246);
        }

        sd-drawer::part(panel) {
          overflow: hidden;
        }

        sd-drawer[data-submenu-open]::part(footer) {
          pointer-events: none;
          position: absolute;
          padding: 0;
          opacity: 0;
        }

        sd-navigation-item + div[data-submenu]:not([data-active-submenu]) {
          pointer-events: none;
          opacity: 0;
        }
      </style>

      <!-- Helper methods -->
      <script>
        function getPreviousSibling(el, tag) {
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
            acceptNode: node => (node.tagName === tag.toUpperCase() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP)
          });

          let lastValid = null;
          let current;

          while ((current = walker.nextNode())) {
            if (current === el) break;
            lastValid = current;
          }

          return lastValid;
        }

        function getNextSibling(el, tag) {
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
            acceptNode: node => (node.tagName === tag.toUpperCase() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP)
          });

          walker.currentNode = el;
          let next = walker.nextNode();
          return next;
        }
      </script>

      <!-- Mobile drawer logic -->
      <script type="module">
        const drawer = document.getElementById('mega-menu-drawer');
        const drawerTrigger = document.getElementById('open-menu-mega-menu');
        const innerTrigger = drawerTrigger.shadowRoot.querySelector('button');

        innerTrigger.setAttribute('aria-controls', 'mega-menu-drawer');
        innerTrigger.setAttribute('aria-expanded', 'false');
        drawerTrigger.addEventListener('click', () => drawer.show());
        drawer.addEventListener('sd-hide', () => innerTrigger.setAttribute('aria-expanded', 'false'));
        drawer.addEventListener('sd-show', () => innerTrigger.setAttribute('aria-expanded', 'true'));
      </script>

      <!-- Mobile navigation logic -->
      <script type="module">
        const drawer = document.getElementById('mega-menu-drawer');
        const items = document.querySelectorAll('sd-drawer sd-navigation-item');
        const submenus = document.querySelectorAll('sd-drawer sd-navigation-item + div');
        const backButtons = document.querySelectorAll('sd-drawer sd-navigation-item + div > sd-button');

        function closeSubmenu() {
          submenus.forEach(menu => menu.removeAttribute('data-active-submenu'));
          drawer.removeAttribute('data-submenu-open');
        }

        function openSubmenu(submenu) {
          closeSubmenu();
          submenu.setAttribute('data-active-submenu', '');
          drawer.setAttribute('data-submenu-open', '');
        }

        function isSubmenuActive() {
          return drawer.hasAttribute('data-submenu-open');
        }

        function handleOpenSubmenuChanged() {
          submenus.forEach(menu => {
            if (menu.hasAttribute('data-active-submenu')) {
              menu.removeAttribute('inert');
            } else {
              menu.setAttribute('inert', '');
            }
          });
        }

        function handleItemClick(event, item) {
          if (item.hasAttribute('href')) {
            items.forEach(item => item.removeAttribute('current'));
            item.setAttribute('current', '');

            submenus.forEach(menu => {
              if (!menu.contains(item)) return;

              const previous = menu.previousElementSibling;

              if (previous.tagName === 'SD-NAVIGATION-ITEM') {
                previous.setAttribute('current', '');
              }
            });

            return;
          }

          const submenu = item.nextElementSibling;
          if (!submenu) return;

          openSubmenu(submenu);
          setTimeout(() => submenu.querySelector('sd-button').focus(), drawer.token('sd-duration-medium'));
        }

        function handleBackClick(event, button) {
          const submenu = button.closest('[data-active-submenu]');
          const item = submenu.previousElementSibling;

          item.focus();
          closeSubmenu();
        }

        function handleSubmenuKeydown(event, submenu) {
          const movingFoward = (event.key === 'Tab' && !event.shiftKey) || event.key === 'ArrowDown';
          const movingBackwards = (event.key === 'Tab' && event.shiftKey) || event.key === 'ArrowUp';

          if (!movingFoward && !movingBackwards) return;

          const focusableSelectors = ['sd-navigation-item', 'sd-button'];

          const focusableElements = Array.from(
            Array.from(submenu.querySelectorAll(focusableSelectors.join(','))).filter(el => {
              if (
                el.tagName === 'SD-NAVIGATION-ITEM' &&
                el.parentElement.tagName === 'SD-NAVIGATION-ITEM' &&
                !el.parentElement.hasAttribute('open')
              ) {
                return false;
              }
              return true;
            })
          );

          const first = focusableElements[0];
          const last = focusableElements[focusableElements.length - 1];

          if (movingBackwards && document.activeElement === first) {
            event.preventDefault();
            last.focus();
            return;
          }

          if (movingFoward && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }

        async function handleItemArrowDown(item) {
          const next = getNextSibling(item, 'sd-navigation-item');
          const submenu = next.closest('[data-submenu]');

          if (!submenu && isSubmenuActive()) {
            closeSubmenu();
            setTimeout(() => next?.focus(), 0);
            return;
          }

          if (submenu && !isSubmenuActive()) {
            openSubmenu(submenu);
            setTimeout(() => next?.focus(), next.token('sd-duration-medium'));
            return;
          }

          next.parentElement.closest('sd-navigation-item')?.setAttribute('open', '');
          setTimeout(() => next?.focus(), 0);
        }

        function handleItemArrowUp(item) {
          const previous = getPreviousSibling(item, 'sd-navigation-item');
          const submenu = previous.closest('[data-submenu]');

          if (!submenu && isSubmenuActive()) {
            closeSubmenu();
            setTimeout(() => previous?.focus(), 0);
            return;
          }

          if (submenu && !isSubmenuActive()) {
            openSubmenu(submenu);
            setTimeout(() => previous?.focus(), previous.token('sd-duration-medium'));
            return;
          }

          previous.parentElement.closest('sd-navigation-item')?.setAttribute('open', '');
          setTimeout(() => previous?.focus(), 0);
        }

        function handleItemKeydown(event, item) {
          event.stopPropagation();

          if (event.key === 'ArrowDown') {
            handleItemArrowDown(item);
          } else if (event.key === 'ArrowUp') {
            handleItemArrowUp(item);
          }
        }

        function handleDrawerHide(event, drawer) {
          if (event.target !== drawer) return;

          drawer.removeAttribute('data-submenu-open');
          submenus.forEach(submenu => submenu.removeAttribute('data-active-submenu'));
        }

        const observer = new MutationObserver(handleOpenSubmenuChanged);
        observer.observe(drawer, { attributes: true, attributeFilter: ['data-submenu-open'] });
        handleOpenSubmenuChanged();

        items.forEach(item => {
          item.addEventListener('click', e => handleItemClick(e, item));
          item.addEventListener('keydown', e => handleItemKeydown(e, item));
        });

        submenus.forEach(submenu => {
          submenu.addEventListener('keydown', e => handleSubmenuKeydown(e, submenu));
        });

        backButtons.forEach(button => {
          button.addEventListener('click', e => handleBackClick(e, button));
        });

        drawer.addEventListener('sd-hide', e => handleDrawerHide(e, drawer));
      </script>

      <!-- Desktop navigation logic -->
      <script type="module">
        const dropdowns = document.querySelectorAll('sd-header sd-dropdown');
        const items = document.querySelectorAll('sd-header sd-navigation-item');

        function handleDropdownShow(event, dropdown) {
          const item = dropdown.querySelector('sd-navigation-item[slot="trigger"]');
          item.setAttribute('current', true);
        }

        function handleDropdownHide(event, dropdown) {
          const item = dropdown.querySelector('sd-navigation-item[slot="trigger"]');
          item.removeAttribute('current');
        }

        function handleDropdownPointerOut(event, dropdown) {
          if (event.pointerType !== 'mouse' || dropdown.contains(event.relatedTarget)) return;
          dropdown.hide();
        }

        function handleItemPointerOver(event, item) {
          if (event.pointerType !== 'mouse') return;
          item.closest('sd-dropdown').show();
        }

        function handleItemArrowDown(item) {
          const parent = item.closest('sd-dropdown');
          const next = getNextSibling(item, 'sd-navigation-item');

          if (parent?.contains(next)) {
            parent?.show();
          } else {
            parent?.hide();
          }
          setTimeout(() => next?.focus(), 0);
        }

        function handleItemArrowUp(item) {
          const parent = item.closest('sd-dropdown');
          const previous = getPreviousSibling(item, 'sd-navigation-item');

          if (parent?.contains(previous)) {
            parent?.show();
          } else {
            parent?.hide();
            previous?.closest('sd-dropdown')?.show();
          }
          setTimeout(() => previous?.focus(), 0);
        }

        function handleItemKeydown(event, item) {
          if (event.key === 'ArrowDown') {
            handleItemArrowDown(item);
          } else if (event.key === 'ArrowUp') {
            handleItemArrowUp(item);
          }
        }

        function handleItemClick(event, item) {
          if (!item.hasAttribute('href')) return;

          items.forEach(item => {
            if (item.getAttribute('slot') === 'trigger') return;
            item.removeAttribute('current');
          });

          item.setAttribute('current', '');
        }

        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('sd-show', e => handleDropdownShow(e, dropdown));
          dropdown.addEventListener('sd-hide', e => handleDropdownHide(e, dropdown));
          dropdown.addEventListener('pointerout', e => handleDropdownPointerOut(e, dropdown));
        });

        items.forEach(item => {
          if (item.getAttribute('slot') === 'trigger') {
            item.addEventListener('pointerover', e => handleItemPointerOver(e, item));
          }
          item.addEventListener('keydown', e => handleItemKeydown(e, item));
          item.addEventListener('click', e => handleItemClick(e, item));
        });
      </script>
    `;
  }
};
