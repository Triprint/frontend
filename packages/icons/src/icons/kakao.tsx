import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const KakaoIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2.62C6.47692 2.62 2 6.09531 2 10.3827C2 13.0481 3.73156 15.3996 6.3683 16.7972L5.2588 20.8694C5.1608 21.2302 5.57044 21.5165 5.885 21.308L10.7482 18.0826C11.1586 18.1223 11.5756 18.1455 12 18.1455C17.5228 18.1455 22 14.6696 22 10.3827C22 6.09531 17.5228 2.62 12 2.62"
        fill="currentColor"
      />
    </IconBase>
  );
});

KakaoIcon.displayName = 'KakaoIcon';

export default KakaoIcon;
