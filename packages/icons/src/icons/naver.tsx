import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const NaverIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path d="M14.8491 12.5627L8.91687 4H4V20H9.15088V11.436L15.0831 20H20V4H14.8491V12.5627Z" />
    </IconBase>
  );
});

NaverIcon.displayName = 'NaverIcon';

export default NaverIcon;
