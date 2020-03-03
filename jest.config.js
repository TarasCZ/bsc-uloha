module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  roots: ['src/app'],
  transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
