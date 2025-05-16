import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3502-218572&t=JCsisVFNkWSlhSSN-4'
    }
  },
  title: 'Templates/Header'
};
/** **Accessibility hint:** aria-expanded and aria-controls must be set for accessibility purpose. */
export const SampleA = {
  name: 'Header Sample A-01',
  render: () => html`
    <style>
      #anchor--templates-header--sample-a .innerZoomElementWrapper,
      #anchor--templates-header--sample-a-02 .innerZoomElementWrapper,
      #anchor--templates-header--sample-b .innerZoomElementWrapper {
        height: 900px;
      }
    </style>
    <sd-header fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="h-8 md:h-12 lg:h-14" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex lg:hidden">
          <sd-navigation-item id="open-menu-sample-a">
            <sd-icon name="system/menu" label="Open navigation" class="text-xl -my-[1.5px] -mx-1"></sd-icon>
          </sd-navigation-item>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item href="javascript:void(0)" class="font-bold">About Us</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Markets</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Sustainability</sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)" class="font-bold">Career</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div class="-mr-4 flex items-center">
          <sd-navigation-item href="javascript:void(0)">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/website" label="News" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item onclick="alert('This could open a search bar')">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/magnifying-glass" label="Search" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <div class="flex items-center gap-2">
              <sd-icon name="system/user" class="text-xl"></sd-icon><span>Portfolio</span>
            </div>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <div class="flex items-center gap-2">
              <sd-icon name="system/lock-locked" class="text-xl"></sd-icon><span>Application</span>
            </div>
          </sd-navigation-item>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
    <sd-drawer id="sample-a-drawer" placement="end">
      <nav class="-m-4">
        <sd-navigation-item vertical current href="javascript:void(0)">
          <b>Home</b>
        </sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">About Us</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Markets</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Sustainability</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Career</sd-navigation-item>
      </nav>
      <nav aria-label="footer" slot="footer" class="bg-neutral-100 -m-4">
        <sd-navigation-item vertical class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/user" class="h-6 w-6 mr-2"></sd-icon>
          Portfolio
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/lock-locked" class="h-6 w-6 mr-2"></sd-icon>
          Application
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/website" class="h-6 w-6 mr-2"></sd-icon>
          Our further appearances
        </sd-navigation-item>
      </nav>
    </sd-drawer>
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

export const SampleA02 = {
  name: 'Header Sample A-02',
  render: () => html`
    <sd-header fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="h-8 md:h-12 lg:h-14" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex lg:hidden">
          <sd-navigation-item id="open-menu-sample-a-02">
            <sd-icon name="system/menu" label="Open navigation" class="text-xl  -my-[1.5px] -mx-1"></sd-icon>
          </sd-navigation-item>
        </div>
        <div class="-mr-4 lg:flex hidden items-center">
          <sd-navigation-item href="javascript:void(0)">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/filter-empty" label="Search filter" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/globe" label="Language" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/website" label="News" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item onclick="alert('This could open a search bar')">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/magnifying-glass" label="Search" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item href="javascript:void(0)">
            <div class="flex items-center gap-2">
              <sd-icon name="system/user" class="text-xl"></sd-icon><span>Login</span>
            </div>
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
    <sd-drawer id="sample-a02-drawer" placement="end">
      <nav class="-m-4">
        <sd-navigation-item vertical current href="javascript:void(0)">
          <b>Home</b>
        </sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Competencies</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Capital Markets</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Our products</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Reporting</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">About us</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Personal area</sd-navigation-item>
      </nav>
      <nav aria-label="footer" slot="footer" class="bg-neutral-100 -m-4">
        <sd-navigation-item vertical class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/user" class="h-6 w-6 mr-2"></sd-icon>
          Log in
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/globe" class="h-6 w-6 mr-2"></sd-icon>
          Language
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center" href="javascript:void(0)">
          <sd-icon name="system/website" class="h-6 w-6 mr-2"></sd-icon>
          Our further appearances
        </sd-navigation-item>
      </nav>
    </sd-drawer>
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
    <sd-header fixed>
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
              <sd-icon name="system/menu" label="Open navigation" class="text-xl  -my-[1.5px] -mx-1"></sd-icon>
            </sd-navigation-item>
          </div>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item class="font-bold" href="javascript:void(0)">Starting point</sd-navigation-item>
          <sd-navigation-item class="font-bold" href="javascript:void(0)">Point of view</sd-navigation-item>
          <sd-navigation-item class="font-bold" href="javascript:void(0)">To the point</sd-navigation-item>
          <sd-navigation-item class="font-bold" href="javascript:void(0)">Meeting point</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div class="flex items-center">
          <sd-navigation-item href="javascript:void(0)">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/website" label="News" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item onclick="alert('This could open a search bar')">
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/magnifying-glass" label="Search" class="text-xl absolute -ml-1"></sd-icon>
            </div>
          </sd-navigation-item>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
    <sd-drawer id="sample-b-drawer" placement="end">
      <nav class="-m-4">
        <sd-navigation-item vertical current href="javascript:void(0)">
          <b>Home</b>
        </sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Starting point</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Point of view</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">To the point</sd-navigation-item>
        <sd-navigation-item vertical chevron divider href="javascript:void(0)">Meeting point</sd-navigation-item>
      </nav>
      <nav aria-label="footer" slot="footer" class="bg-neutral-100 -m-4">
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
