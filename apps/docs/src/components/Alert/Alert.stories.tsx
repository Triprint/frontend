import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert, Button } from '@triprint/ui';

import { actionArgType, stringArgType } from '../../utils';
import docs from './Alert.docs.mdx';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    title: stringArgType('제목', ['ReactNode', 'string']),
    description: stringArgType('설명', ['ReactNode', 'string']),
    actionLabel: stringArgType('실행 버튼 `label`', ['ReactNode', 'string'], '확인'),
    cancelLabel: stringArgType('취소 버튼 `label`', ['ReactNode', 'string'], '취소'),
    onAction: actionArgType('onAction', '확인(actionLabel) 버튼을 클릭했을 때의 Event Handler'),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Alert>;

export const Base: ComponentStory<typeof Alert> = ({ ...args }) => {
  return (
    <Alert.Root>
      <Alert.Trigger asChild>
        <Button>로그아웃</Button>
      </Alert.Trigger>
      <Alert {...args} />
    </Alert.Root>
  );
};
Base.args = {
  title: '로그아웃',
  description: '정말 로그아웃 하시겠나요?',
};
