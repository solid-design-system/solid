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
  start: `
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.54 11.16-14-9c-.153-.099-.339-.158-.54-.158-.552 0-.999.447-1 .998v18c0 .552.448 1 1 1 .201-.001.387-.06.544-.162l-.004.002 14-9c.271-.182.447-.487.447-.833s-.176-.652-.444-.831l-.004-.002zm-13.54 8.007v-14.333l11.15 7.167z"/></svg>
  `,
  pause: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22a.99997.99997 0 0 0 1-1V3a1.00003 1.00003 0 0 0-1-1H5a1.00003 1.00003 0 0 0-1 1v18a.99997.99997 0 0 0 1 1h4ZM6 4h2v16H6V4ZM19 22c.2652 0 .5196-.1054.7071-.2929A1.0001 1.0001 0 0 0 20 21V3a.99997.99997 0 0 0-1-1h-4a.99997.99997 0 0 0-1 1v18c0 .2652.1054.5196.2929.7071S14.7348 22 15 22h4ZM16 4h2v16h-2V4Z"/>
      </svg>
<<<<<<< Updated upstream
  `
=======
  `,
  close: `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.707 2.293a1 1 0 0 0-1.414 0L12 10.586 3.707 2.293a1 1 0 0 0-1.413 1.414l-.001-.001 8.293 8.293-8.293 8.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.413l8.293 8.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-8.293-8.293 8.293-8.293a1 1 0 0 0 0-1.414z"/></svg>
  </svg>
`
>>>>>>> Stashed changes
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
