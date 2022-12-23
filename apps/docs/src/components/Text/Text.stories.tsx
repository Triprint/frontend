import { ComponentMeta } from '@storybook/react';

import { Box, Flex, Text, TextProps } from '@triprint/ui';

import { booleanArgTypes, selectArgTypes } from '../../utils';
import docs from './Text.docs.mdx';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    as: selectArgTypes(
      '텍스트 타입',
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'legend', 'strong', 'em'],
      'span',
    ),
    size: selectArgTypes('텍스트 크기', ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'], 'md'),
    color: selectArgTypes('텍스트 색', ['base', 'subdued', 'inverse', 'primary', 'error'], 'base'),
    weight: selectArgTypes('텍스트 굵기', ['regular', 'medium', 'semibold', 'bold'], 'regular'),
    lineClamp: selectArgTypes('줄을 벗어나지 않고 ellipsis 처리', ['none', '1', '2', '3'], 'none'),
    underline: booleanArgTypes('텍스트 밑줄', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Text>;

const sampleText = '계절이 지나가는 하늘에는 가을로 가득 차 있습니다.';

export const Base = (args: TextProps) => <Text as="span" {...args} />;
Base.args = {
  children: sampleText,
};

export const Size = () => {
  const textVariants: TextProps['size'][] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];

  return (
    <Flex direction="column" spacingY="6">
      {textVariants.map((size) => (
        <Flex align="center" spacingX="4">
          <Box css={{ width: '8' }}>
            <Text size="sm" color="subdued">
              {size}
            </Text>
          </Box>
          <Text size={size}>{sampleText}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export const Weight = () => {
  const textVariants: TextProps['weight'][] = ['regular', 'medium', 'regular', 'bold'];

  return (
    <Flex direction="column" spacingY="6">
      {textVariants.map((weight) => (
        <Flex align="center" spacingX="4">
          <Box css={{ width: '14' }}>
            <Text size="sm" color="subdued">
              {weight}
            </Text>
          </Box>
          <Text weight={weight}>{sampleText}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export const Color = () => {
  return (
    <Flex direction="column" spacingY="6">
      <Flex direction="column" spacingY="6">
        <Text color="base">{sampleText}</Text>
        <Text color="subdued">{sampleText}</Text>
        <Text color="inverse">{sampleText}</Text>
        <Text color="primary">{sampleText}</Text>
        <Text color="error">{sampleText}</Text>
      </Flex>
    </Flex>
  );
};
