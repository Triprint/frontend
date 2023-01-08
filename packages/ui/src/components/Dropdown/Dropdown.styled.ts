import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { styled, type VariantProps } from 'stitches.config';

import {
  fadeInAndSlideDown,
  fadeInAndSlideLeft,
  fadeInAndSlideRight,
  fadeInAndSlideUp,
} from '@/styles/keyframes';

export const StyledDropdownContent = styled(DropdownPrimitive.Content, {
  backgroundColor: '$surface',
  border: '1px solid $colors$outline',
  borderRadius: '$lg',
  paddingY: '$1_5',
  boxShadow: '$dropdown',
  animationDuration: '$transitions$300',
  animationTimingFunction: '$transitions$easeOut',
  willChange: 'transform, opacity',
  zIndex: '$dropdown',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: fadeInAndSlideUp },
    '&[data-side="right"]': { animationName: fadeInAndSlideRight },
    '&[data-side="bottom"]': { animationName: fadeInAndSlideDown },
    '&[data-side="left"]': { animationName: fadeInAndSlideLeft },
  },
  variants: {
    size: {
      sm: {
        minWidth: '$space$40',
      },
      md: {
        minWidth: '$space$48',
      },
      lg: {
        minWidth: '$space$56',
      },
      xl: {
        minWidth: '$space$72',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type DropdownContentVariantProps = VariantProps<typeof StyledDropdownContent>;

export const StyledDropdownArrow = styled(DropdownPrimitive.Arrow, {
  fill: '$surface',
  stroke: '$outline',
  strokeWidth: 2,
  strokeDasharray: 40,
  strokeDashoffset: 50,
});

export const StyledDropdownSeparator = styled(DropdownPrimitive.Separator, {
  height: '1px',
  marginY: '$1',
  backgroundColor: '$outline',
});

export const StyledDropdownLabel = styled(DropdownPrimitive.Label, {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$xs',
  fontWeight: '$bold',
  color: '$onSurfaceSubdued',
  paddingTop: '$1',
  paddingBottom: '$0_5',
  paddingLeft: '$4',
  paddingRight: '$7',
});

const itemBaseStyle = {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  paddingY: '$1_5',
  paddingLeft: '$4',
  paddingRight: '$7',

  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$onSurface',
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$150',
  transitionTimingFunction: '$transitions$easeIn',

  '&:hover': {
    outline: 'none',
    cursor: 'pointer',
  },

  '&[data-highlighted]': {
    backgroundColor: '$hoverSurface',
  },

  '&[data-disabled]': {
    opacity: 0.25,
    pointerEvents: 'none',
  },
};

const itemCheckedStyle = {
  '&[data-state=checked]': {
    color: '$primary',
    backgroundColor: '$primaryContainer',
    '&[data-highlighted]': {
      backgroundColor: '$hoverPrimaryContainer',
    },
  },
};

export const StyledDropdownItem = styled(DropdownPrimitive.Item, itemBaseStyle);

export const StyledDropdownCheckboxItem = styled(
  DropdownPrimitive.CheckboxItem,
  itemBaseStyle,
  itemCheckedStyle,
);

export const StyledDropdownRadioItem = styled(
  DropdownPrimitive.RadioItem,
  itemBaseStyle,
  itemCheckedStyle,
);
