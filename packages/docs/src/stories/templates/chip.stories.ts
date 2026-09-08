import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
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
 * Recommended combinations:
 * - `primary-subtle` or `neutral-subtle` on white background
 * - `primary-low` on primary-100 background
 * - `neutral-low` on neutral-100 background
 * - `primary-high` on primary background
 * - `white` on image background
 */
export const ChipBackgroundOptions = {
  render: () =>
    html`<div class="grid grid-col-1 sm:grid-cols-3 gap-px bg-neutral-400 border border-neutral-400">
        <div class="bg-white py-6 px-8 flex flex-col gap-2 items-start min-h-32">
          <span class="sd-chip">primary-subtle</span>
          <span class="sd-chip sd-chip--color-neutral">neutral-subtle</span>
        </div>
        <div class="bg-primary-100 py-6 px-8 min-h-32">
          <span class="sd-chip sd-chip--shade-low">primary-low</span>
        </div>
        <div class="bg-neutral-100 py-6 px-8 min-h-32">
          <span class="sd-chip sd-chip--color-neutral sd-chip--shade-low">neutral-low</span>
        </div>
        <div class="bg-primary py-6 px-8 min-h-32">
          <span class="sd-chip sd-chip--shade-high">primary-high</span>
        </div>
        <div class="relative col-span-1 sm:col-span-2 py-6 px-8 min-h-32">
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="./placeholders/images/coffeeshop.jpg"
            alt="Four young people sit around a café table laughing, while one of them looks at a tablet."
          />
          <div class="relative">
            <span class="sd-chip sd-chip--color-white">white</span>
          </div>
        </div>
      </div>

      <div class="grid grid-col-1 sm:grid-cols-3 gap-px bg-neutral-400 border border-neutral-400 mt-8">
        <div class="bg-white py-6 flex flex-col gap-4 items-end min-h-32">
          <span class="sd-chip sd-chip--shade-low sd-chip--size-lg sd-chip--sharp">primary-low</span>
          <span class="sd-chip sd-chip--color-neutral sd-chip--shade-low sd-chip--size-lg sd-chip--sharp">
            neutral-low
          </span>
        </div>
        <div class="bg-primary-100 py-6 min-h-32 relative">
          <span class="sd-chip sd-chip--shade-medium sd-chip--size-lg sd-chip--sharp absolute right-0"
            >primary-medium</span
          >
        </div>
        <div class="bg-neutral-100 py-6 min-h-32 relative">
          <span
            class="sd-chip sd-chip--color-neutral sd-chip--shade-medium sd-chip--size-lg sd-chip--sharp absolute right-0"
            >neutral-medium</span
          >
        </div>
        <div class="bg-primary min-h-32 py-6 relative">
          <span class="sd-chip sd-chip--shade-high sd-chip--size-lg sd-chip--sharp absolute right-0">primary-high</span>
        </div>
        <div class="relative col-span-1 sm:col-span-2 py-6 min-h-32">
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="./placeholders/images/coffeeshop.jpg"
            alt="Four young people sit around a café table laughing, while one of them looks at a tablet."
          />
          <div class="relative">
            <span class="sd-chip sd-chip--color-neutral sd-chip--size-lg sd-chip--sharp absolute right-0"
              >neutral-subtle</span
            >
          </div>
        </div>
      </div>`
};

/**
 * Recommended combinations:
 * - `primary-medium` or `neutral-medium` on white background
 * - `primary-medium` on primary-100 background
 * - `neutral-medium` on neutral-100 background
 */

export const BackgroundOptionsOutlined = {
  name: '',
  render: () => html`
    <div class="grid grid-col-1 sm:grid-cols-3 gap-px bg-neutral-400 border border-neutral-400 mt-4">
      <div class="bg-white py-6 px-8 flex flex-col gap-2 items-start min-h-32">
        <span class="sd-chip sd-chip--shade-medium sd-chip--outline">primary-medium</span>
        <span class="sd-chip sd-chip--color-neutral sd-chip--shade-medium sd-chip--outline">neutral-medium</span>
      </div>
      <div class="bg-primary-100 py-6 px-8 min-h-32">
        <span class="sd-chip sd-chip--shade-medium sd-chip--outline">primary-medium</span>
      </div>
      <div class="bg-neutral-100 py-6 px-8 min-h-32">
        <span class="sd-chip sd-chip--color-neutral sd-chip--shade-medium sd-chip--outline">neutral-medium</span>
      </div>
    </div>
  `
};
