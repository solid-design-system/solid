import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-header');
const { generateTemplate } = storybookTemplate('sd-header');
const { overrideArgs } = storybookHelpers('sd-header');

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
  parameters: { ...parameters, docs: { story: { inline: false, height: '200px' } } },
  decorators: [
    withActions,
    (story: any) =>
      html`<style>
          body.sb-show-main.sb-main-padded {
            padding: 0;
          }
          .innerZoomElementWrapper > * {
            border: none !important;
          }
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
    return html` ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'fixed',
            value: 'true'
          }
        ],
        args
      })}
      <div class="bg-neutral-100 p-8" style="margin-top: var(--sd-header-calculated-height)">
        This element automatically sets its position depending on the height of the header.
      </div>`;
  }
};

/* Sample Header responsive – variant A - 01 */
export const SampleA = {
  parameters: {
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html`<div style="height: 100px; --sd-header-inner-max-width: 1456px;">
      <style>
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
            --sd-header-padding: 24px 32px 0 32px;
          }
          sd-header {
            height: 140px;
          }
        }

        @media (min-width: 1280px) {
          sd-navigation-item::part(content) {
            display: flex;
            align-items: center;
          }
        }

        @media (min-width: 1440px) {
          :root {
            --sd-header-padding: 24px 48px 0 48px;
          }
        }
      </style>
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'attribute',
            name: 'fixed',
            value: 'true'
          },
          {
            type: 'slot',
            name: 'default',
            value: `<div class="flex justify-between items-center">
            <!-- top-left-area start !-->
            <a class="flex flex-shrink" href='#'>
              <img class='h-8 md:h-12 lg:h-[56px]' src='images/logo-unioninvestment-lg.svg' alt='Logo'/>
            </a>
            <!-- top-left-area end !-->
            <!-- top-right-area start !-->
            <div class="flex lg:hidden">
              <sd-navigation-item>
                <sd-icon name="system/menu" library="global-resources" class="text-xl  -my-[1.5px] -mx-[4px]"></sd-icon>
              </sd-navigation-item>
            </div>
            <!-- top-right-area end !-->
          </div>
          <div class="hidden lg:flex items-end pt-3 justify-between">
            <!-- bottom-left-area start !-->
            <div class="-ml-4">
              <sd-navigation-item><b>Über Uns</b></sd-navigation-item><sd-navigation-item><b>Märkte</b></sd-navigation-item
              ><sd-navigation-item><b>Presseservice</b></sd-navigation-item
              ><sd-navigation-item><b>Nachhaltigkeit</b></sd-navigation-item><sd-navigation-item><b>Karriere</b></sd-navigation-item>
            </div>
            <!-- bottom-left-area end !-->
            <!-- bottom-right-area start !-->
            <div class="-mr-4 flex items-center">
              <sd-navigation-item>
                <div class="w-4 h-4 flex items-center"><sd-icon title="Unsere weiteren Auftritte" name="system/website" library="global-resources" class="text-xl absolute -ml-[4px]"></sd-icon></div>
              </sd-navigation-item>
              <sd-navigation-item>
                <div class="w-4 h-4 flex items-center"><sd-icon title="Suche" name="system/magnifying-glass" library="global-resources" class="text-xl absolute -ml-[4px]"></sd-icon></div>
              </sd-navigation-item>
              <sd-navigation-item>
                <div class="flex items-center gap-2"><sd-icon name="system/profile" library="global-resources" class="text-xl"></sd-icon><span>Mein Depot</span></div>
              </sd-navigation-item>
              <sd-navigation-item>
                <div class="flex items-center gap-2"><sd-icon name="system/lock-locked" library="global-resources" class="text-xl"></sd-icon><span>Meine Bewerbung</span></div>
              </sd-navigation-item>
            <!-- bottom-right-area end !-->
            </div>
          </div>`
          }
        ]
      })}
    </div>`;
  }
};

/* Sample Header lg – variant A - 01 */
export const SampleAMd = {
  name: '↳ Tablet',
  ...SampleA,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
    controls: {
      exclude: ['default']
    }
  }
};

/* Sample Header sm - variant A - 01 */
export const SampleASm = {
  name: '↳ Small mobile',
  ...SampleA,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    controls: {
      exclude: ['default']
    }
  }
};

/* Sample Header responsive – variant B */
export const SampleB = {
  parameters: {
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html`<div style="height: 100px; --sd-header-inner-max-width: 1456px;">
      <style>
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
            --sd-header-padding: 24px 32px 0 32px;
          }
          sd-header {
            height: 140px;
          }
        }

        @media (min-width: 1280px) {
          sd-navigation-item::part(content) {
            display: flex;
            align-items: center;
          }
        }

        @media (min-width: 1440px) {
          :root {
            --sd-header-padding: 24px 48px 0 48px;
          }
        }
      </style>
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'attribute',
            name: 'fixed',
            value: 'true'
          },
          {
            type: 'slot',
            name: 'default',
            value: `<div class="flex justify-between items-center">
            <!-- top-left-area start !-->
            <a class="flex flex-shrink" href='#'>
              <img class='sm:h-12 lg:h-[56px] hidden sm:flex' src='/images/logo-unioninvestment-lg.svg' alt='Logo'/>
              <img class='h-8 sm:hidden' src='images/logo-unioninvestment-sm.svg' alt='Logo'/>
            </a>
            <!-- top-left-area end !-->
            <!-- top-right-area start !-->
            <div class="flex gap-2 sm:gap-12 items-center">
              <div class="flex">
                <img class='md:h-12 lg:h-[56px] hidden md:flex' src='images/logo-finanzagenda-lg.svg' alt='Logo'/>
                <img class='h-12 lg:h-[56px] md:hidden' src='images/logo-finanzagenda-sm.svg' alt='Logo'/>
              </div>
              <div class="flex lg:hidden">
                <sd-navigation-item>
                  <sd-icon name="system/menu" library="global-resources" class="text-xl  -my-[1.5px] -mx-[4px]"></sd-icon>
                </sd-navigation-item>
              </div>
            </div>
            <!-- top-right-area end !-->
          </div>
          <div class="hidden lg:flex items-end pt-3 justify-between">
            <!-- bottom-left-area start !-->
            <div class="-ml-4">
              <sd-navigation-item><b>Über Uns</b></sd-navigation-item><sd-navigation-item><b>Märkte</b></sd-navigation-item
              ><sd-navigation-item><b>Presseservice</b></sd-navigation-item
              ><sd-navigation-item><b>Nachhaltigkeit</b></sd-navigation-item><sd-navigation-item><b>Karriere</b></sd-navigation-item>
            </div>
            <!-- bottom-left-area end !-->
            <!-- bottom-right-area start !-->
            <div class="flex items-center">
              <sd-navigation-item>
                <div class="w-4 h-4 flex items-center"><sd-icon title="Unsere weiteren Auftritte" name="system/website" library="global-resources" class="text-xl absolute -ml-[4px]"></sd-icon></div>
              </sd-navigation-item>
              <sd-navigation-item>
                <div class="w-4 h-4 flex items-center"><sd-icon title="Suche" name="system/magnifying-glass" library="global-resources" class="text-xl absolute -ml-[4px]"></sd-icon></div>
              </sd-navigation-item>
            <!-- bottom-right-area end !-->
            </div>
          </div>`
          }
        ]
      })}
    </div>`;
  }
};

/* Sample Header lg – variant B */
export const SampleBMd = {
  name: '↳ Tablet',
  ...SampleB,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
    controls: {
      exclude: ['default']
    }
  }
};

/* Sample Header sm - variant B */
export const SmallViewportSample2 = {
  ...SampleB,
  name: '↳ Small mobile',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    controls: {
      exclude: ['default']
    }
  }
};
