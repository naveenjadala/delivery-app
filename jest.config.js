module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleNameMapper: {
    '\\.(png)$': '<rootDir>/emptyScreen.js',
  },
};
