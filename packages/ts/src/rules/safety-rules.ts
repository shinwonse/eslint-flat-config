import type { Linter } from "eslint";

/**
 * TypeScript safety-related ESLint rules.
 * These rules focus on preventing runtime errors and ensuring type safety.
 * Many rules here help catch common mistakes that TypeScript's type system might miss.
 */
export const safetyRules: Linter.RulesRecord = {
  /**
   * Prevents calling any typed values.
   * Helps catch potential runtime errors from untyped function calls.
   */
  "@typescript-eslint/no-unsafe-call": ["warn"],

  /**
   * Prevents returning any typed values from functions.
   * Ensures type safety at function boundaries.
   */
  "@typescript-eslint/no-unsafe-return": ["warn"],

  /**
   * Prevents assigning any typed values.
   * Maintains type safety in variable assignments and object properties.
   */
  "@typescript-eslint/no-unsafe-assignment": ["warn"],

  /**
   * Prevents accessing properties on any typed values.
   * Helps prevent runtime errors from accessing non-existent properties.
   */
  "@typescript-eslint/no-unsafe-member-access": ["warn"],

  /**
   * Prevents passing any typed values as arguments.
   * Ensures type safety when calling functions.
   */
  "@typescript-eslint/no-unsafe-argument": ["warn"],

  /**
   * Requires Promise-returning functions to be handled.
   * Prevents unhandled promise rejections and ensures proper async flow.
   */
  "@typescript-eslint/no-floating-promises": [
    "error",
    {
      ignoreVoid: true, // Allows explicitly voiding promises
      ignoreIIFE: true, // Allows unhandled promises in IIFEs
    },
  ],

  /**
   * Prevents conditions that are always truthy or falsy.
   * Catches potential logic errors and unnecessary code.
   */
  "@typescript-eslint/no-unnecessary-condition": [
    "error",
    {
      allowConstantLoopConditions: true, // Allows while(true) etc.
    },
  ],

  /**
   * Ensures boolean expressions are actually boolean.
   * Prevents common mistakes with truthy/falsy values in conditions.
   */
  "@typescript-eslint/strict-boolean-expressions": [
    "error",
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false,
    },
  ],

  /**
   * Disallows non-null assertions using the ! postfix operator.
   * Encourages proper null checking and type narrowing.
   */
  "@typescript-eslint/no-non-null-assertion": ["warn"],
}; 