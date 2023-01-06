import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled, type VariantProps } from 'stitches.config';

import { fadeIn, fadeInAndScaleUp } from '@/styles/keyframes';

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: '$modalBackdrop',
  backdropFilter: 'blur(4px)',
  backgroundColor: 'rgba(0,0,0,0.2)',
  animation: `${fadeIn} $transitions$150 $transitions$easeIn`,
});

export const StyledDialogContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: '$modal',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:focus': {
    outline: 'none',
  },
  variants: {
    fullScreen: {
      true: {
        padding: 0,
      },
      false: {
        paddingX: '$5',
      },
    },
  },
  defaultVariants: {
    fullScreen: false,
  },
});

export const StyledDialogContentInner = styled('div', {
  position: 'relative',
  zIndex: '$modal',
  overflowY: 'auto',
  width: '$full',
  backgroundColor: '$surface',
  animation: `${fadeInAndScaleUp} $transitions$150 $transitions$easeIn`,
  variants: {
    fullScreen: {
      true: {
        height: '$full',
        width: '$full',
      },
      false: {
        height: 'auto',
        maxHeight: '80vh',
        borderRadius: '$xl',
      },
    },
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
  },
  defaultVariants: {
    fullScreen: false,
    size: 'lg',
  },
});

export const StyledDialogHeader = styled('div', {
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
  paddingTop: '$4',
  paddingLeft: '$5',
  paddingRight: '$4',
  paddingBottom: '$3',
  backgroundColor: '$surface',
});

export const StyledDialogBody = styled('div', {
  paddingX: '$5',
  paddingBottom: '$5',
});

export const StyleDialogCloseButton = styled(DialogPrimitive.Close, {
  padding: '$1',
  borderRadius: '$full',
  color: '$onSurfaceVariant',
  transitionProperty: '$transitions$colors',
  transitionDelay: '$transitions$150',
  transitionTimingFunction: '$transitions$easeIn',
  '&:hover': {
    backgroundColor: '$surfaceVariant',
  },
});

export type DialogContentVariantProps = VariantProps<typeof StyledDialogContentInner>;
