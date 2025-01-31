import type { ESLint, Linter } from "eslint";

/**
 * Represents a complete ESLint feature configuration.
 * This type is used to define a set of ESLint rules, plugins, and parser settings
 * that can be composed together to create a full ESLint configuration.
 */
export type Feature = {
  /** ESLint plugins to be included in the configuration */
  plugins: Record<string, ESLint.Plugin>;
  /** Optional parser to be used for processing source files */
  parser?: Linter.Parser;
  /** ESLint rules configuration */
  rules: Linter.RulesRecord;
};

/**
 * Represents severity levels for ESLint rules
 */
export type RuleSeverity = 0 | 1 | 2 | "off" | "warn" | "error";

/**
 * Represents a rule configuration with options
 */
export type RuleConfig<TOptions extends unknown[] = unknown[]> = 
  | RuleSeverity 
  | [RuleSeverity, ...TOptions];

/**
 * Type for defining glob patterns for different file types
 */
export type GlobPattern = string;

/**
 * Configuration for file extensions
 */
export type FileExtensions = {
  /** JavaScript file extensions */
  js: readonly string[];
  /** TypeScript file extensions */
  ts: readonly string[];
  /** React JSX file extensions */
  jsx: readonly string[];
  /** React TSX file extensions */
  tsx: readonly string[];
  /** GraphQL file extensions */
  gql: readonly string[];
  /** JSON file extensions */
  json: readonly string[];
};
