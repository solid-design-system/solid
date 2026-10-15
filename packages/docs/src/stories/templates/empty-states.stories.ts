import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Empty States',
  parameters: {
    relatedLinks: ['components/sd-icon', 'styles/sd-headline', 'styles/sd-paragraph', 'components/sd-button'],
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=25200-80'
    }
  },
  decorators: [
    (story: any) =>
      html`<style>
          .docs-story {
            padding: 0;
          }

          #storybook-docs .innerZoomElementWrapper > * {
            border: 0 !important;
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * Shown when a user opens a section for the first time and nothing has been created yet. A welcome message and a primary action guide them to their first entry.
 */
export const FirstTimeUse = {
  name: 'First-Time Use (Onboarding Empty)',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/waving" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl text-black!">Get started</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Everything you add will appear here. Create your first entry to get started.
      </p>
      <sd-button>Create first entry</sd-button>
    </div>
  `
};

export const FirstTimeUseIllustration = {
  name: ' ',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/first-time-use.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl text-black!">Get started</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Everything you add will appear here. Create your first entry to get started.
      </p>
      <sd-button>Create first entry</sd-button>
    </div>
  `
};

/**
 * Shown when a search returns no matches. Suggests trying a different keyword or checking for typos. Use a content icon or an illustration.
 */
export const NoResults = {
  name: 'No Results',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/magnifying-glass-question-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl text-black!">No results found</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We couldn't find anything matching your search. Try a different keyword or check for typos.
      </p>
    </div>
  `
};

export const NoResultsIllustration = {
  name: ' ',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/no-search-results.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl text-black!">No results found</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We couldn't find anything matching your search. Try a different keyword or check for typos.
      </p>
    </div>
  `
};

/**
 * Shown when the active filters return no results. Makes clear that data exists and encourages adjusting the filters. Use a content icon or an illustration.
 */
export const FilteredToZero = {
  name: 'Filtered to Zero',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/magnifying-glass-question-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl text-black!">No matches for your filters</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Your current filter combination doesn't return any results. Try removing or adjusting a filter.
      </p>
    </div>
  `
};

export const FilteredToZeroIllustration = {
  name: ' ',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/filtered-to-zero.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl text-black!">No matches for your filters</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        Your current filter combination doesn't return any results. Try removing or adjusting a filter.
      </p>
    </div>
  `
};

/**
 * Shown when content can't be loaded because of a technical error. Offers a retry action and points to support. Use a content icon or an illustration.
 */
export const ErrorRelatedEmpty = {
  name: 'Error-Related Empty',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/triangle-exclamation-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl text-black!">Something went wrong</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We're having trouble loading this data right now. Please try again. If the problem continues, contact support.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};

export const ErrorRelatedEmptyIllustration = {
  name: ' ',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/error-related-empty.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl text-black!">Something went wrong</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We're having trouble loading this data right now. Please try again. If the problem continues, contact support.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};

/**
 * Shown when a user lacks the permissions to view content. Names the administrator as contact and offers a way back to the homepage. Use a content icon or an illustration.
 */
export const PermissionRestrictedEmpty = {
  name: 'Permission-Restricted Empty',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/fingerprint" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl text-black!">You don't have access to this page</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        You're missing the permissions needed to view this content. Contact your administrator if you think this is a
        mistake.
      </p>
      <sd-button>Go to homepage</sd-button>
    </div>
  `
};

export const PermissionRestrictedEmptyIllustration = {
  name: ' ',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img
        src="./placeholders/images/illustrations/permission-restricted-empty.svg"
        alt=""
        class="h-[200px] w-[200px]"
      />
      <h2 class="sd-headline sd-headline--size-3xl text-black!">You don't have access to this page</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        You're missing the permissions needed to view this content. Contact your administrator if you think this is a
        mistake.
      </p>
      <sd-button>Go to homepage</sd-button>
    </div>
  `
};

/**
 * Shown when loading has finished but no items are available. Offers a way to refresh or check back later. Use a content icon or an illustration.
 */
export const LoadingToEmpty = {
  name: 'Loading-to-Empty',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <sd-icon name="content/triangle-exclamation-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
      <h2 class="sd-headline sd-headline--size-3xl text-black!">No items to show right now</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We checked and there's nothing here at the moment. Refresh to check again, or check back later.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};

export const LoadingToEmptyIllustration = {
  name: ' ',
  render: () => html`
    <div class="flex flex-col items-center gap-6 px-4 py-12 sm:px-12 sm:py-24 text-center">
      <img src="./placeholders/images/illustrations/error-related-empty.svg" alt="" class="h-[200px] w-[200px]" />
      <h2 class="sd-headline sd-headline--size-3xl text-black!">No items to show right now</h2>
      <p class="sd-paragraph text-lg max-w-[480px]">
        We checked and there's nothing here at the moment. Refresh to check again, or check back later.
      </p>
      <sd-button>Try again</sd-button>
    </div>
  `
};
