/**
 * @wonse/eslint-js
 * ESLint configuration for JavaScript projects with modern best practices.
 * 
 * Features:
 * - Core JavaScript rules for error prevention and best practices
 * - Modern JavaScript features and patterns
 * - Unicorn plugin for additional best practices
 * - JSON file support
 */

import type { ESLint, Linter } from "eslint";
import { GLOB_JS, GLOB_JSON } from "@wonse/eslint-common";

import { coreRules } from "./rules/core-rules";
import { unicornRules } from "./rules/unicorn-rules";
import { jsonRules } from "./rules/json-rules";

import unicorn from "eslint-plugin-unicorn";
import json from "@eslint/json";

/**
 * Default JavaScript ESLint configuration
 */
export function javascript(): Array<Linter.Config> {
  return [
    {
      // Core JavaScript rules
      name: "wonse/javascript/core",
      files: [GLOB_JS],
      plugins: {
        unicorn: unicorn as unknown as ESLint.Plugin,
      },
      rules: {
        ...coreRules,
        ...unicornRules,
      },
    },
    {
      // JSON file rules
      name: "wonse/javascript/json",
      files: [GLOB_JSON],
      plugins: {
        json: json as unknown as ESLint.Plugin,
      },
      rules: jsonRules,
    },
  ];
}

export default javascript;
