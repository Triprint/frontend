import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

import {
  borderRadius,
  borderWidth,
  boxShadow,
  color,
  extendedSpace,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  negativeSpace,
  relativeSpace,
  space,
  zIndex,
} from '@triprint/tokens';

import { mapVarName } from '../lib';

const base = {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  borderRadius,
  borderWidth,
  zIndex,
  space,
  extendedSpace,
  negativeSpace,
  relativeSpace,
  boxShadow,
};

export const baseVars = createGlobalThemeContract(base, mapVarName);
createGlobalTheme(':root', baseVars, base);

export const colorVars = createGlobalThemeContract(color, mapVarName);
createGlobalTheme(':root', colorVars, color);

export type BaseVars = typeof baseVars;
export type ColorVars = typeof colorVars;
export type ThemeVars = typeof baseVars & typeof colorVars;
