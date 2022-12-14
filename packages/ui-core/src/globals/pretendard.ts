/*
Copyright (c) 2021 Kil Hyung-jin, with Reserved Font Name Pretendard.
https://github.com/orioncactus/pretendard

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL
*/
import { globalCss } from '../stitches.config';

export const pretendard = globalCss({
  '@font-face': [
    {
      fontFamily: 'Pretendard',
      fontWeight: 700,
      fontDisplay: 'swap',
      src: "local('Pretendard Bold'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff/Pretendard-Bold.woff') format('woff')",
    },
    {
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontDisplay: 'swap',
      src: "local('Pretendard SemiBold'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff/Pretendard-SemiBold.woff') format('woff')",
    },
    {
      fontFamily: 'Pretendard',
      fontWeight: 500,
      fontDisplay: 'swap',
      src: "local('Pretendard Medium'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff/Pretendard-Medium.woff') format('woff')",
    },
    {
      fontFamily: 'Pretendard',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: "local('Pretendard Regular'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/packages/pretendard/dist/web/static/woff/Pretendard-Regular.woff') format('woff')",
    },
  ],
});
