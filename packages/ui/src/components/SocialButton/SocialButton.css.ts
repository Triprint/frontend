import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../css';

export const socialButtonRecipe = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'inline-flex',
      fontWeight: 'semibold',
      alignItems: 'center',
      justifyContent: 'center',
      transitionProperty: 'opacity',
      transitionTimingFunction: 'easeIn',
      transitionDuration: '150',
      columnGap: '2.5',
      fontSize: 'base',
      lineHeight: 'base',
    }),
    {
      ':hover': {
        opacity: 0.75,
      },
    },
  ],
  variants: {
    social: {
      kakao: {
        color: '#191919',
        backgroundColor: '#FEE500',
      },
      naver: {
        color: '#ffffff',
        backgroundColor: '#02C759',
      },
    },
    variant: {
      base: sprinkles({ borderRadius: 'xl', paddingX: '6', paddingY: '3.5' }),
      square: sprinkles({ borderRadius: 'full', padding: '3.5' }),
    },
    fullWidth: {
      true: sprinkles({
        width: 'full',
      }),
    },
  },
  defaultVariants: {
    variant: 'base',
    fullWidth: false,
  },
});

export type SocialButtonVariants = RecipeVariants<typeof socialButtonRecipe>;
