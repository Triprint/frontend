import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useCallback } from 'react';

import * as TriprintIcon from '@triprint/icons';
import { Flex, Grid, Spacing, Text } from '@triprint/ui';

import { colorArgType, numberArgType, stringArgType } from '../../utils';
import docs from './Icon.docs.mdx';

export default {
  title: 'Components/Icon',
  component: TriprintIcon.HeartIcon,
  argTypes: {
    title: stringArgType('접근성을 위한 대체 텍스트 추가'),
    color: colorArgType('아이콘 색상'),
    size: numberArgType('아이콘 사이즈 (1:1 비율, `1em`)', 16),
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
  const copyToClipboard = useCallback(async (iconComponentName: string) => {
    await window.navigator.clipboard.writeText(
      `import { ${iconComponentName} } from '@triprint/icons'\n<${iconComponentName} />`,
    );
    alert('클립보드에 복사되었습니다.');
  }, []);

  return (
    <Flex direction="column">
      <Spacing size="2rem" />
      <Grid cols={4} spacing={8} css={{ width: '$full' }}>
        {Object.entries(TriprintIcon).map(([iconComponentName, IconComponent]) => {
          const iconName = iconComponentName.replace(/Icon$/, '');
          return (
            <Flex key={iconName} direction="column" align="center" spacingY={2}>
              <button type="button" onClick={() => copyToClipboard(iconComponentName)}>
                <Flex
                  align="center"
                  justify="center"
                  css={{ padding: '$5', boxShadow: '$outline', borderRadius: '$xl' }}
                >
                  <IconComponent size={32} />
                </Flex>
              </button>
              <Text size="sm" variant="subdued">
                {iconName}
              </Text>
            </Flex>
          );
        })}
      </Grid>
      <Spacing size="2rem" />
    </Flex>
  );
};
