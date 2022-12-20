import { create } from '@storybook/theming';

export const lightTheme = create({
  base: 'light',
  colorPrimary: '#FF385C',
  colorSecondary: '#FF385C',

  appBg: '#f7f8fa',
  appContentBg: '#ffffff',
  appBorderColor: '#eaebee',
  appBorderRadius: 4,

  textColor: '#212124',
  textInverseColor: '#ffffff',
  textMutedColor: '#868b94',

  barTextColor: '#868b94',
  barSelectedColor: '#FF385C',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#eaebee',
  inputTextColor: '#212124',
  inputBorderRadius: 4,

  brandTitle: 'TRIPRINT',
  brandUrl: '/',
  brandImage: '/icons/logo.svg',
  brandTarget: '_self',
});
