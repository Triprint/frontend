import React, { useId } from 'react';
import { CSSProp, styled } from 'stitches.config';

type LogoProps = CSSProp & {
  gradient?: boolean;
  size?: number;
};

const StyledSVG = styled('svg', {});

const Logo = React.forwardRef<SVGSVGElement, LogoProps>(
  ({ size = 24, gradient = false, css }, forwardedRef) => {
    const id = useId();
    const gradientId = `url(#${id})`;

    return (
      <StyledSVG
        height={size}
        width={size * 6}
        css={css}
        ref={forwardedRef}
        viewBox="0 0 144 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6716 21.6465V6.41826H20.2006V2H4V6.41826H9.55874V21.6465H14.6716ZM39.5482 21.6465L35.5055 14.43C37.3485 13.782 39.459 11.9558 39.459 8.53903C39.459 4.8866 36.962 2 32.5626 2H22.6342V21.6465H27.747V15.0486H30.3629L33.6922 21.6465H39.5482ZM31.7897 10.6303H27.747V6.41826H31.7897C33.1274 6.41826 34.257 7.1841 34.257 8.50957C34.257 9.89396 33.1274 10.6303 31.7897 10.6303ZM47.3998 21.6465V2H42.2869V21.6465H47.3998ZM56.0795 21.6465V15.0486H60.8951C65.3539 15.0486 67.7915 12.0736 67.7915 8.53903C67.7915 4.97496 65.3539 2 60.8951 2H50.9666V21.6465H56.0795ZM60.2114 10.6303H56.0795V6.41826H60.2114C61.5788 6.41826 62.5894 7.1841 62.5894 8.53903C62.5894 9.86451 61.5788 10.6303 60.2114 10.6303ZM86.9818 21.6465L82.9391 14.43C84.7821 13.782 86.8927 11.9558 86.8927 8.53903C86.8927 4.8866 84.3957 2 79.9963 2H70.0678V21.6465H75.1807V15.0486H77.7965L81.1258 21.6465H86.9818ZM79.2234 10.6303H75.1807V6.41826H79.2234C80.561 6.41826 81.6906 7.1841 81.6906 8.50957C81.6906 9.89396 80.561 10.6303 79.2234 10.6303ZM94.8334 21.6465V2H89.7206V21.6465H94.8334ZM116.83 21.6465V2H111.688V12.81L103.662 2H98.4003V21.6465H103.513V10.2769L111.896 21.6465H116.83ZM129.946 21.6465V6.41826H135.475V2H119.275V6.41826H124.834V21.6465H129.946ZM137.206 22C138.722 22 140 20.7334 140 19.2312C140 17.729 138.722 16.4624 137.206 16.4624C135.69 16.4624 134.412 17.729 134.412 19.2312C134.412 20.7334 135.69 22 137.206 22Z"
          fill={gradient ? gradientId : 'currentColor'}
        />
        {gradient && (
          <defs>
            <linearGradient id={id} x1="4" y1="2" x2="10" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FE6030" />
              <stop offset={0.5} stopColor="#EB1791" />
              <stop offset={1} stopColor="#D70BE6" />
            </linearGradient>
          </defs>
        )}
      </StyledSVG>
    );
  },
);

Logo.displayName = 'Logo';

export default Logo;
