import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Tags',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * - white
 * - neutral-100
 * - primary-100
 */

export const Default = {
  name: 'Background options',
  render: () =>
    html`<div class="flex gap-12">
      <div class="bg-white px-12 py-4">
        <sd-tag>Tag</sd-tag>
      </div>

      <div class="bg-neutral-100 px-12 py-4">
        <sd-tag>Tag</sd-tag>
      </div>

      <div class="bg-primary-100 px-12 py-4">
        <sd-tag>Tag</sd-tag>
      </div>
    </div>`
};

export const Slots = {
  name: 'Slot samples',
  render: () =>
    html`<div class="flex gap-12">
        <div class="bg-white px-8 py-4">
          <sd-tag>
            <div class="slot slot--text h-4">Replace this slot</div>
          </sd-tag>
        </div>

        <div class="px-8 py-4">
          <sd-tag>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          </sd-tag>
        </div>

        <div class="px-8 py-4">
          <sd-tag removable>Tag</sd-tag>
        </div>
      </div>

      <div class="flex gap-12">
        <div class="bg-white px-8 py-4">
          <sd-tag selected>
            <div class="slot slot--text h-4">Replace this slot</div>
          </sd-tag>
        </div>

        <div class="px-8 py-4">
          <sd-tag selected>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
            <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          </sd-tag>
        </div>

        <div class="px-8 py-4">
          <sd-tag selected removable>Tag</sd-tag>
        </div>
      </div> `
};
