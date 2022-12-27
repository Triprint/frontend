import clsx, { ClassValue } from 'clsx';
import React from 'react';

import { LoadingIcon } from '@triprint/icons';

import { buttonRecipe, buttonTextRecipe, ButtonVariants, loadingIconStyle } from './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    children?: React.ReactNode;
    isLoading?: boolean;
    className?: ClassValue;
    left?: React.ReactNode;
    right?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, className, isLoading, disabled, fullWidth, children, left, right, ...props },
    forwardedRef,
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={clsx(buttonRecipe({ variant, size, fullWidth }), className)}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && (
          <LoadingIcon className={loadingIconStyle} width={24} height={24} title="Loading Icon" />
        )}
        <div className={clsx(buttonTextRecipe({ isLoading, size }))}>
          {left}
          {children}
          {right}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
