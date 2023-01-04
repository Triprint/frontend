import type { Property } from '@stitches/react/types/css';

import Box from './Box';

interface SpacingProps {
  size: Property.Height;
  tablet?: Property.Height;
  desktop?: Property.Height;
}

const Spacing = ({ size, tablet, desktop }: SpacingProps) => {
  return (
    <Box
      css={{
        flex: 'none',
        height: size,
        '@tablet': {
          height: tablet,
        },
        '@desktop': {
          height: desktop,
        },
      }}
    />
  );
};

export default Spacing;
