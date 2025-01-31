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
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import typescript from "@wonse/eslint-ts";

import { nextRules } from "./rules/next-rules.js";
import { reactRules } from "./rules/react-rules.js";
import { reactHooksRules } from "./rules/react-hooks-rules.js";
import { a11yRules } from "./rules/a11y-rules.js";

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

  return [
    ...tsConfig,
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
        react: reactPlugin,
        "react-hooks": reactHooksPlugin,
        "jsx-a11y": jsxA11yPlugin,
      },
      settings: {
        next: {
          ...settings,
        },
        react: {
          version: "detect",
        },
      },
      rules: {
        ...nextRules,
        ...reactRules,
        ...reactHooksRules,
        ...a11yRules,
        ...(strict
          ? {
              "@next/next/no-html-link-for-pages": "error",
              "@next/next/no-sync-scripts": "error",
              "@next/next/no-script-component-in-head": "error",
              "react/jsx-key": ["error", { checkFragmentShorthand: true }],
              "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
              "react-hooks/exhaustive-deps": "error",
            }
          : {}),
      },
    },
  ];
}

export default next;
