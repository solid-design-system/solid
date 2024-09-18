import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Tag',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3274-20467&t=ilrs806pHHSfnwKM-4'
    }
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
          <sd-tag size="lg">
            <div class="h-4 w-4 bg-risk-veryhigh border-primary-800 border-[1px]"></div>
            Tag
          </sd-tag>
        </div>

        <div class="px-8 py-4">
          <sd-tag size="sm">
            <div class="h-3 w-3 bg-risk-veryhigh border-primary-800 border-[1px]"></div>
            Tag
          </sd-tag>
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
          <sd-tag selected>
            <div class="h-4 w-4 bg-risk-veryhigh border-white border-[1px]"></div>
            Tag
          </sd-tag>
        </div>

        <div class="px-8 py-4">
          <sd-tag selected size="sm">
            <div class="h-3 w-3 bg-risk-veryhigh border-white border-[1px]"></div>
            Tag
          </sd-tag>
        </div>
      </div> `
};
