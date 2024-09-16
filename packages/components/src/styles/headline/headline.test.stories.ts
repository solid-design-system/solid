import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-headline');
const { overrideArgs } = storybookHelpers('sd-headline');
const { generateTemplate } = storybookTemplate('sd-headline');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Headlines are vital for displaying content hierarchy and to improve accessibility. <br>
 * A headline can be additionally accompanied by an icon. The icon can be displayed on the left side or inline.
 * <br>
 * <b>Sizes</b><br>
 * <li>4xl is the default size.</li>
 * <li>3xl, xl, lg and base can be used to change the visual size of the HTML element.</li>
 * <li>On smaller screens (eg: mobile), the default size is 3xl. Additionally, the 3xl property behaves as if it were 2xl.</li>
 *
 */

export default {
  title: 'Styles/sd-headline/Screenshots: sd-headline',
  tags: ['!autodocs'],
  component: 'sd-headline',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/1Dc7fiQU12U6f7SFgsHjQE/Headline?type=design&node-id=0-1&mode=design&t=lkfrp1PXc280seHQ-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Nisi eu excepteur anim esse' }),
  argTypes,
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          text-align: left !important;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Default: This shows sd-headline in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<h4 class="%CLASSES%">%SLOT%</h4>' },
      args
    });
  }
};

/**
 * Use the `inverted` class to make a headline with inverted colors.
 */

export const Inverted = {
  name: 'Inverted',
  parameters: { controls: { exclude: ['sd-headline--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-headline--inverted', values: [false, true] }]
      },
      constants: { type: 'attribute', name: 'sd-headline--inverted', value: true },
      options: {
        templateContent: '<h4 class="%CLASSES%">%SLOT%</h4>',
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    });
  }
};

/**
 * The `inline` class can be used to maintain inline positioning when used together with an Icon or other components.
 */

export const Inline = {
  name: 'Inline',
  parameters: { controls: { exclude: ['sd-headline--inline'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-headline--inline', values: [true, false] }]
      },
      constants: {
        type: 'slot',
        name: 'default',
        value: `<sd-icon name="content/picture" library="global-resources"></sd-icon>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</span>`
      },
      options: {
        templateContent: '<h4 class="%CLASSES%">%SLOT%</h4>'
      },
      args
    });
  }
};

/**
 * The headline with all possible combinations of 'size' and 'inverted,' both with and without an Icon.
 */

export const SizeXInverted = {
  name: 'Size x Inverted',
  parameters: {
    controls: {
      exclude: [
        'default',
        'sd-headline--size-3xl',
        'sd-headline--size-xl',
        'sd-headline--size-lg',
        'sd-headline--size-base'
      ]
    }
  },
  render: (args: any) => {
    return html`${[
      {
        title: 'Without an sd-icon',
        constant: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.`
      },
      {
        title: 'With an sd-icon',
        constant: `<sd-icon name="content/picture" library="global-resources"></sd-icon>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.`
      }
    ].map(headline =>
      generateTemplate({
        axis: {
          x: [{ type: 'attribute', name: 'sd-headline--inverted', values: [false, true] }],
          y: [
            {
              type: 'attribute',
              name: 'sd-headline--size',
              values: [
                'default',
                'sd-headline--size-3xl',
                'sd-headline--size-xl',
                'sd-headline--size-lg',
                'sd-headline--size-base'
              ]
            }
          ]
        },
        constants: {
          type: 'slot',
          name: 'default',
          value: headline.constant
        },
        options: {
          templateContent: '<h4 class="%CLASSES%">%SLOT%</h4>',
          templateBackgrounds: { alternate: 'x', colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))'] },
          title: headline.title
        },
        args
      })
    )}`;
  }
};

/**
 * The sd-headline paired with sd-mark styles with all the possible combinations of `size`, `inverted` and the presence of `icons`. Use the `inline` style to maintain smooth wrapping.
 */

export const Samples = {
  name: 'Samples',
  parameters: {
    controls: {
      exclude: ['sd-headline--size-3xl', 'sd-headline--size-xl', 'sd-headline--size-lg', 'sd-headline--size-base']
    }
  },
  render: (args: any) => {
    return html`
      <style>
        .story-wrapper {
          display: inline-block;
          max-width: 1200px;
        }
        .headline {
          padding: 16px;
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          width: 100%;
          box-sizing: border-box;
        }
        div:not(:first-of-type).headline {
          margin-top: 72px;
        }
      </style>
      <div class="story-wrapper">
        <div class="headline">sd-headline with sd-mark (no icon)</div>
        ${generateTemplate({
          axis: {
            x: [{ type: 'attribute', name: 'sd-headline--inverted', values: [false, true] }],
            y: [
              {
                type: 'attribute',
                name: 'sd-headline--size',
                values: [
                  'default',
                  'sd-headline--size-3xl',
                  'sd-headline--size-xl',
                  'sd-headline--size-lg',
                  'sd-headline--size-base'
                ]
              }
            ]
          },
          constants: [
            {
              type: 'slot',
              name: 'default',
              value: `Lorem ipsum <mark class="sd-mark">sic semper</mark>`
            },
            {
              type: 'attribute',
              name: 'sd-headline--inline',
              value: true
            }
          ],
          options: {
            templateBackgrounds: {
              alternate: 'x',
              colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))']
            },
            templateContent: '<h4 class="%CLASSES%">%SLOT%</h4>'
          },
          args
        })}
        <div class="headline">sd-headline with sd-mark (icon included)</div>
        ${generateTemplate({
          axis: {
            x: [{ type: 'attribute', name: 'sd-headline--inverted', values: [false, true] }],
            y: [
              {
                type: 'attribute',
                name: 'sd-headline--size',
                values: [
                  'default',
                  'sd-headline--size-3xl',
                  'sd-headline--size-xl',
                  'sd-headline--size-lg',
                  'sd-headline--size-base'
                ]
              }
            ]
          },
          constants: [
            {
              type: 'slot',
              name: 'default',
              value: `<sd-icon name="content/picture" library="global-resources"></sd-icon>
              Lorem ipsum <mark class="sd-mark">sic semper</mark>`
            },
            {
              type: 'attribute',
              name: 'sd-headline--inline',
              value: true
            }
          ],
          options: {
            templateBackgrounds: {
              alternate: 'x',
              colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))']
            },
            templateContent: '<h4 class="%CLASSES%">%SLOT%</h4>'
          },
          args
        })}
      </div>
    `;
  }
};

export const Combination = generateScreenshotStory([Default, Inverted, Inline, SizeXInverted, Samples]);
