import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * Leadtext is used for text that should be highlighted and a focal point of the page.
 */

export default {
  title: 'CSS-Components/sd-leadtext',
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
      options: ['xl', 'lg'],
      description: "The leadtext's size.<br><code>'xl'</code> &nbsp; <code>'lg'</code>"
    }
  }
};

const getClasses = args => {
  return {
    'sd-leadtext': true,
    'sd-leadtext--inverted': args.inverted,

    'sd-leadtext--size-lg': args.leadtext === 'lg',
    'sd-leadtext--size-xl': args.leadtext === 'xl'
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
    return html`<div class=${classMap(getClasses({ ...args, leadtext: `${args.size}` }))}>${args.slot}</div>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'slot', 'inverted'] } },
  args: {},
  render: (args: { size: string }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, leadtext: 'xl' }))}>text-4xl</div>
      <div class=${classMap(getClasses({ ...args, leadtext: 'lg' }))}>text-3xl</div>
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
