import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const CloseIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
      />
    </IconBase>
  );
});

CloseIcon.displayName = 'CloseIcon';

export default CloseIcon;
