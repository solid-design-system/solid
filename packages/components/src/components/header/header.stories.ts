import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-header');
const { generateTemplate } = storybookTemplate('sd-header');
const { overrideArgs } = storybookHelpers('sd-header');

/**
 * Note: The width requirement for the header component results in a visual overflow in Storybook docs.
 */

export default {
  title: 'Components/sd-header',
  component: 'sd-header',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text">Default slot</div>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    withActions,
    (story: any) =>
      html` <style>
          @media (max-width: 1024px) and (min-width: 768px) {
            .top-right {
              display: flex;
              gap: 48px;
            }
          }</style
        >${story()}`
  ] as unknown
};

/**
 * Default: This shows sd-header in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div style="height: 100px;">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

export const Fixed = {
  parameters: {
    controls: { exclude: ['fixed', '--sd-header-inner-width'] }
  },
  render: (args: any) => {
    return html`<div style="height: 100px;">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'fixed',
            value: 'true'
          }
        ],
        args
      })}
    </div>`;
  }
};

/* Sample Header responsive – variant A - 01 */
export const ResponsiveSample1 = {
  parameters: {
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html`<div
      style="height: 100px; --sd-header-inner-max-width: 1456px; --sd-header-padding-top:24px; --sd-header-padding-bottom:0;"
    >
      <style>
        :root {
          --sd-header-padding: 24px 8px 0 8px;
        }

        sd-header {
          max-height: 140px;
        }

        /* SM styles */
        @media (max-width: 375px) {
          sd-header {
            height: 64px;
          }
        }
        /* SM styles */
        @media (max-width: 375px) {
          sd-header {
            height: 96px;
          }
        }

        @media (min-width: 1024px) {
          :root {
            --sd-header-padding: 24px 24px 0 24px;
          }
        }

        @media (min-width: 1280px) {
          :root {
            --sd-header-padding: 24px 32px 0 32px;
          }
        }

        @media (min-width: 1440px) {
          :root {
            --sd-header-padding: 24px 48px 0 48px;
          }
        }

        @media (min-width: 1280px) {
          sd-navigation-item::part(content) {
            display: flex;
            align-items: center;
          }
        }
      </style>
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<div class="flex justify-between items-center">
            <div class="flex flex-shrink">
            <img class='h-8 md:h-12 lg:h-[56px]' src='./placeholders/logo-ui-lg.svg' alt='Logo'/>
            </div>
            <div class="flex xl:hidden">
              <sd-navigation-item>
                <sd-icon name="system/menu" library="global-resources" class="text-xl  -my-[1.5px] -mx-[4px]"></sd-icon>
              </sd-navigation-item>
            </div>
          </div>
          <div class="hidden xl:flex items-end p-3">
            <!-- bottom-end-area start !-->
            <div class="-ml-4">
              <sd-navigation-item><b>Über Uns</b></sd-navigation-item><sd-navigation-item><b>Märkte</b></sd-navigation-item
              ><sd-navigation-item><b>Presseservice</b></sd-navigation-item
              ><sd-navigation-item><b>Nachhaltigkeit</b></sd-navigation-item><sd-navigation-item><b>Karriere</b></sd-navigation-item>
            </div>
            <!-- bottom-end-area start !-->
            <!-- bottom-end-area start !-->
            <div class="-mr-4">
              <sd-navigation-item>
                <sd-icon name="system/website" library="global-resources" class="text-xl -my-[1.5px] -mx-[4px]"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/magnifying-glass" library="global-resources" class="text-xl  -my-[1.5px] -mx-[-4px]"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/profile" library="global-resources" class="text-xl mr-2"></sd-icon>Mein Depot
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/lock-locked" library="global-resources" class="text-xl mr-2"></sd-icon>Meine Bewerbung
              </sd-navigation-item>
            <!-- bottom-end-area end !-->
            </div>
          </div>`
          }
        ]
      })}
    </div>`;
  }
};

/* Sample Header lg – variant B */
export const MediumViewportSample1 = {
  ...ResponsiveSample1,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
    controls: {
      exclude: ['default']
    }
  }
};

/* Sample Header sm - variant A */
export const SmallViewportSample1 = {
  ...ResponsiveSample1,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    controls: {
      exclude: ['default']
    }
  }
};
