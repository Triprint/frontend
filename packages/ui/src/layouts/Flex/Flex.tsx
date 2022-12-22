import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { ClassValue } from 'clsx';
import React from 'react';

import { Sprinkles } from '../../css';
import { Box } from '../Box';

interface Props {
  align?: Sprinkles['alignItems'];
  basis?: Sprinkles['flexBasis'];
  direction?: Sprinkles['flexDirection'];
  grow?: Sprinkles['flexGrow'];
  justify?: Sprinkles['justifyContent'];
  shrink?: Sprinkles['flexShrink'];
  wrap?: Sprinkles['flexWrap'];
  spacing?: Sprinkles['gap'];
  spacingY?: Sprinkles['rowGap'];
  spacingX?: Sprinkles['columnGap'];
  css?: Sprinkles;
  className?: ClassValue;
}

type PolymorphicFlex = Polymorphic.ForwardRefComponent<'div', Props>;

export type FlexProps = Polymorphic.OwnProps<PolymorphicFlex>;

const Flex = React.forwardRef(
  (
    {
      align,
      basis,
      direction,
      grow,
      justify,
      shrink,
      wrap,
      css,
      spacing,
      spacingX,
      spacingY,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        css={{
          display: 'flex',
          flexDirection: direction,
          flexGrow: grow,
          flexShrink: shrink,
          flexWrap: wrap,
          alignItems: align,
          justifyContent: justify,
          flexBasis: basis,
          gap: spacing,
          rowGap: spacingY,
          columnGap: spacingX,
          ...css,
        }}
        {...props}
      />
    );
  },
) as PolymorphicFlex;

Flex.displayName = 'Flex';

export default Flex;
