import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx, { ClassValue } from 'clsx';
import React from 'react';

import { socialButtonRecipe, SocialButtonVariants } from './SocialButton.css';
import { SocialType, SOCIAL_ICONS } from './constant';

type Props = SocialButtonVariants & {
  social: SocialType;
  className?: ClassValue;
};

type PolymorphicSocialButton = Polymorphic.ForwardRefComponent<'button', Props>;

export type SocialButtonProps = Polymorphic.OwnProps<PolymorphicSocialButton>;

const SocialButton = React.forwardRef((props, forwardedRef) => {
  const {
    as: Component = 'button',
    className,
    children,
    social,
    variant,
    fullWidth,
    ...restProps
  } = props;
  const SocialIcon = SOCIAL_ICONS[social];

  return (
    <Component
      className={clsx(socialButtonRecipe({ social, variant, fullWidth }), className)}
      ref={forwardedRef}
      {...restProps}
    >
      <SocialIcon width={24} height={24} />
      <>{children}</>
    </Component>
  );
}) as PolymorphicSocialButton;

SocialButton.displayName = 'SocialButton';

export default SocialButton;
