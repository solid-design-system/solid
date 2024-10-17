import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../../components/scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-hidden-links');
const { overrideArgs } = storybookHelpers('sd-hidden-links');
const { generateTemplate } = storybookTemplate('sd-hidden-links');
const { generateScreenshotStory } = storybookUtilities;

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

/**
 * Can be used to show links only for keyboard users.
 *
 * - Per default the hidden links are optimized for a single <sd-button>.
 */

export default {
  title: 'Styles/sd-hidden-links/Screenshots: sd-hidden-links',
  component: 'sd-hidden-links',
  tags: ['!autodocs'],
  argTypes,
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' })
};

/**
 * Per default the hidden links are optimized for a single `<sd-button>`.
 */
export const Default = {
  name: 'Default',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: html`<sd-button href="#">Skip to content</sd-button>`
  }),
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div class="relative bg-white w-full h-[256px] p-8">
          <div class="%CLASSES%">%SLOT%</div>
          <p>Tab into this area to show a single button.</p>
        </div>`
      },
      args
    });
  }
};

/**
 * The style appends its position relative to the position of the parent container and adds some default padding. It can be used on any element, and the padding is easily overridden via CSS.
 */
export const SurroundingContent = {
  name: 'Surrounding Content',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: html`<sd-button href="#">Skip to content</sd-button>`
  }),
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div style="height: 100px; --sd-header-inner-max-width: 1456px;">
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
          <div class="%CLASSES%">%SLOT%</div>
          <sd-header class="z-10" fixed>
            <div class="flex justify-between items-center">
              <!-- top-left-area start !-->
              <a class="flex flex-shrink" href="#">
                <img class="h-8 md:h-12 lg:h-[56px]" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
              </a>
            </div>
          </sd-header>
        </div>`
      },
      args
    });
  }
};

/**
 * "Stack" multiple `sd-hidden-links` by adding multiple of them to the same parent. (Recommended for 2 links)
 */
export const StackLinks = {
  name: 'Stack Links',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div class="relative bg-white w-full h-[256px] p-8">
          <div class="sd-hidden-links"><sd-button href="#">Skip to content</sd-button></div>
          <div class="sd-hidden-links"><sd-button href="#">Skip to content</sd-button></div>
          <p>Tab into this area to show a single button.</p>
        </div>`
      },
      args
    });
  }
};

/**
 * Use the `sd-hidden-links--multiple` modifier to show mutiple `sd-navigation-item` elements. (Recommended for >2 links)
 */
export const MultipleLinks = {
  name: 'Multiple Links',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div class="relative bg-white w-full h-[256px] p-8">
      <div class="sd-hidden-links sd-hidden-links--multiple">
        <sd-navigation-item href="#">Search</sd-navigation-item>
        <sd-navigation-item href="#">Content</sd-navigation-item>
        <sd-navigation-item href="#">Footer</sd-navigation-item>
      </div>
      <p>Tab through this area to see multiple links.</p>
    </div>
  </div>`
      },
      args
    });
  }
};

/**
 * Use the `--sd-hidden-links-title` CSS variable to set a title for multiple links. German and English are set by default in regard of the document's or elements `lang` attribute.
 */
export const TitleForMultipleLinks = {
  name: 'Title for Multiple Links',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div class="relative bg-white w-full h-[256px] p-8" lang="de">
            <div class="sd-hidden-links sd-hidden-links--multiple">
              <sd-navigation-item href="#">Suche</sd-navigation-item>
              <sd-navigation-item href="#">Inhalt</sd-navigation-item>
              <sd-navigation-item href="#">Fußbereich</sd-navigation-item>
            </div>
            <p>Hier wird eine deutsche Überschrift erscheinen.</p>
          </div>
          <div class="relative bg-white w-full h-[256px] p-8">
            <div class="sd-hidden-links sd-hidden-links--multiple" lang="en">
              <sd-navigation-item href="#">Search</sd-navigation-item>
              <sd-navigation-item href="#">Content</sd-navigation-item>
              <sd-navigation-item href="#">Footer</sd-navigation-item>
            </div>
            <p>Here you will see an English title.</p>
          </div>
          <div class="relative bg-white w-full h-[256px] p-8">
            <style>
              #hidden-link-with-custom-title {
                --sd-hidden-links-title: 'Jump very fast to';
              }
            </style>
            <div id="hidden-link-with-custom-title" class="sd-hidden-links sd-hidden-links--multiple">
              <sd-navigation-item href="#">Search</sd-navigation-item>
              <sd-navigation-item href="#">Content</sd-navigation-item>
              <sd-navigation-item href="#">Footer</sd-navigation-item>
            </div>
            <p>Here you will see a custom title.</p>
          </div>`
      },
      args
    });
  }
};

/**
 * Use the `sd-hidden-links--debug` modifier to always show the links for debugging purposes.
 */
export const Debug = {
  name: 'Debug',
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div class="relative bg-white w-full h-[256px] p-8">
          <div class="sd-hidden-links sd-hidden-links--multiple sd-hidden-links--debug">
            <sd-navigation-item href="#">Search</sd-navigation-item>
            <sd-navigation-item href="#">Content</sd-navigation-item>
            <sd-navigation-item href="#">Footer</sd-navigation-item>
          </div>
          <p>These links are always visible.</p>
        </div>`
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, StackLinks, MultipleLinks, TitleForMultipleLinks, Debug]);
