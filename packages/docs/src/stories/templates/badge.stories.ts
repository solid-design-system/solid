import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'skip-a11y-test'],
  title: 'Templates/Badge',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3783-5107&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * Examples of sd-button working with sd-badge:
 */
export const ButtonWithBadge = {
  render: () => html`
    <div class="flex flex-col">
      <section class="flex p-8 gap-10 items-center">
        <sd-button>
          <sd-badge>10</sd-badge>
          Requests
        </sd-button>
        <sd-button variant="secondary">
          <sd-icon name="system/rss" slot="icon-left"></sd-icon>
          <sd-badge>+99</sd-badge>
          News
        </sd-button>
        <sd-button variant="secondary" size="md">
          <sd-icon name="system/phone"></sd-icon>
          <sd-badge variant="error" size="md">
            4
            <span class="sr-only">Calls</span>
          </sd-badge>
        </sd-button>
        <sd-button variant="tertiary" size="md">
          <sd-icon name="system/bell"></sd-icon>
          <sd-badge class="mt-2.5 mr-2.5" variant="success" size="md">
            5
            <span class="sr-only">Notifications</span>
          </sd-badge>
        </sd-button>
        <sd-button variant="tertiary" size="md">
          <sd-icon name="system/user"></sd-icon>
          <sd-badge class="mt-[0.75rem] mr-[0.75rem]" size="sm"> User Notifications Available </sd-badge>
        </sd-button>
      </section>
      <section class="flex p-8 gap-10 bg-primary items-center">
        <sd-button inverted>
          <sd-badge inverted>10</sd-badge>
          Requests
        </sd-button>
        <sd-button inverted variant="secondary" size="md">
          <sd-icon name="system/rss" slot="icon-left"></sd-icon>
          <sd-badge inverted>+99</sd-badge>
          News
        </sd-button>
        <sd-button inverted variant="secondary" size="md">
          <sd-icon name="system/phone"></sd-icon>
          <sd-badge inverted variant="error" size="md">
            4
            <span class="sr-only">Calls</span>
          </sd-badge>
        </sd-button>
        <sd-button inverted variant="tertiary" size="md">
          <sd-icon name="system/bell"></sd-icon>
          <sd-badge inverted class="mt-2.5 mr-2.5" variant="success" size="md">
            5
            <span class="sr-only">Notifications</span>
          </sd-badge>
        </sd-button>
        <sd-button inverted variant="tertiary" size="md">
          <sd-icon name="system/user"></sd-icon>
          <sd-badge inverted class="mt-[0.75rem] mr-[0.75rem]" size="sm"> User Notifications Available </sd-badge>
        </sd-button>
      </section>
    </div>
  `
};

/**
 * Example of sd-navigation-item working with sd-badge:
 */
export const NavigationItemWithBadge = {
  name: 'Navigation Item with Badge',
  render: () =>
    html` <style>
        #anchor--templates-badge--navigation-item-with-badge .innerZoomElementWrapper {
          height: 100px;
        }
      </style>
      <sd-header class="max-w-[650px]" fixed>
        <div class="flex justify-between items-center">
          <a class="flex flex-shrink" href="#">
            <img class="h-8" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
          </a>
          <div class="flex">
            <sd-navigation-item class="relative">
              <sd-icon name="system/bell" class="text-xl"></sd-icon>
              <sd-badge class="absolute top-1 -right-5" size="md">
                +99
                <span class="sr-only">Notifications</span>
              </sd-badge>
            </sd-navigation-item>
            <sd-navigation-item>
              <sd-icon name="system/menu" class="text-xl"></sd-icon>
            </sd-navigation-item>
          </div>
        </div>
      </sd-header>`
};
