import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * Display provides larger text sizes that are not used as headlines.
 *
 * The different sizes allow for a more versatile styling of text elements.
 * Display text should not be used as substitute for headlines.
 */

export default {
  title: 'Styles/sd-display',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: 'xl',
    highlight: false
  },
  argTypes: {
    inverted: {
      name: 'inverted',
      control: 'boolean',
      description: 'Inverts the headline. <br><code>boolean</code>'
    },
    size: {
      name: 'size',
      control: 'radio',
      options: ['4xl', '3xl', 'xl'],
      description:
        "The display's size. <br><code>'4xl'</code> &nbsp; <code>'3xl'</code> &nbsp; <code>'xl'</code> &nbsp; <code>'lg'</code>"
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
    'sd-display': true,
    'sd-display--inverted': args.inverted,
    'sd-mark': args.highlight,

    'sd-display--size-xl': args.display === 'xl',
    'sd-display--size-3xl': args.display === '3xl',
    'sd-display--size-4xl': args.display === '4xl'
  };
};

/**
 * This is the the typography section for all kind of styles and sizes of the Headline.
 */
export const Default = {
  render: (args: { size: string; highlight: boolean }) => {
    // need to remove highlight from args to avoid adding the class twice
    const { highlight, ...restOfArgs } = args;

    return html`<div class=${classMap(getClasses({ ...restOfArgs, display: `${args.size}` }))}>
      ${args.highlight
        ? html`Lorem <mark class=${classMap(getClasses({ highlight: `${args.highlight}` }))}>Ipsum</mark>`
        : 'Lorem Ipsum'}
    </div>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'inverted'] } },
  args: {},
  render: (args: { size: string }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, display: '4xl' }))}>text-4xl</div>
      <div class=${classMap(getClasses({ ...args, display: '3xl' }))}>text-3xl</div>
      <div class=${classMap(getClasses({ ...args, display: 'xl' }))}>text-xl</div>
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
 * This is the the typography section for all kind of styles and sizes of the Display.
 */
export const Highlight = {
  name: 'Highlight x Inverted',
  parameters: { controls: { exclude: ['size', 'highlight', 'inverted'] } },
  render: (args: { size: string; highlight: boolean }) => {
    const { highlight, ...restOfArgs } = args;
    return html`
      <div class=${classMap(getClasses({ ...restOfArgs, display: '4xl', highlight: true }))}>
        Icon left lorem ipsum <mark class=${classMap(getClasses({ highlight: `${args.highlight}` }))}>dolor</mark> sit
        amet
      </div>
      <div class=${classMap(getClasses({ ...restOfArgs, display: '3xl', highlight: true }))}>
        Icon left lorem ipsum <mark class=${classMap(getClasses({ highlight: `${args.highlight}` }))}>dolor</mark> sit
        amet
      </div>
      <div class=${classMap(getClasses({ ...restOfArgs, display: 'xl', highlight: true }))}>
        Icon left lorem ipsum <mark class=${classMap(getClasses({ highlight: `${args.highlight}` }))}>dolor</mark> sit
        amet
      </div>
    `;
  }
};
