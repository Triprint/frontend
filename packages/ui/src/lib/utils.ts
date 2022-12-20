export const mapVarName = (_value: string | null, path: string[]) => {
  return path.join('-').replace(/\./g, '_').replace(/\//g, '__');
};
