import '../../solid';
import { html, nothing } from 'lit';
import { spreadProps } from '@open-wc/lit-helpers';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';


export const Default = (args) => {
  const slotNames = ['slot', 'prefix', 'suffix'];
  const props = Object.fromEntries(
    Object.entries(args).filter(([key, value]) => !slotNames.includes(key)));

  return html`
  <sd-button
    ${spreadProps(props)}
  >
    ${slotNames.map((key) =>
    args[key] ? unsafeHTML(args[key]) : nothing)
    }
  </sd-button>

`;
};

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
};
