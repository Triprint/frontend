import { VariantProps } from '@stitches/react';
import { styled } from 'stitches.config';

export const LogoSVG = styled('svg', {
  variants: {
    alignment: {
      start: {
        marginRight: 'auto',
      },
      center: {
        marginX: 'auto',
      },
      end: {
        marginLeft: 'auto',
      },
    },
  },
});

export type LogoSVGVariant = VariantProps<typeof LogoSVG>;
