import { KakaoIcon, NaverIcon } from '@triprint/icons';

export type SocialType = 'kakao' | 'naver';

export const SOCIAL_ICONS: Record<SocialType, typeof KakaoIcon> = {
  kakao: KakaoIcon,
  naver: NaverIcon,
} as const;
