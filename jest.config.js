module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'scss'],
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).(ts|js)?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.ts(x*)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(s*)css$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  verbose: true,
};
