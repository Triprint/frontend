export const breakPoint = {
  tablet: '768px',
  desktop: '1280px',
} as const;

export type Device = keyof typeof breakPoint;
