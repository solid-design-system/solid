import type { IconLibrary } from './library';

const themeMap: Record<string, string> = {
  vb: 'vb',
  bb: 'bbbank',
  sp: 'sparda'
};

function getTheme(element?: HTMLElement) {
  if (element) {
    const cssTheme = getComputedStyle(element).getPropertyValue('--sd-theme').trim().replace(/['"]/g, '');
    return themeMap[cssTheme];
  }
  return null;
}

const toDataUri = (svg: string) =>
  // eslint-disable-next-line no-useless-escape
  `data:image/svg+xml,${encodeURIComponent(svg.replaceAll(`\\`, '').replaceAll('"', "\'"))}`;

//
// Internal icons are a separate library to ensure they're always available, regardless of how the default icon library is
// configured or if its icons resolve properly.
//
// All Solid components must use the internal library instead of the default library.
// For visual consistency, they are a subset of Union Investment's official icons.
//
const internalIcons = {
  calendar:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M6 4v1.667a1 1 0 0 0 2 0V4h8v1.667a1 1 0 0 0 2 0V4h2v4H4V4zM4 20V10h16v10z"/><path fill="currentColor" d="m7.603 13.263.597.81.31-.25c.31-.25.593-.49.733-.63h.017c-.017.333-.033 1.14-.033 1.647V18h1.223v-6.03H9.353zm7.064-1.396c-1.543 0-2.26 1-2.26 3.163 0 1.9.667 3.063 2.217 3.063s2.193-1.18 2.193-3.13c-.017-2.063-.743-3.097-2.15-3.097zm-.044 5.333c-.647 0-1-.76-1-2.28 0-1.44.353-2.173 1-2.173s1 .743 1 2.233-.387 2.227-1.017 2.227z"/></svg>',
  'chevron-bottom':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m20.221 6.292-8.257 9.173-8.257-9.173a1 1 0 0 0-1.485 1.336l-.001-.002 9 10a.997.997 0 0 0 1.486.001l.001-.001 9-10a1 1 0 0 0-1.487-1.333z"/></svg>',
  'chevron-left':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.706 2.329a.997.997 0 0 0-1.41-.076l.001-.001-10 9a.997.997 0 0 0 0 1.486v.001l10 9a1 1 0 0 0 1.333-1.487l-9.173-8.257 9.173-8.257a.997.997 0 0 0 .076-1.41l.001.001"/></svg>',
  'chevron-right':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.652 2.266A1 1 0 1 0 6.316 3.75h.002l9.173 8.258-9.173 8.257a1 1 0 0 0 1.336 1.485h-.002l10-9a.997.997 0 0 0 .001-1.485v-.001z"/></svg>',
  'chevron-sm-left':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.706 6.329a.997.997 0 0 0-1.41-.076l.001-.001-6 5a.997.997 0 0 0 0 1.486v.001l6 5a1 1 0 0 0 1.333-1.487l-5.173-4.257 5.173-4.257a.997.997 0 0 0 .076-1.409"/></svg>',
  'chevron-sm-right':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.652 6.272a1 1 0 1 0-1.336 1.485h.002l5.173 4.258-5.173 4.256a1 1 0 0 0 1.336 1.485l-.002.002 6-5a.997.997 0 0 0 .001-1.486v-.002z"/></svg>',
  'chevron-top':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.706 6.324a1.03 1.03 0 0 0-1.486-.001l-9 10a1 1 0 0 0 1.487 1.333l8.257-9.173 8.257 9.173a1 1 0 0 0 1.485-1.336l.001.002z"/></svg>',
  'chevrons-small-left':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.206 6.329a.997.997 0 0 0-1.41-.076l.001-.001-6 5a.997.997 0 0 0 0 1.486v.001l6 5a1 1 0 0 0 1.333-1.487l-5.173-4.257 5.173-4.257a.997.997 0 0 0 .076-1.409"/><path fill="currentColor" d="M19.206 6.329a.997.997 0 0 0-1.41-.076l.001-.001-6 5a.997.997 0 0 0 0 1.486v.001l6 5a1 1 0 0 0 1.333-1.487l-5.173-4.257 5.173-4.257a.997.997 0 0 0 .076-1.409"/></svg>',
  'chevrons-small-right':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13.152 6.272a1 1 0 1 0-1.336 1.485h.002l5.173 4.258-5.173 4.256a1 1 0 0 0 1.336 1.485l-.002.002 6-5a.997.997 0 0 0 .001-1.486v-.002z"/><path fill="currentColor" d="M6.152 6.272a1 1 0 1 0-1.336 1.485h.002l5.173 4.258-5.173 4.256a1 1 0 0 0 1.336 1.485l-.002.002 6-5a.997.997 0 0 0 .001-1.486v-.002z"/></svg>',
  clock:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.964 11.566V7.979a1 1 0 0 0-2 0v4q0 .105.02.203v-.007a1 1 0 0 0 .029.093l-.002-.006c0 .034 0 .067.03.1a1 1 0 0 0 .055.104l-.002-.003.037.07q.058.084.127.152l2.827 2.83a1.002 1.002 0 0 0 1.417-1.417z"/><path fill="currentColor" d="M11.964 1.979c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m0 18a8 8 0 1 1 0-16.001 8 8 0 0 1 0 16"/></svg>',
  close:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M21.67 2.272a1 1 0 0 0-1.414 0l-8.292 8.293L3.67 2.272a1 1 0 0 0-1.413 1.414l-.001-.001 8.293 8.293-8.293 8.293a1 1 0 0 0 1.414 1.414l8.293-8.293 8.293 8.293a1 1 0 0 0 1.414-1.414l-8.293-8.293 8.293-8.293a1 1 0 0 0 0-1.414z"/></svg>',
  'close-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.964 1.972c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m0 18a8 8 0 1 1 0-16.001 8 8 0 0 1 0 16"/><path fill="currentColor" d="M16.337 7.599a1 1 0 0 0-1.414 0l-2.96 2.96-2.96-2.96A1 1 0 0 0 7.59 9.013l-.001-.001 2.96 2.96-2.96 2.96a1 1 0 0 0 1.414 1.414l2.96-2.96 2.96 2.96a1 1 0 0 0 1.414-1.414l-2.96-2.96 2.96-2.96a1 1 0 0 0 0-1.414"/></svg>',
  'confirm-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.964 1.973c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m0 18a8 8 0 1 1 0-16.001 8 8 0 0 1 0 16"/><path fill="currentColor" d="M15.807 7.446a1 1 0 0 0-1.367.329l-.002.004-3.667 6.223-1.757-1.753A1 1 0 0 0 7.6 13.663l-.001-.001 2.667 2.667a1 1 0 0 0 .695.31h.128a1 1 0 0 0 .73-.48l.004-.004 4.333-7.333a1 1 0 0 0-.345-1.374l-.005-.003"/></svg>',
  'exclamation-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.964 16.973a1 1 0 1 1-2-.001 1 1 0 0 1 2 0m-1-10.999a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1"/><path fill="currentColor" d="M11.964 1.973c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m0 18a8 8 0 1 1 0-16.001 8 8 0 0 1 0 16"/></svg>',
  'eye-crossed-out':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.964 16.078a4.11 4.11 0 0 1-4.107-4.106 4.11 4.11 0 0 1 4.107-4.107 4.11 4.11 0 0 1 4.106 4.107 4.11 4.11 0 0 1-4.106 4.106m0-6.21a2.107 2.107 0 1 0 0 4.213 2.107 2.107 0 0 0 0-4.213"/><path fill="currentColor" d="M11.964 18.932c-5.263 0-10-5.68-10-6.96s4.737-6.96 10-6.96 10 5.68 10 6.96-4.737 6.96-10 6.96m-7.9-6.96c.76 1.197 4.07 4.96 7.9 4.96s7.14-3.767 7.9-4.96c-.76-1.197-4.07-4.96-7.9-4.96s-7.14 3.766-7.9 4.96"/><path fill="currentColor" d="M2.964 21.972a1 1 0 0 1-.707-1.707l18-18a1 1 0 0 1 1.413 1.413l-18 18a1 1 0 0 1-.706.294"/></svg>',
  'eye-open':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.964 18.939c-5.263 0-10-5.68-10-6.96s4.737-6.96 10-6.96 10 5.68 10 6.96-4.737 6.96-10 6.96m-7.9-6.96c.76 1.196 4.07 4.96 7.9 4.96s7.14-3.767 7.9-4.96c-.76-1.197-4.07-4.96-7.9-4.96s-7.14 3.766-7.9 4.96"/><path fill="currentColor" d="M11.964 16.085a4.11 4.11 0 0 1-4.107-4.106 4.11 4.11 0 0 1 4.107-4.107 4.11 4.11 0 0 1 4.106 4.107 4.11 4.11 0 0 1-4.106 4.106m0-6.21a2.107 2.107 0 1 0 0 4.213 2.107 2.107 0 0 0 0-4.213"/></svg>',
  'info-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.964 10.64a1 1 0 0 1 1 1v3.666h1l.102.005a1.001 1.001 0 0 1-.102 1.995h-4a1 1 0 0 1 0-2h1V12.64a1 1 0 0 1 0-2zm-.167-4.334a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3"/><path fill="currentColor" fill-rule="evenodd" d="M11.964 1.973a10 10 0 0 1 9.987 9.485 10 10 0 0 1 0 1.03c-.268 5.283-4.637 9.485-9.987 9.485-5.523 0-10-4.477-10-10s4.477-10 10-10m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clip-rule="evenodd"/></svg>',
  'magnifying-glass':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m21.733 20.314-6.967-6.96a1 1 0 0 0-.15-.124l-.004-.002A6.98 6.98 0 0 0 16.025 9a7.027 7.027 0 1 0-2.783 5.6l-.017.014q.059.085.127.153l6.967 6.967a1 1 0 0 0 1.71-.71 1 1 0 0 0-.296-.71M9.026 14.02a5 5 0 1 1 .001-10 5 5 0 0 1 0 10"/></svg>',
  'minus-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.464 10.973h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2"/><path fill="currentColor" d="M11.964 1.973c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m0 18a8 8 0 1 1 0-16.001 8 8 0 0 1 0 16"/></svg>',
  mute: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.681 4.049a1 1 0 0 0-1.09.217L5.884 7.973h-2.92a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.92l3.707 3.707a1 1 0 0 0 .707.293h.007a1 1 0 0 0 .382-.08l-.006.003c.365-.154.617-.51.617-.923v-14a1 1 0 0 0-.61-.921zM3.964 9.972h1.333v4H3.964zm5.333 6.587-2-2V9.386l2-2zm12.374-8.96a1 1 0 0 0-1.414 0l-2.96 2.96-2.96-2.96a1 1 0 0 0-1.413 1.414v-.001l2.96 2.96-2.96 2.96a1 1 0 0 0 1.414 1.414l2.96-2.96 2.96 2.96a1 1 0 0 0 1.414-1.414l-2.96-2.96 2.96-2.96a1 1 0 0 0 0-1.414"/></svg>',
  pause:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M8.964 21.973a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zm-3-18h2v16h-2zm13 18a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zm-3-18h2v16h-2z"/></svg>',
  play: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m20.54 11.158-14-9a1 1 0 0 0-1.54.84v18a1 1 0 0 0 1.544.838l-.004.002 14-9a1 1 0 0 0 .003-1.664l-.004-.002zM7 19.165V4.832l11.15 7.167z"/></svg>',
  'plus-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.464 10.973h-3.5v-3.5a1 1 0 0 0-2 0v3.5h-3.5a1 1 0 0 0 0 2h3.5v3.5a1 1 0 0 0 2 0v-3.5h3.5a1 1 0 0 0 0-2"/><path fill="currentColor" d="M11.964 1.973c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m0 18a8 8 0 1 1 0-16.001 8 8 0 0 1 0 16"/></svg>',
  reload:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m3.665 10.42 1.333 1.332c.1-4.76 3.717-8.447 8.303-8.447a8.667 8.667 0 0 1 0 17.334 1 1 0 0 1 0-2 6.667 6.667 0 0 0 0-13.334c-3.533 0-6.207 2.743-6.333 6.42l1.333-1.307a1 1 0 0 1 1.414 1.417l-3.023 3.023a.996.996 0 0 1-1.416 0l-3.023-3.023a1.002 1.002 0 0 1 1.417-1.417z"/></svg>',
  risk: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.857 2.525a1.002 1.002 0 0 0-1.784-.006L2.07 20.525a1 1 0 0 0 .894 1.447h18a1 1 0 0 0 .89-1.452l.004.006zM4.58 19.972l7.383-14.763 7.383 14.763z"/><path fill="currentColor" d="M10.964 10.639v4.333a1 1 0 0 0 2 0v-4.333a1 1 0 0 0-2 0m2 7.333a1 1 0 1 1-2-.001 1 1 0 0 1 2 0"/></svg>',
  transcript:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 .707.293l5 5c.186.187.293.444.293.707v13a1 1 0 0 1-1 1M6 20h12V8.413L13.587 4H6z"/><path fill="currentColor" d="M19 10h-6a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2m-3 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2m-2 4H8a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2"/></svg>',
  upload:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M18.964 10.973a.96.96 0 0 1-.7-.3l-5.3-5.3v11.6c0 .566-.434 1-1 1s-1-.434-1-1v-11.6l-5.3 5.3c-.4.4-1.033.4-1.4 0-.4-.4-.4-1.034 0-1.4l7-7c.4-.4 1.033-.4 1.4 0l7 7c.4.4.4 1.033 0 1.4q-.3.3-.7.3"/><path fill="currentColor" d="M3.964 20.972c0 .567.433 1 1 1h14c.567 0 1-.433 1-1v-2.666c0-.567-.433-1-1-1s-1 .433-1 1v1.666h-12v-1.666c0-.567-.433-1-1-1s-1 .433-1 1z"/></svg>',
  volume:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.68 4.049a1 1 0 0 0-1.09.217L5.883 7.973h-2.92a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.92L9.59 19.68a1 1 0 0 0 .707.293h.007a1 1 0 0 0 .382-.08l-.006.003c.365-.154.617-.51.617-.923v-14a1 1 0 0 0-.61-.921zM3.963 9.972h1.333v4H3.963zm5.333 6.587-2-2V9.386l2-2zm9.217-13.48a1 1 0 0 0-.44 1.339l-.003-.006c1.177 2.19 1.876 4.792 1.893 7.555v.005a16.36 16.36 0 0 1-1.936 7.638l.043-.088a1 1 0 0 0 .438 1.331l.006.003c.13.07.285.114.45.117a1 1 0 0 0 .89-.544l.003-.006c1.312-2.45 2.09-5.357 2.107-8.445v-.005c-.017-3.093-.794-6-2.155-8.55l.048.1a1 1 0 0 0-1.349-.44z"/><path fill="currentColor" d="M14.41 5.139a1 1 0 0 0-.278 1.39l-.002-.004c1.183 1.78 1.833 3.713 1.833 5.447s-.667 3.667-1.833 5.447a1 1 0 0 0 1.664 1.11l.002-.004c1.397-2.103 2.167-4.433 2.167-6.553s-.77-4.45-2.167-6.553a1 1 0 0 0-1.39-.278z"/></svg>'
} as const;

export const icons = Object.fromEntries(
  Object.entries(internalIcons).sort(([left], [right]) => left.localeCompare(right))
) as typeof internalIcons;

const internalLibrary: IconLibrary = {
  name: '_internal',
  resolver: (name: keyof typeof icons, element?: HTMLElement) => {
    const cssVariableIcon = element
      ? window.getComputedStyle(element).getPropertyValue(`--sd-icon--${name}`).trim()
      : null;

    // If defined as a CSS variable
    if (cssVariableIcon) return toDataUri(cssVariableIcon);

    // If not a CSS variable, checks if its themed
    const theme = getTheme(element);
    if (theme) {
      return `https://celum-icons.fe.union-investment.de/${theme}/internal/${name}.svg`;
    }

    // Uses internal library
    if (name in icons) return toDataUri(icons[name]);

    return '';
  },
  mutator: svg => {
    const recoloredElements = {
      currentColorFills: [] as unknown as NodeListOf<SVGElement>,
      currentColorStrokes: [] as unknown as NodeListOf<SVGElement>,
      accentFills: [] as unknown as NodeListOf<SVGElement>,
      accentStrokes: [] as unknown as NodeListOf<SVGElement>
    };

    const currentColors = ['#00358e', '#002d67', '#005ca9', '#005AAA', '#051530'];
    const accentColors = ['#2d9d00', '#f35e01'];

    recoloredElements.currentColorFills = svg.querySelectorAll(
      currentColors.map(color => `[fill="${color}" i]`).join(', ')
    );
    recoloredElements.currentColorStrokes = svg.querySelectorAll(
      currentColors.map(color => `[stroke="${color}" i]`).join(', ')
    );
    recoloredElements.accentFills = svg.querySelectorAll(accentColors.map(color => `[fill="${color}" i]`).join(', '));
    recoloredElements.accentStrokes = svg.querySelectorAll(
      accentColors.map(color => `[stroke="${color}" i]`).join(', ')
    );

    recoloredElements.currentColorFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'currentColor');
    });

    recoloredElements.currentColorStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'currentColor');
    });

    recoloredElements.accentFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'rgb(var(--sd-color-icon-fill-accent, 45 157 0))');
    });

    recoloredElements.accentStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'rgb(var(--sd-color-icon-fill-accent, 45 157 0))');
    });

    // Keep monochrome SVGs aligned to host text color when they don't define own fills/strokes.
    if (!svg.querySelector('[fill], [stroke]')) {
      svg.setAttribute('fill', 'currentColor');
    }
  }
};

export default internalLibrary;
