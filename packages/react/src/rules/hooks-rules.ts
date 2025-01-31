import type { Linter } from "eslint";

/**
 * React Hooks specific ESLint rules
 */
export const hooksRules: Linter.RulesRecord = {
  // Essential rules
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "error",

  // Custom rules for better hooks usage
  "react/no-unstable-nested-components": [
    "error",
    { allowAsProps: true },
  ],

  // State management
  "react-hooks/prefer-hooks": "error",
  "react-hooks/prefer-use-state-lazy-initialization": "error",

  // Performance
  "react-hooks/no-unnecessary-deps": "warn",
  "react-hooks/no-unused-deps": "error",
  "react-hooks/require-usememo": [
    "error",
    {
      checkHookDependencies: true,
      checkIdentical: true,
    },
  ],
}; 