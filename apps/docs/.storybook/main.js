//@ts-check
const path = require('path');

/** @type {import("@storybook/builder-vite").StorybookViteConfig} */
const config = {
  stories: ['../docs/**/*.stories.@(js|ts|tsx|mdx)', '../stories/**/*.stories.@(js|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    return {
      ...config,
    };
  },
};

module.exports = config;
