import type { IconLibrary } from './library';

//
// Internal icons are a separate library to ensure they're always available, regardless of how the default icon library is
// configured or if its icons resolve properly.
//
// All Solid components must use the internal library instead of the default library.
// For visual consistency, they are a subset of Union Investment's official icons.
//
export const icons = {
  calendar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M6 4v1.7a1 1 0 0 0 2 0V4h8v1.7a1 1 0 0 0 2 0V4h2v4H4V4zM4 20V10h16v10z"/>
      <path d="m7.6 13.3.6.8.3-.3.7-.6V18h1.3v-6H9.4zm7-1.4q-2.2 0-2.2 3.1 0 3 2.2 3c2.2 0 2.2-1 2.2-3q0-3.1-2.1-3.1m0 5.3q-1 0-1-2.3t1-2.2c1 0 1 .8 1 2.3q0 2.2-1 2.2"/>
    </svg>
  `,
  'chevron-down': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M20.3 6.3 12 15.5 3.7 6.3 3 6a1 1 0 0 0-.7 1.7l9 10a1 1 0 0 0 1.4 0l9-10q.3-.3.3-.7a1 1 0 0 0-1.7-.7"/>
    </svg>
  `,
  'chevron-up': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12.7 6.3a1 1 0 0 0-1.4 0l-9 10-.3.7a1 1 0 0 0 1.7.7L12 8.5l8.3 9.2q.2.2.7.3a1 1 0 0 0 .7-1.7z"/>
    </svg>
  `,
  'chevron-right': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M7.667 2.257a1 1 0 1 0-1.336 1.485l.002.001L15.506 12l-9.173 8.257a1 1 0 0 0 1.336 1.485l-.002.001 10-9a.997.997 0 0 0 .001-1.486l-.001-.001-10-8.999Z"/>
    </svg>
  `,
  'chevron-left': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M17.7 2.3a1 1 0 0 0-1.4 0l-10 9a1 1 0 0 0 0 1.4l10 9a1 1 0 0 0 1.4-1.4L8.5 12l9.2-8.3a1 1 0 0 0 0-1.4"/>
    </svg>
  `,
  'chevron-sm-right': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="M10.688 6.257a1 1 0 1 0-1.336 1.485h.002L14.528 12l-5.174 4.257a1 1 0 0 0 1.336 1.485h-.002l6-5a.997.997 0 0 0 .002-1.485l-.002-.001-6-5Z"/>
  </svg>`,
  'chevron-sm-left': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="M14.742 6.333a.997.997 0 0 0-1.41-.076l.001-.001-6 5a.997.997 0 0 0 0 1.486v.001l6 5a1 1 0 0 0 1.333-1.487l-5.173-4.257 5.173-4.257a.997.997 0 0 0 .076-1.409Z"/>
  </svg>`,
  'chevrons-sm-left': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="M11.74 6.333a.997.997 0 0 0-1.41-.076l.001-.001-6 5a.997.997 0 0 0-.001 1.486l.001.001 6 5a1 1 0 0 0 1.333-1.487l-5.173-4.257 5.173-4.257a.997.997 0 0 0 .076-1.409Z"/>
    <path fill="currentColor" d="M18.74 6.333a.997.997 0 0 0-1.41-.076l.001-.001-6 5a.997.997 0 0 0-.001 1.486l.001.001 6 5a1 1 0 0 0 1.333-1.487l-5.173-4.257 5.173-4.257a.997.997 0 0 0 .076-1.409Z"/>
  </svg>`,
  'chevrons-sm-right': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13.718 6.257a1 1 0 1 0-1.336 1.485h.002L17.557 12l-5.173 4.257a1 1 0 0 0 1.336 1.485h-.002l6-5a.997.997 0 0 0 .001-1.485l-.001-.001-6-5Z"/>
  <path fill="currentColor" d="M6.718 6.257a1 1 0 1 0-1.336 1.485h.002L10.557 12l-5.173 4.257a1 1 0 0 0 1.336 1.485h-.002l6-5a.997.997 0 0 0 .001-1.485l-.001-.001-6-5Z"/>
</svg>`,
  clock: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13 11.6V8a1 1 0 0 0-2 0v4.4h.1v.2l.2.1 2.8 2.8a1 1 0 0 0 1.4-1.4z"/>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
    </svg>
  `,
  close: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21.7 2.3a1 1 0 0 0-1.4 0L12 10.6 3.7 2.3a1 1 0 0 0-1.4 1.4l8.3 8.3-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.4 0l8.3-8.3 8.3 8.3a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4L13.4 12l8.3-8.3a1 1 0 0 0 0-1.4"/>
    </svg>
  `,
  'closing-round': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
      <path d="M16.4 7.6a1 1 0 0 0-1.4 0l-3 3-3-3A1 1 0 0 0 7.6 9l3 3-3 3A1 1 0 0 0 9 16.4l3-3 3 3a1 1 0 0 0 1.4-1.4l-3-3 3-3a1 1 0 0 0 0-1.4"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 19c-5.3 0-10-5.7-10-7s4.7-7 10-7 10 5.7 10 7-4.7 7-10 7m-7.9-7c.8 1.2 4 5 7.9 5s7.1-3.8 7.9-5c-.8-1.2-4-5-7.9-5s-7.1 3.8-7.9 5"/>
      <path d="M12 16.1A4 4 0 0 1 7.9 12 4 4 0 0 1 12 7.9a4 4 0 0 1 4.1 4.1 4 4 0 0 1-4.1 4.1m0-6.2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2"/>
    </svg>
  `,
  'eye-crossed-out': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 16.1A4 4 0 0 1 7.9 12 4 4 0 0 1 12 7.9a4 4 0 0 1 4.1 4.1 4 4 0 0 1-4.1 4.1m0-6.2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2"/>
      <path d="M12 19c-5.3 0-10-5.7-10-7s4.7-7 10-7 10 5.7 10 7-4.7 7-10 7m-7.9-7c.8 1.2 4 5 7.9 5s7.1-3.8 7.9-5c-.8-1.2-4-5-7.9-5s-7.1 3.8-7.9 5"/>
      <path d="M3 22a1 1 0 0 1-.7-1.7l18-18a1 1 0 0 1 1.4 1.4l-18 18z"/>
    </svg>
  `,
  'info-circle': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
      <path d="M13.3 7.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-.3 3.9a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2v2.6h2zM11 16.3v-1h-1a1 1 0 0 0 0 2h2a1 1 0 0 1-1-1m3-1h-1v1a1 1 0 0 1-1 1h2a1 1 0 0 0 0-2"/>
      <path d="M13 16.3v-1h-2v1a1 1 0 0 0 2 0"/>
    </svg>
  `,
  'status-check': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13">
      <path d="M10 1.1 4.3 9.5 1.9 7a.6.6 0 0 0-1 .5L1 8l3 3 .5.1q.4 0 .5-.2l6-9a1 1 0 0 0-.2-1 1 1 0 0 0-.9.2"/>
    </svg>
  `,
  'status-minus': `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <path d="M10 5.4H2a.6.6 0 0 0 0 1.2h8a.6.6 0 0 0 0-1.2"/>
    </svg>
  `,
  'minus-circle': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path d="M49.5 33h-27a3 3 0 0 0 0 6h27a3 3 0 0 0 0-6Z"/>
      <path d="M36 6a30 30 0 1 0 30 30A30 30 0 0 0 36 6Zm0 54a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"/>
    </svg>
  `,
  pause: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zM6 4h2v16H6zm13 18q.4 0 .7-.3l.3-.7V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zM16 4h2v16h-2z"/>
    </svg>
  `,
  'plus-circle': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path d="M49.5 33H39V22.5a3 3 0 0 0-6 0V33H22.5a3 3 0 0 0 0 6H33v10.5a3 3 0 0 0 6 0V39h10.5a3 3 0 0 0 0-6Z"/>
      <path d="M36 6a30 30 0 1 0 30 30A30 30 0 0 0 36 6Zm0 54a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"/>
    </svg>
  `,
  risk: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12.9 2.6a1 1 0 0 0-1.8 0l-9 18A1 1 0 0 0 3 22h18a1 1 0 0 0 .9-1.5zM4.6 20 12 5.2 19.4 20z"/>
      <path d="M11 10.7V15a1 1 0 0 0 2 0v-4.3a1 1 0 0 0-2 0m2 7.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  `,
  start: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path d="m57.4 29.8-37.3-24A2.7 2.7 0 0 0 16 8v48a2.7 2.7 0 0 0 2.7 2.7 3 3 0 0 0 1.4-.5l37.3-24a3 3 0 0 0 1.2-2.2q0-1.4-1.2-2.2M21.4 51V13L51 32z"/>
    </svg>
  `,
  'confirm-circle': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
      <path d="M15.8 7.5a1 1 0 0 0-1.4.3L10.9 14 9 12.3a1 1 0 0 0-1.6.7q0 .4.2.7l2.7 2.7q.3.2.7.3h.1q.5-.1.8-.5l4.3-7.4.1-.5a1 1 0 0 0-.5-.8"/>
    </svg>
  `,
  warning: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12.9 2.6a1 1 0 0 0-1.8 0l-9 18-.1.4q0 1 1 1h18a1 1 0 0 0 .9-1.5zM4.6 20 12 5.2 19.4 20z"/>
      <path d="M11 10.7V15a1 1 0 0 0 2 0v-4.3a1 1 0 0 0-2 0m2 7.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  `,
  'exclamation-circle': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 6a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V7q0-1-1-1"/>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/>
    </svg>
  `,
  'magnifying-glass': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="m21.7 20.3-7-7h-.1a7 7 0 1 0-1.4 1.4v-.1l.1.1 7 7a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4M9 14a5 5 0 1 1 5-5 5 5 0 0 1-5 5"/>
    </svg>
  `,
  transcript: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 22H5a1 1 0 0 1-1-1V3q0-1 1-1h9q.4 0 .7.3l5 5q.3.3.3.7v13q0 1-1 1M6 20h12V8.4L13.6 4H6z"/>
      <path d="M19 10h-6a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2m-3 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2m-2 4H8a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2"/>
    </svg>
  `,
  mute: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M8.7 0a1 1 0 0 0-1 .3L3.8 4H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l3.6 3.7.7.3h.4q.6-.3.6-1V1a1 1 0 0 0-.6-1M2 6h1.3v4H2zm5.3 6.6-2-2V5.4l2-2zm12.4-9a1 1 0 0 0-1.4 0l-3 3-3-3A1 1 0 0 0 11 5l3 3-3 3a1 1 0 0 0 1.4 1.4l3-3 2.9 3a1 1 0 0 0 1.4-1.4l-3-3 3-3a1 1 0 0 0 0-1.4"/>
    </svg>
  `,
  volume: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.7 4a1 1 0 0 0-1 .3L5.8 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l3.6 3.7.7.3h.4q.6-.4.6-1V5a1 1 0 0 0-.6-1M4 10h1.3v4H4zm5.3 6.6-2-2V9.4l2-2zM18.6 3a1 1 0 0 0-.5 1.3Q20 7.8 20 12t-2 7.6h.1a1 1 0 0 0 .4 1.3 1 1 0 0 0 1.4-.4q2-3.8 2.1-8.5 0-4.6-2.2-8.5a1 1 0 0 0-1.3-.4"/>
      <path d="M14.4 5.2a1 1 0 0 0-.2 1.4Q16 9.3 16 12t-1.8 5.4a1 1 0 0 0 1.6 1.2Q18 15.2 18 12t-2.2-6.6a1 1 0 0 0-1.4-.2"/>
    </svg>
  `,
  reload: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="m1.7 7.11 1.33 1.34C3.13 3.69 6.75 0 11.33 0a8.67 8.67 0 1 1 0 17.33 1 1 0 0 1 0-2 6.67 6.67 0 1 0 0-13.33C7.8 2 5.14 4.74 5 8.42l1.34-1.3a1 1 0 1 1 1.41 1.41l-3.02 3.02a1 1 0 0 1-1.42 0L.3 8.53A1 1 0 0 1 1.7 7.11z"/>
    </svg>
  `
};

const internalLibrary: IconLibrary = {
  name: '_internal',
  resolver: (name: keyof typeof icons, element?: HTMLElement) => {
    if (element) {
      const svg = window.getComputedStyle(element).getPropertyValue(`--sd-icon--${name}`);

      if (svg) {
        // @eslint-disable-next-line no-useless-escape
        return `data:image/svg+xml,${encodeURIComponent(svg.replaceAll(`\\`, '').replaceAll('"', "\'"))}`;
      }
    }

    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return '';
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default internalLibrary;
