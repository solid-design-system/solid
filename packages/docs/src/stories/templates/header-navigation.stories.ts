import { html } from 'lit-html';
import '../../../../components/src/solid-components';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Header Navigation',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=2314-31836&p=f&t=TWHhohXRdOB9fxT2-0'
    }
  }
};

/**
 * Horizontal Navigation - Desktop (open on hover) and Mobile
 *
 * **Header Navigation Template 1 (can be seen when you mouse hover "Funds & Depot"):** This option has clickable navigation items, with and without descriptions, and highlights the current page for easy navigation.
 *
 * **Header Navigation Template 2 (can be seen when you mouse hover "Investing"):** This option has a mix of clickable and non clickable navigation items, with and without descriptions, which help creating an intro for the clickable navigation items. It also highlights the current page for easy navigation.
 *
 * **Header Navigation Template 3 (can be seen when you mouse hover "Our Services"):** This option has non clickable navigation without description which helps grouping the clickable navigation items. It also highlights the current page for easy navigation.
 *
 * **Header Navigation Template 4 (can be seen when you mouse hover "About Us"):** This option has a mix of clickable and non clickable navigation items, with and without descriptions, and highlights the current page for easy navigation and it also includes a headline, a divider and cross-links for special target groups.
 */
export const Horizontal = {
  name: 'Header Variant A-01 with different Header Navigation Templates',
  render: () => {
    return html`
      <!-- Storybook specific styles - DO NOT COPY -->
      <style>
        #anchor--templates-header-navigation--horizontal .innerZoomElementWrapper {
          height: 900px;
        }
      </style>

      <sd-header id="horizontal" fixed>
        <div class="flex justify-between items-center my-0 lg:my-3">
          <a class="inline-flex sd-interactive" href="#">
            <img class="h-8 md:h-12 lg:h-14" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
          </a>

          <sd-navigation-item id="open-menu-navigation" class="flex lg:hidden">
            <sd-icon name="system/menu" label="Open navigation" class="text-xl"></sd-icon>
          </sd-navigation-item>
        </div>

        <div class="navigation-nav--horizontal hidden lg:flex relative justify-between">
          <nav aria-label="Main">
            <ul class="flex -ms-4">
              <li>
                <sd-dropdown no-flip>
                  <sd-navigation-item slot="trigger" class="font-bold"> Funds & Depot </sd-navigation-item>

                  <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)">
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
                      </ul>
                    </li>
                  </ul>
                </sd-dropdown>
              </li>
              <li>
                <sd-dropdown no-flip>
                  <sd-navigation-item slot="trigger" class="font-bold"> About Us </sd-navigation-item>

                  <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)">
                        <span class="font-bold">Union Investment at a glance</span>
                        <p slot="description">Partnership is the basis of our actions.</p>
                      </sd-navigation-item>
                    </li>

                    <li>
                      <div class="px-4 py-3">
                        <p class="font-bold">Union Investment for private clients</p>
                        <p class="text-sm">Learn more about us and what we stand for</p>
                      </div>

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
                        <span class="font-bold"> Sustainability at Union Investment </span>
                        <p slot="description">Learn about our values, principles, and commitment to sustainability.</p>
                      </sd-navigation-item>
                    </li>

                    <li>
                      <div class="px-4 py-3">
                        <p class="font-bold">Union Investment Group</p>
                        <p class="text-sm">Find out more about Union Investment as a group of companies</p>
                      </div>

                      <ul>
                        <li>
                          <sd-navigation-item vertical href="javascript:void(0)">
                            Cooperative Financial Group
                          </sd-navigation-item>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <sd-divider class="px-4 m-6"></sd-divider>
                  <p class="sd-headline sd-headline--size-base px-4 mx-6">
                    Not a private customer? Discover more solutions for your needs
                  </p>

                  <ul class="grid grid-cols-2 justify-between gap-x-6 px-6 py-8">
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
                <sd-dropdown no-flip>
                  <sd-navigation-item slot="trigger" class="font-bold"> Investing </sd-navigation-item>
                  <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)">
                        <span class="font-bold">Services at a glance</span>
                        <p slot="description">Investing money – with flexible solutions from Union Investment</p>
                      </sd-navigation-item>
                    </li>

                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)">
                        <span class="font-bold"> Structuring your assets </span>
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
                      <div class="px-4 py-3">
                        <p class="font-bold">Investing money according to ESG</p>
                        <p class="text-sm">Shaping the future responsibly with your investments</p>
                      </div>

                      <ul>
                        <li>
                          <sd-navigation-item vertical href="javascript:void(0)">
                            Funds with a sustainability strategy
                          </sd-navigation-item>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div class="px-4 py-3">
                        <p class="font-bold">Calculators</p>
                        <p class="text-sm">Manage your funds flexibly with UnionDepot</p>
                      </div>
                      <ul>
                        <li>
                          <sd-navigation-item vertical href="javascript:void(0)">
                            Investment planner
                          </sd-navigation-item>
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
                <sd-dropdown no-flip>
                  <sd-navigation-item class="font-bold" slot="trigger"> Our Services </sd-navigation-item>
                  <ul class="grid grid-cols-4 justify-between gap-x-6 px-6 py-8">
                    <li>
                      <sd-navigation-item vertical href="javascript:void(0)" class="font-bold">
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
                        Frequently asked questions
                      </sd-navigation-item>
                    </li>
                  </ul>
                </sd-dropdown>
              </li>
            </ul>
          </nav>
          <nav aria-label="Service">
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
        </div>
      </sd-header>

      <sd-drawer
        id="navigation-drawer-horizontal"
        placement="end"
        label="Navigation drawer menu"
        class="group relative block"
      >
        <sd-button slot="header" variant="tertiary" class="navigation-nav-horizontal--close">
          <sd-icon name="system/arrow-left" label="Close submenu"></sd-icon>
        </sd-button>
        <div
          class="navigation-nav flex flex-col -mx-4 h-full pt-1 transition-transform duration-medium data-[submenu-open]:-translate-x-full"
        >
          <nav aria-label="Main" class="flex-1 flex flex-col justify-between">
            <ul class="flex-1">
              <li>
                <sd-navigation-item vertical href="javascript:void(0)" current> Home page </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item vertical chevron divider> Funds & Depot </sd-navigation-item>
                <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                  <div>
                    <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Funds & Depot</p>
                    <ul>
                      <li>
                        <sd-navigation-item vertical divider href="javascript:void(0)">
                          <span> Funds & Depot Overview </span>
                          <p slot="description">Everything you need to know about our funds and the UnionDepot</p>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical separated href="javascript:void(0)">
                          <span>Find Funds</span>
                          <p slot="description">Get to our funds quickly</p>
                          <ul slot="children">
                            <li>
                              <sd-navigation-item vertical indented href="javascript:void(0)">
                                Top funds
                              </sd-navigation-item>
                            </li>
                            <li>
                              <sd-navigation-item vertical indented href="javascript:void(0)">
                                Fund prices
                              </sd-navigation-item>
                            </li>
                          </ul>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical separated href="javascript:void(0)">
                          <span>Understanding Funds</span>
                          <p slot="description">Funds explained simply and understandably for you</p>

                          <ul slot="children">
                            <li>
                              <sd-navigation-item vertical indented href="javascript:void(0)">
                                Sustainability-related disclosures
                              </sd-navigation-item>
                            </li>
                            <li>
                              <sd-navigation-item vertical indented href="javascript:void(0)">
                                Lexicon
                              </sd-navigation-item>
                            </li>
                          </ul>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical separated href="javascript:void(0)">
                          <span> UnionDepot </span>
                          <p slot="description">Manage your funds flexibly with UnionDepot</p>

                          <ul slot="children">
                            <li>
                              <sd-navigation-item vertical indented href="javascript:void(0)">
                                UnionDepot in Online Banking
                              </sd-navigation-item>
                            </li>
                          </ul>
                        </sd-navigation-item>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <sd-navigation-item vertical chevron divider> About Us </sd-navigation-item>
                <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                  <div>
                    <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">About us</p>

                    <ul>
                      <li>
                        <sd-navigation-item vertical divider href="javascript:void(0)">
                          Union Investment at a glance
                          <p slot="description">Partnership is the basis of our actions.</p>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical>
                          <span> Union Investment for private clients </span>
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
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Sustainability at Union Investment
                          <p slot="description">
                            Learn about our values, principles, and commitment to sustainability.
                          </p>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical>
                          <span> Union Investment Group </span>
                          <p slot="description">Find out more about Union Investment as a group of companies</p>
                          <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                            Cooperative Financial Group
                          </sd-navigation-item>
                        </sd-navigation-item>
                      </li>
                    </ul>

                    <sd-divider class="my-6 mx-4"></sd-divider>
                    <p class="sd-headline sd-headline--size-base mx-4 mb-6">
                      Not a private customer? Discover more solutions for your needs
                    </p>

                    <ul>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Institutional Clients
                          <p slot="description">Solutions for professional investors.</p>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Real Estate Customers
                          <p slot="description">Investing - Renting - Investing</p>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Journalists
                          <p slot="description">Press releases and contacts can be found here</p>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
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
                <sd-navigation-item vertical divider href="javascript:void(0)"> Saving </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item vertical chevron divider> Investing </sd-navigation-item>
                <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                  <div>
                    <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Investing</p>

                    <ul>
                      <li>
                        <sd-navigation-item vertical divider href="javascript:void(0)">
                          <span> Services at a glance </span>
                          <p slot="description">Quickly access our funds</p>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          <span> Structuring your assets </span>
                          <p slot="description">Benefit from modern solutions for your assets</p>
                        </sd-navigation-item>
                        <ul>
                          <li>
                            <sd-navigation-item vertical indented href="javascript:void(0)">
                              Private Funds
                            </sd-navigation-item>
                          </li>
                          <li>
                            <sd-navigation-item vertical indented href="javascript:void(0)">
                              UniDistribution Fund
                            </sd-navigation-item>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <sd-navigation-item vertical>
                          <span> Investing money according to ESG </span>
                          <p slot="description">Shaping the future responsibly with your investments</p>
                          <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                            Funds with a sustainability strategy
                          </sd-navigation-item>
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical>
                          <span> Calculators </span>
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
                <sd-navigation-item vertical chevron divider> Our Services </sd-navigation-item>
                <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                  <div>
                    <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Our Services</p>

                    <ul>
                      <li>
                        <sd-navigation-item vertical divider href="javascript:void(0)">
                          Services at a glance
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Current news </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Subscription </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Our calculators </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Contact </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Forms and Downloads
                        </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)"> Media </sd-navigation-item>
                      </li>
                      <li>
                        <sd-navigation-item vertical href="javascript:void(0)">
                          Frequently Asked Questions
                        </sd-navigation-item>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <nav aria-label="Service" slot="footer" class="bg-neutral-100">
            <ul>
              <li>
                <sd-navigation-item vertical href="javascript:void(0)" class="flex align-center">
                  <sd-icon name="system/user" class="text-xl mr-2"></sd-icon>
                  Portfolio
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item vertical divider href="javascript:void(0)" class="flex align-center">
                  <sd-icon name="system/lock-locked" class="text-xl mr-2"></sd-icon>
                  Application
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item vertical divider href="javascript:void(0)" class="flex align-center">
                  <sd-icon name="system/website" class="text-xl mr-2"></sd-icon>
                  Our further appearances
                </sd-navigation-item>
              </li>
            </ul>
          </nav>
        </div>
      </sd-drawer>

      <main></main>

      <style>
        sd-header#horizontal {
          --sd-header-padding: 8px 16px;
        }

        @media (min-width: 376px) {
          sd-header#horizontal {
            --sd-header-padding: 24px;
          }
        }

        @media (min-width: 1025px) {
          sd-header#horizontal {
            --sd-header-padding: 24px 32px 0 32px;
          }
        }

        @media (min-width: 1440px) {
          sd-header#horizontal {
            --sd-header-padding: 24px 48px 0 48px;
          }
        }

        [data-submenu][inert] {
          display: none;
        }

        sd-navigation-item:has([slot='children']):has(sd-navigation-item[current])::part(content),
        sd-navigation-item:has(+ [data-submenu] sd-navigation-item[current])::part(content) {
          font-weight: bold;
        }

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

        sd-navigation-item + div[data-submenu]:not([data-active-submenu]) {
          pointer-events: none;
          opacity: 0;
        }
      </style>

      <!-- Mobile drawer logic -->
      <script type="module">
        const drawer = document.getElementById('navigation-drawer-horizontal');
        const drawerTrigger = document.getElementById('open-menu-navigation');
        const innerTrigger = drawerTrigger.shadowRoot.querySelector('button');

        innerTrigger.setAttribute('aria-controls', 'navigation-drawer-horizontal');
        innerTrigger.setAttribute('aria-expanded', 'false');
        drawerTrigger.addEventListener('click', () => drawer.show());
        drawer.addEventListener('sd-hide', () => innerTrigger.setAttribute('aria-expanded', 'false'));
        drawer.addEventListener('sd-show', () => innerTrigger.setAttribute('aria-expanded', 'true'));
      </script>

      <!--
        The navigation-menu.js script can be found here:
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

        document.querySelectorAll('.navigation-nav--horizontal').forEach(container => {
          const megamenu = new NavigationMenu(container, NavigationMenuHorizontalItem, {
            currentOnTrigger: true
          });
          megamenu.focusController = new HorizontalFocusController(megamenu);
        });

        document.querySelectorAll('.navigation-nav').forEach(container => {
          const megamenu = new NavigationMenu(container, NavigationMenuVerticalItem, {
            backButton: document
              .getElementById('navigation-drawer-horizontal')
              .querySelector('.navigation-nav-horizontal--close')
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
    `;
  }
};

/** **Accessibility hint:** aria-expanded and aria-controls must be set for accessibility purpose.
 *
 * When consuming sd-header please ensure that there are no margins applied on the left, right and bottom of the dropdown. The top margin of the dropdown should be kept otherwise the first navigation item is cutted.
 */

export const SampleA = {
  name: 'Header Sample A-01',
  render: () => html`
    <style>
      #anchor--templates-header-navigation--sample-a .innerZoomElementWrapper,
      #anchor--templates-header-navigation--sample-a-02 .innerZoomElementWrapper,
      #anchor--templates-header-navigation--sample-b .innerZoomElementWrapper {
        height: 900px;
      }
    </style>
    <sd-header id="sample-a-header" fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="h-8 md:h-12 lg:h-14" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex lg:hidden">
          <sd-navigation-item id="open-menu-sample-a">
            <sd-icon name="system/menu" label="Open navigation" class="text-xl"></sd-icon>
          </sd-navigation-item>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item href="javascript:void(0)" class="font-bold">About Us</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Markets</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Press Service</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Sustainability</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div class="-mr-4 flex items-center">
          <sd-navigation-item href="javascript:void(0)" size="sm">
            <sd-icon name="system/website" label="News" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <sd-navigation-item onclick="alert('This could open a search bar')" size="sm">
            <sd-icon name="system/magnifying-glass" label="Search" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <sd-icon name="system/user" class="text-xl mr-2"></sd-icon><span>My account</span>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <sd-icon name="system/lock-locked" class="text-xl mr-2"></sd-icon><span>My application</span>
          </sd-navigation-item>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
    <sd-drawer id="sample-a-drawer" placement="end" class="relative block">
      <nav aria-label="Main" class="-mx-4">
        <sd-navigation-item vertical current href="javascript:void(0)"> Home </sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">About Us</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Markets</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Press Service</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Sustainability</sd-navigation-item>
      </nav>
      <nav aria-label="Service" slot="footer" class="bg-neutral-100 -m-4">
        <sd-navigation-item vertical class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/user" class="text-xl mr-2"></sd-icon>
          My account
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/lock-locked" class="text-xl mr-2"></sd-icon>
          My application
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/website" class="text-xl mr-2"></sd-icon>
          Our further appearances
        </sd-navigation-item>
      </nav>
    </sd-drawer>

    <style>
      sd-header#sample-a-header {
        --sd-header-padding: 8px 16px;
      }

      @media (min-width: 376px) {
        sd-header#sample-a-header {
          --sd-header-padding: 24px;
        }
      }

      @media (min-width: 1025px) {
        sd-header#sample-a-header {
          --sd-header-padding: 24px 32px 0 32px;
        }
      }

      @media (min-width: 1440px) {
        sd-header#sample-a-header {
          --sd-header-padding: 24px 48px 0 48px;
        }
      }
    </style>

    <script type="module">
      await Promise.all([customElements.whenDefined('sd-navigation-item')]).then(() => {
        const header = document.getElementById('sample-a-header');
        const drawer = document.getElementById('sample-a-drawer');
        const navigationItems = [
          ...header.querySelectorAll('sd-navigation-item'),
          ...drawer.querySelectorAll('sd-navigation-item')
        ];

        const handleNavigationItemClick = e => {
          navigationItems.forEach(item => item.removeAttribute('current'));

          const target = e.target.closest('sd-navigation-item');
          target.setAttribute('current', '');
        };

        navigationItems.forEach(item => {
          if (!item.hasAttribute('href')) return;

          item.addEventListener('click', handleNavigationItemClick);
        });
      });
    </script>
    <script type="module">
      await Promise.all([
        customElements.whenDefined('sd-navigation-item'),
        customElements.whenDefined('sd-drawer')
      ]).then(() => {
        const drawerSampleA = document.getElementById('sample-a-drawer');
        const navigationItemSampleA = document.getElementById('open-menu-sample-a');
        const buttonInNavigationItemSampleA = navigationItemSampleA.shadowRoot.querySelector('button');

        buttonInNavigationItemSampleA.setAttribute('aria-controls', 'sample-a-drawer');
        //Add the necessary ARIA attributes to prevent only being added after action
        buttonInNavigationItemSampleA.setAttribute('aria-expanded', 'false');
        drawerSampleA.addEventListener('sd-hide', () =>
          buttonInNavigationItemSampleA.setAttribute('aria-expanded', 'false')
        );

        navigationItemSampleA.addEventListener('click', () => {
          drawerSampleA.show();
          buttonInNavigationItemSampleA.setAttribute('aria-expanded', 'true');
        });
      });
    </script>
  `
};

/**
 * Vertical Navigation - Desktop (open on click) and Mobile
 */
export const Vertical = {
  name: 'Header Variant A-02 (with overrides) with Header Navigation Template',
  render: () => {
    return html`
      <!-- Storybook specific styles - DO NOT COPY -->
      <style>
        .sb-main-padded {
          padding: 0 !important;
        }

        #anchor--templates-header-navigation--vertical .innerZoomElementWrapper {
          height: 100vh;
        }

        #anchor--templates-header-navigation--vertical .innerZoomElementWrapper > * {
          border: 0 !important;
        }

        sd-header {
          --sd-header-calculated-height: 96px;
        }
      </style>
      <div class="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <sd-header id="vertical" fixed class="col-span-2">
          <div class="flex justify-between items-center">
            <a class="inline-flex sd-interactive" href="#">
              <img class="h-8 md:h-12" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
            </a>

            <sd-navigation-item id="open-menu-navigation-vertical" class="lg:hidden">
              <sd-icon name="system/menu" label="Open navigation" class="text-xl"></sd-icon>
            </sd-navigation-item>

            <nav aria-label="Service" class="navigation-nav hidden lg:inline">
              <ul class="flex">
                <li>
                  <sd-navigation-item>
                    <sd-icon name="system/phone" label="Client Service" class="text-xl"></sd-icon>
                  </sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item>
                    <sd-icon name="system/shopping-cart" label="Cart" class="text-xl"></sd-icon>
                  </sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item>
                    <sd-icon name="system/user" label="Account" class="text-xl"></sd-icon>
                  </sd-navigation-item>
                </li>
              </ul>
            </nav>
          </div>
        </sd-header>

        <div class="w-[272px] border-r border-r-neutral-400 hidden flex-col overflow-x-hidden lg:flex">
          <nav
            aria-label="Main"
            class="navigation-nav group relative flex-1 py-4 transition-transform duration-medium data-[submenu-open]:-translate-x-full"
          >
            <ul>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical current>Home</sd-navigation-item>
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
                        <sd-navigation-item relaxed vertical>
                          <span>Fund information</span>
                          <sd-navigation-item slot="children" vertical indented relaxed href="javascript:void(0)">
                            Fund type
                          </sd-navigation-item>
                          <sd-navigation-item slot="children" vertical indented relaxed href="javascript:void(0)">
                            Performance history
                          </sd-navigation-item>
                          <sd-navigation-item slot="children" vertical indented relaxed href="javascript:void(0)">
                            My fund data
                          </sd-navigation-item>
                          <sd-navigation-item slot="children" vertical indented relaxed href="javascript:void(0)">
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
                <sd-navigation-item href="javascript:void(0)" indented vertical>Market analysis</sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical>Qualification</sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item href="javascript:void(0)" indented vertical>Consulting support</sd-navigation-item>
              </li>
            </ul>
          </nav>

          <sd-divider class="mx-8" aria-hidden="true"></sd-divider>

          <nav aria-label="Actions" class="px-8 py-6">
            <sd-button href="javascript:void(0)" class="w-full mb-4">Document upload</sd-button>
            <sd-button variant="secondary" href="javascript:void(0)" class="w-full">Bank order</sd-button>
          </nav>
        </div>

        <main class="px-4"></main>

        <sd-drawer
          id="navigation-drawer-vertical"
          placement="end"
          label="Navigation drawer menu"
          class="group relative block"
        >
          <sd-button slot="header" variant="tertiary" class="navigation-nav-vertical--close">
            <sd-icon slot="icon-left" name="system/arrow-left" label="Close submenu"></sd-icon>
            <span>Back</span>
          </sd-button>

          <div class="flex flex-col h-full -mx-4 overflow-x-hidden">
            <nav
              aria-label="Main"
              class="navigation-nav group relative flex flex-col justify-between flex-1 pt-1 pb-4 transition-transform duration-medium data-[submenu-open]:-translate-x-full"
            >
              <ul>
                <li>
                  <sd-navigation-item href="javascript:void(0)" vertical current>Home</sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item href="javascript:void(0)" divider vertical>Investment news</sd-navigation-item>
                </li>
                <li>
                  <sd-navigation-item divider vertical chevron>Investment funds</sd-navigation-item>
                  <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                    <div>
                      <p class="sd-headline sd-headline--size-lg px-4 py-3 !text-primary">Investment funds</p>
                      <ul>
                        <li>
                          <sd-navigation-item divider vertical>
                            <span>Fund information</span>
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
                  <sd-navigation-item href="javascript:void(0)" divider vertical>Market analysis</sd-navigation-item>
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

            <nav aria-label="Actions" class="px-4 py-6">
              <sd-button href="javascript:void(0)" class="w-full mb-4">Document upload</sd-button>
              <sd-button variant="secondary" href="javascript:void(0)" class="w-full">Bank order</sd-button>
            </nav>
          </div>
        </sd-drawer>
      </div>

      <style>
        sd-header#vertical {
          --sd-header-padding: 8px 16px;
        }

        @media (min-width: 376px) {
          sd-header#vertical {
            --sd-header-padding: 24px;
          }
        }

        @media (min-width: 1025px) {
          sd-header#vertical {
            --sd-header-padding: 24px 32px;
          }
        }

        @media (min-width: 1440px) {
          sd-header#vertical {
            --sd-header-padding: 24px 48px;
          }
        }

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
        const drawer = document.getElementById('navigation-drawer-vertical');
        const drawerTrigger = document.getElementById('open-menu-navigation-vertical');
        const innerTrigger = drawerTrigger.shadowRoot.querySelector('button');

        innerTrigger.setAttribute('aria-controls', 'navigation-drawer-vertical');
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
            backButton: document
              .getElementById('navigation-drawer-vertical')
              .querySelector('.navigation-nav-vertical--close')
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
    `;
  }
};

export const SampleA02 = {
  name: 'Header Sample A-02',
  render: () => html`
    <sd-header id="sample-a02-header" fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="h-8 md:h-12 lg:h-14" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex lg:hidden">
          <sd-navigation-item id="open-menu-sample-a-02">
            <sd-icon name="system/menu" label="Open navigation" class="text-xl "></sd-icon>
          </sd-navigation-item>
        </div>
        <div class="-mr-4 lg:flex hidden items-center">
          <sd-navigation-item href="javascript:void(0)">
            <sd-icon name="system/filter-empty" label="Search filter" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <sd-icon name="system/globe" label="Language" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <sd-icon name="system/website" label="News" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <sd-navigation-item onclick="alert('This could open a search bar')">
            <sd-icon name="system/magnifying-glass" label="Search" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <sd-icon name="system/user" class="text-xl mr-2"></sd-icon><span>Sign in</span>
          </sd-navigation-item>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Competencies</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Capital Market</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Our products</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Reporting</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">About us</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Personal area</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
    <sd-drawer id="sample-a02-drawer" placement="end" class="relative block">
      <nav aria-label="Main" class="-mx-4">
        <sd-navigation-item vertical current href="javascript:void(0)"> Home </sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Competencies</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Capital Markets</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Our products</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Reporting</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">About us</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Personal area</sd-navigation-item>
      </nav>
      <nav aria-label="Footer" slot="footer" class="bg-neutral-100 -m-4">
        <sd-navigation-item vertical class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/user" class="text-xl mx-1"></sd-icon>
          Sign in
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/globe" class="text-xl mx-1"></sd-icon>
          Language
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/website" class="text-xl mx-1"></sd-icon>
          Our further appearances
        </sd-navigation-item>
      </nav>
    </sd-drawer>

    <style>
      sd-header#sample-a02-header {
        --sd-header-padding: 8px 16px;
      }

      @media (min-width: 376px) {
        sd-header#sample-a02-header {
          --sd-header-padding: 24px;
        }
      }

      @media (min-width: 1025px) {
        sd-header#sample-a02-header {
          --sd-header-padding: 24px 32px 0 32px;
        }
      }

      @media (min-width: 1440px) {
        sd-header#sample-a02-header {
          --sd-header-padding: 24px 48px 0 48px;
        }
      }
    </style>

    <script type="module">
      await Promise.all([customElements.whenDefined('sd-navigation-item')]).then(() => {
        const header = document.getElementById('sample-a02-header');
        const drawer = document.getElementById('sample-a02-drawer');
        const navigationItems = [
          ...header.querySelectorAll('sd-navigation-item'),
          ...drawer.querySelectorAll('sd-navigation-item')
        ];

        const handleNavigationItemClick = e => {
          navigationItems.forEach(item => item.removeAttribute('current'));

          const target = e.target.closest('sd-navigation-item');
          target.setAttribute('current', '');
        };

        navigationItems.forEach(item => {
          if (!item.hasAttribute('href')) return;

          item.addEventListener('click', handleNavigationItemClick);
        });
      });
    </script>
    <script type="module">
      await Promise.all([
        customElements.whenDefined('sd-navigation-item'),
        customElements.whenDefined('sd-drawer')
      ]).then(() => {
        const drawerSampleA02 = document.getElementById('sample-a02-drawer');
        const navigationItemSampleA02 = document.getElementById('open-menu-sample-a-02');
        const buttonInNavigationItemSampleA02 = navigationItemSampleA02.shadowRoot.querySelector('button');

        buttonInNavigationItemSampleA02.setAttribute('aria-controls', 'sample-a02-drawer');
        //Add the necessary ARIA attributes to prevent only being added after action
        buttonInNavigationItemSampleA02.setAttribute('aria-expanded', 'false');
        drawerSampleA02.addEventListener('sd-hide', () =>
          buttonInNavigationItemSampleA02.setAttribute('aria-expanded', 'false')
        );

        navigationItemSampleA02.addEventListener('click', () => {
          drawerSampleA02.show();
          buttonInNavigationItemSampleA02.setAttribute('aria-expanded', 'true');
        });
      });
    </script>
  `
};

export const SampleB = {
  name: 'Header Sample B',
  render: () => html`
    <sd-header id="sample-b-header" fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img
            class="sm:h-12 lg:h-14 hidden sm:flex"
            src="images/logo-unioninvestment-lg.svg"
            alt="Union Investment Homepage"
          />
          <img class="h-8 sm:hidden" src="images/logo-unioninvestment-sm.svg" alt="Union Investment Homepage" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex gap-2 sm:gap-12 items-center">
          <div class="flex">
            <div class="h-12 w-[120px] md:w-40 lg:h-14 lg:w-[200px] flex bg-neutral-100 items-center justify-center">
              Partnerlogo
            </div>
          </div>
          <div class="flex lg:hidden">
            <sd-navigation-item id="open-menu-sample-b">
              <sd-icon name="system/menu" label="Open navigation" class="text-xl "></sd-icon>
            </sd-navigation-item>
          </div>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item class="font-bold" href="javascript:void(0)">Home</sd-navigation-item>
          <sd-navigation-item class="font-bold" href="javascript:void(0)">Perspective</sd-navigation-item>
          <sd-navigation-item class="font-bold" href="javascript:void(0)">To the point</sd-navigation-item>
          <sd-navigation-item class="font-bold" href="javascript:void(0)">Meeting point</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div class="flex items-center">
          <sd-navigation-item href="javascript:void(0)">
            <sd-icon name="system/website" label="News" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <sd-navigation-item onclick="alert('This could open a search bar')">
            <sd-icon name="system/magnifying-glass" label="Search" class="text-xl"></sd-icon>
          </sd-navigation-item>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
    <sd-drawer id="sample-b-drawer" placement="end" class="relative block">
      <nav aria-label="Main" class="-mx-4">
        <sd-navigation-item vertical current href="javascript:void(0)"> Home </sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Perspective</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">To the point</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Meeting point</sd-navigation-item>
      </nav>
      <nav aria-label="Footer" slot="footer" class="bg-neutral-100 -m-4">
        <sd-navigation-item vertical class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/lock-locked" class="h-6 w-6 mr-2"></sd-icon>
          My application
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/website" class="h-6 w-6 mr-2"></sd-icon>
          Our further appearances
        </sd-navigation-item>
      </nav>
    </sd-drawer>

    <style>
      sd-header#sample-b-header {
        --sd-header-padding: 8px 16px;
      }

      @media (min-width: 376px) {
        sd-header#sample-b-header {
          --sd-header-padding: 24px;
        }
      }

      @media (min-width: 1025px) {
        sd-header#sample-b-header {
          --sd-header-padding: 24px 32px 0 32px;
        }
      }

      @media (min-width: 1440px) {
        sd-header#sample-b-header {
          --sd-header-padding: 24px 48px 0 48px;
        }
      }
    </style>

    <script type="module">
      await Promise.all([customElements.whenDefined('sd-navigation-item')]).then(() => {
        const header = document.getElementById('sample-b-header');
        const drawer = document.getElementById('sample-b-drawer');
        const navigationItems = [
          ...header.querySelectorAll('sd-navigation-item'),
          ...drawer.querySelectorAll('sd-navigation-item')
        ];

        const handleNavigationItemClick = e => {
          navigationItems.forEach(item => item.removeAttribute('current'));

          const target = e.target.closest('sd-navigation-item');
          target.setAttribute('current', '');
        };

        navigationItems.forEach(item => {
          if (!item.hasAttribute('href')) return;

          item.addEventListener('click', handleNavigationItemClick);
        });
      });
    </script>
    <script type="module">
      await Promise.all([
        customElements.whenDefined('sd-navigation-item'),
        customElements.whenDefined('sd-drawer')
      ]).then(() => {
        const drawerSampleB = document.getElementById('sample-b-drawer');
        const navigationItemSampleB = document.getElementById('open-menu-sample-b');
        const buttonInNavigationItemSampleB = navigationItemSampleB.shadowRoot.querySelector('button');

        buttonInNavigationItemSampleB.setAttribute('aria-controls', 'sample-b-drawer');
        //Add the necessary ARIA attributes to prevent only being added after action
        buttonInNavigationItemSampleB.setAttribute('aria-expanded', 'false');
        drawerSampleB.addEventListener('sd-hide', () =>
          buttonInNavigationItemSampleB.setAttribute('aria-expanded', 'false')
        );

        navigationItemSampleB.addEventListener('click', () => {
          drawerSampleB.show();
          buttonInNavigationItemSampleB.setAttribute('aria-expanded', 'true');
        });
      });
    </script>
  `
};
