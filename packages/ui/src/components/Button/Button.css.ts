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
      transitionProperty: 'colors',
      transitionTimingFunction: 'easeIn',
      transitionDuration: '150',
    }),
    {
      ':disabled': {
        opacity: 0.5,
        pointerEvents: 'none',
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
      text: sprinkles({
        color: 'onSurface',
        backgroundColor: {
          base: 'transparent',
          hover: 'surface',
        },
      }),
    },
    size: {
      sm: sprinkles({
        fontSize: 'sm',
        lineHeight: 'sm',
        paddingX: '2.5',
        paddingY: '1.5',
        borderRadius: 'lg',
      }),
      md: sprinkles({
        fontSize: 'sm',
        lineHeight: 'sm',
        paddingX: '3',
        paddingY: '2',
        borderRadius: 'xl',
      }),
      lg: sprinkles({
        fontSize: 'base',
        lineHeight: 'base',
        paddingX: '4',
        paddingY: '2.5',
        borderRadius: 'xl',
      }),
      xl: sprinkles({
        fontSize: 'base',
        lineHeight: 'base',
        paddingX: '6',
        paddingY: '3.5',
        borderRadius: 'xl',
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

export const buttonTextRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  variants: {
    isLoading: { true: sprinkles({ visibility: 'hidden' }) },
    size: {
      sm: sprinkles({
        columnGap: '1',
      }),
      md: sprinkles({
        columnGap: '1.5',
      }),
      lg: sprinkles({
        columnGap: '2',
      }),
      xl: sprinkles({
        columnGap: '2.5',
      }),
    },
  },
  defaultVariants: {
    size: 'md',
    isLoading: false,
  },
});

export const loadingIconStyle = sprinkles({ position: 'absolute' });

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
