import type { Linter } from "eslint";

/**
 * Core JavaScript ESLint rules.
 * These rules focus on JavaScript language features and common programming practices.
 */
export const coreRules: Linter.RulesRecord = {
  // Error Prevention
  "no-console": ["warn"],
  "no-debugger": ["error"],
  "no-unreachable": ["error"],
  "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  "no-constant-condition": ["error"],

  // Best Practices
  "prefer-const": ["error"],
  "no-var": ["error"],
  "no-param-reassign": ["error"],
  "no-multi-assign": ["error"],
  "no-else-return": ["error"],
  "no-return-await": ["error"],
  "prefer-arrow-callback": ["error"],
  "arrow-body-style": ["error", "as-needed"],

  // Code Style
  "curly": ["error", "all"],
  "brace-style": ["error", "1tbs"],
  "semi": ["error", "always"],
  "quotes": ["error", "single", { avoidEscape: true }],
  "comma-dangle": ["error", "always-multiline"],
  "eol-last": ["error"],
  "no-multiple-empty-lines": ["error", { max: 1 }],
  "space-before-function-paren": [
    "error",
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],

  // Modern JavaScript
  "object-shorthand": ["error", "always"],
  "prefer-template": ["error"],
  "prefer-destructuring": [
    "error",
    {
      array: false,
      object: true,
    },
  ],
  "prefer-rest-params": ["error"],
  "prefer-spread": ["error"],
}; 