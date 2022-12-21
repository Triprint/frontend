import { Sprinkles, sprinkles } from '../css';

export const isSprinkles = (key: string): key is keyof Sprinkles => {
  return sprinkles.properties.has(key as keyof Sprinkles);
};

export const splitProps = <T extends { [key: string]: any }>(props: T) => {
  const nativeProps: { [key: string]: unknown } = {};
  const sprinklesProps: { [key: string]: unknown } = {};

  for (const key in props) {
    if (isSprinkles(key)) {
      sprinklesProps[key] = props[key as keyof typeof props];
    } else {
      nativeProps[key] = props[key as keyof typeof props];
    }
  }

  return {
    nativeProps,
    sprinklesProps,
  };
};
