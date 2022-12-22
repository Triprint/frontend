import {
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';

import { breakPoint } from '@triprint/tokens';

import './font.css';
import './reset.css';
import { baseVars, colorVars } from './vars.css';

const flexibility = [0, 1] as const;
const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;

const gridTemplate = {
  1: 'repeat(1, minmax(0, 1fr))',
  2: 'repeat(2, minmax(0, 1fr))',
  3: 'repeat(3, minmax(0, 1fr))',
  4: 'repeat(4, minmax(0, 1fr))',
  5: 'repeat(5, minmax(0, 1fr))',
  6: 'repeat(6, minmax(0, 1fr))',
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakPoint.tablet})` },
    desktop: { '@media': `screen and (min-width: ${breakPoint.desktop})` },
  },
  properties: {
    display: {
      block: 'block',
      'inline-block': 'inline-block',
      inline: 'inline',
      flex: 'flex',
      'inline-flex': 'inline-flex',
      grid: 'grid',
      contents: 'contents',
      hidden: 'none',
    },
    /* Flex */
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: {
      ...baseVars.space,
      ...baseVars.extendedSpace,
    },
    flexDirection: ['row', 'column'],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ['wrap', 'nowrap'],
    alignSelf: [...flexAlignment, 'baseline'],
    alignItems: [...flexAlignment, 'baseline'],
    justifySelf: flexAlignment,
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    gap: baseVars.space,
    rowGap: baseVars.space,
    columnGap: baseVars.space,

    /* Grid */
    gridTemplateColumns: gridTemplate,
    /* Text */
    fontSize: {
      inherit: 'inherit',
      ...baseVars.fontSize,
    },
    fontWeight: baseVars.fontWeight,
    lineHeight: baseVars.lineHeight,
    textAlign: ['left', 'center', 'right', 'justify', 'start', 'end'],
    letterSpacing: baseVars.letterSpacing,

    /* Margin & Border & Padding */
    marginBottom: {
      ...baseVars.space,
      ...baseVars.extendedSpace,
    },
    marginLeft: {
      ...baseVars.space,
      ...baseVars.extendedSpace,
    },
    marginRight: {
      ...baseVars.space,
      ...baseVars.extendedSpace,
    },
    marginTop: {
      ...baseVars.space,
      ...baseVars.extendedSpace,
    },
    borderWidth: baseVars.borderWidth,
    borderTopWidth: baseVars.borderWidth,
    borderRightWidth: baseVars.borderWidth,
    borderBottomWidth: baseVars.borderWidth,
    borderLeftWidth: baseVars.borderWidth,
    borderRadius: baseVars.borderRadius,
    borderTopLeftRadius: baseVars.borderRadius,
    borderTopRightRadius: baseVars.borderRadius,
    borderBottomRightRadius: baseVars.borderRadius,
    borderBottomLeftRadius: baseVars.borderRadius,
    paddingBottom: baseVars.space,
    paddingLeft: baseVars.space,
    paddingRight: baseVars.space,
    paddingTop: baseVars.space,

    /* Height & Width */
    height: baseVars.space,
    maxHeight: baseVars.space,
    minHeight: baseVars.space,
    width: {
      ...baseVars.space,
      ...baseVars.extendedSpace,
      ...baseVars.relativeSpace,
    },
    maxWidth: {
      none: 'none',
      ...baseVars.space,
      ...baseVars.extendedSpace,
      ...baseVars.relativeSpace,
    },
    minWidth: baseVars.space,

    overflow: ['auto', 'hidden', 'scroll', 'unset'],
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    top: { ...baseVars.space, ...baseVars.extendedSpace },
    left: { ...baseVars.space, ...baseVars.extendedSpace },
    right: { ...baseVars.space, ...baseVars.extendedSpace },
    bottom: { ...baseVars.space, ...baseVars.extendedSpace },
    inset: { ...baseVars.space, ...baseVars.extendedSpace },
  },
  defaultCondition: 'mobile',
  shorthands: {
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
    },
    cursor: ['default', 'pointer', 'not-allowed'],
    isolation: ['isolate', 'auto'],
    objectFit: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    // opacity: vars.opacity,
    pointerEvents: ['none'],
    strokeWidth: baseVars.borderWidth,
    textTransform: ['capitalize', 'lowercase', 'uppercase', 'none'],
    transitionProperty: {
      none: 'none',
      all: 'all',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
      default:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    },
    transitionTimingFunction: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    visibility: ['hidden', 'visible'],
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit'],
    wordBreak: ['break-word'],
    wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
    zIndex: {
      ...baseVars.zIndex,
    },
  },
});

const colorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
  },
  properties: {
    color: colorVars,
    borderColor: colorVars,
    outlineColor: colorVars,
    backgroundColor: colorVars,
    boxShadow: {
      ...baseVars.boxShadow,
    },
  },
  defaultCondition: 'base',
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  colorProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveProperties);
export const mapResponsiveValue = createMapValueFn(responsiveProperties);
