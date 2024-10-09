/** @type {import('jest').Config} */
module.exports = {
  displayName: 'backend',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/backend/**/*.test.js'],
  collectCoverage: true,
  // You can also specify specific files or folders
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
};