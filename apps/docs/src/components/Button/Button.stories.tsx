import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, Flex } from '@triprint/ui';

import { booleanArgType, childrenArgType, selectArgType } from '../../utils';
import docs from './Button.docs.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: childrenArgType(),
    variant: selectArgType(
      '버튼 종류',
      ['base', 'primary', 'secondary', 'text', 'inverse'],
      'base',
    ),
    size: selectArgType('버튼 크기', ['sm', 'md', 'lg', 'xl'], 'md'),
    disabled: booleanArgType('버튼 비활성화 여부', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Base.args = {
  children: '버튼',
};

export const Variant = () => (
  <Flex spacing={6} wrap="wrap" align="center">
    <Button>Base (Default)</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="text">Text</Button>
    <Button variant="inverse">Text</Button>
  </Flex>
);

export const Size = () => (
  <Flex spacing={6} wrap="wrap" align="center">
    <Button size="sm">Small</Button>
    <Button size="md">Medium (Default)</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">XLarge</Button>
  </Flex>
);

export const FullWidth = () => {
  return <Button fullWidth>버튼</Button>;
};
