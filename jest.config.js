module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],
  setupFiles: ["<rootDir>/config/polyfills.js"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)",
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": "<rootDir>/config/jest/typescriptTransform.js",
    ".+\\.(css|less)$": "<rootDir>/node_modules/jest-css-modules-transform",
    "^(?!.*\\.(js|jsx|mjs|json)$)": "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "@/(.*)": "<rootDir>/src/$1",
    // "\\.(css|less)$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "web.js",
    "js",
    "web.jsx",
    "jsx",
    "json",
    "node",
    "mjs",
  ],
  globals: {
    "ts-jest": {
      tsConfigFile: "/Users/ykx/ykx/ykx-template-react/tsconfig.test.json",
    },
  },
};
