import React, { forwardRef } from 'react';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
  title?: string;
  titleId?: string;
  children?: React.ReactNode;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  ({ size, title, titleId, children, width, height, role, ...svgProps }, forwardedRef) => {
    const computedWidth = size || width || '1em';
    const computedHeight = size || height || '1em';
    const computedTitleId = titleId || 'title';

    return (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-labelledby={computedTitleId}
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
        height={computedWidth}
        width={computedHeight}
        role={role || 'icon'}
        ref={forwardedRef}
      >
        {title && <title id={computedTitleId}>{title}</title>}
        {children}
      </svg>
    );
  },
);
IconBase.displayName = 'IconBase';

export default IconBase;
