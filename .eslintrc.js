const alias = require('./tools/alias').alias;

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', 'jest', 'react-hooks', 'sonarjs', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeature: { jsx: true },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  // rules: {},
  // overrides: {},
  // global: {},
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias,
      },
    },
  },
};
