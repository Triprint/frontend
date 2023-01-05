import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled } from 'stitches.config';

import { fadeIn, fadeInAndScaleUp } from '@/styles/keyframes';

export const StyledAlertOverlay = styled(AlertDialog.Overlay, {
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

export const StyledAlertContent = styled(AlertDialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: '$5',
  zIndex: '$modal',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:focus': {
    outline: 'none',
  },
});

export const StyledAlertContentInner = styled('div', {
  position: 'relative',
  width: '$full',
  maxWidth: '$sm',
  borderRadius: '$xl',
  padding: '$5',
  backgroundColor: '$surface',
  animation: `${fadeInAndScaleUp} $transitions$150 $transitions$easeIn`,
});
