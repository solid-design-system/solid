import '../../../../components/src/solid-components';
import { html } from 'lit-html';

/**
 * Examples of full-page error and status messages. Each page combines a content icon, an optional error code, a short headline, a supporting description and a single call to action that helps users recover.
 */

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Error Pages',
  parameters: {
    relatedLinks: [
      'components/sd-icon',
      'components/sd-button',
      'styles/sd-display',
      'styles/sd-headline',
      'styles/sd-leadtext'
    ],
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=24925-87817'
    }
  }
};

/**
 * Example of a 404 error page for when a user navigates to a URL that doesn't exist.
 */
export const PageNotFound = {
  name: '404 – Page Not Found',
  render: () => html`
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
  `
};

/**
 * Example of a 403 error page for when a user tries to access a resource they don't have permission for.
 */
export const AccessDenied = {
  name: '403 – Access Denied',
  render: () => html`
    <div class="border border-neutral-500 p-12">
      <div class="flex flex-col items-center gap-6 px-12 py-24 text-center">
        <sd-icon name="content/fingerprint" color="primary" class="h-24 w-24 shrink-0"></sd-icon>
        <div class="flex flex-col items-center gap-4">
          <p class="sd-display text-primary">403</p>
          <h1 class="sd-headline sd-headline--size-3xl">Access denied</h1>
        </div>
        <p class="sd-leadtext sd-leadtext--size-lg max-w-[480px]">
          You don’t have permission to view this page. If you think this is a mistake, contact your administrator or go
          back to the homepage.
        </p>
        <sd-button>Go to homepage</sd-button>
      </div>
    </div>
  `
};

/**
 * Example of a 500 error page for when an unexpected server-side error occurs.
 */
export const ServerError = {
  name: '500 – Server Error',
  render: () => html`
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
  `
};

/**
 * Example of a maintenance page for scheduled downtime.
 */
export const Maintenance = {
  name: 'Maintenance',
  render: () => html`
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
  `
};

/**
 * Example of a session-expired page for when a user's authenticated session has timed out.
 */
export const SessionExpired = {
  name: 'Session Expired',
  render: () => html`
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
  `
};
