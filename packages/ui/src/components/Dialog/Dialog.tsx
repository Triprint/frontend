import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';
import { CSS } from 'stitches.config';

import { CloseIcon } from '@triprint/icons';

import { Text } from '../Text';
import {
  type DialogContentVariantProps,
  StyledDialogBody,
  StyledDialogContent,
  StyledDialogContentInner,
  StyledDialogHeader,
  StyledDialogOverlay,
  StyleDialogCloseButton,
} from './Dialog.styled';

type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentProps = DialogContentPrimitiveProps & {
  title?: string;
  css?: CSS;
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledDialogContent>,
  DialogContentProps & DialogContentVariantProps
>(({ children, title, size = 'lg', fullScreen = false, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Portal>
      <StyledDialogOverlay />
      <StyledDialogContent fullScreen={fullScreen} {...props} ref={forwardedRef}>
        <StyledDialogContentInner fullScreen={fullScreen} size={size}>
          <StyledDialogHeader>
            <StyleDialogCloseButton>
              <CloseIcon width={24} height={24} />
            </StyleDialogCloseButton>
            {title && (
              <DialogPrimitive.Title>
                <Text as="h2" size="xl" weight="bold">
                  {title}
                </Text>
              </DialogPrimitive.Title>
            )}
          </StyledDialogHeader>
          <StyledDialogBody>{children}</StyledDialogBody>
        </StyledDialogContentInner>
      </StyledDialogContent>
    </DialogPrimitive.Portal>
  );
});

DialogContent.displayName = 'DialogContent';

const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  CloseButton: DialogPrimitive.Close,
  Content: DialogContent,
};

export default Dialog;
