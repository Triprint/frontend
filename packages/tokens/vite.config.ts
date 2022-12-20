import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
      minify: isProduction,
      emptyOutDir: false,
    },
    plugins: [
      dts({
        outputDir: 'dist/types',
      }),
    ],
  };
});
