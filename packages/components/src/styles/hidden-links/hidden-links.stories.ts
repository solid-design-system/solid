import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-hidden-links');
const { overrideArgs } = storybookHelpers('sd-hidden-links');
const { generateTemplate } = storybookTemplate('sd-hidden-links');

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

/**
 * Used to show links only for keyboard users.
 *
 * **Related components**:
 * - [Dropdown with Navigation Items](?path=/docs/components-navigation-item--docs)
 */

export default {
  title: 'Styles/sd-hidden-links',
  component: 'sd-hidden-links',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    chromatic: {
      disableSnapshot: true
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: html`<sd-button href="#">Skip to content</sd-button>`
  }),
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div class="relative bg-white w-full h-[256px] p-8 flex">
          <div class="%CLASSES%">%SLOT%</div>
          <p class="self-center">Tab into this area to show a single button.</p>
        </div>`
      },
      args
    });
  }
};

/**
 * Stack multiple `sd-hidden-links` by adding multiple of them to the same parent.
 *
 * **Hint:**
 * Recommended for 2 or more links.
 */
export const StackLinks = {
  render: () =>
    html`<div class="relative bg-white w-full h-[256px] p-8 flex">
      <div class="sd-hidden-links"><sd-button href="#">Skip to Search</sd-button></div>
      <div class="sd-hidden-links"><sd-button href="#">Skip to Content</sd-button></div>
      <p class="self-center">Tab through this area to see buttons one after another.</p>
    </div>`
};

/**
 * Use the `&--multiple` class to show mutiple `sd-navigation-item` elements.
 *
 * **Hint:**
 * Recommended for 2 or more links.
 */
export const MultipleLinks = {
  render: () =>
    html`<div class="relative bg-white w-full h-[256px] p-8 flex">
      <div class="sd-hidden-links sd-hidden-links--multiple">
        <sd-navigation-item href="#">Search</sd-navigation-item>
        <sd-navigation-item href="#">Content</sd-navigation-item>
        <sd-navigation-item href="#">Footer</sd-navigation-item>
      </div>
      <p class="self-center">Tab through this area to see multiple links.</p>
    </div>`
};

/**
 * Use the `--sd-hidden-links-title` CSS variable to set a title for multiple links.
 *
 * German and English are set by default in regard of the document's or elements `lang` attribute.
 */
export const TitleForMultipleLinks = {
  render: () =>
    html`<div class="relative bg-white w-full h-[256px] p-8 flex" lang="de">
        <div class="sd-hidden-links sd-hidden-links--multiple">
          <sd-navigation-item href="#">Versteckter Link 1</sd-navigation-item>
          <sd-navigation-item href="#">Versteckter Link 2</sd-navigation-item>
          <sd-navigation-item href="#">Versteckter Link 3</sd-navigation-item>
        </div>
        <p class="self-center">Hier wird eine deutsche Überschrift erscheinen.</p>
      </div>
      <div class="relative bg-white w-full h-[256px] p-8 flex">
        <div class="sd-hidden-links sd-hidden-links--multiple" lang="en">
          <sd-navigation-item href="#">Hidden Link 1</sd-navigation-item>
          <sd-navigation-item href="#">Hidden Link 2</sd-navigation-item>
          <sd-navigation-item href="#">Hidden Link 3</sd-navigation-item>
        </div>
        <p class="self-center">Here you will see an English title.</p>
      </div>
      <div class="relative bg-white w-full h-[256px] p-8 flex">
        <style>
          #hidden-link-with-custom-title {
            --sd-hidden-links-title: 'Jump very fast to';
          }
        </style>
        <div id="hidden-link-with-custom-title" class="sd-hidden-links sd-hidden-links--multiple">
          <sd-navigation-item href="#">Hidden Link 1</sd-navigation-item>
          <sd-navigation-item href="#">Hidden Link 2</sd-navigation-item>
          <sd-navigation-item href="#">Hidden Link 3</sd-navigation-item>
        </div>
        <p class="self-center">Here you will see a custom title.</p>
      </div>`
};

/**
 * The style appends its position relative to the position of the parent container and adds some default padding. It can be used on any element, and the padding is easily overridden via CSS.
 */
export const SurroundingContent = {
  render: () => {
    return html` <div style="height: 100px; --sd-header-inner-max-width: 1456px;">
      <style>
        .sb-main-padded.sb-show-main {
          padding: 0;
        }
        :root {
          --sd-header-padding: 8px 16px;
        }

        sd-header {
          height: 64px;
          max-height: 140px;
        }

        @media (min-width: 376px) {
          :root {
            --sd-header-padding: 24px;
          }
          sd-header {
            height: 96px;
          }
        }

        @media (min-width: 1025px) {
          :root {
            --sd-header-padding: 24px 32px;
          }
          sd-header {
            height: 140px;
          }
        }

        @media (min-width: 1440px) {
          :root {
            --sd-header-padding: 24px 48px;
          }
        }
      </style>
      <div class="z-20 sd-hidden-links">
        <sd-button href="#">Skip to content</sd-button>
      </div>
      <sd-header class="z-10" fixed>
        <div class="flex justify-between items-center">
          <!-- top-left-area start !-->
          <a class="flex flex-shrink" href="#">
            <img class="h-8 md:h-12 lg:h-[56px]" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
          </a>
        </div>
      </sd-header>
    </div>`;
  }
};

/**
 * Use the `&--debug` class to always show the links for debugging purposes.
 */
export const Debug = {
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () =>
    html`<div class="relative bg-white w-full h-[256px] p-8">
      <div class="sd-hidden-links sd-hidden-links--multiple sd-hidden-links--debug">
        <sd-navigation-item href="#">Search</sd-navigation-item>
        <sd-navigation-item href="#">Content</sd-navigation-item>
        <sd-navigation-item href="#">Footer</sd-navigation-item>
      </div>
      <p>These links are always visible.</p>
    </div>`
};
