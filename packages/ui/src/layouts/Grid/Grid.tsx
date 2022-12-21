import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { ClassValue } from 'clsx';
import React from 'react';

import { Sprinkles } from '../../css';
import { Box } from '../Box';

interface Props {
  cols?: Sprinkles['gridTemplateColumns'];
  spacing?: Sprinkles['gap'];
  spacingY?: Sprinkles['rowGap'];
  spacingX?: Sprinkles['columnGap'];
  css?: Sprinkles;
  className?: ClassValue;
}

type PolymorphicGrid = Polymorphic.ForwardRefComponent<'div', Props>;

export type GridProps = Polymorphic.OwnProps<PolymorphicGrid>;

const Grid = React.forwardRef(({ cols, css, spacing, spacingX, spacingY, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      css={{
        display: 'grid',
        gridTemplateColumns: cols,
        gap: spacing,
        rowGap: spacingY,
        columnGap: spacingX,
        ...css,
      }}
      {...props}
    />
  );
}) as PolymorphicGrid;

Grid.displayName = 'Grid';

export default Grid;
