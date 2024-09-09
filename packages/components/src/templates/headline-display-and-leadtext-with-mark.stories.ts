import '../solid-components';
import { html } from 'lit-html';

/**
 * **Hint**:
 * Green accent color from mark have a minimum font size of 18.67px.
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Headline, Display and Leadtext with Mark',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

export const HeadlineWithMark = {
  render: () =>
    html`<div class="flex flex-col gap-8">
      <h4 class="sd-headline">
        <sd-icon name="content/skyscrapers" color="primary" aria-hidden="true" library="default"></sd-icon>
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
      <h4 class="sd-headline">
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
      <h4 class="sd-headline sd-headline--size-3xl">
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
      <h4 class="sd-headline sd-headline--size-xl">
        <sd-icon name="content/skyscrapers" color="primary" aria-hidden="true" library="default"></sd-icon>
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
    </div>`
};

export const DisplayWithMark = {
  render: () => html`
    <div class="flex flex-col gap-8">
      <p class="sd-display">Lorem <mark class="sd-mark">Ipsum</mark></p>
      <div class="bg-primary p-4">
        <p class="sd-display sd-display--inverted">Lorem <mark class="sd-mark">Ipsum</mark></p>
      </div>
    </div>
  `
};

export const LeadtextWithMark = {
  render: () => html`
    <div class="flex flex-col gap-8">
      <p class="sd-leadtext">Lorem <mark class="sd-mark">Ipsum</mark></p>
      <div class="bg-primary p-4">
        <p class="sd-leadtext sd-leadtext--inverted">Lorem <mark class="sd-mark">Ipsum</mark></p>
      </div>
    </div>
  `
};
