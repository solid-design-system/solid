export const themes = [
  { id: 'sd-ui-semantic-light', name: 'UI Semantic Light' },
  { id: 'sd-ui-semantic-dark', name: 'UI Semantic Dark' }
];

export const allModes = themes.reduce((acc, { id, name }) => {
  acc[id] = name;
  return acc;
}, {});
