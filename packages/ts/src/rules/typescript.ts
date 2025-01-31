/**
 * Main TypeScript ESLint configuration.
 * This configuration provides a comprehensive set of rules for TypeScript projects,
 * organized into three main categories:
 * 
 * 1. Type Rules: Enforce proper type system usage and type safety
 * 2. Safety Rules: Prevent runtime errors and type-related bugs
 * 3. Best Practices: Enforce modern TypeScript patterns and coding standards
 * 
 * The rules are designed to:
 * - Maximize type safety and prevent runtime errors
 * - Enforce consistent code style and patterns
 * - Encourage usage of modern TypeScript features
 * - Maintain code quality and readability
 * 
 * @see {@link typeRules} for type system related rules
 * @see {@link safetyRules} for runtime safety rules
 * @see {@link bestPracticesRules} for coding standards and best practices
 */

import type { ESLint, Linter } from "eslint";
import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import type { Feature } from "@wonse/eslint-common";
import { typeRules } from "./type-rules";
import { safetyRules } from "./safety-rules";
import { bestPracticesRules } from "./best-practices-rules";

/**
 * Combined set of all TypeScript ESLint rules.
 * Merges rules from all categories while maintaining their individual configurations.
 */
export const rules: Linter.RulesRecord = {
  ...typeRules,
  ...safetyRules,
  ...bestPracticesRules,
};

/**
 * Complete TypeScript ESLint configuration feature.
 * Extends the strict type-checked configuration from @typescript-eslint
 * and combines it with our custom rule sets.
 * 
 * Key features:
 * - Uses @typescript-eslint parser for accurate TypeScript parsing
 * - Extends strict type-checking rules as a baseline
 * - Disables redundant base ESLint rules in favor of TypeScript-aware versions
 */
export default <Feature>{
  plugins: {
    "@typescript-eslint": plugin as unknown as ESLint.Plugin,
  },
  parser,
  rules: {
    ...(plugin.configs["strict-type-checked"]!.rules as Linter.RulesRecord),
    ...rules,
    // Disable base rules in favor of TypeScript-specific ones
    "no-unused-vars": ["off"],
    "no-dupe-class-members": ["off"],
  },
};
