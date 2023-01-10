import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const DotIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path d="M12 16C9.79442 16 8 14.2056 8 12C8 9.79442 9.79442 8 12 8C14.2056 8 16 9.79442 16 12C16 14.2056 14.2056 16 12 16Z" />
    </IconBase>
  );
});

DotIcon.displayName = 'DotIcon';

export default DotIcon;
