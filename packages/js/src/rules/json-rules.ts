import type { Linter } from "eslint";

/**
 * JSON-specific ESLint rules.
 * These rules ensure proper JSON file formatting and validation.
 */
export const jsonRules: Linter.RulesRecord = {
  // JSON Syntax
  "json/invalid": ["error"],
  "json/undefined": ["error"],
  "json/enum": ["error"],
  "json/type": ["error"],
  "json/format": ["error"],
  "json/schema": ["error"],

  // Formatting
  "json/quotes": ["error", "double"],
  "json/quote-props": ["error", "always"],
  "json/comma-dangle": ["error", "never"],
  "json/trailing-comma": ["error", "never"],

  // Validation
  "json/validate-schema": ["error"],
  "json/no-dupe-keys": ["error"],
  "json/no-comments": ["error"],
  "json/no-bigint": ["error"],
  "json/no-binary": ["error"],
  "json/no-escape-sequence": ["error"],
}; 