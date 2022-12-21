import { ComponentMeta } from '@storybook/react';
import { ComponentProps } from 'react';

import * as TriprintIcon from '@triprint/icons';

import docs from './Icon.docs.mdx';

export default {
  title: 'Components/Icon',
  component: TriprintIcon.HeartIcon,
  argTypes: {
    title: {
      type: 'string',
      description: '접근성을 위한 대체 텍스트 추가',
    },
    color: {
      control: {
        type: 'color',
      },
      description: '아이콘 색상',
    },
    width: {
      type: 'number',
      description: '아이콘 너비',
      table: {
        defaultValue: { summary: 16 },
      },
      defaultValue: 16,
    },
    height: {
      type: 'number',
      description: '아이콘 높이',
      table: {
        defaultValue: { summary: 16 },
      },
      defaultValue: 16,
    },
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof TriprintIcon.HeartIcon>;

type IconProps = ComponentProps<typeof TriprintIcon.HeartIcon>;

export const Icon = (args: IconProps) => <TriprintIcon.HeartIcon {...args} />;

export const AllIcons = () => {
  return (
    <div>
      {Object.entries(TriprintIcon).map(([iconName, IconComponent]) => (
        <div key={iconName}>
          <IconComponent width={32} height={32} />
          <span>{iconName.replace(/Icon$/, '')} </span>
        </div>
      ))}
    </div>
  );
};
