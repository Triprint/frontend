import Link from 'next/link';

import { KakaoIcon } from '@triprint/icons';
import { SocialButton } from '@triprint/ui';

import { createUrl } from '@/utils/url';

const KakaoLoginButton = () => {
  const kakaoLoginURL = createUrl('https://kauth.kakao.com/oauth/authorize', {
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || '',
    redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI || '',
  });

  return (
    <Link href={kakaoLoginURL}>
      <SocialButton as="div" colorScheme="kakao" fullWidth>
        <KakaoIcon width={24} height={24} />
        카카오 로그인
      </SocialButton>
    </Link>
  );
};

export default KakaoLoginButton;
