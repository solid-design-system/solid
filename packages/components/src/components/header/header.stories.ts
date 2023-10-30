import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-header');
const { overrideArgs } = storybookHelpers('sd-header');
const { generateTemplate } = storybookTemplate('sd-header');

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
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-header in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Fixed = {
  parameters: {
    controls: { exclude: 'fixed' }
  },
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'attribute',
          name: 'fixed',
          value: 'true'
        }
      ],
      args
    });
  }
};

/**
 * Here are some examples of sd-header.
 */
export const Samples = {
  parameters: {
    controls: {
      exclude: [
        'fixed',
        'auto-spacing',
        'sd-header-inner-width',
        'sd-header-padding-x',
        'sd-header-inner-max-width',
        'sd-header-padding-top',
        'sd-header-padding-bottom',
        'sd-header-height'
      ]
    }
  },
  render: () => {
    return html`
      <style>
        .header-sample {
          padding: 16px;
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          width: 100%;
          box-sizing: border-box;
        }
        svg {
          max-height: 52px;
        }
        /* Mobile styles (default) */
        .test {
          --sd-header-inner-width: calc(100vw - 32px);
          --sd-header-padding-x: 16px;
          /* ... other properties ... */
        }

        /* Tablet styles */
        @media (min-width: 768px) {
          .test {
            --sd-header-inner-width: calc(100vw - 48px);
            --sd-header-padding-x: 24px;
            /* ... other properties ... */
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .test {
            --sd-header-inner-width: calc(100vw - 64px);
            --sd-header-padding-x: 32px;
            /* ... other properties ... */
          }
        }
      </style>
      <div class="story-wrapper">
        <div class="header-sample">Responsive Header</div>
        <sd-header class='test'
          ><sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include
          ><sd-navigation-item>Über Uns</sd-navigation-item><sd-navigation-item>Märkte</sd-navigation-item
          ><sd-navigation-item>Presseservice</sd-navigation-item><sd-navigation-item>Nachhaltigkeit</sd-navigation-item
          ><sd-navigation-item>Karriere</sd-navigation-item></sd-header
        >
        <div class="header-sample">Header / LG</div>
        <sd-header class='test'
          ><sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include
          ><sd-navigation-item>Über Uns</sd-navigation-item><sd-navigation-item>Märkte</sd-navigation-item
          ><sd-navigation-item>Presseservice</sd-navigation-item><sd-navigation-item>Nachhaltigkeit</sd-navigation-item
          ><sd-navigation-item>Karriere</sd-navigation-item></sd-header
        >
        <div class="header-sample">Header / MD</div>
        <sd-header class='test'
          ><sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include
          ><sd-navigation-item>Über Uns</sd-navigation-item><sd-navigation-item>Märkte</sd-navigation-item
          ><sd-navigation-item>Presseservice</sd-navigation-item><sd-navigation-item>Nachhaltigkeit</sd-navigation-item
          ><sd-navigation-item>Karriere</sd-navigation-item></sd-header
        >
        <div class="header-sample">Header / SM</div>
        <sd-header class='test'
          ><sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include
          ><sd-navigation-item>Über Uns</sd-navigation-item><sd-navigation-item>Märkte</sd-navigation-item
          ><sd-navigation-item>Presseservice</sd-navigation-item><sd-navigation-item>Nachhaltigkeit</sd-navigation-item
          ><sd-navigation-item>Karriere</sd-navigation-item></sd-header
        >
      </div>
    `;
  }
};
