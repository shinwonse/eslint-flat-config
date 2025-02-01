import type { Linter } from "eslint";

/**
 * Import specific ESLint rules
 */
export const importRules: Linter.RulesRecord = {
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
  "import/no-mutable-exports": "error",
  "import/no-unresolved": "error",
  "import/no-unused-modules": "error",
  "import/order": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "index",
        "object",
        "type",
      ],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
};
