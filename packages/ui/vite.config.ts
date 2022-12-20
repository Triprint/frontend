import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        fileName: 'index',
        formats: ['cjs', 'es'],
      },
      outDir: 'dist',
      rollupOptions: {
        external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
      },
      minify: isProduction,
      emptyOutDir: false,
    },
    plugins: [
      vanillaExtractPlugin({
        identifiers: isProduction ? 'short' : 'debug',
      }),
      dts({
        outputDir: 'dist/types',
      }),
    ],
  };
});
