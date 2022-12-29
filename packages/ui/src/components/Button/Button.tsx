import { styled } from 'stitches.config';

const Button = styled('button', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transitionProperty: '$transitions$colors',
  transitionTimingFunction: '$transitions$easeIn',
  transitionDuration: '$transitions$150',
  fontWeight: '$semibold',
  cursor: 'pointer',
  '&:disabled': {
    opacity: 0.4,
    pointerEvents: 'none',
  },
  variants: {
    variant: {
      base: {
        color: '$onSurfaceVariant',
        backgroundColor: '$surfaceVariant',

        '&:hover': {
          backgroundColor: '$hoverSurfaceVariant',
        },
      },
      primary: {
        color: '$onPrimary',
        backgroundColor: '$primary',

        '&:hover': {
          backgroundColor: '$hoverPrimary',
        },
      },
      secondary: {
        color: '$onPrimaryContainer',
        backgroundColor: '$primaryContainer',

        '&:hover': {
          backgroundColor: '$hoverPrimaryContainer',
        },
      },
      text: {
        color: '$onSurface',
        backgroundColor: '$transparent',
        '&:hover': {
          backgroundColor: '$hoverSurface',
        },
      },
      inverse: {
        color: '$inverseOnSurface',
        backgroundColor: '$inverseSurface',
        '&:hover': {
          backgroundColor: '$hoverInverseSurface',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
        paddingX: '$2_5',
        paddingY: '$1_5',
        borderRadius: '$lg',
      },
      md: {
        fontSize: '$sm',
        lineHeight: '$sm',
        paddingX: '$3',
        paddingY: '$2',
        borderRadius: '$xl',
      },
      lg: {
        fontSize: '$md',
        lineHeight: '$md',
        paddingX: '$4',
        paddingY: '$2_5',
        borderRadius: '$xl',
      },
      xl: {
        fontSize: '$md',
        lineHeight: '$md',
        paddingX: '$6',
        paddingY: '$3_5',
        borderRadius: '$xl',
      },
    },
    fullWidth: {
      true: {
        width: '$full',
      },
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'md',
  },
});

Button.displayName = 'Button';

export default Button;
