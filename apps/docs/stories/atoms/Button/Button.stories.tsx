import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@triprint-ui/components';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      control: 'select',
      defaultValue: 'primary',
      description: '색상 스타일',
      options: ['primary', 'primaryContainer'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Button' };
