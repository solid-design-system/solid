// Icon categories fetched per Celum-tracked icon library (same for every theme within a library).
export const LIBRARY_ICON_TYPES: Record<string, string[]> = {
  default: ['content', 'system'],
  'sd-multi-theming': ['content', 'system'],
  'sd-internal': ['internal'],
  // not fetched from Celum – listed here for consistency only.
  'sd-status-assets': []
};

// Icon theme key -> icon libraries it belongs to. Kept in sync manually with `iconLibraries` in
// theme-attributes.ts (not imported) so this file has no relative import for Node to resolve at runtime.
const ICON_THEME_LIBRARIES: Record<string, string[]> = {
  'union-investment': ['default', 'sd-multi-theming'],
  vb: ['sd-multi-theming', 'sd-internal'],
  sp: ['sd-multi-theming', 'sd-internal'],
  bb: ['sd-multi-theming', 'sd-internal']
};

export const LIBRARIES: Record<string, { themes: string[]; iconTypes: string[] }> = Object.fromEntries(
  Object.keys(LIBRARY_ICON_TYPES).map(library => [
    library,
    {
      themes: Object.entries(ICON_THEME_LIBRARIES)
        .filter(([, libraries]) => libraries.includes(library))
        .map(([key]) => key),
      iconTypes: LIBRARY_ICON_TYPES[library]
    }
  ])
);
