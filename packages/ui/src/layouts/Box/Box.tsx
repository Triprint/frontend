import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx, { ClassValue } from 'clsx';
import React from 'react';

import { Sprinkles, sprinkles } from '../../css';
import { splitProps } from '../../lib';

type Props = Sprinkles & {
  className?: ClassValue;
};

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div', Props>;

export type BoxProps = Polymorphic.OwnProps<PolymorphicBox>;

const Box = React.forwardRef((props, ref) => {
  const { as: Component = 'div', className, ...restProps } = props;

  const { sprinklesProps, nativeProps } = splitProps(restProps);

  return (
    <Component ref={ref} className={clsx(sprinkles(sprinklesProps), className)} {...nativeProps} />
  );
}) as PolymorphicBox;

Box.displayName = 'Box';

export default Box;
