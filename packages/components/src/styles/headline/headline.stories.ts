import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-headline');
const { overrideArgs } = storybookHelpers('sd-headline');
const { generateTemplate } = storybookTemplate('sd-headline');

/**
 * Headlines are vital for displaying content hierarchy and to improve accessibility. <br>
 * A headline can be additionally accompanied by an icon. The icon can be displayed on the left side or inline. <br>
 *
 */

export default {
  title: 'Styles/sd-headline',
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
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};

/**
 * Use the `inverted` class to make a headline with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['sd-headline--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-headline--inverted', values: [false, true] }]
      },
      constants: { type: 'attribute', name: 'sd-headline--inverted', value: true },
      options: { templateBackgrounds: { alternate: 'y', colors: ['transparent', '#00358E'] } },
      args
    });
  }
};

/**
 * The headline with an (optional) Icon. The `inline` class can be used to specify positioning.
 */

export const Icon = {
  parameters: { controls: { exclude: ['sd-headline--inline'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-headline--inline', values: [true, false] }]
      },
      constants: {
        type: 'slot',
        name: 'default',
        value: ` 
        <sd-icon name="content/picture" library="global-resources"></sd-icon>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.`
      },
      args
    });
  }
};

/**
 * The headline with all possible combinations of 'size' and 'inverted,' both with and without an Icon.
 */

export const IconXSize = {
  name: 'Size x Inverted',
  parameters: {
    controls: {
      exclude: [
        'sd-headline--size-4xl',
        'sd-headline--size-3xl',
        'sd-headline--size-xl',
        'sd-headline--size-lg',
        'sd-headline--size-base'
      ]
    }
  },
  render: (args: any) => {
    return html` ${[
      {
        title: 'without an Icon',
        constant: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.`
      },
      {
        title: 'with an Icon',
        constant: `
        <sd-icon name="content/picture" library="global-resources"></sd-icon>
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
                'sd-headline--size-4xl',
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
          value: `${headline.constant}`
        },
        options: {
          templateBackgrounds: { alternate: 'x', colors: ['tranparent', '#00358E'] },
          title: `${headline.title}`
        },
        args
      })
    )}`;
  }
};

/**
 * The headline paired with the mark styles with all the possible combinations of `size`, `inverted` and the presence of `icons`. It is recommended to use the `inline` style to maintain smooth wrapping.
  */

export const HeadlineWithMark = {
  name: 'Headline with mark',
  parameters: {
    controls: {
      exclude: [
        'sd-headline--size-4xl',
        'sd-headline--size-3xl',
        'sd-headline--size-xl',
        'sd-headline--size-lg',
        'sd-headline--size-base'
      ]
    }
  },
  render: (args: any) => {
    return html` ${[
      {
        title: 'without an Icon',
        constant: `
        Lorem ipsum <mark class="sd-mark">sic semper</mark>`
      },
      {
        title: 'with an Icon',
        constant: `
        <sd-icon name="content/picture" library="global-resources"></sd-icon>
        Lorem ipsum <mark class="sd-mark">sic semper</mark>`
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
                'sd-headline--size-4xl',
                'sd-headline--size-3xl',
                'sd-headline--size-xl',
                'sd-headline--size-lg',
                'sd-headline--size-base'
              ]
            }
          ]
        },
        constants: [{
          type: 'slot',
          name: 'default',
          value: `${headline.constant}`
        },
        {
          type: 'attribute',
          name: 'sd-headline--inline',
          value: true
        }],
        options: {
          templateBackgrounds: { alternate: 'x', colors: ['tranparent', '#00358E'] },
          title: `${headline.title}`
        },
        args
      })
    )}`;
  }

};