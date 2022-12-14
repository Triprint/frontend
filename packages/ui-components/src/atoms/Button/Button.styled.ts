import { styled } from '@triprint-ui/core';

export const StyledButton = styled('button', {
  display: 'inline-flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  lineHeight: 1,
  fontSize: 'body',
  fontWeight: 600,
  px: '0.75rem',
  py: '0.625rem',
  minHeight: '1.5rem',
  rounded: '$lg',
  cursor: 'pointer',
  variants: {
    colorScheme: {
      primary: {
        color: '$onPrimary',
        backgroundColor: '$primary',
        '&:hover': {
          backgroundColor: '$primaryHover',
        },
      },
      primaryContainer: {
        color: '$onPrimaryContainer',
        backgroundColor: '$primaryContainer',
        '&:hover': {
          backgroundColor: '$primaryContainerHover',
        },
      },
    },
  },
  defaultVariants: {
    colorScheme: 'primary',
  },
});
