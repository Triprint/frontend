import '@triprint/ui/css';

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
  },
  options: {
    storySort: {
      order: ['Introduction', 'Tokens', 'Components'],
    },
  },
};
