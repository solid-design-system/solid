import type { IconLibrary } from './library';

//
// System icons are a separate library to ensure they're always available, regardless of how the default icon library is
// configured or if its icons resolve properly.
//
// All Solid components must use the system library instead of the default library.
// For visual consistency, they are a subset of Union Investment's official icons.
//
export const icons = {
  'chevron-down': `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M20.257 6.333l-8.257 9.173-8.257-9.173c-0.181-0.181-0.431-0.292-0.707-0.292-0.552 0-1 0.448-1 1 0 0.238 0.083 0.456 0.222 0.628l-0.001-0.002 9 10c0.184 0.204 0.449 0.331 0.743 0.331s0.56-0.127 0.743-0.33l0.001-0.001 9-10c0.137-0.17 0.22-0.388 0.22-0.626 0-0.552-0.448-1-1-1-0.276 0-0.526 0.112-0.707 0.293v0z"></path>
    </svg>
  `,
  'chevron-up': `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12.743 6.333c-0.188-0.195-0.452-0.316-0.743-0.316s-0.555 0.121-0.743 0.315l-0 0-9 10c-0.137 0.17-0.22 0.388-0.22 0.626 0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293v0l8.257-9.173 8.257 9.173c0.181 0.181 0.431 0.292 0.707 0.292 0.552 0 1-0.448 1-1 0-0.238-0.083-0.456-0.222-0.628l0.001 0.002z"></path>
    </svg>
  `,
  'info-sign': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path fill="#00358E" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8Z"/><path fill="#00358E" d="M13.333 7.833c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5ZM13 11.667c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1s.448 1 1 1v2.667h2v-3.667Z"/><path fill="#00358E" d="M11 16.333v-1h-1c-.552 0-1 .448-1 1s.448 1 1 1h2c-.552 0-1-.448-1-1ZM14 15.333h-1v1c0 .552-.448 1-1 1h2c.552 0 1-.448 1-1s-.448-1-1-1Z"/><path fill="#00358E" d="M13 16.333v-1h-2v1c0 .552.448 1 1 1s1-.448 1-1Z"/>
    </svg>`
};

const systemLibrary: IconLibrary = {
  name: 'system',
  resolver: (name: keyof typeof icons) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return '';
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default systemLibrary;
