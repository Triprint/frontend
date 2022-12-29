import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default defineConfig(({ watch }) => {
  const isProduction = !watch;

  return {
    input: './src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
    plugins: [
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
        verbosity: isProduction ? 0 : 1,
      }),
    ],
  };
});
