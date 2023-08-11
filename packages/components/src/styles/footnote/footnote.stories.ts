import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * A footnote contains additional information/sources related to the content and usually
 * appears at the bottom of a page or below the content it refers to.
 */

export default {
  title: 'Styles/sd-footnote',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: 'lg',
    number: false
  },
  argTypes: {
    inverted: {
      name: 'inverted',
      control: 'boolean',
      description: 'Inverts the headline. <br><code>boolean</code>'
    },
    // slot: {
    //   name: 'slot',
    //   control: 'text',
    //   description:
    //     'this argType is only to show the slot in storybook. You will not need it in your code. <br><code>string</code>'
    // },
    number: {
      name: 'number',
      control: 'boolean',
      description:
        "The class component allows to display content references  as a numbered or unnumbered list. Numbers usually start with '1'."
    }
  }
};

const getClasses = args => {
  return {
    'sd-footnote': true,
    'sd-footnote--inverted': args.inverted,
    'sd-footnote--number': args.number
  };
};

/**
 * This is the the typography section for all kind of styles and sizes of the Headline.
 */
export const Default = {
  // args: {
  //   slot: 'Lorem ipsum'
  // },
  render: (args: { number: boolean; highlight: string }) => {
    return html`<div class=${classMap(getClasses({ ...args, footnote: `${args.number}` }))}>
      ${args.highlight
        ? html`Lorem <mark>ipsum</mark> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`
        : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
    </div>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'inverted'] } },
  args: {},
  render: (args: { size: string }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, footnote: 'lg' }))}>text-lg</div>
      <div class=${classMap(getClasses({ ...args, footnote: 'sm' }))}>text-sm</div>
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
