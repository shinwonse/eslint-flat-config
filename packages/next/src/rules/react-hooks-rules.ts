import type { Linter } from "eslint";

/**
 * React Hooks specific ESLint rules
 */
export const reactHooksRules: Linter.RulesRecord = {
  // Essential rules
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",

  // Custom rules for better hooks usage
  "react/no-unstable-nested-components": [
    "error",
    { allowAsProps: true },
  ],
}; 