module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/error',
    'plugin:import/warning',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', 'jest', 'react-hooks', 'sonar-js', 'prettier'],
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
};
