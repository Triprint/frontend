//@ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'turbo/no-undeclared-env-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
