import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { Button, ButtonProps } from '@triprint/ui';

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

export const Variants = (args: ButtonProps) => (
  <>
    <Button {...args}>Base (Default)</Button>
    <Button {...args} variant="primary">
      Primary
    </Button>
    <Button {...args} variant="secondary">
      Secondary
    </Button>
  </>
);

export const Sizes = (args: ButtonProps) => (
  <>
    <Button {...args} size="sm">
      Small
    </Button>
    <Button {...args} size="md">
      Medium (Default)
    </Button>
    <Button {...args} size="lg">
      Large
    </Button>
    <Button {...args} size="xl">
      XLarge
    </Button>
  </>
);

export const Loading = (args: ButtonProps) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Button {...args} isLoading={isLoading} onClick={handleClick}>
      버튼
    </Button>
  );
};

export const FullWidth = (args: ButtonProps) => {
  return (
    <>
      <Button {...args} fullWidth>
        버튼
      </Button>
    </>
  );
};
