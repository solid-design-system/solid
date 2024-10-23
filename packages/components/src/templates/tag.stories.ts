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

export const filterTagGroup = {
  render: () => html`
    <sd-tag selected>All</sd-tag>
    <sd-tag>Extended Reality</sd-tag>
    <sd-tag>Internet of things</sd-tag>
  `
};

export const filterTagGroupMorningstarRating = {
  name: 'Filter Tag Group with Morningstar Rating',
  render: () => html`
    <sd-tag selected>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
    </sd-tag>
    <sd-tag>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
    </sd-tag>
    <sd-tag>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
    </sd-tag>
    <sd-tag>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
    </sd-tag>
    <sd-tag>
      <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
    </sd-tag>
  `
};

export const filterTagGroupRisk = {
  name: 'Filter Tag Group with Risk',
  render: () =>
    html`<sd-tag selected>
        <div class="h-4 w-4 bg-risk-veryhigh border-primary-800 border-[1px]"></div>
        Very High Risk
      </sd-tag>
      <sd-tag>
        <div class="h-4 w-4 bg-risk-high border-primary-800 border-[1px]"></div>
        High Risk
      </sd-tag>
      <sd-tag>
        <div class="h-4 w-4 bg-risk-increased border-primary-800 border-[1px]"></div>
        Increased Risk
      </sd-tag>
      <sd-tag>
        <div class="h-4 w-4 bg-risk-moderate border-primary-800 border-[1px]"></div>
        Moderated Risk
      </sd-tag>
      <sd-tag>
        <div class="h-4 w-4 bg-risk-low border-primary-800 border-[1px]"></div>
        Low Risk
      </sd-tag>`
};

export const removableFilterTagGroup = {
  render: () => html`
    <sd-tag removable>Filter 1</sd-tag>
    <sd-tag removable>Filter 2</sd-tag>
    <sd-tag removable>Filter 3</sd-tag>
    <sd-tag removable>Filter 4</sd-tag>
  `
};

export const tagGroupLinks = {
  name: 'Tag Group with Links',
  render: () => html`
    <sd-tag href="#" target="_blank">Topic 1</sd-tag>
    <sd-tag href="#" target="_blank">Topic 2</sd-tag>
    <sd-tag href="#" target="_blank">Topic 3</sd-tag>
  `
};

/**
 * - white
 * - neutral-100
 * - primary-100
 */
export const backgroundOptions = {
  name: 'Tag Background Options',
  render: () =>
    html`<div class="flex flex-row">
      <div class="bg-white p-12 w-[268px]">
        <sd-tag>Tag</sd-tag>
      </div>

      <div class="bg-neutral-100 p-12 w-[268px]">
        <sd-tag>Tag</sd-tag>
      </div>

      <div class="bg-primary-100 p-12 w-[268px]">
        <sd-tag>Tag</sd-tag>
      </div>
    </div>`
};
