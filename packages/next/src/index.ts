/**
 * @wonse/eslint-next
 * ESLint configuration for Next.js projects with modern best practices.
 *
 * Features:
 * - Next.js specific rules and best practices
 * - React and React Hooks rules
 * - Accessibility (jsx-a11y) rules
 * - TypeScript integration
 * - Performance optimizations
 */

import { GLOB_SRC } from "@wonse/eslint-common";
import type { Linter } from "eslint";
import nextPlugin from "@next/eslint-plugin-next";
import typescript from "@wonse/eslint-ts";
import { react } from "@wonse/eslint-react";

import { nextRules } from "./rules/next-rules.js";

type NextSettings = {
  rootDir?: string[];
  [key: string]: unknown;
};

type NextOptions = {
  typescript?: boolean;
  strict?: boolean;
  files?: string[];
  settings?: NextSettings;
};

/**
 * Next.js ESLint configuration
 */
export function next({
  typescript: enableTypeScript = true,
  strict = true,
  files = [GLOB_SRC],
  settings = {},
}: Partial<NextOptions> = {}): Array<Linter.Config> {
  const tsConfig = enableTypeScript ? typescript() : [];
  const reactConfig = react({ strict });

  return [
    ...tsConfig,
    ...reactConfig,
    {
      name: "wonse/next/ignores",
      ignores: [
        "**/.next/**",
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
      ],
    },
    {
      name: "wonse/next/core",
      files,
      plugins: {
        "@next/next": nextPlugin,
      },
      settings: {
        next: {
          ...settings,
        },
      },
      rules: {
        ...nextRules,
        ...(strict
          ? {
              "@next/next/no-html-link-for-pages": "error",
              "@next/next/no-sync-scripts": "error",
              "@next/next/no-script-component-in-head": "error",
            }
          : {}),
      },
    },
  ];
}

export default next;
