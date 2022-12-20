import { StyleRule } from '@vanilla-extract/css';

import { Device, breakPoint } from '@triprint/tokens';

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;

const mediaQuery = (device: Device, styles?: CSSProps) => {
  if (!styles || Object.keys(styles).length === 0) {
    return {};
  }
  return {
    [`screen and (min-width: ${breakPoint[device]})`]: styles,
  };
};

interface ResponsiveStyle {
  base?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
}

export const responsiveStyles = ({
  base = {},
  tablet = {},
  desktop = {},
}: ResponsiveStyle): StyleRule => {
  return {
    ...base,
    '@media': {
      ...mediaQuery('tablet', tablet),
      ...mediaQuery('desktop', desktop),
    },
  };
};
