import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Chip',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3039-8274&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * ### Background Options
 *
 * Recommended combinations:
 * - `primary-200` on white background
 * - `primary-300` on primary-100 background
 * - `primary-500` on primary background
 * - `white` on image background
 */
export const BackgroundOptions = {
  render: () =>
    html` <div class="grid grid-cols-2 grid-rows-2">
      <div class="bg-white p-4 border border-neutral-200">
        <span class="sd-chip sd-chip--primary-200">primary-200</span>
      </div>
      <div class="bg-primary-100 p-4">
        <span class=" sd-chip sd-chip--primary-300">primary-300</span>
      </div>
      <div class="bg-primary p-4">
        <span class="sd-chip sd-chip--primary-500">primary-500</span>
      </div>
      <div slot="media" class="relative">
        <img
          class="aspect-video object-cover"
          src="./placeholders/images/coffeeshop.jpg"
          alt="A group of people sitting in a coffee shop"
        />
        <span class="absolute top-3 left-4 sd-chip sd-chip--white">white</span>
      </div>
    </div>`
};
