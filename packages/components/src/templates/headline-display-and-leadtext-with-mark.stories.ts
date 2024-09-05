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
      <div class="flex flex-col">
        <h4 class="sd-headline sd-headline--inline">
          Lorem ipsum
          <mark class="sd-mark">sic semper</mark>
        </h4>
        <h4 class="sd-headline sd-headline--inline sd-headline--size-xl mt-4">
          Lorem ipsum
          <mark class="sd-mark">sic semper</mark>
        </h4>
        <h4 class="sd-headline sd-headline--inline sd-headline--size-base mt-4">
          Lorem ipsum
          <mark class="sd-mark">sic semper</mark>
        </h4>
      </div>
      <div class="bg-primary p-4 flex flex-col">
        <h4 class="sd-headline sd-headline--inline sd-headline--inverted">
          Lorem ipsum
          <mark class="sd-mark">sic semper</mark>
        </h4>
        <h4 class="sd-headline sd-headline--inline sd-headline--inverted sd-headline--size-xl mt-4">
          Lorem ipsum
          <mark class="sd-mark">sic semper</mark>
        </h4>
        <h4 class="sd-headline sd-headline--inline sd-headline--inverted sd-headline--size-base mt-4">
          Lorem ipsum
          <mark class="sd-mark">sic semper</mark>
        </h4>
      </div>
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
