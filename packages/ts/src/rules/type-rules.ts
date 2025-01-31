import type { Linter } from "eslint";

/**
 * TypeScript type-related ESLint rules.
 * These rules focus on type definitions, imports/exports, and type system usage.
 */
export const typeRules: Linter.RulesRecord = {
  /**
   * Ensures consistency of type exports.
   * Automatically fixes mixed exports by adding inline type specifiers.
   */
  "@typescript-eslint/consistent-type-exports": [
    "error",
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],

  /**
   * Enforces consistent usage of type imports.
   * Prefers inline type imports for better tree-shaking and cleaner code.
   */
  "@typescript-eslint/consistent-type-imports": [
    "error",
    { 
      fixStyle: "inline-type-imports",
      prefer: "type-imports",
    },
  ],

  /**
   * Requires explicit return types on functions and class methods.
   * Improves code maintainability and type safety while allowing exceptions
   * for cases where types can be clearly inferred.
   */
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: true,
    },
  ],

  /**
   * Requires explicit return types on exported functions and classes.
   * Critical for maintaining a clear public API contract.
   */
  "@typescript-eslint/explicit-module-boundary-types": ["error"],

  /**
   * Enforces method types to be written as property signatures.
   * Improves consistency and readability of interface definitions.
   * @example
   * // Incorrect
   * interface T { method(): void; }
   * // Correct
   * interface T { method: () => void; }
   */
  "@typescript-eslint/method-signature-style": ["error", "property"],

  /**
   * Disallows empty object types, which can lead to ambiguous or unsafe code.
   * Suggests using more specific types or Record<string, unknown>.
   */
  "@typescript-eslint/no-empty-object-type": ["warn"],

  /**
   * Disallows usage of the `any` type to ensure type safety.
   * Set to warning level to allow exceptional cases, with auto-fix to `unknown`.
   */
  "@typescript-eslint/no-explicit-any": [
    "warn",
    {
      fixToUnknown: true,
      ignoreRestArgs: true,
    },
  ],

  /**
   * Disallows type parameters that don't add type safety value.
   * Helps maintain cleaner and more meaningful generic type usage.
   */
  "@typescript-eslint/no-unnecessary-type-parameters": ["warn"],
}; 