const alias = require('./tools/alias').jestAlias;

module.exports = {
  moduleNameMapper: {
    ...alias,
  },
  setupFiles: [
    'raf/polyfill',
    './tools/enzymeTestAdapterSetup.js',
    './tools/browserMocks.js',
  ],
  collectCoverageFrom: [
    '!src/**/*.stories.js',
    'src/actions/**/*.js',
    'src/utils/**/*.js',
    'src/components/**/*.js',
    '!src/components/layouts/**/*.js',
    'src/reducers/*.js',
  ],
  testURL: 'http://localhost/',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: ['node_modules', 'utils'],
};
