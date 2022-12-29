import { globalCss } from 'stitches.config';

const fontURL =
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static';

export const globalFonts = globalCss({
  '@font-face': [
    {
      fontFamily: 'Pretendard',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: `local('Pretendard Regular'), url('${fontURL}/woff2/Pretendard-Regular.woff2') format('woff2'), url('${fontURL}/woff/Pretendard-Regular.woff') format('woff')`,
    },
    {
      fontFamily: 'Pretendard',
      fontWeight: 500,
      fontDisplay: 'swap',
      src: `local('Pretendard Medium'), url('${fontURL}/woff2/Pretendard-Medium.woff2') format('woff2'), url('${fontURL}/woff/Pretendard-Medium.woff') format('woff')`,
    },
    {
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontDisplay: 'swap',
      src: `local('Pretendard SemiBold'), url('${fontURL}/woff2/Pretendard-SemiBold.woff2') format('woff2'), url('${fontURL}/woff/Pretendard-SemiBold.woff') format('woff')`,
    },
    {
      fontFamily: 'Pretendard',
      fontWeight: 700,
      fontDisplay: 'swap',
      src: `local('Pretendard Bold'), url('${fontURL}/woff2/Pretendard-Bold.woff2') format('woff2'), url('${fontURL}/woff/Pretendard-Bold.woff') format('woff')`,
    },
  ],
});
