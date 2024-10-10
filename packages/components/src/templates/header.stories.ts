import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
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

export const SampleA = {
  name: 'Header Sample A-01',
  render: () => html`
    <style>
      #anchor--templates-header--sample-a .innerZoomElementWrapper,
      #anchor--templates-header--sample-a-02 .innerZoomElementWrapper,
      #anchor--templates-header--sample-b .innerZoomElementWrapper {
        height: 300px;
      }
    </style>
    <sd-header fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="h-8 md:h-12 lg:h-[56px]" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex lg:hidden">
          <sd-navigation-item>
            <sd-icon name="system/menu" class="text-xl  -my-[1.5px] -mx-[4px]"></sd-icon>
          </sd-navigation-item>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item class="font-bold">About Us</sd-navigation-item>
          <sd-navigation-item class="font-bold">Markets</sd-navigation-item>
          <sd-navigation-item class="font-bold">Sustainability</sd-navigation-item>
          <sd-navigation-item class="font-bold">Career</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div class="-mr-4 flex items-center">
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon
                title="Unsere weiteren Auftritte"
                name="system/website"
                class="text-xl absolute -ml-[4px]"
              ></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon title="Suche" name="system/magnifying-glass" class="text-xl absolute -ml-[4px]"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="flex items-center gap-2">
              <sd-icon name="system/user" class="text-xl"></sd-icon><span>Portfolio</span>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="flex items-center gap-2">
              <sd-icon name="system/lock-locked" class="text-xl"></sd-icon><span>Application</span>
            </div>
          </sd-navigation-item>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
  `
};

export const SampleA02 = {
  name: 'Header Sample A-02',
  render: () => html`
    <sd-header fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="h-8 md:h-12 lg:h-[56px]" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="-mr-4 lg:flex hidden items-center">
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/filter-empty" class="text-xl absolute -ml-[4px]"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/globe" class="text-xl absolute -ml-[4px]"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/website" class="text-xl absolute -ml-[4px]"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon name="system/magnifying-glass" class="text-xl absolute -ml-[4px]"></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
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
          <sd-navigation-item class="font-bold">Competencies</sd-navigation-item>
          <sd-navigation-item class="font-bold">Capital Market</sd-navigation-item>
          <sd-navigation-item class="font-bold">Our products</sd-navigation-item>
          <sd-navigation-item class="font-bold">Reporting</sd-navigation-item>
          <sd-navigation-item class="font-bold">About us</sd-navigation-item>
          <sd-navigation-item class="font-bold">Personal area</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
  `
};

export const SampleB = {
  name: 'Header Sample B',
  render: () => html`
    <sd-header fixed>
      <div class="flex justify-between items-center">
        <!-- top-left-area start !-->
        <a class="flex flex-shrink" href="#">
          <img class="sm:h-12 lg:h-[56px] hidden sm:flex" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
          <img class="h-8 sm:hidden" src="images/logo-unioninvestment-sm.svg" alt="Logo" />
        </a>
        <!-- top-left-area end !-->
        <!-- top-right-area start !-->
        <div class="flex gap-2 sm:gap-12 items-center">
          <div class="flex">
            <div
              class="h-12 w-[120px] md:w-40 lg:h-[56px] lg:w-[200px] flex bg-neutral-100 items-center justify-center"
            >
              Partnerlogo
            </div>
          </div>
          <div class="flex lg:hidden">
            <sd-navigation-item>
              <sd-icon name="system/menu" class="text-xl  -my-[1.5px] -mx-[4px]"></sd-icon>
            </sd-navigation-item>
          </div>
        </div>
        <!-- top-right-area end !-->
      </div>
      <div class="hidden lg:flex items-end pt-3 justify-between">
        <!-- bottom-left-area start !-->
        <div class="-ml-4">
          <sd-navigation-item class="font-bold">Starting point</sd-navigation-item>
          <sd-navigation-item class="font-bold">Point of view</sd-navigation-item>
          <sd-navigation-item class="font-bold">To the point</sd-navigation-item>
          <sd-navigation-item class="font-bold">Meeting point</sd-navigation-item>
        </div>
        <!-- bottom-left-area end !-->
        <!-- bottom-right-area start !-->
        <div class="flex items-center">
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon
                title="Unsere weiteren Auftritte"
                name="system/website"
                class="text-xl absolute -ml-[4px]"
              ></sd-icon>
            </div>
          </sd-navigation-item>
          <sd-navigation-item>
            <div class="w-4 h-4 flex items-center">
              <sd-icon title="Suche" name="system/magnifying-glass" class="text-xl absolute -ml-[4px]"></sd-icon>
            </div>
          </sd-navigation-item>
          <!-- bottom-right-area end !-->
        </div>
      </div>
    </sd-header>
  `
};
