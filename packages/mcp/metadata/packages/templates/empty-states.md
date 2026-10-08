---
name: empty-states
title: Empty States
components:
  - sd-button
  - sd-display
  - sd-headline
  - sd-headline--size-3xl
  - sd-icon
  - sd-paragraph
version: 1.0.0
---

## Template: First-Time Use

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <sd-icon name="content/waving" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
  <h2 class="sd-headline sd-headline--size-3xl">Get started</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    Everything you add will appear here. Create your first entry to get started.
  </p>
  <sd-button>Go to homepage</sd-button>
</div>
```

## Template: First-Time Use with Illustration

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <img src="./placeholders/images/illustrations/first-time-use.svg" alt="" class="h-[200px] w-[200px]" />
  <h2 class="sd-headline sd-headline--size-3xl">Get started</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    Everything you add will appear here. Create your first entry to get started.
  </p>
  <sd-button>Go to homepage</sd-button>
</div>
```

## Template: No Results

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <sd-icon name="content/magnifying-glass-question-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
  <h2 class="sd-headline sd-headline--size-3xl">No results found</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    We couldn't find anything matching your search. Try a different keyword or check for typos.
  </p>
</div>
```

## Template: No Results with Illustration

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <img src="./placeholders/images/illustrations/no-search-results.svg" alt="" class="h-[200px] w-[200px]" />
  <h2 class="sd-headline sd-headline--size-3xl">No results found</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    We couldn't find anything matching your search. Try a different keyword or check for typos.
  </p>
</div>
```

## Template: Filtered to Zero

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <sd-icon name="content/magnifying-glass-question-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
  <h2 class="sd-headline sd-headline--size-3xl">No matches for your filters</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    Your current filter combination doesn't return any results. Try removing or adjusting a filter.
  </p>
</div>
```

## Template: Filtered to Zero with Illustration

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <img src="./placeholders/images/illustrations/filtered-to-zero.svg" alt="" class="h-[200px] w-[200px]" />
  <h2 class="sd-headline sd-headline--size-3xl">No matches for your filters</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    Your current filter combination doesn't return any results. Try removing or adjusting a filter.
  </p>
</div>
```

## Template: Error-Related Empty

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <sd-icon name="content/triangle-exclamation-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
  <h2 class="sd-headline sd-headline--size-3xl">Something went wrong</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    We're having trouble loading this data right now. Please try again. If the problem continues, contact support.
  </p>
  <sd-button>Try again</sd-button>
</div>
```

## Template: Error-Related Empty with Illustration

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <img src="./placeholders/images/illustrations/error-related-empty.svg" alt="" class="h-[200px] w-[200px]" />
  <h2 class="sd-headline sd-headline--size-3xl">Something went wrong</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    We're having trouble loading this data right now. Please try again. If the problem continues, contact support.
  </p>
  <sd-button>Try again</sd-button>
</div>
```

## Template: Permission-Restricted Empty

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <sd-icon name="content/fingerprint" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
  <h2 class="sd-headline sd-headline--size-3xl">You don't have access to this page</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    You're missing the permissions needed to view this content. Contact your administrator if you think this is a
    mistake.
  </p>
  <sd-button>Go to homepage</sd-button>
</div>
```

## Template: Permission-Restricted Empty with Illustration

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <img src="./placeholders/images/illustrations/permission-restricted-empty.svg" alt="" class="h-[200px] w-[200px]" />
  <h2 class="sd-headline sd-headline--size-3xl">You don't have access to this page</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    You're missing the permissions needed to view this content. Contact your administrator if you think this is a
    mistake.
  </p>
  <sd-button>Go to homepage</sd-button>
</div>
```

## Template: Loading-to-Empty

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <sd-icon name="content/triangle-exclamation-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
  <h2 class="sd-headline sd-headline--size-3xl">No items to show right now</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    We checked and there's nothing here at the moment. Refresh to check again, or check back later.
  </p>
  <sd-button>Try again</sd-button>
</div>
```

## Template: Loading-to-Empty with Illustration

```html
<div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
  <img src="./placeholders/images/illustrations/error-related-empty.svg" alt="" class="h-[200px] w-[200px]" />
  <h2 class="sd-headline sd-headline--size-3xl">No items to show right now</h2>
  <p class="sd-paragraph text-lg max-w-[480px]">
    We checked and there's nothing here at the moment. Refresh to check again, or check back later.
  </p>
  <sd-button>Try again</sd-button>
</div>
```
