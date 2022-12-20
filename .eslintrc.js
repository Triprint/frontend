//@ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@triprint'],
  settings: {
    next: {
      rootDir: ['apps/client/'],
    },
  },
};
