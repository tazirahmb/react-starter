const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.alias['~'] = path.join(__dirname, '../src');
    return { ...baseConfig };
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.js',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
