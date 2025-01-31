import type { Linter } from "eslint";

/**
 * React specific ESLint rules
 */
export const reactRules: Linter.RulesRecord = {
  // Essential rules
  "react/jsx-key": ["error", { checkFragmentShorthand: true }],
  "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
  "react/jsx-no-undef": "error",
  "react/jsx-uses-react": "error",
  "react/jsx-uses-vars": "error",
  "react/no-children-prop": "error",
  "react/no-danger-with-children": "error",
  "react/no-direct-mutation-state": "error",
  "react/no-find-dom-node": "error",
  "react/no-is-mounted": "error",
  "react/no-render-return-value": "error",
  "react/no-string-refs": "error",
  "react/no-unescaped-entities": "error",
  "react/no-unknown-property": "error",
  "react/no-unsafe": "error",
  "react/prop-types": "off", // Using TypeScript instead
  "react/react-in-jsx-scope": "off", // Not needed in Next.js
  "react/require-render-return": "error",

  // Best practices
  "react/button-has-type": "error",
  "react/jsx-no-bind": ["error", {
    allowArrowFunctions: true,
    allowFunctions: false,
    allowBind: false,
  }],
  "react/jsx-no-constructed-context-values": "error",
  "react/jsx-pascal-case": "error",
  "react/no-array-index-key": "warn",
  "react/no-invalid-html-attribute": "error",
  "react/no-unused-state": "error",
  "react/self-closing-comp": "error",
  "react/void-dom-elements-no-children": "error",

  // Hooks
  "react/prefer-stateless-function": "error",
  "react/hook-use-state": "error",
}; 