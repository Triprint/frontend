import { forwardRef } from 'react';

import { IconBase, IconBaseProps } from '../base';

const HeartIcon = forwardRef<SVGSVGElement, IconBaseProps>((props, forwardedRef) => {
  return (
    <IconBase {...props} ref={forwardedRef}>
      <path
        d="M16.1655 4.96168C17.3081 5.02486 18.3794 5.53721 19.1459 6.38707C19.9125 7.23693 20.3122 8.35542 20.2579 9.49879C20.2579 12.1699 17.9527 13.8107 15.7404 15.7784C13.5568 17.7287 12.3807 18.7947 12 19.0408C11.5854 18.7721 10.1372 17.4557 8.25958 15.7784C6.03776 13.8029 3.74205 12.1464 3.74205 9.49879C3.68778 8.35542 4.08749 7.23693 4.85406 6.38707C5.62063 5.53721 6.69194 5.02486 7.83452 4.96168C8.46746 4.94249 9.09456 5.08792 9.65449 5.38374C10.2144 5.67957 10.688 6.11566 11.029 6.6494C11.7592 7.67107 11.8809 8.18235 12.0026 8.18235C12.1243 8.18235 12.2443 7.67108 12.9675 6.64679C13.3065 6.11058 13.7803 5.67276 14.3415 5.37706C14.9027 5.08135 15.5316 4.93813 16.1655 4.96168M16.1655 3.22266C15.3761 3.19738 14.5913 3.35055 13.8693 3.67076C13.1473 3.99098 12.5069 4.46998 11.9957 5.07211C11.4849 4.47174 10.8457 3.99384 10.1255 3.67372C9.40525 3.35361 8.62231 3.19946 7.83452 3.22266C6.23063 3.2854 4.71682 3.98086 3.62413 5.15697C2.53144 6.33308 1.94877 7.89414 2.00354 9.49879C2.00354 12.6377 4.22015 14.5654 6.36287 16.4288C6.60886 16.6427 6.85747 16.8583 7.10434 17.0783L7.99707 17.8765C8.97067 18.8032 9.99138 19.6791 11.0551 20.5007C11.3366 20.683 11.6647 20.78 12 20.78C12.3353 20.78 12.6634 20.683 12.9449 20.5007C14.0425 19.654 15.0946 18.7499 16.0968 17.7922L16.8983 17.0757C17.153 16.8496 17.4111 16.6244 17.6676 16.4027C19.6964 14.6419 21.9965 12.6464 21.9965 9.49879C22.0512 7.89414 21.4686 6.33308 20.3759 5.15697C19.2832 3.98086 17.7694 3.2854 16.1655 3.22266V3.22266Z"
        fill="currentColor"
      />
    </IconBase>
  );
});

HeartIcon.displayName = 'HeartIcon';

export default HeartIcon;
