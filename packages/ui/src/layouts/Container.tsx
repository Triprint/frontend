import { styled } from 'stitches.config';

const Container = styled('div', {
  width: '$full',
  marginX: 'auto',
  variants: {
    size: {
      xs: {
        maxWidth: '$xs',
      },
      sm: {
        maxWidth: '$sm',
      },
      md: {
        maxWidth: '$md',
      },
      lg: {
        maxWidth: '$lg',
      },
      xl: {
        maxWidth: '$xl',
      },
      '2xl': {
        maxWidth: '$2xl',
      },
      '3xl': {
        maxWidth: '$3xl',
      },
      '4xl': {
        maxWidth: '$4xl',
      },
      '5xl': {
        maxWidth: '$5xl',
      },
      '6xl': {
        maxWidth: '$6xl',
      },
      '7xl': {
        maxWidth: '$7xl',
      },
    },
    withPadding: {
      true: {
        paddingX: '$5',
        '@tablet': {
          paddingX: '$8',
        },
        '@desktop': {
          paddingX: '$10',
        },
      },
    },
  },
});

Container.displayName = 'Container';

export default Container;
