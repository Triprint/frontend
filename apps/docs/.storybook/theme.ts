import { create } from '@storybook/theming';

export default create({
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

  fontBase:
    'Pretendard, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontCode:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
});
