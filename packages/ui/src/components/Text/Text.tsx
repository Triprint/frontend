import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx, { ClassValue } from 'clsx';
import React from 'react';

import { sprinkles } from '../../css';
import { textRecipe, TextVariants } from './Text.css';

export type TextProps = TextVariants & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'legend' | 'strong' | 'em';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  className?: ClassValue;
  underline?: boolean;
};

type PolymorphicText = Polymorphic.ForwardRefComponent<'span', TextProps>;

const Text = React.forwardRef((props, forwardedRef) => {
  const {
    as: Comp = 'span',
    className,
    block,
    size,
    color,
    weight,
    lineClamp,
    underline,
    ...restProps
  } = props;
  return (
    <Comp
      className={clsx(
        textRecipe({ block, size, color, lineClamp, underline }),
        sprinkles({ fontWeight: weight }),
        className,
      )}
      {...restProps}
      ref={forwardedRef}
    />
  );
}) as PolymorphicText;

Text.displayName = 'Text';

export default Text;
