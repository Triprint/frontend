import { addons } from '@storybook/addons';

import { lightTheme } from './theme';

addons.setConfig({
  theme: lightTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  isToolshown: true,
  toolbar: {},
});
