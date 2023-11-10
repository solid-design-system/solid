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
          .header-sample {
            padding: 16px;
            background: #e0e0e0;
            text-align: left;
            font-size: 14px;
            font-weight: bold;
            width: 100%;
            box-sizing: border-box;
          }
          .logo-svg {
            height: 32px;
          }
          .top,
          .bottom {
            display: flex;
            justify-content: space-between;
          }
          .top {
            align-items: center;
          }
          .bottom {
            align-items: end;
            padding-top: 12px;
          }
          .top-left {
            display: flex;
            flex-shrink: 1;
          }
          .bottom-left {
            margin-left: -16px;
          }
          .bottom-end {
            margin-right: -16px;
          }
          .nav-icon {
            margin: -1.5px -4px;
          }
          sd-header {
            max-height: 140px;
          }
          /* LG styles */
          @media (min-width: 1025px) {
            .logo-svg {
              height: 56px;
            }
          }

          /* MD styles */
          @media (max-width: 1024px) and (min-width: 768px) {
            .logo-svg {
              height: 48px;
            }
            .top-right {
              display: flex;
              gap: 48px;
            }
            sd-header {
              height: 96px;
            }
          }

          /* SM styles */
          @media (max-width: 375px) {
            .logo-svg {
              height: 32px;
            }
            sd-header {
              height: 64px;
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
export const ResponsiveSample = {
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
          --sd-header-padding-top: 24px;
          --sd-header-padding-x: 16px; /* Default padding for mobile view */
        }

        @media (min-width: 375px) {
          :root {
            --sd-header-padding-x: 8px; /* Padding for screens from 375 to 1024 */
          }
        }

        @media (min-width: 1024px) {
          :root {
            --sd-header-padding-x: 24px; /* Padding for screens from 1024 to 1280 */
          }
        }

        @media (min-width: 1280px) {
          :root {
            --sd-header-padding-x: 32px; /* Padding for screens from 1280 to 1440 */
          }
        }

        @media (min-width: 1440px) {
          :root {
            --sd-header-padding-x: 48px; /* Padding for screens from 1440 and larger */
          }
        }

        .bottom {
          display: none;
        }
        .top-right {
          display: flex;
        }

        @media (min-width: 1280px) {
          .bottom {
            display: flex;
          }
          .top-right {
            display: none;
          }
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
            value: `<div class="top">
            <div class="top-left">
            <img class='logo-svg' src='./placeholders/logo-ui-lg.svg' alt='Logo'/>
            </div>
            <div class="top-right">
              <sd-navigation-item>
                <sd-icon name="system/menu" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <sd-navigation-item><b>Über Uns</b></sd-navigation-item><sd-navigation-item><b>Märkte</b></sd-navigation-item
              ><sd-navigation-item><b>Presseservice</b></sd-navigation-item
              ><sd-navigation-item><b>Nachhaltigkeit</b></sd-navigation-item><sd-navigation-item><b>Karriere</b></sd-navigation-item>
            </div>
            <div class="bottom-end">
              <sd-navigation-item>
                <sd-icon name="system/website" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/magnifying-glass" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/profile" library="global-resources" class="text-xl mr-2"></sd-icon>Mein Depot
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/lock-locked" library="global-resources" class="text-xl mr-2"></sd-icon>Meine Bewerbung
              </sd-navigation-item>
            </div>
          </div>`
          }
        ]
      })}
    </div>`;
  }
};

/* Sample Header lg – variant B */
export const MediumViewportSample = {
  ...ResponsiveSample,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
    controls: {
      exclude: ['default']
    }
  }
};

/* Sample Header sm - variant A */
export const SmallViewportSample = {
  ...ResponsiveSample,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    controls: {
      exclude: ['default']
    }
  }
};
