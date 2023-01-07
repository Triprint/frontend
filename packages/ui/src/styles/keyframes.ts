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

export const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const fadeInAndScaleUp = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0.95)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

export const fadeInAndSlideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const fadeInAndSlideRight = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-4px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const fadeInAndSlideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const fadeInAndSlideLeft = keyframes({
  '0%': { opacity: 0, transform: 'translateX(4px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});
