import type { Linter } from "eslint";

/**
 * JSON-specific ESLint rules.
 * These rules ensure proper JSON file formatting and validation.
 */
export const jsonRules: Linter.RulesRecord = {
  "array-bracket-spacing": ["error", "never"],
  "object-curly-spacing": ["error", "never"],
  "object-property-newline": "error",
  "quote-props": ["error", "always"],
  "quotes": ["error", "double"],
}; 