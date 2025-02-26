import baseConfig from "@kafeasist/eslint-config/base";
import reactConfig from "@kafeasist/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
