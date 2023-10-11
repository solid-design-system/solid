import type { IconLibrary } from './library';

//
// System icons are a separate library to ensure they're always available, regardless of how the default icon library is
// configured or if its icons resolve properly.
//
// All Solid components must use the system library instead of the default library.
// For visual consistency, they are a subset of Union Investment's official icons.
//
export const icons = {
  'status-hook': `
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="status-hook">
        <path id="Vector" d="M9.94746 1.13834L9.94211 1.1463L9.94099 1.14853L4.38142 9.48813L1.94738 7.0416L1.94328 7.03778C1.82752 6.92982 1.67131 6.86348 1.49998 6.86348C1.14113 6.86348 0.849976 7.15463 0.849976 7.51348C0.849976 7.68484 0.916355 7.84122 1.02508 7.95711L1.02843 7.96057L4.02791 10.96C4.14536 11.0775 4.30805 11.1505 4.48748 11.1505H4.54527L4.55303 11.1497C4.75208 11.1289 4.92308 11.0204 5.0277 10.8638L5.03294 10.856L5.03397 10.8539L11.0284 1.86221C11.0979 1.75979 11.1385 1.6342 11.1385 1.50048C11.1385 1.27479 11.0232 1.0759 10.8493 0.95974L10.8415 0.954517L10.8391 0.953343C10.7384 0.887945 10.6171 0.849976 10.4875 0.849976C10.2623 0.849976 10.0641 0.964743 9.94746 1.13834Z" fill="white"/>
      </g>
    </svg>
`,
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
  close: `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.707 2.293a1 1 0 0 0-1.414 0L12 10.586 3.707 2.293a1 1 0 0 0-1.413 1.414l-.001-.001 8.293 8.293-8.293 8.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.413l8.293 8.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-8.293-8.293 8.293-8.293a1 1 0 0 0 0-1.414z"/></svg>
  </svg>
`
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
