import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * A paragraph is used to display blocks of text.
 * It uses the base font size and can contain bold and/or link styles.
 */

export default {
  title: 'Styles/sd-paragraph',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: 'lg',
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
      options: ['xl', 'lg'],
      description: "The paragraph's size.<br><code>'lg'</code> &nbsp; <code>'sm'</code>"
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
    'sd-paragraph': true,
    'sd-paragraph--inverted': args.inverted,
    'sd-mark': args.highlight,

    'sd-paragraph--size-lg': args.paragraph === 'lg',
    'sd-paragraph--size-xl': args.paragraph === 'xl'
  };
};

/**
 * This is the the typography section for all kind of styles and sizes of the Headline.
 */
export const Default = {
  render: (args: { size: string; highlight: string }) => {
    // need to remove highlight from args to avoid adding the class twice
    const { highlight, ...restOfArgs } = args;

    return html`<div class=${classMap(getClasses({ ...restOfArgs, leadtext: `${args.size}` }))}>
      ${args.highlight
        ? html`Lorem <mark class=${classMap(getClasses({ highlight: `${args.highlight}` }))}></div>Ipsum</mark>`
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
      <div class=${classMap(getClasses({ ...args, paragraph: 'lg' }))}>text-lg</div>
      <div class=${classMap(getClasses({ ...args, paragraph: 'sm' }))}>text-sm</div>
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
      <div class=${classMap(getClasses({ ...restOfArgs, display: 'lg', highlight: true }))}>
        Icon left lorem ipsum <mark class=${classMap(getClasses({ highlight: `${args.highlight}` }))}>dolor</mark> sit
        amet
      </div>
      <div class=${classMap(getClasses({ ...restOfArgs, display: 'sm', highlight: true }))}>
        Icon left lorem ipsum <mark class=${classMap(getClasses({ highlight: `${args.highlight}` }))}>dolor</mark> sit
        amet
      </div>
    `;
  }
};
