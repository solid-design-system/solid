import '../solid-components';
import { html } from 'lit-html';

/**
 * Example of different variants of the headline with a mark.
 *
 * `Green accent color`: minium font size of 18.67px.
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Headline with Mark',
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
