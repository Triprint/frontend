//@ts-check
/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'all',
  importOrder: ['<THIRD_PARTY_MODULES>', '^@triprint/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
};
