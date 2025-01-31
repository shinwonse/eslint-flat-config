import type { Linter } from "eslint";
import { reactRules } from "./rules/react-rules";
import { hooksRules } from "./rules/hooks-rules";
import { a11yRules } from "./rules/a11y-rules";

export interface ReactOptions {
  /**
   * Whether to enable strict mode for React rules
   * @default true
   */
  strict?: boolean;

  /**
   * Whether to enable accessibility rules
   * @default true
   */
  a11y?: boolean;

  /**
   * Whether to enable React Hooks rules
   * @default true
   */
  hooks?: boolean;
}

/**
 * Returns ESLint configuration for React projects
 */
export function react(options: ReactOptions = {}): Linter.FlatConfig[] {
  const {
    strict = true,
    a11y = true,
    hooks = true,
  } = options;

  const baseRules = strict
    ? reactRules
    : Object.fromEntries(
        Object.entries(reactRules).map(([key, value]) => [
          key,
          value === "error" ? "warn" : value,
        ])
      );

  return [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: {
        react: require("eslint-plugin-react"),
        "react-hooks": require("eslint-plugin-react-hooks"),
        "jsx-a11y": require("eslint-plugin-jsx-a11y"),
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        ...baseRules,
        ...(hooks ? hooksRules : {}),
        ...(a11y ? a11yRules : {}),
      },
    },
  ];
}
