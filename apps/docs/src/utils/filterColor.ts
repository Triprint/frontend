export const filterColor = <T extends object>(color: T, include: string, exclude?: string) => {
  const filtered: Partial<T> = {};
  for (const key in color) {
    const lowerCaseKey = key.toLowerCase();
    if (
      lowerCaseKey.includes(include) &&
      (exclude === undefined || !lowerCaseKey.includes(exclude))
    ) {
      filtered[key] = color[key];
    }
  }
  return filtered;
};
