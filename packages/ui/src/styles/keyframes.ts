import { keyframes } from 'stitches.config';

export const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const ping = keyframes({
  '75%, 100%': {
    transform: 'scale(2)',
    opacity: 0,
  },
});

export const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
});

export const bounce = keyframes({
  '0%, 100%': {
    transform: 'translateY(-25%)',
    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
  },
  '50%': {
    transform: 'translateY(0)',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  },
});