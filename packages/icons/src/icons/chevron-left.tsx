import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const ChevronLeftIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
      />
    </IconBase>
  );
});

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export default ChevronLeftIcon;
