import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx, { ClassValue } from 'clsx';
import React from 'react';

import { Sprinkles, sprinkles } from '../../css';

interface Props {
  className?: ClassValue;
  css?: Sprinkles;
}

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div', Props>;

export type BoxProps = Polymorphic.OwnProps<PolymorphicBox>;

const Box = React.forwardRef((props, ref) => {
  const { as: Component = 'div', css = {}, className, ...restProps } = props;

  return <Component ref={ref} className={clsx(sprinkles(css), className)} {...restProps} />;
}) as PolymorphicBox;

Box.displayName = 'Box';

export default Box;
