import type { Linter } from "eslint";

/**
 * TypeScript best practices ESLint rules.
 * These rules enforce coding standards and modern TypeScript patterns.
 * Focus on code quality, maintainability, and using TypeScript features effectively.
 */
export const bestPracticesRules: Linter.RulesRecord = {
  /**
   * Prevents unused variables, parameters, and imports.
   * Helps keep code clean and efficient while allowing intentional unused vars with _.
   * @example
   * // Allowed
   * const { used, _unused } = obj;
   * function fn(_unused) { return true; }
   */
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],

  /**
   * Prevents side effects from type imports.
   * Ensures type imports are used purely for type information.
   */
  "@typescript-eslint/no-import-type-side-effects": ["error"],

  /**
   * Prevents empty export statements.
   * Keeps code clean by removing unnecessary exports.
   */
  "@typescript-eslint/no-useless-empty-export": ["error"],

  /**
   * Requires async keyword on functions that return promises.
   * Improves code clarity and prevents mixing promise styles.
   */
  "@typescript-eslint/promise-function-async": [
    "error",
    {
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    },
  ],

  /**
   * Requires compare function for array sort.
   * Prevents unexpected sort results across different JS engines.
   */
  "@typescript-eslint/require-array-sort-compare": [
    "error",
    {
      ignoreStringArrays: true, // String arrays have natural sort order
    },
  ],

  /**
   * Enforces using ?? instead of || for null/undefined checks.
   * More precise than || which also coerces falsy values.
   * @example
   * // Incorrect: value || default
   * // Correct: value ?? default
   */
  "@typescript-eslint/prefer-nullish-coalescing": [
    "error",
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
    },
  ],

  /**
   * Enforces using ?. instead of nested && checks.
   * Improves code readability and maintainability.
   * @example
   * // Incorrect: obj && obj.prop && obj.prop.value
   * // Correct: obj?.prop?.value
   */
  "@typescript-eslint/prefer-optional-chain": ["error"],

  /**
   * Enforces using @ts-expect-error over @ts-ignore.
   * More explicit about suppressing TypeScript errors.
   */
  "@typescript-eslint/prefer-ts-expect-error": ["error"],

  /**
   * Controls usage of TypeScript directive comments.
   * Ensures proper documentation of type checking suppressions.
   */
  "@typescript-eslint/ban-ts-comment": [
    "error",
    {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": true, // Disallow @ts-ignore
      "ts-nocheck": true, // Disallow @ts-nocheck
      "ts-check": false, // Allow @ts-check
      minimumDescriptionLength: 3,
    },
  ],
}; 