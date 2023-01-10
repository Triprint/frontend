import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const LoadingIcon = forwardRef<SVGSVGElement, IconBaseProps>(
  ({ style, ...props }, forwardedRef) => {
    return (
      <IconBase
        {...props}
        style={{ ...style, shapeRendering: 'auto' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        ref={forwardedRef}
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="currentColor"
          stroke-width="8"
          r="24"
          stroke-dasharray="112 40"
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
      </IconBase>
    );
  },
);

LoadingIcon.displayName = 'LoadingIcon';

export default LoadingIcon;
