export const remixRules = {
  // Remix specific rules
  "remix/route-convention": "error",
  "remix/server-client-separation": "error",
  "remix/prefer-loader-function": "error",
  "remix/prefer-action-function": "error",

  // React related rules
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
} as const;
