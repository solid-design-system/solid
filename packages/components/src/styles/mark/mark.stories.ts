import '../../solid-components';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit-html';

/**
 * The green accent color can be used to highlight parts of the text.
 */

export default {
  title: 'Styles/sd-mark',
  args: {
    // boolean for "modifier" arg
  },
  argTypes: {}
};

const getClasses = (args: any) => {
  return {
    'sd-mark': true
  };
};

/**
 * This is the the typography section for all kind of styles and sizes of the Headline.
 */
export const Default = {
  render: (args: any) => {
    return html`<mark class=${classMap(getClasses({ ...args }))}>Lorem Ipsum</mark>`;
  }
};
