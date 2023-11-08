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
          .bottom-end::part(base) {
            padding-right: 0;
          }
          .nav-icon {
            margin: -1.5px -4px;
          }
          /* LG styles */
          @media (min-width: 1024px) {
            .logo-svg {
              height: 56px;
            }
          }

          /* MD styles */
          @media (max-width: 1023px) and (min-width: 768px) {
            .logo-svg {
              height: 48px;
            }
            .top-right {
              display: flex;
              gap: 48px;
            }
          }

          /* SM styles */
          @media (max-width: 767px) {
            .logo-svg {
              height: 32px;
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

/* Sample Header with Inner Width Set */
export const InnerWidth = {
  parameters: {
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html` <div
      style="height: 100px; --sd-header-padding-x:8px; --sd-header-padding-top:0; --sd-header-padding-bottom:0; --sd-header-inner-width: 1024px;"
    >
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
            <img class='logo-svg' src='./placeholders/logo-fa-lg.svg' alt='Logo'/>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <sd-navigation-item><b>Ausgangspunkt</b></sd-navigation-item><sd-navigation-item><b>Standpunkt</b></sd-navigation-item
              ><sd-navigation-item><b>Auf den Punkt</b></sd-navigation-item><sd-navigation-item><b>Treffpunkt</b></sd-navigation-item>
            </div>
            <div class="bottom-right">
              <sd-navigation-item>
                <sd-icon name="system/website" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/magnifying-glass" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
            </div>
          </div>`
          }
        ]
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
      style="height: 100px; --sd-header-padding-x:0; --sd-header-padding-top:0; --sd-header-padding-bottom:0;"
    >
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
            <img class='logo-svg' src='./placeholders/logo-ui-lg.svg' alt='Logo'/>
            </div>
            <div class="top-right">
              <sd-navigation-item>
                <sd-icon name="system/menu" library="global-resources" class="text-xl"></sd-icon>
              </sd-navigation-item>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <sd-navigation-item><b>Über Uns</b></sd-navigation-item><sd-navigation-item><b>Märkte</b></sd-navigation-item
              ><sd-navigation-item><b>Presseservice</b></sd-navigation-item
              ><sd-navigation-item><b>Nachhaltigkeit</b></sd-navigation-item><sd-navigation-item><b>Karriere</b></sd-navigation-item>
            </div>
            <div class="bottom-right">
              <sd-navigation-item>
                <sd-icon name="system/website" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/magnifying-glass" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/profile" library="global-resources" class="text-xl mr-2"></sd-icon>Mein Depot
              </sd-navigation-item>
              <sd-navigation-item class="bottom-end">
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
export const LargeViewportSample = {
  parameters: {
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => {
    return html`<div
      style="height: 100px; --sd-header-padding-x:0; --sd-header-padding-top:0; --sd-header-padding-bottom:0;"
    >
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `
          <div class="top">
            <div class="top-left">
            <img class='logo-svg' src='./placeholders/logo-ui-lg.svg' alt='Logo'/>
            </div>
            <div class="top-right">
            <img class='logo-svg' src='./placeholders/logo-fa-lg.svg' alt='Logo'/>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <sd-navigation-item><b>Ausgangspunkt</b></sd-navigation-item><sd-navigation-item><b>Standpunkt</b></sd-navigation-item
              ><sd-navigation-item><b>Auf den Punkt</b></sd-navigation-item><sd-navigation-item><b>Treffpunkt</b></sd-navigation-item>
            </div>
            <div class="bottom-right">
              <sd-navigation-item>
                <sd-icon name="system/website" library="global-resources" class="text-xl nav-icon"></sd-icon>
              </sd-navigation-item>
              <sd-navigation-item>
                <sd-icon name="system/magnifying-glass" library="global-resources" class="text-xl nav-icon"></sd-icon>
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
    return html`<div
      style="height: 100px; --sd-header-padding-x:0; --sd-header-padding-top:0; --sd-header-padding-bottom:0;"
    >
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `
          <div class="top">
            <div class="top-left">
            <img class='logo-svg' src='./placeholders/logo-ui-md.svg' alt='Logo'/>
            </div>
            <div style="display:flex; align-items:end; gap:48px;">
            <img class='logo-svg' src='./placeholders/logo-fa-lg.svg' alt='Logo'/>
              <sd-navigation-item>
                <sd-icon name="system/menu" library="global-resources" class="text-xl nav-icon"></sd-icon>
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
    return html`<div
      style="height: 100px; --sd-header-padding-x:0; --sd-header-padding-top:0; --sd-header-padding-bottom:0;"
    >
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `
        <div class="top">
          <div class="top-left">
          <img class='logo-svg' src='./placeholders/logo-ui-sm.svg' alt='Logo'/>
          </div>
          <div>
            <sd-navigation-item>
              <sd-icon name="system/menu" library="global-resources" class="text-xl nav-icon"></sd-icon>
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
