import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Flex } from 'layouts';
import React from 'react';

import { Button } from '../Button';
import { Text } from '../Text';
import * as Styled from './Alert.styled';

export interface AlertProps {
  title: React.ReactNode;
  description: React.ReactNode;
  actionLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Alert = React.forwardRef<React.ElementRef<typeof Styled.Content>, AlertProps>(
  ({ title, description, actionLabel = '확인', cancelLabel = '취소', onAction }, forwardedRef) => {
    return (
      <AlertDialog.Portal>
        <Styled.Overlay />
        <Styled.Content ref={forwardedRef}>
          <Styled.ContentContainer>
            <AlertDialog.Title asChild>
              <Text as="h2" weight="bold" size="xl" css={{ marginBottom: '$2' }}>
                {title}
              </Text>
            </AlertDialog.Title>
            <AlertDialog.Description asChild>
              <Text as="p" variant="variant" css={{ marginBottom: '$4' }}>
                {description}
              </Text>
            </AlertDialog.Description>
            <Flex spacingX={4}>
              <AlertDialog.Action asChild onClick={onAction}>
                <Button variant="primary" size="lg" fullWidth>
                  {actionLabel}
                </Button>
              </AlertDialog.Action>
              <AlertDialog.Cancel asChild>
                <Button size="lg" fullWidth>
                  {cancelLabel}
                </Button>
              </AlertDialog.Cancel>
            </Flex>
          </Styled.ContentContainer>
        </Styled.Content>
      </AlertDialog.Portal>
    );
  },
);

Alert.displayName = 'Alert';

export default Object.assign(Alert, {
  Root: AlertDialog.Root,
  Trigger: AlertDialog.Trigger,
});
