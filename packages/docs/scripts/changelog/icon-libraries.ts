import { iconThemes } from '../../.storybook/addons/theme-generator/theme-attributes';

// Icon categories fetched per Celum-tracked icon library (same for every theme within a library).
export const LIBRARY_ICON_TYPES: Record<string, string[]> = {
  default: ['content', 'system'],
  'sd-multi-theming': ['content', 'system'],
  'sd-internal': ['internal'],
  // not fetched from Celum – listed here for consistency only.
  'sd-status-assets': []
};

export const LIBRARIES: Record<string, { themes: string[]; iconTypes: string[] }> = Object.fromEntries(
  Object.keys(LIBRARY_ICON_TYPES).map(library => [
    library,
    {
      themes: Object.entries(iconThemes)
        .filter(([, attrs]) => attrs.iconLibraries.includes(library))
        .map(([key]) => key),
      iconTypes: LIBRARY_ICON_TYPES[library]
    }
  ])
);
