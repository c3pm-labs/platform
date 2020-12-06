// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: path.join(__dirname, 'tests', '__helpers__', 'environment.js'),
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
};
