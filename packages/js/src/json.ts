import plugin, { type JSONLanguageOptions } from "@eslint/json";
import { GLOB_JSON, GLOB_VSCODE, GLOB_TSCONFIG } from "@wonse/eslint-common";
import type { Linter } from "eslint";

type JSONOptions = {
  jsonFiles: string[];
  jsoncFiles: string[];
  jsoncLanguageOptions: JSONLanguageOptions;
  json5Files: string[];
};

export function json({
  jsonFiles = [GLOB_JSON],
  jsoncFiles = [GLOB_TSCONFIG, GLOB_VSCODE],
  json5Files = [`**/*.json5`],
  jsoncLanguageOptions = {},
}: Partial<JSONOptions> = {}): Array<Linter.Config> {
  const rules: Array<Linter.Config> = [
    {
      name: "wonse/json/setup",
      plugins: {
        json: plugin,
      },
    },
    {
      name: "wonse/json/files",
      files: jsonFiles,
      language: "json/json",
      rules: {
        ...plugin.configs.recommended.rules,
      },
    },
    {
      name: "wonse/jsonc/files",
      files: jsoncFiles,
      language: "json/jsonc",
      languageOptions: jsoncLanguageOptions as Linter.LanguageOptions,
      rules: {
        ...plugin.configs.recommended.rules,
      },
    },
    {
      name: "wonse/json5/files",
      files: json5Files,
      language: "json/json5",
      rules: {
        ...plugin.configs.recommended.rules,
      },
    },
  ];

  return rules;
}

export default json;
