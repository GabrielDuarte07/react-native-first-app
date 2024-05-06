module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv:['@testing-library/react-native/extend-expect'],
  setupFiles: ["./jestSetupFile.js"],
  collectCoverage:true,
  collectCoverageFrom:[
    "src/**/*.tsx",
    "!src/**/*.test.tsx",
    "!src/**/*.test.ts"
  ],
  coverageReporters:["lcov"]
};
