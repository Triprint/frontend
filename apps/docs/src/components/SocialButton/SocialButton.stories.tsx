import { ComponentMeta } from '@storybook/react';

import { Flex, SocialButton, SocialButtonProps } from '@triprint/ui';

import { booleanArgTypes, selectArgTypes } from '../../utils';
import docs from './SocialButton.docs.mdx';

export default {
  title: 'Components/Social Button',
  component: SocialButton,
  argTypes: {
    social: selectArgTypes('SNS 종류', ['kakao', 'naver', 'google', 'facebook'], 'kakao'),
    variant: selectArgTypes('버튼 모양', ['base', 'square'], 'base'),

    fullWidth: booleanArgTypes('전체 너비 여부', false),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof SocialButton>;

export const Base = (args: SocialButtonProps) => <SocialButton {...args} />;

Base.args = {
  children: '카카오 로그인',
  social: 'kakao',
  variant: 'base',
};

export const Variant = () => {
  return (
    <Flex direction="column" spacingY="16">
      <Flex align="center" spacingX="4">
        <SocialButton social="kakao">카카오 로그인</SocialButton>
        <SocialButton social="naver">네이버 로그인</SocialButton>
        <SocialButton social="google">Google 로그인</SocialButton>
        <SocialButton social="facebook">Facebook 로그인</SocialButton>
      </Flex>
      <Flex align="center" spacingX="4">
        <SocialButton social="kakao" variant="square" />
        <SocialButton social="naver" variant="square" />
        <SocialButton social="google" variant="square" />
        <SocialButton social="facebook" variant="square" />
      </Flex>
    </Flex>
  );
};
