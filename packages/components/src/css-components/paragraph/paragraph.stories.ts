import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * A paragraph is used to display blocks of text.
 * It uses the base font size and can contain bold and/or link styles.
 */

export default {
  title: 'CSS-Components/sd-paragraph',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: 'lg'
  },
  argTypes: {
    inverted: {
      name: 'inverted',
      control: 'boolean',
      description: 'Inverts the headline. <br><code>boolean</code>'
    },
    slot: {
      name: 'slot',
      control: 'text',
      description:
        'this argType is only to show the slot in storybook. You will not need it in your code. <br><code>string</code>'
    },
    size: {
      name: 'size',
      control: 'radio',
      options: ['xl', 'lg'],
      description: "The paragraph's size.<br><code>'lg'</code> &nbsp; <code>'sm'</code>"
    }
  }
};

const getClasses = args => {
  return {
    'sd-paragraph': true,
    'sd-paragraph--inverted': args.inverted,

    'sd-paragraph--size-lg': args.paragraph === 'lg',
    'sd-paragraph--size-xl': args.paragraph === 'xl'
  };
};

/**
 * This is the the typography section for all kind of styles and sizes of the Headline.
 */
export const Default = {
  args: {
    slot: 'Lorem ipsum'
  },
  render: (args: { size: string; slot: string }) => {
    return html`<div class=${classMap(getClasses({ ...args, paragraph: `${args.size}` }))}>${args.slot}</div>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'slot', 'inverted'] } },
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
