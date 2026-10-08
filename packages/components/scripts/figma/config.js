/** All maps below use Figma names as keys and code/export names as values. */

/** Fixed Figma file key from /design/<key> in its URL. Change it here if the icon library moves. */
export const fileId = 'hXMcJwfG2u2K6jy7kjtrd2';

/** Figma page node ID: URL node-id=0-1 becomes 0:1. Recorded in reports; selection uses pageName. */
export const pageId = '0:1';

/** Exact Figma page name used by figma-export-assets to find the icon collections. */
export const pageName = 'Theming Icons and Assets';

/**
 * Keys: Figma's `set` variant values. Values: CELUM/CDN folder names, not CSS theme IDs.
 * Example: `set=BB` exports to `bbbank/`. UI bundled icons are handled separately.
 */
export const figmaThemeToFolder = { VB: 'vb', BB: 'bbbank', SP: 'sparda' };

/**
 * Keys: exact Figma component-set name prefixes. Values: code categories.
 * Example: `theming/content-icons/image` becomes category `content` with icon name `image`.
 */
export const figmaPrefixToCategory = {
  'theming/system-icons/': 'system',
  'theming/content-icons/': 'content',
  'theming/status-icons/': 'status'
};

/**
 * Allowlisted runtime names for `_internal` and its SVG filenames, not Figma names.
 * This is a list, not a mapping. Figma names match directly unless figmaInternalToCode provides an alias.
 */
export const internalNames = [
  'calendar',
  'chevron-bottom',
  'chevron-top',
  'chevron-right',
  'chevron-left',
  'chevron-sm-right',
  'chevron-sm-left',
  'chevrons-small-left',
  'chevrons-small-right',
  'clock',
  'close',
  'close-circle',
  'eye-open',
  'eye-crossed-out',
  'info-circle',
  'minus-circle',
  'pause',
  'plus-circle',
  'risk',
  'play',
  'confirm-circle',
  'exclamation-circle',
  'magnifying-glass',
  'transcript',
  'mute',
  'volume',
  'reload',
  'upload'
];

/**
 * Figma system-icon suffix (key) -> runtime `_internal` name (value).
 * Selects `theming/system-icons/warning` in Figma and keeps `risk` in code.
 * Public system exports keep the Figma name; names not listed here match directly.
 */
export const figmaInternalToCode = { warning: 'risk' };

/**
 * Figma status-icon suffix (key) -> runtime `sd-status-assets` name (value).
 * Maps every required status icon, not just exceptions: `theming/status-icons/check`
 * in Figma becomes `status-check` in code and `status-check.svg` in the bundled export.
 */
export const figmaStatusToCode = {
  check: 'status-check',
  exclamation: 'status-exclamation',
  close: 'status-close',
  info: 'status-info',
  clock: 'status-clock',
  minus: 'status-minus',
  'question-mark': 'status-questionmark'
};
