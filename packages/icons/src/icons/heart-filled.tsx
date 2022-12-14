import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const HeartFilledIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path
        d="M16.4167 3.31C14.5417 3.31 13.125 4.06 12 5.64333C10.875 4.10166 9.45833 3.35166 7.58333 3.35166C4.5 3.31 2 6.01833 2 9.35166C2 12.3933 4.25 14.3517 6.41667 16.2267C6.66667 16.435 6.95833 16.685 7.20833 16.935L8.16667 17.7683C10 19.3933 10.9167 20.2267 11.3333 20.4767C11.5417 20.6017 11.7917 20.685 12 20.685C12.2083 20.685 12.4583 20.6017 12.6667 20.4767C13.0833 20.2267 13.8333 19.56 15.9167 17.6433L16.75 16.8933C17.0417 16.6433 17.2917 16.3933 17.5833 16.185C19.7917 14.3517 22 12.435 22 9.35166C22 6.01833 19.5 3.31 16.4167 3.31V3.31Z"
        fill="currentColor"
      />
    </IconBase>
  );
});

HeartFilledIcon.displayName = 'HeartFilledIcon';

export default HeartFilledIcon;
