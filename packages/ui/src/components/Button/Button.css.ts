import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../css';

export const buttonRecipe = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'inline-flex',
      fontWeight: 'semibold',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',
      transitionProperty: 'colors',
      transitionTimingFunction: 'easeIn',
      transitionDuration: '150',
    }),
    {
      ':disabled': {
        opacity: 0.4,
      },
    },
  ],
  variants: {
    variant: {
      base: sprinkles({
        color: 'onSurfaceVariant',
        backgroundColor: {
          base: 'surfaceVariant',
          hover: 'hoverSurfaceVariant',
        },
      }),
      primary: sprinkles({
        color: 'onPrimary',
        backgroundColor: {
          base: 'primary',
          hover: 'hoverPrimary',
        },
      }),
      secondary: sprinkles({
        color: 'onPrimaryContainer',
        backgroundColor: {
          base: 'primaryContainer',
          hover: 'hoverPrimaryContainer',
        },
      }),
    },
    size: {
      sm: sprinkles({
        fontSize: 'sm',
        paddingX: '2.5',
        paddingY: '2.5',
        borderRadius: 'xl',
        minHeight: '8',
      }),
      md: sprinkles({
        fontSize: 'sm',
        paddingX: '3',
        paddingY: '3',
        borderRadius: 'xl',
        minHeight: '10',
      }),
      lg: sprinkles({
        fontSize: 'base',
        paddingX: '4',
        paddingY: '4',
        borderRadius: '2xl',
        minHeight: '12',
      }),
      xl: sprinkles({
        fontSize: 'lg',
        paddingX: '5',
        paddingY: '5',
        borderRadius: '3xl',
        minHeight: '14',
      }),
    },
    fullWidth: {
      true: sprinkles({
        width: 'full',
      }),
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'md',
  },
});

export const loadingIconStyle = sprinkles({ position: 'absolute' });

export const buttonTextStyle = sprinkles({ visibility: 'hidden' });

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
