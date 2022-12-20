import { globalStyle } from '@vanilla-extract/css';

import { colorVars } from './vars.css';

globalStyle('*,::before,::after', {
  boxSizing: 'border-box',
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: 'currentcolor',
});

globalStyle('html', {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: '100%',
  tabSize: 4,
  MozTabSize: 4,
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFeatureSettings: 'normal',
});

globalStyle('body', {
  margin: 0,
  lineHeight: 'inherit',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  color: colorVars.onBackground,
  backgroundColor: colorVars.background,
});

globalStyle('hr', {
  height: 0,
  color: 'inherit',
  borderTopWidth: '1px',
});

globalStyle('abbr:where([title])', {
  textDecoration: 'underline dotted',
});

globalStyle('h1,h2,h3,h4,h5,h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'inherit',
});

globalStyle('b,strong', { fontWeight: 'bolder' });

globalStyle('code,kbd,samp,pre', {
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: '1em',
});

globalStyle('small', {
  fontSize: '80%',
});

globalStyle('sub,sup', {
  position: 'relative',
  fontSize: '75%',
  lineHeight: 0,
  verticalAlign: 'baseline',
});

globalStyle('sub', {
  bottom: '-0.25em',
});

globalStyle('sup', {
  top: '-0.5em',
});

globalStyle('table', {
  textIndent: 0,
  borderColor: 'inherit',
  borderCollapse: 'collapse',
});

globalStyle('button,input,optgroup,select,textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  margin: 0,
  padding: 0,
});

globalStyle('button, select', {
  textTransform: 'none',
});

globalStyle('button,[type="button"],[type="reset"],[type="submit"]', {
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  WebkitAppearance: 'button',
});

globalStyle(':-moz-focusring', {
  outline: 'auto',
});

globalStyle(':-moz-ui-invalid', {
  boxShadow: 'none',
});

globalStyle('progress', {
  verticalAlign: 'baseline',
});

globalStyle('::-webkit-inner-spin-button,::-webkit-outer-spin-button', {
  height: 'auto',
});

globalStyle('[type="search"]', {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

globalStyle('::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

globalStyle('::-webkit-file-upload-button', {
  font: 'inherit',
  WebkitAppearance: 'button',
});

globalStyle('summary', {
  display: 'list-item',
});

globalStyle('blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre', {
  margin: 0,
});

globalStyle('fieldset', {
  margin: 0,
  padding: 0,
});

globalStyle('legend', {
  padding: 0,
});

globalStyle('ol,ul,menu', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

globalStyle('textarea', {
  resize: 'vertical',
});

globalStyle('input::placeholder,textarea::placeholder', {
  opacity: 1,
  color: colorVars.onSurfaceVariant,
});

globalStyle('button,[role="button"]', {
  cursor: 'pointer',
});

globalStyle(':disabled', {
  cursor: 'default',
});

globalStyle('img,svg,video,canvas,audio,iframe,embed,object', {
  display: 'block',
  verticalAlign: 'middle',
});

globalStyle('img,video', {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('[hidden]', {
  display: 'none',
});
