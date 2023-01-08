import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';
import type { CSS } from 'stitches.config';

import { CheckIcon, DotIcon } from '@triprint/icons';

import { Box } from '../../layouts';
import {
  type DropdownContentVariantProps,
  StyledDropdownArrow,
  StyledDropdownCheckboxItem,
  StyledDropdownContent,
  StyledDropdownItem,
  StyledDropdownLabel,
  StyledDropdownRadioItem,
  StyledDropdownSeparator,
} from './Dropdown.styled';

type DropdownContentPrimitiveProps = React.ComponentProps<typeof DropdownPrimitive.Content>;
type DropdownContentProps = DropdownContentPrimitiveProps & {
  css?: CSS;
};

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof StyledDropdownContent>,
  DropdownContentProps & DropdownContentVariantProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownPrimitive.Portal>
    <StyledDropdownContent {...props} ref={forwardedRef}>
      {children}
      <StyledDropdownArrow width={14} height={7} />
    </StyledDropdownContent>
  </DropdownPrimitive.Portal>
));
DropdownContent.displayName = 'DropdownContent';

type DropdownCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof DropdownPrimitive.CheckboxItem
>;
type DropdownCheckboxItemProps = DropdownCheckboxItemPrimitiveProps & { css?: CSS };

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownCheckboxItem>,
  DropdownCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownCheckboxItem {...props} ref={forwardedRef}>
    {children}
    <Box as="span" css={{ position: 'absolute', right: '$1_5' }}>
      <DropdownPrimitive.ItemIndicator>
        <CheckIcon width={16} height={16} />
      </DropdownPrimitive.ItemIndicator>
    </Box>
  </StyledDropdownCheckboxItem>
));
DropdownCheckboxItem.displayName = 'DropdownCheckboxItem';

type DropdownPrimitiveRadioItemProps = React.ComponentProps<typeof DropdownPrimitive.RadioItem>;
type DropdownRadioItemProps = DropdownPrimitiveRadioItemProps & { css?: CSS };

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownRadioItem>,
  DropdownRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', right: '$1_5' }}>
      <DropdownPrimitive.ItemIndicator>
        <DotIcon width={16} height={16} />
      </DropdownPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownRadioItem>
));
DropdownRadioItem.displayName = 'DropdownRadioItem';

const Dropdown = {
  Root: DropdownPrimitive.Root,
  Trigger: DropdownPrimitive.Trigger,
  Content: DropdownContent,
  Separator: StyledDropdownSeparator,
  Group: DropdownPrimitive.Group,
  Label: StyledDropdownLabel,
  Item: StyledDropdownItem,
  CheckboxItem: DropdownCheckboxItem,
  RadioItem: DropdownRadioItem,
  RadioGroup: DropdownPrimitive.RadioGroup,
} as const;

export default Dropdown;
