import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["site/**/*.js"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["scripts/**/*.mjs", "tests/**/*.js"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: { globals: globals.browser },
  },
];
