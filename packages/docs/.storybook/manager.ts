// .storybook/manager.js

import { addons } from 'storybook/manager-api';
import solidTheme from './solid-theme';

addons.setConfig({
  theme: solidTheme,
  sidebar: {
    showRoots: true
  }
});
