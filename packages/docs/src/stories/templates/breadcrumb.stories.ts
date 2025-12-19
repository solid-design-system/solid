import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Breadcrumb',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3783-5107&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * Example of sd-breacrumb working in sd-navigation-item:
 */
export const BreadcrumbWithHeaderNavigation = {
  name: 'Breadcrumb with Header Navigation',
  render: () => {
    return html`
      <style>
        #anchor--templates-breadcrumb--breadcrumb-with-header-navigation .innerZoomElementWrapper {
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
                  <sd-navigation-item slot="trigger" class="font-bold"> Competencies </sd-navigation-item>

                  <ul class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                    <li>
                      <div class="px-4 py-3">
                        <span class="font-bold">Sustainability</span>
                      </div>

                      <ul>
                        <li>
                          <sd-navigation-item vertical href="javascript:void(0)"> Engagement </sd-navigation-item>
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
                        <span class="font-bold">About Union Investment</span>
                      </sd-navigation-item>
                    </li>
                  </ul>
                </sd-dropdown>
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
                <sd-navigation-item vertical chevron divider href="javascript:void(0)" current>
                  Competencies
                </sd-navigation-item>
                <div data-submenu class="absolute top-0 right-0 w-full translate-x-full">
                  <div>
                    <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Competencies</p>
                    <ul>
                      <li>
                        <sd-navigation-item vertical>
                          <span> Sustainability </span>
                          <sd-navigation-item slot="children" vertical indented href="javascript:void(0)">
                            Engagement
                          </sd-navigation-item>
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
                    <p class="sd-headline sd-headline--size-lg mx-4 py-3 !text-primary">Investing</p>
                    <ul>
                      <li>
                        <sd-navigation-item vertical divider href="javascript:void(0)">
                          <span> About Union Investment </span>
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

      <main class="flex flex-col gap-6 px-8">
        <div id="breadcrumb-competencies">
          <sd-breadcrumb class="mt-8" label="Breadcrumb navigation">
            <sd-breadcrumb-item
              role="listitem"
              href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
            >
              Competencies
            </sd-breadcrumb-item>
            <sd-breadcrumb-item
              role="listitem"
              href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
            >
              Sustainability
            </sd-breadcrumb-item>
            <sd-breadcrumb-item role="listitem" href="" current=""> Engagement </sd-breadcrumb-item>
          </sd-breadcrumb>

          <div>
            <h4 class="sd-headline sd-headline--4xl mb-8 mt-8">Engagement</h4>
            <p class="sd-leadtext">
              As an internationally active shareholder, Union Investment attended a total of 1,756 annual general
              meetings in 33 countries last year.
            </p>
          </div>
        </div>
        <div id="breadcrumb-about-us">
          <sd-breadcrumb class="mt-8" label="Breadcrumb navigation">
            <sd-breadcrumb-item
              role="listitem"
              href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
            >
              About Us
            </sd-breadcrumb-item>
            <sd-breadcrumb-item role="listitem" href="" current=""> About Union Investment </sd-breadcrumb-item>
          </sd-breadcrumb>

          <div>
            <h1 class="sd-headline mt-8 mb-8">
              Union Investment – The active asset manager for institutional investors
            </h1>
            <p class="sd-leadtext mb-16">
              We are the active German asset manager for tailor-made investment solutions in almost all asset classes
              and regions. Our commitment to transparency and deep understanding of our clients' specific needs have
              always distinguished us as forward-looking, collaborative and beneficial investment experts.
            </p>
          </div>
        </div>
      </main>

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

        sd-dropdown[open] sd-navigation-item[slot='trigger'] {
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
      <script type="module">
        const breadcrumbCompetencies = document.getElementById('breadcrumb-competencies');
        const breadcrumbAboutUs = document.getElementById('breadcrumb-about-us');

        const showBreadcrumb = type => {
          breadcrumbCompetencies.style.display = type === 'competencies' ? 'block' : 'none';
          breadcrumbAboutUs.style.display = type === 'about-us' ? 'block' : 'none';

          const headerTriggers = Array.from(document.querySelectorAll('sd-navigation-item[slot="trigger"]'));
          headerTriggers.forEach(item => item.removeAttribute('current'));
          const target = headerTriggers.find(item =>
            item.textContent.trim().includes(type === 'competencies' ? 'Competencies' : 'About Us')
          );

          if (target) {
            target.setAttribute('current', '');
          }
        };

        // Desktop triggers
        document.querySelectorAll('sd-navigation-item[slot="trigger"]').forEach(item => {
          const title = item.shadowRoot.querySelector('[part="content"]').innerText.trim();
          item.addEventListener('click', () => {
            if (title.includes('Competencies')) {
              showBreadcrumb('competencies');
            } else if (title.includes('About Us')) {
              showBreadcrumb('about-us');
            }
          });
        });

        // Mobile drawer triggers
        document.querySelectorAll('sd-navigation-item[vertical]').forEach(item => {
          item.addEventListener('click', () => {
            const text = item.textContent.trim();
            if (text.includes('Engagement') || text.includes('Sustainability')) {
              showBreadcrumb('competencies');
            } else if (text.includes('Union Investment')) {
              showBreadcrumb('about-us');
            }
          });
        });

        // Initialize default
        showBreadcrumb('competencies');
      </script>
    `;
  }
};
