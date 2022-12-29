import { styled } from 'stitches.config';

const Text = styled('span', {
  variants: {
    size: {
      '2xs': {
        fontSize: '$2xs',
        lineHeight: '$2xs',
      },
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$6xl',
      },
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    variant: {
      base: {
        color: '$onSurface',
      },
      variant: {
        color: '$onSurfaceVariant',
      },
      subdued: {
        color: '$onSurfaceSubdued',
      },
      inverse: {
        color: '$inverseOnSurface',
      },
      disabled: {
        color: '$grey500',
      },
      primary: {
        color: '$primary',
      },
      error: {
        color: '$error',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
    lineClamp: {
      1: {
        lineClamp: 1,
      },
      2: {
        lineClamp: 2,
      },
      3: {
        lineClamp: 3,
      },
    },
    alignment: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
      justify: {
        textAlign: 'justify',
      },
    },
    wordBreak: {
      true: {
        wordBreak: 'keep-all',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'base',
    weight: 'regular',
    alignment: 'start',
  },
});

Text.displayName = 'Text';

export default Text;
