import type { IconLibrary } from './library';

//
// Status icons are a separate library to ensure they're always available, regardless of how the default icon library is
// configured or if its icons resolve properly.
//
// This library is for exclusive use with the `sd-status-badge` component.
//
export const icons = {
  'status-check': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
      <path d="M9.202 2.228a.832.832 0 0 0-1.14.274v.003L5.006 7.691 3.542 6.23a.834.834 0 0 0-1.178 1.178L4.586 9.63a.83.83 0 0 0 .579.258h.107a.836.836 0 0 0 .609-.399l.002-.004 3.611-6.11a.833.833 0 0 0-.287-1.145l-.005-.002Z"/>
    </svg>
  `,
  'status-exclamation': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
      <path d="M6.833 10.167a.834.834 0 1 1-1.667 0 .834.834 0 0 1 1.667 0ZM6 1a.834.834 0 0 0-.833.833v5a.834.834 0 0 0 1.666 0v-5A.834.834 0 0 0 6 1Z"/>
    </svg>
  `,
  'status-close': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
      <path d="M9.645 2.355a.834.834 0 0 0-1.178 0L6 4.822 3.533 2.355a.834.834 0 0 0-1.178 1.178L4.823 6 2.355 8.466a.834.834 0 0 0 1.178 1.178L6 7.179l2.467 2.467a.834.834 0 0 0 1.178-1.178L7.178 6l2.467-2.467a.83.83 0 0 0 0-1.178Z"/>
    </svg>
  `,
  'status-info': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
      <path d="M5.862 3.927A1.244 1.244 0 1 0 5.86 1.44a1.244 1.244 0 0 0 0 2.488Zm.968 1.935A.83.83 0 0 0 6 5.033h-.829a.83.83 0 0 0 0 1.658v2.21h-.83a.83.83 0 0 0 0 1.659h3.317a.83.83 0 0 0 0-1.658H6.83v-3.04Z"/>
    </svg>
  `,
  'status-clock': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
      <path d="M6.01 5.656v-3.99a.834.834 0 0 0-1.667 0V6c0 .058.006.115.018.17l-.001-.006c.007.03.015.054.024.078l-.002-.005c0 .027 0 .056.025.083a.59.59 0 0 0 .046.086l-.001-.003.03.059c.034.047.068.089.106.127l3.356 3.359a.835.835 0 0 0 1.18-1.18L6.01 5.655Z"/>
    </svg>
  `,
  'status-minus': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
      <path d="M9.76 5.333h-7.5A.834.834 0 0 0 2.26 7h7.5a.834.834 0 0 0 0-1.667Z"/>
    </svg>
  `,
  'status-questionmark': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
      <path d="M6.843 10.167a.834.834 0 1 1-1.667 0 .834.834 0 0 1 1.667 0ZM6.01 1a2.777 2.777 0 0 0-2.778 2.777.834.834 0 0 0 1.667 0 1.111 1.111 0 0 1 2.222 0c0 .24-.517.792-.834 1.111-.555.586-1.11 1.192-1.11 1.944v.015a.834.834 0 0 0 1.666.014c.196-.316.416-.59.666-.833.6-.64 1.278-1.362 1.278-2.262A2.777 2.777 0 0 0 6.01 1Z"/>
    </svg>
  `
};

const statusLibrary: IconLibrary = {
  name: 'sd-status-assets',
  resolver: (name: keyof typeof icons) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return '';
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default statusLibrary;
