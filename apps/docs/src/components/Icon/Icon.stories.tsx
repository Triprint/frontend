import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as TriprintIcon from '@triprint/icons';
import { Flex, Grid, Text } from '@triprint/ui';

import docs from './Icon.docs.mdx';

export default {
  title: 'Components/Icon',
  component: TriprintIcon.HeartIcon,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
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
    },
    height: {
      type: 'number',
      description: '아이콘 높이',
    },
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof TriprintIcon.HeartFilledIcon>;

export const Base: ComponentStory<typeof TriprintIcon.HeartFilledIcon> = (args) => (
  <TriprintIcon.HeartFilledIcon {...args} />
);

export const AllIcons = () => {
  return (
    <Grid cols={4} spacing={8} css={{ marginY: '$4' }}>
      {Object.entries(TriprintIcon).map(([iconName, IconComponent]) => (
        <Flex key={iconName} direction="column" align="center">
          <IconComponent width={32} height={32} />
          <Text size="sm" variant="subdued" css={{ marginTop: '$2' }}>
            {iconName.replace(/Icon$/, '')}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};
