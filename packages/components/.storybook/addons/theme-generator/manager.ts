import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, PANEL_ID, TAB_ID } from './constants';
import { Panel } from './Panel';
import { Tab } from './Tab';

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: '🎨 Theme',
    match: ({ viewMode }) => viewMode === 'story',
    render: Panel
  });

  // Register the tab
  addons.add(TAB_ID, {
    type: types.TAB,
    title: 'Did you find a bug?',
    //👇 Checks the current route for the story
    route: ({ storyId }) => `/myaddon/${storyId}`,
    //👇 Shows the Tab UI element in myaddon view mode
    match: ({ viewMode }) => viewMode === 'myaddon',
    render: Tab
  });
});
