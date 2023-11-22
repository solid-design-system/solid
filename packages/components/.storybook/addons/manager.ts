import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, PANEL_ID, TOOL_ID } from './constants';
import { Panel } from './theme-generator/Panel';
import { Tool } from './bug-hint/Tool';

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: '🎨 Theme',
    match: ({ viewMode }) => viewMode === 'story',
    render: Panel
  });

  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Bug Hint',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool
  });
});
