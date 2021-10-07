module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
