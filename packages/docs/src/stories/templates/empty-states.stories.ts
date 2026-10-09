import '../../../../components/src/solid-components';
import { html } from 'lit-html';

/**
 * Examples of empty states shown when a section, search, filter or list has no content to display. Each state combines a content icon or an illustration, a short headline, a supporting description and, where useful, a single call to action.
 */

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Empty States',
  parameters: {
    relatedLinks: [
      { link: 'components/sd-icon', label: 'sd-icon (content)' },
      { link: 'styles/sd-headline', label: 'sd-headline' },
      { link: 'styles/sd-paragraph', label: 'sd-paragraph' },
      { link: 'components/sd-button', label: 'sd-button' }
    ],
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=25200-80'
    }
  }
};

/**
 * Shown when a user opens a section for the first time and nothing has been created yet. A welcome message and a primary action guide them to their first entry.
 */
export const FirstTimeUse = {
  name: 'First-Time Use',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/waving" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl">Get started</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Everything you add will appear here. Create your first entry to get started.
      </p>
      <sd-button>Create first entry</sd-button>
    </div>
  `
};

/**
 * First-time use empty state with an illustration instead of a content icon.
 */
export const FirstTimeUseIllustration = {
  name: 'First-Time Use with Illustration',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/first-time-use.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl">Get started</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Everything you add will appear here. Create your first entry to get started.
      </p>
      <sd-button>Create first entry</sd-button>
    </div>
  `
};

/**
 * Shown when a search returns no matches. Suggests trying a different keyword or checking for typos.
 */
export const NoResults = {
  name: 'No Results',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/magnifying-glass-question-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl">No results found</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We couldn't find anything matching your search. Try a different keyword or check for typos.
      </p>
    </div>
  `
};

/**
 * No results empty state with an illustration instead of a content icon.
 */
export const NoResultsIllustration = {
  name: 'No Results with Illustration',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/no-search-results.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl">No results found</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We couldn't find anything matching your search. Try a different keyword or check for typos.
      </p>
    </div>
  `
};

/**
 * Shown when the active filters return no results. Makes clear that data exists and encourages adjusting the filters.
 */
export const FilteredToZero = {
  name: 'Filtered to Zero',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/magnifying-glass-question-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl">No matches for your filters</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Your current filter combination doesn't return any results. Try removing or adjusting a filter.
      </p>
    </div>
  `
};

/**
 * Filtered to zero empty state with an illustration instead of a content icon.
 */
export const FilteredToZeroIllustration = {
  name: 'Filtered to Zero with Illustration',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/filtered-to-zero.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl">No matches for your filters</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Your current filter combination doesn't return any results. Try removing or adjusting a filter.
      </p>
    </div>
  `
};

/**
 * Shown when content can't be loaded because of a technical error. Offers a retry action and points to support.
 */
export const ErrorRelatedEmpty = {
  name: 'Error-Related Empty',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/triangle-exclamation-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl">Something went wrong</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We're having trouble loading this data right now. Please try again. If the problem continues, contact support.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};

/**
 * Error-related empty state with an illustration instead of a content icon.
 */
export const ErrorRelatedEmptyIllustration = {
  name: 'Error-Related Empty with Illustration',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/error-related-empty.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl">Something went wrong</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We're having trouble loading this data right now. Please try again. If the problem continues, contact support.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};

/**
 * Shown when a user lacks the permissions to view content. Names the administrator as contact and offers a way back to the homepage.
 */
export const PermissionRestrictedEmpty = {
  name: 'Permission-Restricted Empty',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/fingerprint" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl">You don't have access to this page</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        You're missing the permissions needed to view this content. Contact your administrator if you think this is a
        mistake.
      </p>
      <sd-button>Go to homepage</sd-button>
    </div>
  `
};

/**
 * Permission-restricted empty state with an illustration instead of a content icon.
 */
export const PermissionRestrictedEmptyIllustration = {
  name: 'Permission-Restricted Empty with Illustration',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img
        src="./placeholders/images/illustrations/permission-restricted-empty.svg"
        alt=""
        class="h-[200px] w-[200px]"
      />
      <h2 class="sd-headline sd-headline--size-3xl">You don't have access to this page</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        You're missing the permissions needed to view this content. Contact your administrator if you think this is a
        mistake.
      </p>
      <sd-button>Go to homepage</sd-button>
    </div>
  `
};

/**
 * Shown when loading has finished but no items are available. Offers a way to refresh or check back later.
 */
export const LoadingToEmpty = {
  name: 'Loading-to-Empty',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/triangle-exclamation-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl">No items to show right now</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We checked and there's nothing here at the moment. Refresh to check again, or check back later.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};

/**
 * Loading-to-empty state with an illustration instead of a content icon.
 */
export const LoadingToEmptyIllustration = {
  name: 'Loading-to-Empty with Illustration',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/error-related-empty.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl">No items to show right now</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We checked and there's nothing here at the moment. Refresh to check again, or check back later.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};
