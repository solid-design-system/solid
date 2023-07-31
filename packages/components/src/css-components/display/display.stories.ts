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
  title: 'CSS-Components/sd-display',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: 'xl'
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
      description:
        "The display's size. <br><code>'4xl'</code> &nbsp; <code>'3xl'</code> &nbsp; <code>'xl'</code> &nbsp; <code>'lg'</code>"
    }
  }
};

const getClasses = args => {
  return {
    'sd-display': true,
    'sd-display--inverted': args.inverted,

    'sd-display--size-xl': args.display === 'xl',
    'sd-display--size-3xl': args.display === '3xl',
    'sd-display--size-4xl': args.display === '4xl'
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
    return html`<div class=${classMap(getClasses({ ...args, display: `${args.size}` }))}>${args.slot}</div>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'slot', 'inverted'] } },
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
