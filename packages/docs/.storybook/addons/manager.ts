import { addons, types } from '@storybook/manager-api';
import { ADDON_ID as BUG_HINT, TOOL_ID } from './bug-hint/constants';
import { ADDON_ID as THEME_GENERATOR, PANEL_ID } from './theme-generator/constants';
import { Panel } from './theme-generator/Panel';
import { Tool } from './bug-hint/Tool';

// Register the addon
addons.register(THEME_GENERATOR, () => {
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: '🎨 Theme',
    match: ({ viewMode }) => viewMode === 'story',
    render: Panel
  });
});

addons.register(BUG_HINT, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Bug Hint',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool
  });
});
