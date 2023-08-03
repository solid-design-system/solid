import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * A headline can be additionally accompanied by an icon.
 * The icon can be displayed on the left side or inline.
 *
 * Headlines are vital for displaying content hierarchy and to improve accessibility.
 */

export default {
  title: 'CSS-Components/sd-headline',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: 'base',
    highlight: false
  },
  argTypes: {
    inverted: {
      type: 'attribute',
      name: 'inverted',
      control: 'boolean',
      description: 'Inverts the headline. <br><code>boolean</code>'
    },
    // slot: {
    //   type: 'slot',
    //   name: 'slot',
    //   control: 'text',
    //   description:
    //     'this argType is only to show the slot in storybook. You will not need it in your code. <br><code>string</code>'
    // },
    size: {
      type: 'attribute',
      name: 'size',
      control: 'radio',
      options: ['4xl', '3xl', 'xl', 'lg', 'base'],
      description:
        "Headline sizes are decoupled from semantic H-tagging which is set in the content page. <br><code>'4xl'</code> &nbsp; <code>'3xl'</code> &nbsp; <code>'xl'</code> &nbsp; <code>'lg'</code> &nbsp; <code>'base'</code>"
    },
    highlight: {
      name: 'highlight',
      control: 'boolean',
      description: 'The green accent color can be used to highlight parts of the text. <br><code>boolean</code>'
    }
  }
};

const getClasses = args => {
  return {
    'sd-headline': true,
    'sd-headline--inverted': args.inverted,
    'sd-headline--highlight': args.highlight,

    'sd-headline--size-base': args.headline === 'base',
    'sd-headline--size-lg': args.headline === 'lg',
    'sd-headline--size-xl': args.headline === 'xl',
    'sd-headline--size-3xl': args.headline === '3xl',
    'sd-headline--size-4xl': args.headline === '4xl'
  };
};

/**
 * This is the the typography section for all kind of styles and sizes of the Headline.
 */
export const Default = {
  // args: {
  //   slot: 'Lorem ipsum'
  // },
  render: (args: { size: string; highlight: boolean }) => {
    return html`<h1 class=${classMap(getClasses({ ...args, headline: `${args.size}` }))}>
      ${args.highlight ? html`Lorem <mark>Ipsum</mark>` : 'Lorem Ipsum'}
    </h1>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'inverted'] } },
  args: {},
  render: (args: { size: string }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, headline: '4xl' }))}>text-4xl</div>
      <div class=${classMap(getClasses({ ...args, headline: '3xl' }))}>text-3xl</div>
      <div class=${classMap(getClasses({ ...args, headline: 'xl' }))}>text-xl</div>
      <div class=${classMap(getClasses({ ...args, headline: 'lg' }))}>text-lg</div>
      <div class=${classMap(getClasses({ ...args, headline: 'base' }))}>text-base</div>
    `;
    // axis: {
    //   x: { type: 'attribute', name: 'size' },
    //   y: { type: 'attribute', name: 'inverted', values: [false, true] }
    // },
    // options: {
    //   templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
    // }
  }
};

/**
 * This is the the typography section for all kind of styles and sizes of the Headline.
 */
export const Highlight = {
  name: 'Highlight x Inverted',
  parameters: { controls: { exclude: ['size', 'highlight', 'inverted'] } },
  render: (args: { size: string; highlight: boolean }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, headline: '4xl', highlight: true }))}>
        Icon left lorem ipsum <mark>dolor</mark> sit amet
      </div>
      <div class=${classMap(getClasses({ ...args, headline: '3xl', highlight: true }))}>
        Icon left lorem ipsum <mark>dolor</mark> sit amet
      </div>
      <div class=${classMap(getClasses({ ...args, headline: 'xl', highlight: true }))}>
        Icon left lorem ipsum <mark>dolor</mark> sit amet
      </div>
      <div class=${classMap(getClasses({ ...args, headline: 'lg', highlight: true }))}>
        Icon left lorem ipsum <mark>dolor</mark> sit amet
      </div>
      <div class=${classMap(getClasses({ ...args, headline: 'base', highlight: true }))}>
        Icon left lorem ipsum <mark>dolor</mark> sit amet
      </div>
    `;
  }
};
