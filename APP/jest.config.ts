import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  rootDir: "./",
  testEnvironment: "jsdom",
  testMatch: ["**/tests/**/*.test.tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
};
export default config;
