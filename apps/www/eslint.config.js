import baseConfig, { restrictEnvAccess } from "@kafeasist/eslint-config/base";
import nextjsConfig from "@kafeasist/eslint-config/nextjs";
import reactConfig from "@kafeasist/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
