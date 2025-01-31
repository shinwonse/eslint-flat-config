import type { Linter } from "eslint";

/**
 * Unicorn plugin rules configuration.
 * These rules promote writing modern, clean JavaScript code.
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn
 */
export const unicornRules: Linter.RulesRecord = {
  // Modern JavaScript Features
  "unicorn/prefer-module": ["error"],
  "unicorn/prefer-node-protocol": ["error"],
  "unicorn/prefer-top-level-await": ["error"],
  "unicorn/prefer-export-from": ["error"],
  "unicorn/prefer-optional-catch-binding": ["error"],

  // Code Quality
  "unicorn/error-message": ["error"],
  "unicorn/escape-case": ["error"],
  "unicorn/no-array-instanceof": ["error"],
  "unicorn/no-new-buffer": ["error"],
  "unicorn/no-hex-escape": ["error"],
  "unicorn/no-console-spaces": ["error"],
  "unicorn/better-regex": ["error"],

  // Naming Conventions
  "unicorn/filename-case": [
    "error",
    {
      case: "kebabCase",
      ignore: [/^[A-Z][a-z]+(?:[A-Z][a-z]+)*\.[a-z]+$/],
    },
  ],
  "unicorn/prevent-abbreviations": [
    "error",
    {
      replacements: {
        args: false,
        props: false,
        ref: false,
        params: false,
      },
    },
  ],

  // Best Practices
  "unicorn/catch-error-name": ["error"],
  "unicorn/consistent-function-scoping": ["error"],
  "unicorn/custom-error-definition": ["error"],
  "unicorn/no-useless-undefined": ["error"],
  "unicorn/no-object-as-default-parameter": ["error"],
  "unicorn/prefer-array-find": ["error"],
  "unicorn/prefer-includes": ["error"],
  "unicorn/prefer-string-slice": ["error"],
  "unicorn/prefer-negative-index": ["error"],
  "unicorn/prefer-dom-node-append": ["error"],
  "unicorn/prefer-dom-node-remove": ["error"],
  "unicorn/prefer-add-event-listener": ["error"],

  // Disabled Rules
  "unicorn/consistent-destructuring": ["off"],
  "unicorn/no-array-reduce": ["off"],
  "unicorn/no-null": ["off"],
  "unicorn/prefer-at": ["off"],
  "unicorn/string-content": ["off"],
}; 