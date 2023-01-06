import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Flex } from 'layouts';
import React from 'react';
import { CSS } from 'stitches.config';

import { Button } from '../Button';
import { Text } from '../Text';
import { StyledAlertContent, StyledAlertContentInner, StyledAlertOverlay } from './Alert.styled';

type AlertDialogPrimitiveProps = React.ComponentProps<typeof AlertDialogPrimitive.Content>;
type AlertContentProps = AlertDialogPrimitiveProps & {
  title: React.ReactNode;
  description: React.ReactNode;
  actionLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
  css?: CSS;
};

const AlertContent = React.forwardRef<
  React.ElementRef<typeof StyledAlertContent>,
  AlertContentProps
>(
  (
    { title, description, actionLabel = '확인', cancelLabel = '취소', css, onAction, ...props },
    forwardedRef,
  ) => {
    return (
      <AlertDialogPrimitive.Portal>
        <StyledAlertOverlay />
        <StyledAlertContent ref={forwardedRef} {...props}>
          <StyledAlertContentInner css={css}>
            <AlertDialogPrimitive.Title asChild>
              <Text as="h2" weight="bold" size="xl" css={{ marginBottom: '$2' }}>
                {title}
              </Text>
            </AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Description asChild>
              <Text as="p" variant="variant" css={{ marginBottom: '$4' }}>
                {description}
              </Text>
            </AlertDialogPrimitive.Description>
            <Flex spacingX={4}>
              <AlertDialogPrimitive.Action asChild onClick={onAction}>
                <Button variant="primary" size="lg" fullWidth>
                  {actionLabel}
                </Button>
              </AlertDialogPrimitive.Action>
              <AlertDialogPrimitive.Cancel asChild>
                <Button size="lg" fullWidth>
                  {cancelLabel}
                </Button>
              </AlertDialogPrimitive.Cancel>
            </Flex>
          </StyledAlertContentInner>
        </StyledAlertContent>
      </AlertDialogPrimitive.Portal>
    );
  },
);

AlertContent.displayName = 'AlertContent';

const Alert = {
  Root: AlertDialogPrimitive.Root,
  Trigger: AlertDialogPrimitive.Trigger,
  Content: AlertContent,
};

export default Alert;
