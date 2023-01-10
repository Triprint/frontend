import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const FacebookIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </IconBase>
  );
});

FacebookIcon.displayName = 'FacebookIcon';

export default FacebookIcon;
