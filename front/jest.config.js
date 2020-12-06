const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'shared', path.join(__dirname, 'src')],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: [
    '**/components/**/*.ts',
    '**/components/**/*.tsx',
    '**/pages/**/*.ts',
    '**/pages/**/*.tsx',
    '**/utils/**/*.ts',
    '**/utils/**/*.tsx',
    '!**/*.stories.tsx',
  ]
}