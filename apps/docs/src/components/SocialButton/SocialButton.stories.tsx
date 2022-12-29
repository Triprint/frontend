import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KakaoIcon, NaverIcon, GoogleIcon, FacebookIcon } from '@triprint/icons';
import { Flex, SocialButton } from '@triprint/ui';

import { booleanArgType, childrenArgType, selectArgType } from '../../utils';
import docs from './SocialButton.docs.mdx';

export default {
  title: 'Components/Social Button',
  component: SocialButton,
  argTypes: {
    children: childrenArgType('자식 컴포넌트 또는 컨텐츠 (아이콘 포함)'),
    variant: selectArgType('버튼 모양', ['base', 'circle'], 'base'),
    colorScheme: selectArgType(
      'SNS별 색상 종류',
      ['kakao', 'naver', 'google', 'facebook'],
      'kakao',
    ),
    fullWidth: booleanArgType('전체 너비 여부', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof SocialButton>;

export const Base: ComponentStory<typeof SocialButton> = (args) => (
  <SocialButton colorScheme="kakao" variant="base" {...args}>
    <KakaoIcon width={24} height={24} />
    카카오 로그인
  </SocialButton>
);

export const Variant = () => {
  return (
    <Flex direction="column" spacingY={8}>
      <Flex align="center" spacing={4} wrap="wrap">
        <SocialButton colorScheme="kakao">
          <KakaoIcon width={24} height={24} />
          카카오 로그인
        </SocialButton>
        <SocialButton colorScheme="naver">
          <NaverIcon width={24} height={24} />
          네이버 로그인
        </SocialButton>
        <SocialButton colorScheme="google">
          <GoogleIcon width={24} height={24} />
          Google 로그인
        </SocialButton>
        <SocialButton colorScheme="facebook">
          <FacebookIcon width={24} height={24} />
          facebook 로그인
        </SocialButton>
      </Flex>
      <Flex align="center" spacingX={4}>
        <SocialButton colorScheme="kakao" variant="circle">
          <KakaoIcon width={24} height={24} />
        </SocialButton>
        <SocialButton colorScheme="naver" variant="circle">
          <NaverIcon width={24} height={24} />
        </SocialButton>
        <SocialButton colorScheme="google" variant="circle">
          <GoogleIcon width={24} height={24} />
        </SocialButton>
        <SocialButton colorScheme="facebook" variant="circle">
          <FacebookIcon width={24} height={24} />
        </SocialButton>
      </Flex>
    </Flex>
  );
};
