import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-header');
const { generateTemplate } = storybookTemplate('sd-header');
const { overrideArgs } = storybookHelpers('sd-header');

const LOGO_UI = 'https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg';
const LOGO_FINANZ = 'https://cdn.dam.union-investment.de/original/454453_logo-finanzagenda-desktop.svg';

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
          .logo-svg svg {
            height: 32px;
          }
          /* LG styles */
          @media (min-width: 1024px) {
            .logo-svg svg {
              height: 56px;
            }
          }

          /* MD styles */
          @media (max-width: 1023px) and (min-width: 768px) {
            .logo-svg svg {
              height: 48px;
            }
            .top-right {
              display: flex;
              gap: 48px;
            }
          }

          /* SM styles */
          @media (max-width: 767px) {
            .logo-svg svg {
              height: 32px;
            }
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
          }
          .top-left {
            display: flex;
            flex-shrink: 1;
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
    return html`<div style="height: 100px;">
      <style>
        .bottom {
          display: none;
        }
        .top-right {
          display: flex;
        }

        @media (min-width: 1024px) {
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
              <sd-include class="logo-svg" src=${LOGO_UI}></sd-include>
            </div>
            <div class="top-right">
              <sd-navigation-item>
                <sd-icon name="system/menu" library="global-resources" class="text-xl"></sd-icon>
              </sd-navigation-item>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <sd-navigation-item>Über Uns</sd-navigation-item><sd-navigation-item>Märkte</sd-navigation-item
              ><sd-navigation-item>Presseservice</sd-navigation-item
              ><sd-navigation-item>Nachhaltigkeit</sd-navigation-item><sd-navigation-item>Karriere</sd-navigation-item>
            </div>
            <div class="bottom-right">
              <sd-navigation-item>
                <sd-icon name="system/website" library="global-resources" class="text-xl"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/magnifying-glass" library="global-resources" class="text-xl"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/profile" library="global-resources" class="text-xl"></sd-icon>Mein Depot
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/lock-locked" library="global-resources" class="text-xl"></sd-icon>Meine Bewerbung
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
export const LargeViewportSample = {
  parameters: {
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html`<div style="height: 100px;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `
          <div class="top">
            <div class="top-left">
              <sd-include class="logo-svg" src=${LOGO_UI}></sd-include>
            </div>
            <div class="top-right">
              <sd-include class="logo-svg" src=${LOGO_FINANZ}></sd-include>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <sd-navigation-item>Ausgangspunkt</sd-navigation-item><sd-navigation-item>Standpunkt</sd-navigation-item
              ><sd-navigation-item>Auf den Punkt</sd-navigation-item><sd-navigation-item>Treffpunkt</sd-navigation-item>
            </div>
            <div class="bottom-right">
              <sd-navigation-item>
                <sd-icon name="system/website" library="global-resources" class="text-xl"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/magnifying-glass" library="global-resources" class="text-xl"></sd-icon>
              </sd-navigation-item>
            </div>
          </div>
    `
          }
        ]
      })}
    </div>`;
  }
};

/* Sample Header md - variant B */
export const MediumViewportSample = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html`<div style="height: 100px;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `
          <div class="top">
            <div class="top-left">
              <sd-include class="logo-svg" src=${LOGO_UI}></sd-include>
            </div>
            <div style="display:flex; align-items:end; gap:48px;">
              <sd-include class="logo-svg" src=${LOGO_FINANZ}></sd-include>
              <sd-navigation-item>
                <sd-icon name="system/menu" library="global-resources" class="text-xl"></sd-icon>
              </sd-navigation-item>
            </div>
          </div>
        </sd-header>
      </div>
    `
          }
        ]
      })}
    </div>`;
  }
};

/* Sample Header sm - variant A */
export const SmallViewportSample = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html`<div style="height: 100px;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `
        <div class="top">
          <div class="top-left">
            <sd-include class="logo-svg" src=${LOGO_UI}></sd-include>
          </div>
          <div style="display:flex;">
            <sd-navigation-item>
              <sd-icon name="system/menu" library="global-resources" class="text-xl"></sd-icon>
            </sd-navigation-item>
          </div>
        </div>
    `
          }
        ]
      })}
    </div>`;
  }
};
