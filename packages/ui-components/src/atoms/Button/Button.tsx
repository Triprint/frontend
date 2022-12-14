import { ComponentProps, ElementRef, forwardRef } from 'react';
import type { TriprintCSS } from '@triprint-ui/core';
import { StyledButton } from './Button.styled';

type ButtonPrimitiveProps = ComponentProps<typeof StyledButton>;
export type ButtonProps = ButtonPrimitiveProps & { css?: TriprintCSS; as?: 'button' | 'a' };

const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  ({ as = 'button', children, ...props }, forwardedRef) => {
    return (
      <StyledButton as={as} {...props} ref={forwardedRef}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;
