// centralize alias list, so only 2 file need update when adding alias
// this file and jsconfig.json

// eslintrc & babel
const alias = {
  '~': './src',
};

// jest
const jestAlias = {
  '^~(.*)$': '<rootDir>/src$1',
};

module.exports = { alias, jestAlias };
