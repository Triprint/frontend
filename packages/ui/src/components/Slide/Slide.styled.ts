import { styled } from 'stitches.config';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSlideRoot = styled(Swiper, {
  position: 'relative',
  marginX: 'auto',
  overflow: 'hidden',
  zIndex: 1,

  '& > .swiper-wrapper': {
    position: 'relative',
    width: '$full',
    height: '$full',
    display: 'flex',
    transitionProperty: '$transitions$transform',
    transform: 'translate3d(0, 0, 0)',
    zIndex: 1,
  },
  '&.swiper-vertical > .swiper-wrapper': {
    flexDirection: 'column',
  },
  '&.swiper-pointer-events': {
    touchAction: 'pan-y',
  },
  '&.swiper-pointer-events.swiper-vertical': {
    touchAction: 'pan-x',
  },
  // Pagination
  '& > .swiper-pagination': {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '$2',
    display: 'flex',
    justifyContent: 'center',
    columnGap: '$2',
    zIndex: 10,
  },
  '& > .swiper-pagination > .swiper-pagination-bullet': {
    width: '$space$2',
    height: '$space$2',
    borderRadius: '$full',
    backgroundColor: '$white',
    opacity: 0.75,
    transform: 'scale(0.9)',
    transitionProperty: '$transitions$all',
    transitionDuration: '$transitions$200',
    transitionTimingFunction: '$transitions$easeIn',
  },
  '& > .swiper-pagination > .swiper-pagination-bullet.swiper-pagination-bullet-active': {
    backgroundColor: '$primary',
    opacity: 1,
    transform: 'scale(1.1)',
  },
});

export const StyledSlideItem = styled(SwiperSlide, {
  position: 'relative',
  flexShrink: 0,
  width: '$full',
  height: '$full',
  transitionProperty: 'transform',
  '&.swiper-android': {
    transform: 'translate3d(0, 0, 0)',
  },
  '&.swiper-slide-invisible-blank': {
    visibility: 'hidden',
  },
});

export const StyledNavigation = styled('div', {
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingX: '$2',
  zIndex: 10,
});

export const StyledNavigationButton = styled('button', {
  color: '$white',
  opacity: 0.75,
  transitionProperty: '$transitions$opacity',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$easeIn',
  '&:hover': {
    opacity: 1,
  },
});
