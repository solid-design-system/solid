// .storybook/manager.js

import { addons } from '@storybook/addons';
import solidTheme from './solid-theme';

addons.setConfig({
  theme: solidTheme,
  sidebar: {
    showRoots: false
  }
});
