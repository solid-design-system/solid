import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * This component is used to display a citation along with the author's name.
 * Additionally, a profile picture and a job title can be displayed.
 */

export default {
  title: 'CSS-Components/sd-quote',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: '4xl'
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
      options: ['4xl', '3xl', 'xl'],
      description: "The quote's size.<br><code>'4xl'</code> &nbsp; <code>'3xl'</code> &nbsp; <code>'xl'</code>"
    }
  }
};

const getClasses = args => {
  return {
    'sd-quote': true,
    'sd-quote--inverted': args.inverted,

    'sd-quote--size-xl': args.quote === 'xl',
    'sd-quote--size-3xl': args.quote === '3xl',
    'sd-quote--size-4xl': args.quote === '4xl'
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
    return html`<div class=${classMap(getClasses({ ...args, quote: `${args.size}` }))}>${args.slot}</div>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'slot', 'inverted'] } },
  args: {},
  render: (args: { size: string }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, quote: '4xl' }))}>text-4xl</div>
      <div class=${classMap(getClasses({ ...args, quote: '3xl' }))}>text-3xl</div>
      <div class=${classMap(getClasses({ ...args, quote: 'xl' }))}>text-xl</div>
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
