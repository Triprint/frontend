import { addons } from '@storybook/addons';

import theme from './theme';

addons.setConfig({
  theme: theme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  showToolbar: true,
  isToolshown: true,
  toolbar: {},
});
