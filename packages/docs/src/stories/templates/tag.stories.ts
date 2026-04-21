import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
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
    <div>
      <p class="sd-paragraph sd-paragraph--size-lg font-bold mb-4">26 Results</p>
      <div id="tag-group" class="flex gap-4">
        <sd-tag toggleable selected> All (26)</sd-tag>
        <sd-tag toggleable>Funds (16)</sd-tag>
        <sd-tag toggleable>Sustainability (5)</sd-tag>
        <sd-tag toggleable>Retirement planing (2)</sd-tag>
        <sd-tag toggleable>Documents (3)</sd-tag>
      </div>
    </div>

    <script type="module">
      const group = document.querySelector('#tag-group');

      group.addEventListener('click', e => {
        const tag = e.target.closest('sd-tag');
        if (!tag) return;

        group.querySelectorAll('sd-tag').forEach(t => t.removeAttribute('selected'));
        tag.setAttribute('selected', '');
      });
    </script>
  `
};

export const filterTagGroupMorningstarRating = {
  name: 'Filter Tag Group with Morningstar Rating',
  render: () => html`
    <div>
      <p class="sd-paragraph sd-paragraph--size-lg font-bold mb-4">
        Find Top-Rated Investments with Morningstar Ratings:
      </p>
      <div id="morningstar-tag-group" class="flex gap-2" role="group" aria-label="Filter by morningstar rating">
        <sd-tag aria-checked="true" toggleable selected>
          <label class="sr-only">5 stars</label>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
        </sd-tag>
        <sd-tag aria-checked="false" toggleable>
          <label class="sr-only">4 stars</label>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
        </sd-tag>
        <sd-tag aria-checked="false" toggleable>
          <label class="sr-only">3 stars</label>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
        </sd-tag>
        <sd-tag aria-checked="false" toggleable>
          <label class="sr-only">2 stars</label>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
        </sd-tag>
        <sd-tag aria-checked="false" toggleable>
          <label class="sr-only">1 star</label>
          <sd-icon name="system/star-filled" color="currentColor"></sd-icon>
        </sd-tag>
      </div>
    </div>

    <script type="module">
      const group = document.querySelector('#morningstar-tag-group');

      group.addEventListener('click', e => {
        const tag = e.target.closest('sd-tag');
        if (!tag) return;

        group.querySelectorAll('sd-tag').forEach(t => t.removeAttribute('selected'));
        tag.setAttribute('selected', '');
      });
    </script>
  `
};

export const filterTagGroupRisk = {
  name: 'Filter Tag Group with Risk',
  render: () => html`
    <div>
      <p class="sd-paragraph sd-paragraph--size-lg font-bold mb-4">Risk level:</p>
      <div id="risk-tag-group" class="flex gap-2">
        <sd-tag toggleable selected>
          <div class="h-4 w-4 border-primary-800 border-[1px] bg-[var(--fill-risk-veryhigh)]"></div>
          Very High
        </sd-tag>

        <sd-tag toggleable>
          <div class="h-4 w-4 border-primary-800 border-[1px] bg-[var(--fill-risk-high)]"></div>
          High
        </sd-tag>

        <sd-tag toggleable>
          <div class="h-4 w-4 border-primary-800 border-[1px] bg-[var(--fill-risk-increased)]"></div>
          Increased
        </sd-tag>

        <sd-tag toggleable>
          <div class="h-4 w-4 border-primary-800 border-[1px] bg-[var(--fill-risk-moderate)]"></div>
          Moderate
        </sd-tag>

        <sd-tag toggleable>
          <div class="h-4 w-4 border-primary-800 border-[1px] bg-[var(--fill-risk-low)]"></div>
          Low
        </sd-tag>
      </div>
    </div>

    <script type="module">
      const group = document.querySelector('#risk-tag-group');

      group.addEventListener('click', e => {
        const tag = e.target.closest('sd-tag');
        if (!tag) return;

        group.querySelectorAll('sd-tag').forEach(t => t.removeAttribute('selected'));
        tag.setAttribute('selected', '');
      });
    </script>
  `
};

export const removableFilterTagGroup = {
  render: () => html`
    <div>
      <p class="sd-paragraph sd-paragraph--size-lg font-bold mb-4">Active filters:</p>

      <div id="removable-tag-filters" class="flex items-center gap-2 flex-nowrap">
        <sd-tag removable>Stocks</sd-tag>
        <sd-tag removable>Bonds</sd-tag>
        <sd-tag removable>Mutual funds</sd-tag>
        <sd-tag removable>ETFs</sd-tag>
        <sd-link
          id="remove-filters-link"
          href="https://solid-design-system.fe.union-investment.de/docs/"
          class="ml-4"
          standalone
        >
          <sd-icon name="system/trash" slot="icon-left"></sd-icon>
          Remove filters
        </sd-link>
      </div>
    </div>

    <script type="module">
      const filters = document.querySelector('#removable-tag-filters');
      const removeFiltersLink = document.querySelector('#remove-filters-link');

      filters.querySelectorAll('sd-tag').forEach(tag => {
        tag.addEventListener('sd-remove', () => tag.hide());
      });

      filters.addEventListener('sd-after-hide', () => {
        const tags = Array.from(filters.querySelectorAll('sd-tag'));

        if (tags.some(tag => !tag.hidden)) return;

        setTimeout(() => {
          tags.forEach(tag => {
            tag.style.opacity = '1';
            tag.hidden = false;
          });
        }, 1000);
      });

      removeFiltersLink.addEventListener('click', event => {
        event.preventDefault();
        const tags = filters.querySelectorAll('sd-tag');
        tags.forEach(tag => tag.hide());
      });
    </script>
  `
};

export const tagGroupLinks = {
  name: 'Tag Group with Links',
  render: () => html`
    <div>
      <p class="sd-paragraph sd-paragraph--size-lg font-bold mb-4">Additional topics:</p>
      <div class="gap-2 flex flex-col">
        <sd-tag
          class="inline-flex w-auto"
          href="https://solid-design-system.fe.union-investment.de/docs/"
          target="_blank"
          >Commercial real estate</sd-tag
        >
        <sd-tag
          class="inline-flex w-auto"
          href="https://solid-design-system.fe.union-investment.de/docs/"
          target="_blank"
          >Savings plan rate</sd-tag
        >
        <sd-tag
          class="inline-flex w-auto"
          href="https://solid-design-system.fe.union-investment.de/docs/"
          target="_blank"
          >Open-ended real estate funds</sd-tag
        >
        <sd-tag
          class="inline-flex w-auto"
          href="https://solid-design-system.fe.union-investment.de/docs/"
          target="_blank"
          >Retirement planning</sd-tag
        >
      </div>
    </div>
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
