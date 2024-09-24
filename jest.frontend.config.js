module.exports = {
  displayName: 'frontend', //Optional. Used to identify test files.
  testEnvironment: 'jest-environment-jsdom', //Node or jsdom
  testMatch: ['<rootDir>/client/**/*.test.js'], //<rootDir> automatically resolves to the root of your directory.
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use babel-jest to transpile frontend tests
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
}