import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * List of meta information like file size, date or whatever needed.
 */

export default {
  title: 'CSS-Components/sd-meta-information-01',
  args: {
    // boolean for "modifier" arg
    inverted: false,
    size: 'lg',
    color: 'default',
    pipe: false,
    highlight: false
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
    size: {
      name: 'size',
      control: 'radio',
      options: ['lg', 'sm'],
      description:
        "The display's size. Small can be used as an alternative in tight spaces. <br><code>'lg'</code> &nbsp; <code>'sm'</code>"
    },
    color: {
      name: 'color',
      control: 'radio',
      options: ['default', 'additional'],
      description: "The color of the meta information. <br><code>'default'</code> &nbsp; <code>'additional'</code>"
    },
    pipe: {
      name: 'pipe',
      control: 'boolean',
      description: 'Adds a pipe between the meta information and the date. <br><code>boolean</code>'
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
    'sd-meta-information': true,
    'sd-meta-information--inverted': args.inverted,
    'sd-meta-information--highlight': args.highlight,

    'sd-meta-information--size-sm': args.metaInformation === 'sm',
    'sd-meta-information--size-lg': args.metaInformation === 'lg',

    'sd-meta-information--color-default': args.color === 'default',
    'sd-meta-information--color-additional': args.color === 'additional',

    'sd-meta-information--pipe': args.pipe
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
    return html`<div class=${classMap(getClasses({ ...args, metaInformation: `${args.size}` }))}>
      ${args.highlight ? html`Lorem <mark>Ipsum</mark>` : 'Lorem Ipsum'}
    </div>`;
  }
};

export const SizesAndInverted = {
  name: 'Sizes x Inverted',
  parameters: { controls: { exclude: ['size', 'inverted'] } },
  args: {},
  render: (args: { size: string }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, metaInformation: 'lg' }))}>text-lg</div>
      <div class=${classMap(getClasses({ ...args, metaInformation: 'sm' }))}>text-sm</div>
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

export const SizesAndColor = {
  name: 'Sizes x Color',
  parameters: { controls: { exclude: ['size', 'inverted'] } },
  args: {},
  render: (args: { size: string }) => {
    return html`
      <div class=${classMap(getClasses({ ...args, metaInformation: 'lg' }))}>text-lg</div>
      <div class=${classMap(getClasses({ ...args, metaInformation: 'sm' }))}>text-sm</div>
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
    return html`
      <div class=${classMap(getClasses({ ...args, metaInformation: 'lg', highlight: true }))}>
        Icon left lorem ipsum <mark>dolor</mark> sit amet
      </div>
      <div class=${classMap(getClasses({ ...args, metaInformation: 'sm', highlight: true }))}>
        Icon left lorem ipsum <mark>dolor</mark> sit amet
      </div>
    `;
  }
};

export const Pipe = {
  // args: {
  //   slot: 'Lorem ipsum'
  // },
  render: (args: { size: string; pipe: boolean }) => {
    return html`<div class=${classMap(getClasses({ ...args, metaInformation: `${args.size}`, pipe: true }))}>
      Lorem Ipsum
    </div>`;
  }
};
