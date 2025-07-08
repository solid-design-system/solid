import { html } from 'lit-html';
import '../../../../components/src/solid-components';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Navigation Item',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const HorizontalMegaMenu = {
  name: 'Horizontal Mega Menu',
  render: () => {
    return html`
      <style>
        #anchor--templates-navigation-item--horizontal-mega-menu .innerZoomElementWrapper {
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
                <sd-navigation-item slot="trigger" current class="font-bold"> Funds & Depot </sd-navigation-item>

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
        <nav
          class="mega-menu-nav -mx-4 pt-20 pb-1 transition-transform duration-medium data-[submenu-open]:-translate-x-full"
        >
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
          left: -16px;
          width: calc(100% + 16px);
        }

        sd-dropdown[open] sd-navigation-item[slot='trigger'][current] {
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
        class MegaMenuElement {
          constructor(element) {
            this.el = element;
          }

          emit(name, detail) {
            this.el.dispatchEvent(
              new CustomEvent(name, {
                bubbles: true,
                detail
              })
            );
          }
        }

        class MegaMenuSubmenu extends MegaMenuElement {
          constructor(element) {
            super(element);

            this.el = element;
            this.trigger = this.el.previousElementSibling;
            this.el.setAttribute('inert', '');
            this.el.querySelector('sd-button').addEventListener('click', () => this.back());
            this.el.addEventListener('keydown', e => this.onKeyDown(e));
          }

          isActive() {
            return this.el.hasAttribute('data-active-submenu');
          }

          reset() {
            this.el.removeAttribute('data-active-submenu');
            this.el.setAttribute('inert', '');
            this.el.querySelectorAll('sd-navigation-item').forEach(item => item.removeAttribute('open'));
          }

          open() {
            this.el.setAttribute('data-active-submenu', '');
            this.el.removeAttribute('inert');
            this.focusWithin();
            this.emit('sd-mega-menu-submenu-open', { source: this });
          }

          close() {
            this.el.removeAttribute('data-active-submenu');
            this.el.setAttribute('inert', '');
            this.emit('sd-mega-menu-submenu-close', { source: this });
          }

          focusWithin() {
            const firstNavigationItem = this.el.querySelector('sd-navigation-item');
            setTimeout(() => firstNavigationItem?.focus(), firstNavigationItem?.token('sd-duration-medium'));
          }

          focusTrigger() {
            setTimeout(() => this.trigger.focus(), this.trigger.token('sd-duration-medium'));
          }

          back() {
            this.close();
            this.focusTrigger();
          }

          getTabbableBoundary() {
            return Array.from(
              Array.from(this.el.querySelectorAll(['sd-navigation-item', 'sd-button'].join(','))).filter(
                el =>
                  !(
                    el.tagName === 'SD-NAVIGATION-ITEM' &&
                    el.parentElement.tagName === 'SD-NAVIGATION-ITEM' &&
                    !el.parentElement.hasAttribute('open')
                  )
              )
            );
          }

          onKeyDown(event) {
            if (event.key !== 'Tab') return;

            const movingBackwards = event.shiftKey;
            const movingForward = !movingBackwards;

            const focusableElements = this.getTabbableBoundary();

            const start = focusableElements[0];
            const end = focusableElements[focusableElements.length - 1];

            if (movingBackwards && document.activeElement === start) {
              event.preventDefault();
              end.focus();
              return;
            }

            if (movingForward && document.activeElement === end) {
              event.preventDefault();
              start.focus();
              return;
            }
          }
        }

        class MegaMenuItem extends MegaMenuElement {
          constructor(element) {
            super(element);

            this.el = element;
            this.el.addEventListener('click', e => this.onClick(e));

            if (this.el.querySelector('sd-navigation-item[slot="children"]')) {
              this.isGroupItem = true;
            }

            if (this.el.nextElementSibling?.matches('[data-submenu]')) {
              this.isSubmenuTrigger = true;
              this.submenu = new MegaMenuSubmenu(this.el.nextElementSibling);
            }

            if (this.el.closest('[data-submenu]')) {
              this.parent = new MegaMenuSubmenu(this.el.closest('[data-submenu]'));
            }
          }

          focus() {
            this.el.focus();
          }

          click() {
            if (this.isSubmenuTrigger) {
              this.submenu.open();
              return;
            }

            if (this.isGroupItem) {
              if (this.el.open) {
                this.el.removeAttribute('open');
              } else {
                this.el.setAttribute('open', '');
              }
            }

            this.emit('sd-mega-menu-item-click', { source: this });
          }

          setCurrent(current) {
            if (current) {
              this.el.setAttribute('current', '');
            } else {
              this.el.removeAttribute('current');
            }
          }

          onClick(event) {
            if (event.target !== this.el) return;
            this.click();
          }
        }

        class MobileMegaMenu {
          constructor(element) {
            this.el = element;
            this.items = Array.from(element.querySelectorAll('sd-navigation-item')).map(item => new MegaMenuItem(item));
            this.focusController = new MegaMenuFocusController(this);

            this.el.addEventListener('sd-mega-menu-item-click', e => this.onItemClick(e));
            this.el.addEventListener('sd-mega-menu-submenu-open', e => this.onSubmenuOpen(e));
            this.el.addEventListener('sd-mega-menu-submenu-close', e => this.onSubmenuClose(e));
          }

          reset() {
            this.el.removeAttribute('data-submenu-open');
            this.items.forEach(item => item.submenu?.reset());
          }

          onItemClick(e) {
            this.items.forEach(item => {
              item.setCurrent(item.el === e.target || item.submenu?.el.contains(e.target));
            });
          }

          onSubmenuOpen(e) {
            this.el.setAttribute('data-submenu-open', '');
          }

          onSubmenuClose(e) {
            this.reset();
          }
        }

        class MegaMenuFocusController {
          constructor(menu) {
            this.menu = menu;
            this.menu.el.addEventListener('keydown', e => this.onKeydown(e));
          }

          focusNext(item) {
            let index = this.menu.items.findIndex(_item => _item.el === item.el);
            let next = this.menu.items[index + 1];

            while (true) {
              if (!next) break;

              if (item.parent && item.parent.el !== next.parent?.el) return;

              if (next.parent && !next.parent.isActive()) {
                index++;
                next = this.menu.items[index + 1];
                continue;
              }

              if (
                next.el.parentElement.closest('sd-navigation-item') &&
                !next.el.parentElement.closest('sd-navigation-item').hasAttribute('open')
              ) {
                index++;
                next = this.menu.items[index + 1];
                continue;
              }

              break;
            }

            next?.focus();
          }

          focusPrevious(item) {
            let index = this.menu.items.findIndex(_item => _item.el === item.el);
            let previous = this.menu.items[index - 1];

            while (true) {
              if (!previous) break;

              if (item.parent && item.parent.el !== previous.parent?.el) return;

              if (previous.parent && !previous.parent.isActive()) {
                index--;
                previous = this.menu.items[index - 1];
                continue;
              }

              if (
                previous.el.parentElement.closest('sd-navigation-item') &&
                !previous.el.parentElement.closest('sd-navigation-item').hasAttribute('open')
              ) {
                index--;
                previous = this.menu.items[index - 1];
                continue;
              }

              break;
            }

            previous?.focus();
          }

          onKeydown(e) {
            const item = this.menu.items.find(item => item.el === e.target);

            switch (e.key) {
              case 'ArrowDown':
                this.focusNext(item);
                break;
              case 'ArrowUp':
                this.focusPrevious(item);
                break;
              case 'ArrowRight':
                if (item.isSubmenuTrigger || item.isGroupItem) {
                  item.click();
                }
                break;
              case 'ArrowLeft':
                item.parent?.back();
                break;
            }
          }
        }

        document.querySelectorAll('.mega-menu-nav').forEach(container => {
          const megamenu = new MobileMegaMenu(container);

          if (container.closest('sd-drawer')) {
            container.closest('sd-drawer').addEventListener('sd-hide', () => megamenu.reset());
          }
        });
      </script>

      <!-- Desktop navigation logic -->
      <script type="module">
        const dropdowns = document.querySelectorAll('sd-header sd-dropdown');
        const items = document.querySelectorAll('sd-header sd-navigation-item');

        const isDropdownTrigger = item => item.getAttribute('slot') === 'trigger';
        const getDropdownTrigger = dropdown => dropdown?.querySelector('sd-navigation-item[slot="trigger"]');
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
          const hasActiveItem = dropdown.querySelector('sd-navigation-item[current]:not([slot="trigger"])');
          if (hasActiveItem) return;

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

          items.forEach(item => item.removeAttribute('current'));
          item.setAttribute('current', '');

          const dropdown = getParentDropdown(item);
          getDropdownTrigger(dropdown)?.setAttribute('current', '');
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

export const VerticalMegaMenu = {
  name: 'Vertical Mega Menu',
  render: () => {
    return html`
      <style>
        .sb-main-padded {
          padding: 0 !important;
        }

        #anchor--templates-navigation-item--vertical-mega-menu .innerZoomElementWrapper {
          height: 100vh;
        }
      </style>
      <div class="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <sd-header fixed style="--sd-header-padding: 24px 48px" class="col-span-2">
          <div class="flex justify-between items-center">
            <a class="inline-flex sd-interactive" href="#">
              <img class="h-8 md:h-12" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
            </a>

            <sd-navigation-item id="open-menu-mega-menu-vertical" class="lg:hidden">
              <sd-icon name="system/menu" label="Open navigation" class="text-xl -my-[1.5px] -mx-1"></sd-icon>
            </sd-navigation-item>

            <nav class="mega-menu-nav hidden lg:inline">
              <ul class="flex">
                <sd-navigation-item>
                  <sd-icon name="system/phone" label="Client Service" class="text-xl -my-[1.5px] -mx-1"></sd-icon>
                </sd-navigation-item>

                <sd-navigation-item>
                  <sd-icon name="system/shopping-cart" label="Cart" class="text-xl -my-[1.5px] -mx-1"></sd-icon>
                </sd-navigation-item>

                <sd-navigation-item>
                  <sd-icon name="system/user" label="Account" class="text-xl -my-[1.5px] -mx-1"></sd-icon>
                </sd-navigation-item>
              </ul>
            </nav>
          </div>
        </sd-header>

        <aside class="w-[272px] border-r border-r-neutral-400 hidden flex-col overflow-hidden lg:flex">
          <nav
            aria-label="Main"
            class="mega-menu-nav group relative flex-1 py-4 transition-transform duration-medium data-[submenu-open]:-translate-x-full"
          >
            <ul>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical current>Start</sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical>Investment news</sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item indented vertical chevron>Investment funds</sd-navigation-item>
                <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                  <sd-button variant="tertiary" class="mx-4 my-2">
                    <sd-icon slot="icon-left" name="system/arrow-left" label="Close Investment funds submenu"></sd-icon>
                    <span>Back</span>
                  </sd-button>

                  <sd-divider class="mx-4 mb-2"></sd-divider>

                  <div>
                    <p class="sd-headline sd-headline--size-lg mx-4 px-4 py-3 !text-primary">Investment funds</p>
                    <ul>
                      <li>
                        <sd-navigation-item indented vertical>
                          <span class="font-bold">Fund information</span>
                          <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                            Fund type
                          </sd-navigation-item>
                          <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                            Performance history
                          </sd-navigation-item>
                          <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                            My fund data
                          </sd-navigation-item>
                          <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                            Find funds
                          </sd-navigation-item>
                        </sd-navigation-item>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical>Management</sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical>Market Analysis</sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical>Qualification</sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical>Consulting support</sd-navigation-item>
              </li>
            </ul>
          </nav>

          <div class="px-8 pb-6">
            <sd-divider class="mb-6"></sd-divider>
            <sd-button href="javascript:void(0)" class="w-full mb-4">Document upload</sd-button>
            <sd-button variant="secondary" href="javascript:void(0)" class="w-full">Bank order</sd-button>
          </div>
        </aside>

        <sd-drawer id="mega-menu-drawer-vertical" placement="end" no-header class="group relative block">
          <div class="flex flex-col h-full -mx-4 overflow-hidden">
            <nav
              aria-label="Main"
              class="mega-menu-nav group relative flex flex-col justify-between flex-1 pt-20 pb-4 transition-transform duration-medium data-[submenu-open]:-translate-x-full"
            >
              <ul>
                <li>
                  <sd-navigation-item href="javascript:void(0)" vertical current>Start</sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item href="javascript:void(0)" divider vertical>Investment news</sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item divider vertical chevron>Investment funds</sd-navigation-item>
                  <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                    <sd-button variant="tertiary" class="mx-4 my-2">
                      <sd-icon
                        slot="icon-left"
                        name="system/arrow-left"
                        label="Close Investment funds submenu"
                      ></sd-icon>
                      <span>Back</span>
                    </sd-button>

                    <div>
                      <p class="sd-headline sd-headline--size-lg px-4 py-3 !text-primary">Investment funds</p>
                      <ul>
                        <li>
                          <sd-navigation-item divider vertical>
                            <span class="font-bold">Fund information</span>
                            <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                              Fund type
                            </sd-navigation-item>
                            <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                              Performance history
                            </sd-navigation-item>
                            <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                              My fund data
                            </sd-navigation-item>
                            <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                              Find funds
                            </sd-navigation-item>
                          </sd-navigation-item>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <sd-navigation-item href="javascript:void(0)" divider vertical>Management</sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item href="javascript:void(0)" divider vertical>Market Analysis</sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item href="javascript:void(0)" divider vertical>Qualification</sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item href="javascript:void(0)" divider vertical>
                    Consulting support
                  </sd-navigation-item>
                </li>
              </ul>

              <div class="py-2 bg-neutral-100">
                <ul>
                  <li><sd-navigation-item href="javascript:void(0)" vertical> Client Service </sd-navigation-item></li>
                  <li><sd-navigation-item href="javascript:void(0)" divider vertical> Cart </sd-navigation-item></li>
                  <li><sd-navigation-item href="javascript:void(0)" divider vertical> Account </sd-navigation-item></li>
                </ul>
              </div>
            </nav>

            <div class="px-4 py-6">
              <sd-button href="javascript:void(0)" class="w-full mb-4">Document upload</sd-button>
              <sd-button variant="secondary" href="javascript:void(0)" class="w-full">Bank order</sd-button>
            </div>
          </div>
        </sd-drawer>
      </div>

      <style>
        sd-navigation-item + div[data-submenu]:not([data-active-submenu]) {
          pointer-events: none;
          opacity: 0;
        }
      </style>

      <!-- Mobile drawer logic -->
      <script type="module">
        const drawer = document.getElementById('mega-menu-drawer-vertical');
        const drawerTrigger = document.getElementById('open-menu-mega-menu-vertical');
        const innerTrigger = drawerTrigger.shadowRoot.querySelector('button');

        innerTrigger.setAttribute('aria-controls', 'mega-menu-drawer-vertical');
        innerTrigger.setAttribute('aria-expanded', 'false');
        drawerTrigger.addEventListener('click', () => drawer.show());
        drawer.addEventListener('sd-hide', () => innerTrigger.setAttribute('aria-expanded', 'false'));
        drawer.addEventListener('sd-show', () => innerTrigger.setAttribute('aria-expanded', 'true'));
      </script>

      <script type="module">
        class MegaMenuElement {
          constructor(element) {
            this.el = element;
          }

          emit(name, detail) {
            this.el.dispatchEvent(
              new CustomEvent(name, {
                bubbles: true,
                detail
              })
            );
          }
        }

        class MegaMenuSubmenu extends MegaMenuElement {
          constructor(element) {
            super(element);

            this.el = element;
            this.trigger = this.el.previousElementSibling;
            this.el.setAttribute('inert', '');
            this.el.querySelector('sd-button').addEventListener('click', () => this.back());
            this.el.addEventListener('keydown', e => this.onKeyDown(e));
          }

          isActive() {
            return this.el.hasAttribute('data-active-submenu');
          }

          reset() {
            this.el.removeAttribute('data-active-submenu');
            this.el.setAttribute('inert', '');
            this.el.querySelectorAll('sd-navigation-item').forEach(item => item.removeAttribute('open'));
          }

          open() {
            this.el.setAttribute('data-active-submenu', '');
            this.el.removeAttribute('inert');
            this.focusWithin();
            this.emit('sd-mega-menu-submenu-open', { source: this });
          }

          close() {
            this.el.removeAttribute('data-active-submenu');
            this.el.setAttribute('inert', '');
            this.emit('sd-mega-menu-submenu-close', { source: this });
          }

          focusWithin() {
            const firstNavigationItem = this.el.querySelector('sd-navigation-item');
            setTimeout(() => firstNavigationItem?.focus(), firstNavigationItem?.token('sd-duration-medium'));
          }

          focusTrigger() {
            setTimeout(() => this.trigger.focus(), this.trigger.token('sd-duration-medium'));
          }

          back() {
            this.close();
            this.focusTrigger();
          }

          getTabbableBoundary() {
            return Array.from(
              Array.from(this.el.querySelectorAll(['sd-navigation-item', 'sd-button'].join(','))).filter(
                el =>
                  !(
                    el.tagName === 'SD-NAVIGATION-ITEM' &&
                    el.parentElement.tagName === 'SD-NAVIGATION-ITEM' &&
                    !el.parentElement.hasAttribute('open')
                  )
              )
            );
          }

          onKeyDown(event) {
            if (event.key !== 'Tab') return;

            const movingBackwards = event.shiftKey;
            const movingForward = !movingBackwards;

            const focusableElements = this.getTabbableBoundary();

            const start = focusableElements[0];
            const end = focusableElements[focusableElements.length - 1];

            if (movingBackwards && document.activeElement === start) {
              event.preventDefault();
              end.focus();
              return;
            }

            if (movingForward && document.activeElement === end) {
              event.preventDefault();
              start.focus();
              return;
            }
          }
        }

        class MegaMenuItem extends MegaMenuElement {
          constructor(element) {
            super(element);

            this.el = element;
            this.el.addEventListener('click', e => this.onClick(e));

            if (this.el.querySelector('sd-navigation-item[slot="children"]')) {
              this.isGroupItem = true;
            }

            if (this.el.nextElementSibling?.matches('[data-submenu]')) {
              this.isSubmenuTrigger = true;
              this.submenu = new MegaMenuSubmenu(this.el.nextElementSibling);
            }

            if (this.el.closest('[data-submenu]')) {
              this.parent = new MegaMenuSubmenu(this.el.closest('[data-submenu]'));
            }
          }

          focus() {
            this.el.focus();
          }

          click() {
            if (this.isSubmenuTrigger) {
              this.submenu.open();
              return;
            }

            if (this.isGroupItem) {
              if (this.el.open) {
                this.el.removeAttribute('open');
              } else {
                this.el.setAttribute('open', '');
              }
            }

            this.emit('sd-mega-menu-item-click', { source: this });
          }

          setCurrent(current) {
            if (current) {
              this.el.setAttribute('current', '');
            } else {
              this.el.removeAttribute('current');
            }
          }

          onClick(event) {
            if (event.target !== this.el) return;
            this.click();
          }
        }

        class MobileMegaMenu {
          constructor(element) {
            this.el = element;
            this.items = Array.from(element.querySelectorAll('sd-navigation-item')).map(item => new MegaMenuItem(item));
            this.focusController = new MegaMenuFocusController(this);

            this.el.addEventListener('sd-mega-menu-item-click', e => this.onItemClick(e));
            this.el.addEventListener('sd-mega-menu-submenu-open', e => this.onSubmenuOpen(e));
            this.el.addEventListener('sd-mega-menu-submenu-close', e => this.onSubmenuClose(e));
          }

          reset() {
            this.el.removeAttribute('data-submenu-open');
            this.items.forEach(item => item.submenu?.reset());
          }

          onItemClick(e) {
            this.items.forEach(item => {
              item.setCurrent(item.el === e.target || item.submenu?.el.contains(e.target));
            });
          }

          onSubmenuOpen(e) {
            this.el.setAttribute('data-submenu-open', '');
          }

          onSubmenuClose(e) {
            this.reset();
          }
        }

        class MegaMenuFocusController {
          constructor(menu) {
            this.menu = menu;
            this.menu.el.addEventListener('keydown', e => this.onKeydown(e));
          }

          focusNext(item) {
            let index = this.menu.items.findIndex(_item => _item.el === item.el);
            let next = this.menu.items[index + 1];

            while (true) {
              if (!next) break;

              if (item.parent && item.parent.el !== next.parent?.el) return;

              if (next.parent && !next.parent.isActive()) {
                index++;
                next = this.menu.items[index + 1];
                continue;
              }

              if (
                next.el.parentElement.closest('sd-navigation-item') &&
                !next.el.parentElement.closest('sd-navigation-item').hasAttribute('open')
              ) {
                index++;
                next = this.menu.items[index + 1];
                continue;
              }

              break;
            }

            next?.focus();
          }

          focusPrevious(item) {
            let index = this.menu.items.findIndex(_item => _item.el === item.el);
            let previous = this.menu.items[index - 1];

            while (true) {
              if (!previous) break;

              if (item.parent && item.parent.el !== previous.parent?.el) return;

              if (previous.parent && !previous.parent.isActive()) {
                index--;
                previous = this.menu.items[index - 1];
                continue;
              }

              if (
                previous.el.parentElement.closest('sd-navigation-item') &&
                !previous.el.parentElement.closest('sd-navigation-item').hasAttribute('open')
              ) {
                index--;
                previous = this.menu.items[index - 1];
                continue;
              }

              break;
            }

            previous?.focus();
          }

          onKeydown(e) {
            const item = this.menu.items.find(item => item.el === e.target);

            switch (e.key) {
              case 'ArrowDown':
                this.focusNext(item);
                break;
              case 'ArrowUp':
                this.focusPrevious(item);
                break;
              case 'ArrowRight':
                if (item.isSubmenuTrigger || item.isGroupItem) {
                  item.click();
                }
                break;
              case 'ArrowLeft':
                item.parent?.back();
                break;
            }
          }
        }

        document.querySelectorAll('.mega-menu-nav').forEach(container => {
          const megamenu = new MobileMegaMenu(container);

          if (container.closest('sd-drawer')) {
            container.closest('sd-drawer').addEventListener('sd-hide', () => megamenu.reset());
          }
        });
      </script>
    `;
  }
};
