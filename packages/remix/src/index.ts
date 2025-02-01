import { join } from "path";
import { FlatCompat } from "@eslint/eslintrc";
import type { FlatConfig } from "eslint-define-config";
import { remixRules } from "./rules";

const compat = new FlatCompat();

export default function remix(): FlatConfig[] {
  return [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      ...compat.extends("@remix-run/eslint-config"),
    },
    {
      files: ["app/**/*.{js,jsx,ts,tsx}"],
      rules: {
        ...remixRules,
      },
    },
    {
      files: ["app/routes/**/*.{js,jsx,ts,tsx}"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ];
}
