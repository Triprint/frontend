import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ComponentProps } from 'react';

import { Flex, Text } from '@triprint/ui';

import { booleanArgType, childrenArgType, selectArgType } from '../../utils';
import docs from './Text.docs.mdx';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: childrenArgType(),
    size: selectArgType('텍스트 크기', ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'], 'md'),
    variant: selectArgType(
      '텍스트 타입 (색상)',
      ['base', 'variant', 'subdued', 'disabled', 'inverse', 'primary', 'error'],
      'base',
    ),
    weight: selectArgType('텍스트 굵기', ['regular', 'medium', 'semibold', 'bold'], 'regular'),
    lineClamp: selectArgType('줄을 벗어나지 않고 ellipsis 처리를 위한 옵션', ['1', '2', '3']),
    underline: booleanArgType('텍스트 밑줄 여부', false),
    wordBreak: booleanArgType('단어 기준 줄바꿈 여부', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Text>;

const sampleText = '가을 속의 별들을 다 헤일 듯합니다.';

export const Base: ComponentStory<typeof Text> = (args) => <Text {...args} />;
Base.args = {
  children: sampleText,
};

interface TextWithLabelProps extends ComponentProps<typeof Text> {
  label: string;
}

const TextWithLabel = ({ label, ...props }: TextWithLabelProps) => {
  return (
    <Flex align="center" spacingX={4}>
      <Text size="sm" variant="subdued">
        {label}
      </Text>
      <Text {...props}>{sampleText}</Text>
    </Flex>
  );
};

export const Size = () => {
  return (
    <Flex direction="column" spacingY={6}>
      <TextWithLabel label="2xs" size="2xs" />
      <TextWithLabel label="xs" size="xs" />
      <TextWithLabel label="sm" size="sm" />
      <TextWithLabel label="md" size="md" />
      <TextWithLabel label="lg" size="lg" />
      <TextWithLabel label="xl" size="xl" />
      <TextWithLabel label="2xl" size="2xl" />
      <TextWithLabel label="3xl" size="3xl" />
      <TextWithLabel label="4xl" size="4xl" />
    </Flex>
  );
};

export const Weight = () => {
  return (
    <Flex direction="column" spacingY={6}>
      <TextWithLabel label="regular" weight="regular" />
      <TextWithLabel label="medium" weight="medium" />
      <TextWithLabel label="semibold" weight="semibold" />
      <TextWithLabel label="bold" weight="bold" />
    </Flex>
  );
};

export const Variant = () => {
  return (
    <Flex direction="column" spacingY={6}>
      <TextWithLabel label="base" variant="base" />
      <TextWithLabel label="variant" variant="variant" />
      <TextWithLabel label="subdued" variant="subdued" />
      <TextWithLabel label="disabled" variant="disabled" />
      <TextWithLabel label="inverse" variant="inverse" />
      <TextWithLabel label="primary" variant="primary" />
    </Flex>
  );
};
