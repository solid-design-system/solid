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
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m20.264 6.307-8.257 9.173L3.75 6.307a1 1 0 0 0-1.485 1.336l-.001-.002 9 10a.997.997 0 0 0 1.486 0h.001l9-10a1 1 0 0 0-1.487-1.333z"/></svg>',
  'chevron-left':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.742 2.308a.997.997 0 0 0-1.41-.076l.001-.001-10 9a.997.997 0 0 0 0 1.486l10 9a1 1 0 0 0 1.333-1.487l-9.173-8.256 9.173-8.257a.997.997 0 0 0 .076-1.41h.001"/></svg>',
  'chevron-right':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.67 2.259a.997.997 0 0 0-1.709.707c0 .315.145.595.372.778h.002l9.173 8.258-9.173 8.257a1 1 0 0 0 1.336 1.485H7.67l10-9a.997.997 0 0 0 .001-1.485v-.001z"/></svg>',
  'chevron-sm-left':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.742 6.333a.997.997 0 0 0-1.41-.076l.001-.001-6 5a.997.997 0 0 0-.001 1.486l.001.001 6 5a1 1 0 0 0 1.333-1.487l-5.173-4.257 5.173-4.257a.997.997 0 0 0 .076-1.409"/></svg>',
  'chevron-sm-right':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.69 6.259a.997.997 0 0 0-1.708.707c0 .315.145.595.372.778h.002l5.173 4.258-5.173 4.257a1 1 0 0 0 1.336 1.485h-.002l6-5a.997.997 0 0 0 .001-1.485v-.001z"/></svg>',
  'chevron-top':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.735 6.352a1.03 1.03 0 0 0-1.486 0l-9 10a1 1 0 0 0 1.487 1.333l8.257-9.174 8.257 9.173a1 1 0 0 0 1.485-1.336v.002z"/></svg>',
  'chevrons-small-left':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.739 6.332a.997.997 0 0 0-1.41-.076h.001l-6 5a.997.997 0 0 0-.001 1.486h.001l6 5a1 1 0 0 0 1.333-1.487L6.49 12l5.173-4.258a.997.997 0 0 0 .076-1.409"/><path fill="currentColor" d="M18.739 6.332a.997.997 0 0 0-1.41-.076h.001l-6 5a.997.997 0 0 0-.001 1.486h.001l6 5a1 1 0 0 0 1.333-1.487L13.49 12l5.173-4.258a.997.997 0 0 0 .076-1.409"/></svg>',
  'chevrons-small-right':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13.72 6.259a.997.997 0 0 0-1.708.707c0 .315.145.595.372.778h.002l5.173 4.258-5.173 4.257a1 1 0 0 0 1.336 1.485h-.002l6-5a.997.997 0 0 0 .001-1.485v-.001z"/><path fill="currentColor" d="M6.72 6.259a.997.997 0 0 0-1.708.707c0 .315.145.595.372.778h.002l5.173 4.258-5.173 4.257a1 1 0 0 0 1.336 1.485H6.72l6-5a.997.997 0 0 0 .001-1.485v-.001z"/></svg>',
  clock:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13 11.587V8a1 1 0 0 0-2 0v4q0 .105.021.203l-.001-.006a1 1 0 0 0 .029.093l-.002-.006c0 .033 0 .067.03.1a1 1 0 0 0 .055.103l-.002-.003.037.07q.059.085.127.153l2.827 2.83a1 1 0 0 0 1.71-.709 1 1 0 0 0-.293-.708z"/><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/></svg>',
  close:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M21.707 2.293a.996.996 0 0 0-1.414 0L12 10.587 3.707 2.292a.997.997 0 0 0-1.682.732c0 .264.102.504.269.682h-.001L10.586 12l-8.293 8.293a.996.996 0 0 0 0 1.413.996.996 0 0 0 1.414 0L12 13.414l8.293 8.292a.996.996 0 0 0 1.414 0 .996.996 0 0 0 0-1.413L13.414 12l8.293-8.294a.996.996 0 0 0 0-1.414z"/></svg>',
  'close-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/><path fill="currentColor" d="M16.373 7.627a.996.996 0 0 0-1.414 0l-2.96 2.96-2.96-2.96a.997.997 0 0 0-1.682.732c0 .264.102.504.269.682l-.001-.001 2.96 2.96-2.96 2.96a.996.996 0 0 0 0 1.414.996.996 0 0 0 1.414 0l2.96-2.96 2.96 2.96a.996.996 0 0 0 1.414 0 .996.996 0 0 0 0-1.414L13.413 12l2.96-2.96a.996.996 0 0 0 0-1.414z"/></svg>',
  'confirm-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/><path fill="currentColor" d="M15.843 7.473a1 1 0 0 0-1.367.329l-.002.004-3.667 6.223-1.757-1.753a.997.997 0 0 0-1.682.732c0 .264.102.504.269.682l-.001-.001 2.667 2.667a1 1 0 0 0 .695.31h.128c.314-.042.578-.223.731-.479l.003-.005 4.333-7.333a1 1 0 0 0-.345-1.374z"/></svg>',
  'exclamation-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 6a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"/><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/></svg>',
  'eye-crossed-out':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16.156a4.11 4.11 0 0 1-4.107-4.106A4.11 4.11 0 0 1 12 7.943a4.11 4.11 0 0 1 4.107 4.107A4.11 4.11 0 0 1 12 16.156m0-6.21a2.109 2.109 0 0 0 0 4.214 2.107 2.107 0 0 0 0-4.214"/><path fill="currentColor" d="M12 19.01c-5.263 0-10-5.68-10-6.96s4.737-6.96 10-6.96 10 5.68 10 6.96-4.737 6.96-10 6.96m-7.9-6.96c.76 1.196 4.07 4.96 7.9 4.96s7.14-3.767 7.9-4.96c-.76-1.197-4.07-4.96-7.9-4.96s-7.14 3.766-7.9 4.96"/><path fill="currentColor" d="M3 22.05a1 1 0 0 1-.707-1.707l18-18a1 1 0 0 1 1.414 1.413l-18 18A1 1 0 0 1 3 22.05"/></svg>',
  'eye-open':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18.96c-5.263 0-10-5.68-10-6.96s4.737-6.96 10-6.96S22 10.72 22 12s-4.737 6.96-10 6.96M4.1 12c.76 1.197 4.07 4.96 7.9 4.96s7.14-3.767 7.9-4.96c-.76-1.197-4.07-4.96-7.9-4.96S4.86 10.807 4.1 12"/><path fill="currentColor" d="M12 16.107A4.11 4.11 0 0 1 7.893 12 4.11 4.11 0 0 1 12 7.893 4.11 4.11 0 0 1 16.107 12 4.11 4.11 0 0 1 12 16.107m0-6.21a2.109 2.109 0 0 0 0 4.213 2.107 2.107 0 0 0 0-4.213"/></svg>',
  'info-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.667a1 1 0 0 1 1 1v3.666h1l.102.005A1 1 0 0 1 14 17.333h-4a1 1 0 0 1 0-2h1v-2.666a1 1 0 0 1 0-2zm-.167-4.334a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 .001-3.001"/><path fill="currentColor" fill-rule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clip-rule="evenodd"/></svg>',
  'magnifying-glass':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m21.726 20.357-6.967-6.96a1 1 0 0 0-.15-.124l-.004-.002a7.027 7.027 0 1 0-1.37 1.374l-.017.013q.057.085.127.153l6.967 6.967a.996.996 0 0 0 1.414 0 .995.995 0 0 0 0-1.42zM9.019 14.064A5 5 0 1 1 9.02 4.063a5 5 0 0 1-.001 10"/></svg>',
  'minus-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 11h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2"/><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/></svg>',
  mute: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.718 4.075a1 1 0 0 0-1.09.217L5.921 7.999h-2.92a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.92l3.707 3.707a1 1 0 0 0 .707.293h.007a1 1 0 0 0 .382-.079l-.006.002c.365-.154.617-.509.617-.923v-14a1 1 0 0 0-.61-.921zM4.001 9.998h1.333v4H4.001zm5.333 6.587-2-2V9.412l2-2zm12.374-8.96a.996.996 0 0 0-1.414 0l-2.96 2.96-2.96-2.96a.997.997 0 0 0-1.682.732c0 .264.102.504.269.682l-.001-.001 2.96 2.96-2.96 2.96a.996.996 0 0 0 0 1.414.996.996 0 0 0 1.414 0l2.96-2.96 2.96 2.96a.996.996 0 0 0 1.414 0 .996.996 0 0 0 0-1.414l-2.96-2.96 2.96-2.96a.996.996 0 0 0 0-1.414z"/></svg>',
  pause:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9 22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zM6 4h2v16H6zm13 18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zM16 4h2v16h-2z"/></svg>',
  play: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m21.534 11.18-14-9a1 1 0 0 0-1.54.84v18a1 1 0 0 0 1.544.838l-.004.002 14-9a1 1 0 0 0 .003-1.665l-.004-.002zm-13.54 8.006V4.853l11.15 7.168z"/></svg>',
  'plus-circle':
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 11H13V7.5a1 1 0 0 0-2 0V11H7.5a1 1 0 0 0 0 2H11v3.5a1 1 0 0 0 2 0V13h3.5a1 1 0 0 0 0-2"/><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16"/></svg>',
  reload:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m3.665 10.42 1.333 1.332c.1-4.76 3.717-8.447 8.303-8.447a8.667 8.667 0 0 1 0 17.334 1 1 0 0 1 0-2 6.667 6.667 0 0 0 0-13.334c-3.533 0-6.207 2.743-6.333 6.42l1.333-1.307a1 1 0 0 1 1.414 1.417l-3.023 3.023a.996.996 0 0 1-1.416 0l-3.023-3.023a1 1 0 0 1 .709-1.71c.277 0 .527.112.708.293z"/></svg>',
  risk: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.918 2.57a1.002 1.002 0 0 0-1.784-.005L2.13 20.57a1 1 0 0 0 .894 1.447h18a1 1 0 0 0 .89-1.451l.004.006zM4.642 20.018l7.383-14.762 7.383 14.763z"/><path fill="currentColor" d="M11.025 10.685v4.333a1 1 0 0 0 2 0v-4.334a1 1 0 0 0-2 0m2 7.334a1 1 0 1 1-2-.001 1 1 0 0 1 2 0"/></svg>',
  transcript:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 .707.293l5 5c.186.187.293.444.293.707v13a1 1 0 0 1-1 1M6 20h12V8.413L13.587 4H6z"/><path fill="currentColor" d="M19 10h-6a1 1 0 0 1-1-1V3a.999.999 0 1 1 2 0v5h5a.999.999 0 1 1 0 2m-3 4H8a.999.999 0 1 1 0-2h8a.999.999 0 1 1 0 2m-2 4H8a.999.999 0 1 1 0-2h6a.999.999 0 1 1 0 2"/></svg>',
  upload:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M18.96 10.97a.96.96 0 0 1-.7-.3l-5.3-5.3v11.6c0 .567-.433 1-1 1s-1-.433-1-1V5.37l-5.3 5.3c-.4.4-1.033.4-1.4 0a.966.966 0 0 1 0-1.4l7-7c.4-.4 1.033-.4 1.4 0l7 7c.4.4.4 1.034 0 1.4q-.3.3-.7.3"/><path fill="currentColor" d="M3.96 20.97c0 .567.433 1 1 1h14c.567 0 1-.433 1-1v-2.666c0-.567-.433-1-1-1s-1 .433-1 1v1.666h-12v-1.666c0-.567-.433-1-1-1s-1 .433-1 1z"/></svg>',
  volume:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.717 4.097a1 1 0 0 0-1.09.217L5.92 8.02H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.92l3.707 3.706a1 1 0 0 0 .707.293h.007a1 1 0 0 0 .382-.078l-.007.002c.366-.154.618-.51.618-.924v-14a1 1 0 0 0-.61-.92zM4 10.02h1.333v4H4zm5.333 6.587-2-2V9.434l2-2zm9.217-13.48a1 1 0 0 0-.44 1.339l-.003-.006A16.2 16.2 0 0 1 20 12.015v.005a16.36 16.36 0 0 1-1.936 7.637l.043-.087a1 1 0 0 0 .438 1.331l.005.003a1 1 0 0 0 .45.116 1 1 0 0 0 .89-.543l.003-.006A18.15 18.15 0 0 0 22 12.026v-.005c-.017-3.093-.794-6-2.154-8.55l.047.1a1 1 0 0 0-1.349-.44z"/><path fill="currentColor" d="M14.447 5.187a1 1 0 0 0-.278 1.39l-.003-.004C15.35 8.353 16 10.286 16 12.02s-.667 3.667-1.833 5.447a1 1 0 0 0 1.664 1.11l.002-.004C17.23 16.469 18 14.14 18 12.02s-.77-4.45-2.168-6.553a1 1 0 0 0-1.39-.278z"/></svg>'
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
