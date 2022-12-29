import { styled } from 'stitches.config';

const SocialButton = styled('button', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '$2_5',
  fontSize: '$md',
  lineHeight: '$md',
  fontWeight: '$semibold',
  transitionProperty: '$transitions$opacity',
  transitionDuration: '$transitions$150',
  transitionTimingFunction: '$transition$easeIn',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.75,
  },
  variants: {
    variant: {
      base: {
        paddingX: '$6',
        paddingY: '$3_5',
        borderRadius: '$xl',
      },
      circle: {
        padding: '$3_5',
        borderRadius: '$full',
      },
    },
    colorScheme: {
      kakao: {
        color: '#191919',
        backgroundColor: '#FEE500',
      },
      naver: {
        color: '#ffffff',
        backgroundColor: '#02C759',
      },
      google: {
        color: '#505050',
        backgroundColor: '#ffffff',
        boxShadow: 'inset 0 0 0 1px #eaeaea',
      },
      facebook: {
        color: '#ffffff',
        backgroundColor: '#1877f2',
      },
    },
    fullWidth: {
      true: {
        width: '$full',
      },
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

SocialButton.displayName = 'SocialButton';

export default SocialButton;
