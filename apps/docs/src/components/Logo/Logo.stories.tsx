import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Logo } from '@triprint/ui';

import { booleanArgType, numberArgType } from '../../utils';
import docs from './Logo.docs.mdx';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    size: numberArgType('로고 크기 (높이 기준)', 24),
    gradient: booleanArgType('그래디언트 색 사용 여부', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Logo>;

export const Base: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
Base.args = {
  size: 40,
  gradient: false,
};

export const Gradient: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
Gradient.args = {
  size: 40,
  gradient: true,
};
