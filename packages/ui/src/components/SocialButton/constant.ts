import { KakaoIcon, NaverIcon, GoogleIcon, FacebookIcon } from '@triprint/icons';

export type SocialType = 'kakao' | 'naver' | 'google' | 'facebook';

export const SOCIAL_ICONS: Record<SocialType, typeof KakaoIcon> = {
  kakao: KakaoIcon,
  naver: NaverIcon,
  google: GoogleIcon,
  facebook: FacebookIcon,
} as const;
