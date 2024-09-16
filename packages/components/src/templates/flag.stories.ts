import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Flag',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3274-14195&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * ### Background Options
 *
 * Recommended combinations:
 * - `neutral-200` on white background
 * - `neutral-300` on neutral-100 background
 * - `neutral-500` on primary-100 background
 * - `white` on primary and image backgrounds
 */
export const BackgroundOptions = {
  name: 'Background Options',
  render: () =>
    html`<div class="grid grid-cols-2 grid-rows-3">
      <div class="bg-white pt-[32px] flex justify-end border border-neutral-200">
        <div class="sd-flag sd-flag--neutral-200">neutral-200</div>
      </div>
      <div class="bg-neutral-100 pt-[32px] flex justify-end">
        <div class=" sd-flag sd-flag--neutral-300">neutral-300</div>
      </div>
      <div class="bg-primary-100 pt-[32px] flex justify-end">
        <div class="sd-flag sd-flag--neutral-500">neutral-500</div>
      </div>
      <div class="bg-primary pt-[32px] flex justify-end">
        <div class="sd-flag sd-flag--white">white</div>
      </div>
      <div slot="media" class="relative">
        <img
          class="aspect-video object-cover"
          src="./placeholders/images/coffeeshop.jpg"
          alt="A group of people sitting in a coffee shop"
        />
        <div class="absolute top-[32px] right-0 sd-flag sd-flag--white">white</div>
      </div>
    </div>`
};
