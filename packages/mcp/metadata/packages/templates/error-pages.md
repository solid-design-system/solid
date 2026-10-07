---
name: error-pages
title: Error Pages
components:
  - sd-button
  - sd-display
  - sd-headline
  - sd-headline--size-3xl
  - sd-icon
  - sd-leadtext
  - sd-leadtext--size-lg
version: 1.0.0
---

## Template: 404 – Page Not Found

```html
<div class="border border-neutral-500 p-12">
  <div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
    <sd-icon name="content/magnifying-glass-question-mark" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
    <div class="flex flex-col items-center gap-4">
      <p class="sd-display text-primary">404</p>
      <h1 class="sd-headline sd-headline--size-3xl">Page not found</h1>
    </div>
    <p class="sd-leadtext sd-leadtext--size-lg max-w-[480px]">
      The page you’re looking for doesn’t exist or may have been moved. Check the URL or head back to the homepage.
    </p>
    <sd-button>Go to homepage</sd-button>
  </div>
</div>
```

## Template: 403 – Access Denied

```html
<div class="border border-neutral-500 p-12">
  <div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
    <sd-icon name="content/fingerprint" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
    <div class="flex flex-col items-center gap-4">
      <p class="sd-display text-primary">403</p>
      <h1 class="sd-headline sd-headline--size-3xl">Access denied</h1>
    </div>
    <p class="sd-leadtext sd-leadtext--size-lg max-w-[480px]">
      You don’t have permission to view this page. If you think this is a mistake, contact your administrator or go back
      to the homepage.
    </p>
    <sd-button>Go to homepage</sd-button>
  </div>
</div>
```

## Template: 500 – Server Error

```html
<div class="border border-neutral-500 p-12">
  <div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
    <sd-icon name="content/server" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
    <div class="flex flex-col items-center gap-4">
      <p class="sd-display text-primary">500</p>
      <h1 class="sd-headline sd-headline--size-3xl">Something went wrong</h1>
    </div>
    <p class="sd-leadtext sd-leadtext--size-lg max-w-[480px]">
      An unexpected error occurred on our end. Please try again in a moment, or come back later if the problem
      continues.
    </p>
    <sd-button>Try again</sd-button>
  </div>
</div>
```

## Template: Maintenance

```html
<div class="border border-neutral-500 p-12">
  <div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
    <sd-icon name="content/cloud" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
    <h1 class="sd-headline sd-headline--size-3xl">We’ll be right back</h1>
    <p class="sd-leadtext sd-leadtext--size-lg max-w-[480px]">
      This service is temporarily unavailable while we perform scheduled maintenance. Please check back shortly.
    </p>
    <sd-button>Refresh page</sd-button>
  </div>
</div>
```

## Template: Session Expired

```html
<div class="border border-neutral-500 p-12">
  <div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
    <sd-icon name="content/hourglass" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
    <h1 class="sd-headline sd-headline--size-3xl">Your session has expired</h1>
    <p class="sd-leadtext sd-leadtext--size-lg max-w-[480px]">
      For your security, you’ve been logged out after a period of inactivity. Please sign in again to continue.
    </p>
    <sd-button>Sign in again</sd-button>
  </div>
</div>
```
