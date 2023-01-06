import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, Dialog, Flex } from '@triprint/ui';

import { booleanArgType, childrenArgType, selectArgType, stringArgType } from '../../utils';
import docs from './Dialog.docs.mdx';

export default {
  title: 'Components/Dialog',
  component: Dialog.Content,
  argTypes: {
    children: childrenArgType('Dialog 내용'),
    title: stringArgType('Dialog 제목', ['ReactNode']),
    size: selectArgType(
      'Dialog maxWidth 크기',
      ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
      'lg',
    ),
    fullScreen: booleanArgType('전체화면 모달 사용여부', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Dialog.Content>;

const sampleText =
  '그들의 살았으며, 얼음에 칼이다. 같은 굳세게 얼마나 길지 구하지 인간의 피는 이상은 이것이다. 굳세게 착목한는 아니한 보라. 내려온 용감하고 동산에는 사람은 때문이다. 우리 구하지 가치를 풍부하게 인간의 약동하다. 곳이 역사를 있는 주는 위하여서. 인생을 보내는 사랑의 역사를 얼마나 것이다. 거친 트고, 유소년에게서 그들을 주는 하여도 황금시대의 뿐이다. 원대하고, 그들의 방황하여도, 이상은 든 그것은 품에 소리다.이것은 칼이다.';

export const Base: ComponentStory<typeof Dialog.Content> = ({ ...args }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content {...args} />
    </Dialog.Root>
  );
};
Base.args = {
  title: '제목',
  size: 'lg',
  fullScreen: false,
  children: sampleText,
};

type AlertContentSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';

export const Size = () => {
  const sizes: AlertContentSize[] = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
  ];

  return (
    <Flex direction="column" align="center" spacing={6}>
      <Flex spacing={4}>
        {sizes.map((size) => (
          <Dialog.Root key={size}>
            <Dialog.Trigger asChild>
              <Button>
                {size}
                {size === 'lg' && '(default)'}
              </Button>
            </Dialog.Trigger>
            <Dialog.Content size={size} title="제목">
              {sampleText}
            </Dialog.Content>
          </Dialog.Root>
        ))}
      </Flex>
    </Flex>
  );
};

export const FullScreen = () => {
  return (
    <Flex direction="column" align="center" spacing={6}>
      <Flex spacing={4}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Full Screen on Mobile</Button>
          </Dialog.Trigger>
          <Dialog.Content
            title="제목"
            size="2xl"
            fullScreen={{ '@initial': true, '@tablet': false }}
          >
            {sampleText}
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
    </Flex>
  );
};
