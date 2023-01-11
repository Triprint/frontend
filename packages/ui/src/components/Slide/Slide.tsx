import React, { useCallback } from 'react';
import { CSS } from 'stitches.config';
import { Pagination } from 'swiper';
import { SwiperProps, useSwiper } from 'swiper/react';

import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from '@triprint/icons';

import {
  StyledNavigation,
  StyledNavigationButton,
  StyledSlideItem,
  StyledSlideRoot,
} from './Slide.styled';

type SlideRootProps = Omit<SwiperProps, 'width' | 'height' | 'modules'> & {
  css?: CSS;
  width?: number;
  height?: number;
};

export const SlideRoot = React.forwardRef<React.ElementRef<typeof StyledSlideRoot>, SlideRootProps>(
  (
    { children, slidesPerView = 1, width, height, css, pagination = true, ...props },
    forwardedRef,
  ) => {
    return (
      <StyledSlideRoot
        {...props}
        slidesPerView={slidesPerView}
        pagination={pagination}
        modules={[Pagination]}
        css={{ ...css, width, height }}
        ref={forwardedRef}
      >
        {children}
      </StyledSlideRoot>
    );
  },
);
SlideRoot.displayName = 'Slide.Root';

type SlideNavigationProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  css?: CSS;
  size?: number;
};

export const SlideNavigation = React.forwardRef<HTMLDivElement, SlideNavigationProps>(
  ({ size = 24, ...props }, forwardedRef) => {
    const swiper = useSwiper();

    const slidePrev = useCallback(() => {
      swiper.slidePrev();
    }, [swiper]);

    const slideNext = useCallback(() => {
      swiper.slideNext();
    }, [swiper]);

    return (
      <StyledNavigation {...props} ref={forwardedRef}>
        <StyledNavigationButton type="button" onClick={slidePrev}>
          <ChevronLeftCircleIcon size={size} />
        </StyledNavigationButton>
        <StyledNavigationButton type="button" onClick={slideNext}>
          <ChevronRightCircleIcon size={size} />
        </StyledNavigationButton>
      </StyledNavigation>
    );
  },
);
SlideNavigation.displayName = 'Slide.Navigation';

const Slide = {
  Root: SlideRoot,
  Item: StyledSlideItem,
  Navigation: SlideNavigation,
} as const;

export default Slide;
