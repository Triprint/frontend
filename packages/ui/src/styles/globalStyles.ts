import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*,::before,::after': {
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'currentcolor',
  },
  html: {
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    tabSize: 4,
    MozTabSize: 4,
    fontFamily:
      'Pretendard, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontFeatureSettings: 'normal',
  },
  body: {
    margin: 0,
    lineHeight: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    color: '$onBackground',
    backgroundColor: '$background',
  },
  hr: {
    height: 0,
    color: 'inherit',
    borderTopWidth: '1px',
  },
  'abbr:where([title])': {
    textDecoration: 'underline dotted',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  'b,strong': { fontWeight: 'bolder' },
  'code,kbd,samp,pre': {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: '1em',
  },
  small: {
    fontSize: '80%',
  },
  'sub,sup': {
    position: 'relative',
    fontSize: '75%',
    lineHeight: 0,
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  table: {
    textIndent: 0,
    borderColor: 'inherit',
    borderCollapse: 'collapse',
  },
  'button,input,optgroup,select,textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0,
  },
  'button, select': {
    textTransform: 'none',
  },
  'button,[type="button"],[type="reset"],[type="submit"]': {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    WebkitAppearance: 'button',
  },
  ':-moz-focusring': {
    outline: 'auto',
  },
  ':-moz-ui-invalid': {
    boxShadow: 'none',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type="search"]': {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px',
  },
  '::-webkit-search-decoration': {
    WebkitAppearance: 'none',
  },
  '::-webkit-file-upload-button': {
    font: 'inherit',
    WebkitAppearance: 'button',
  },
  summary: {
    display: 'list-item',
  },
  'blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre': {
    margin: 0,
  },
  fieldset: {
    margin: 0,
    padding: 0,
  },
  legend: {
    padding: 0,
  },
  'ol,ul,menu': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  textarea: {
    resize: 'vertical',
  },
  'input::placeholder,textarea::placeholder': {
    opacity: 1,
    color: '$onSurfaceVariant',
  },
  'button,[role="button"]': {
    cursor: 'pointer',
  },
  ':disabled': {
    cursor: 'default',
  },
  'img,svg,video,canvas,audio,iframe,embed,object': {
    display: 'block',
    verticalAlign: 'middle',
  },
  'img,video': {
    maxWidth: '100%',
    height: 'auto',
  },
  '[hidden]': {
    display: 'none',
  },
});
