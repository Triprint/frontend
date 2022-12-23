import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../css';

export const textRecipe = recipe({
  variants: {
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
    lineClamp: {
      none: {},
      '1': {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
      },
      '2': {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
      },
      '3': {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
      },
    },
    size: {
      xs: sprinkles({
        fontSize: 'xs',
        lineHeight: 'xs',
      }),
      sm: sprinkles({
        fontSize: 'sm',
        lineHeight: 'sm',
      }),
      md: sprinkles({
        fontSize: 'base',
        lineHeight: 'base',
      }),
      lg: sprinkles({
        fontSize: 'lg',
        lineHeight: 'lg',
      }),
      xl: sprinkles({
        fontSize: 'xl',
        lineHeight: 'xl',
      }),
      '2xl': sprinkles({
        fontSize: '2xl',
        lineHeight: '2xl',
      }),
      '3xl': sprinkles({
        fontSize: '3xl',
        lineHeight: '3xl',
      }),
      '4xl': sprinkles({
        fontSize: '4xl',
        lineHeight: '4xl',
      }),
    },
    color: {
      base: sprinkles({
        color: 'onSurface',
      }),
      inverse: sprinkles({
        color: 'surface',
      }),
      subdued: sprinkles({
        color: 'onSurfaceVariant',
      }),
      primary: sprinkles({
        color: 'primary',
      }),
      error: sprinkles({
        color: 'error',
      }),
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'base',
    lineClamp: 'none',
  },
});

export type TextVariants = RecipeVariants<typeof textRecipe>;
