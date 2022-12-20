import clsx, { ClassValue } from 'clsx';
import React from 'react';

import { buttonRecipe, buttonTextStyle, ButtonVariants, loadingIconStyle } from './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    children?: React.ReactNode;
    isLoading?: boolean;
    className?: ClassValue;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, className, isLoading, disabled, fullWidth, children, ...props },
    forwardedRef,
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={clsx(buttonRecipe({ variant, size, fullWidth }), className)}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <LoadingIcon />}
        <span className={clsx({ [buttonTextStyle]: isLoading })}>{children}</span>
      </button>
    );
  },
);

const LoadingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      shapeRendering: 'auto',
    }}
    className={loadingIconStyle}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="1.5rem"
    height="1.5rem"
    aria-labelledby="로딩 아이콘"
  >
    <title>로딩 아이콘</title>
    <circle
      cx={50}
      cy={50}
      fill="none"
      stroke="#ff385c"
      strokeWidth={8}
      r={24}
      strokeDasharray="112 40"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);

Button.displayName = 'Button';

export default Button;
