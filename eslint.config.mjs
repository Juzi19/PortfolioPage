import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add the recommended ESLint and TypeScript rules
  {
    rules: {
      "prefer-const": "off", // deactivates the prefer-const rule
      "@typescript-eslint/no-explicit-any": "off" // add this line to allow the use of `any`
    },
  },
];

export default eslintConfig;
