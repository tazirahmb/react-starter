const alias = require('./tools/alias').jestAlias;

module.exports = {
  moduleNameMapper: {
    ...alias,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/assetsTransformer.js',
    '\\.(css|less|scss)$': '<rootDir>/tools/assetsTransformer.js',
  },
  setupFiles: ['raf/polyfill', './tools/browserMocks.js'],
  collectCoverageFrom: [
    '!src/**/*.stories.js',
    'src/actions/**/*.js',
    'src/utils/**/*.js',
    'src/components/**/*.js',
    '!src/components/layouts/**/*.js',
    'src/reducers/*.js',
  ],
  moduleDirectories: ['node_modules', 'utils'],
  modulePathIgnorePatterns: ['.*__data__.*', '<rootDir>/.*/__mocks__'], // <rootDir>/.*/__mocks__ to remove warning duplicate mocks
  setupFilesAfterEnv: ['<rootDir>/tools/testSetup.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: { url: 'http://localhost/' },
};
