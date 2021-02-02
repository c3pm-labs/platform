const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'shared', path.join(__dirname, 'components'), path.join(__dirname)],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: [
    '**/components/**/*.ts',
    '**/components/**/*.tsx',
    '**/utils/**/*.ts',
    '**/utils/**/*.tsx',
    '!**/*.stories.tsx',
    '!**/pages/_document.tsx',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 75,
      lines: 80
    }
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}