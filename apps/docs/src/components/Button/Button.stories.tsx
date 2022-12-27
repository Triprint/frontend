import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { HeartFilledIcon } from '@triprint/icons';
import { Button, ButtonProps, Flex } from '@triprint/ui';

import { booleanArgTypes, selectArgTypes } from '../../utils';
import docs from './Button.docs.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: selectArgTypes('Button Variant', ['base', 'primary', 'secondary'], 'base'),
    size: selectArgTypes('Button Size', ['sm', 'md', 'lg', 'xl'], 'md'),
    disabled: booleanArgTypes('Button Disabled', false),
    isLoading: booleanArgTypes('Button When Loading', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Button>;

export const Base = (args: ButtonProps) => <Button {...args} />;

Base.args = {
  onClick: () => alert('버튼이 클릭되었습니다.'),
  children: '버튼',
};

export const Variants = () => (
  <Flex spacing="6" wrap="wrap" align="center">
    <Button>Base (Default)</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="text">Text</Button>
  </Flex>
);

export const Sizes = () => (
  <Flex spacing="6" wrap="wrap" align="center">
    <Button size="sm">Small</Button>
    <Button size="md">Medium (Default)</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">XLarge</Button>
  </Flex>
);

export const Loading = () => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Button isLoading={isLoading} onClick={handleClick}>
      버튼
    </Button>
  );
};

export const FullWidth = () => {
  return (
    <>
      <Button fullWidth>버튼</Button>
    </>
  );
};

export const WithIcon = () => {
  return (
    <Flex direction="column" spacing="6" wrap="wrap">
      <Flex spacing="6" wrap="wrap" align="center">
        <Button variant="primary" size="sm" left={<HeartFilledIcon width={16} height={16} />}>
          좋아요
        </Button>
        <Button variant="primary" size="md" left={<HeartFilledIcon width={20} height={20} />}>
          좋아요
        </Button>
        <Button variant="primary" size="lg" left={<HeartFilledIcon width={20} height={20} />}>
          좋아요
        </Button>
        <Button variant="primary" size="xl" left={<HeartFilledIcon width={24} height={24} />}>
          좋아요
        </Button>
      </Flex>
      <Flex spacing="6" wrap="wrap" align="center">
        <Button variant="primary" size="sm" right={<HeartFilledIcon width={16} height={18} />}>
          좋아요
        </Button>
        <Button variant="primary" size="md" right={<HeartFilledIcon width={20} height={18} />}>
          좋아요
        </Button>
        <Button variant="primary" size="lg" right={<HeartFilledIcon width={20} height={24} />}>
          좋아요
        </Button>
        <Button variant="primary" size="xl" right={<HeartFilledIcon width={24} height={24} />}>
          좋아요
        </Button>
      </Flex>
    </Flex>
  );
};
