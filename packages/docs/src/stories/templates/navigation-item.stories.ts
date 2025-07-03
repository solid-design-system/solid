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

        const ATTR_SUBMENU_OPEN = 'data-submenu-open';
        const ATTR_ACTIVE_SUBMENU = 'data-active-submenu';

        const isGroupedItem = item => !!item.querySelector('sd-navigation-item');

        const isSubmenuTrigger = item =>
          !!item.nextElementSibling?.hasAttribute('data-submenu') && !item.closest('[data-submenu]');

        const isSubmenuOpen = () => drawer.hasAttribute(ATTR_SUBMENU_OPEN);

        const getParentSubmenu = item => item?.closest('[data-submenu]');

        function closeOpenSubmenu() {
          submenus.forEach(menu => menu.removeAttribute(ATTR_ACTIVE_SUBMENU));
          drawer.removeAttribute(ATTR_SUBMENU_OPEN);
        }

        function openSubmenu(submenu) {
          closeOpenSubmenu();
          submenu.setAttribute(ATTR_ACTIVE_SUBMENU, '');
          drawer.setAttribute(ATTR_SUBMENU_OPEN, '');
        }

        function handleOpenSubmenuChanged() {
          submenus.forEach(menu => {
            if (menu.hasAttribute(ATTR_ACTIVE_SUBMENU)) {
              menu.removeAttribute('inert');
            } else {
              menu.setAttribute('inert', '');
            }
          });
        }

        function onItemClick(event, item) {
          if (event.target !== item) return;

          if (isSubmenuTrigger(item)) {
            handleSubmenuTriggerClick(item);
            return;
          }

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

        function onBackClick() {
          const submenu = getParentSubmenu(document.activeElement);

          closeOpenSubmenu();
          if (!submenu) return;

          const item = submenu.previousElementSibling;
          item.focus();
        }

        function onSubmenuKeydown(event, submenu) {
          if (event.key !== 'Tab') return;

          const movingBackwards = event.shiftKey;
          const movingFoward = !movingBackwards;

          const focusableElements = Array.from(
            Array.from(submenu.querySelectorAll(['sd-navigation-item', 'sd-button'].join(','))).filter(
              el =>
                !(
                  el.tagName === 'SD-NAVIGATION-ITEM' &&
                  el.parentElement.tagName === 'SD-NAVIGATION-ITEM' &&
                  !el.parentElement.hasAttribute('open')
                )
            )
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

        function focusNextItem(item) {
          const submenu = getParentSubmenu(item);
          const isMainItem = !submenu;
          let next = getNextSibling(item, 'sd-navigation-item');

          if (!next) return;
          if (!isMainItem && !submenu.contains(next)) return;

          if (isMainItem) {
            while (true) {
              if (!getParentSubmenu(next)) break;
              next = getNextSibling(next, 'sd-navigation-item');
            }
          }

          const nextParentItem = next.parentElement.closest('sd-navigation-item');
          if (nextParentItem && !nextParentItem.hasAttribute('open')) {
            focusNextItem(next);
            return;
          }

          setTimeout(() => next?.focus(), 0);
        }

        function focusPreviousItem(item) {
          const submenu = getParentSubmenu(item);
          const isMainItem = !submenu;
          let previous = getPreviousSibling(item, 'sd-navigation-item');

          if (!previous) return;
          if (!isMainItem && !submenu.contains(previous)) return;

          if (isMainItem) {
            while (true) {
              if (!getParentSubmenu(previous)) break;
              previous = getPreviousSibling(previous, 'sd-navigation-item');
            }
          }

          const previousParentItem = previous.parentElement.closest('sd-navigation-item');
          if (previousParentItem && !previousParentItem.hasAttribute('open')) {
            focusPreviousItem(previous);
            return;
          }

          setTimeout(() => previous?.focus(), 0);
        }

        function handleSubmenuTriggerClick(item) {
          const submenu = item.nextElementSibling;
          if (!submenu) return;

          openSubmenu(submenu);
          setTimeout(() => submenu.querySelector('sd-navigation-item').focus(), drawer.token('sd-duration-medium'));
        }

        function onItemKeydown(event, item) {
          if (event.target !== item) return;

          switch (event.key) {
            case 'ArrowDown':
              focusNextItem(item);
              break;
            case 'ArrowUp':
              focusPreviousItem(item);
              break;
            case 'ArrowRight':
              if (isSubmenuTrigger(item)) {
                handleSubmenuTriggerClick(item);
                return;
              }

              if (isGroupedItem(item)) {
                item.setAttribute('open', '');
              }
              break;
            case 'ArrowLeft':
              if (isGroupedItem(item) && item.hasAttribute('open')) {
                item.removeAttribute('open');
                return;
              }

              if (isSubmenuOpen()) {
                onBackClick();
              }
              break;
          }
        }

        function onDrawerHide(event, drawer) {
          if (event.target !== drawer) return;
          closeOpenSubmenu();
        }

        const observer = new MutationObserver(handleOpenSubmenuChanged);
        observer.observe(drawer, { attributes: true, attributeFilter: [ATTR_SUBMENU_OPEN] });
        handleOpenSubmenuChanged();

        items.forEach(item => {
          item.addEventListener('click', e => onItemClick(e, item));
          item.addEventListener('keydown', e => onItemKeydown(e, item));
        });

        submenus.forEach(submenu => {
          submenu.addEventListener('keydown', e => onSubmenuKeydown(e, submenu));
        });

        backButtons.forEach(button => {
          button.addEventListener('click', e => onBackClick(e, button));
        });

        drawer.addEventListener('sd-hide', e => onDrawerHide(e, drawer));
      </script>

      <!-- Desktop navigation logic -->
      <script type="module">
        const dropdowns = document.querySelectorAll('sd-header sd-dropdown');
        const items = document.querySelectorAll('sd-header sd-navigation-item');

        const isDropdownTrigger = item => item.getAttribute('slot') === 'trigger';
        const getDropdownTrigger = dropdown => dropdown.querySelector('sd-navigation-item[slot="trigger"]');
        const getParentDropdown = item => item?.closest('sd-dropdown');

        function focusNextItem(item) {
          const parent = getParentDropdown(item);
          const next = getNextSibling(item, 'sd-navigation-item');

          if (parent?.contains(next)) {
            parent?.show();
          } else {
            parent?.hide();
          }
          setTimeout(() => next?.focus(), 0);
        }

        function focusPreviousItem(item) {
          const parent = getParentDropdown(item);
          const previous = getPreviousSibling(item, 'sd-navigation-item');

          if (parent?.contains(previous)) {
            parent?.show();
          } else {
            parent?.hide();
            getParentDropdown(previous)?.show();
          }
          setTimeout(() => previous?.focus(), 0);
        }

        function focusNextMainItem(item) {
          const parent = getParentDropdown(item);

          let next = item;
          while (true) {
            next = getNextSibling(next, 'sd-navigation-item');
            if (!parent || !parent?.contains(next)) break;
          }

          parent?.hide();
          setTimeout(() => next?.focus(), 0);
        }

        function focusPreviousMainItem(item) {
          const parent = getParentDropdown(item);

          let previous = item;
          while (true) {
            previous = getPreviousSibling(previous, 'sd-navigation-item');

            if (!parent || !parent?.contains(previous)) {
              const dropdown = getParentDropdown(previous);

              if (!!dropdown) {
                previous = getDropdownTrigger(dropdown);
              }

              break;
            }
          }

          parent?.hide();
          setTimeout(() => previous?.focus(), 0);
        }

        function onDropdownShow(event, dropdown) {
          getDropdownTrigger(dropdown).setAttribute('current', '');
        }

        function onDropdownHide(event, dropdown) {
          getDropdownTrigger(dropdown).removeAttribute('current');
        }

        function onDropdownPointerOut(event, dropdown) {
          if (event.pointerType !== 'mouse' || dropdown.contains(event.relatedTarget)) return;
          dropdown.hide();
        }

        function onItemPointerOver(event, item) {
          if (event.pointerType !== 'mouse') return;
          getParentDropdown(item).show();
        }

        function onItemKeydown(event, item) {
          const isMainItem = !getParentDropdown(item) || isDropdownTrigger(item);

          switch (event.key) {
            case 'ArrowDown':
              focusNextItem(item);
              break;
            case 'ArrowRight':
              if (isMainItem) {
                focusNextMainItem(item);
              } else {
                focusNextItem(item);
              }
              break;
            case 'ArrowUp':
              focusPreviousItem(item);
              break;
            case 'ArrowLeft':
              if (isMainItem) {
                focusPreviousMainItem(item);
              } else {
                focusPreviousItem(item);
              }
              break;
          }
        }

        function onItemClick(_, item) {
          if (!item.hasAttribute('href')) return;

          items.forEach(item => {
            if (isDropdownTrigger(item)) return;
            item.removeAttribute('current');
          });

          item.setAttribute('current', '');
        }

        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('sd-show', e => onDropdownShow(e, dropdown));
          dropdown.addEventListener('sd-hide', e => onDropdownHide(e, dropdown));
          dropdown.addEventListener('pointerout', e => onDropdownPointerOut(e, dropdown));
        });

        items.forEach(item => {
          if (isDropdownTrigger(item)) {
            item.addEventListener('pointerover', e => onItemPointerOver(e, item));
          }
          item.addEventListener('keydown', e => onItemKeydown(e, item));
          item.addEventListener('click', e => onItemClick(e, item));
        });
      </script>
    `;
  }
};
