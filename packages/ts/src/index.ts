import type { Linter } from "eslint";
import ts from "./rules/typescript.js";
import { GLOB_TS, GLOB_TSX } from "@wonse/eslint-common";
import javascript from "@wonse/eslint-js";
import type { ParserOptions } from "@typescript-eslint/parser";

export * from "@wonse/eslint-js";

type TypescriptOptions = {
  files: string[];
  parserOptions: ParserOptions;
};

export function typescript({
  files = [GLOB_TS, GLOB_TSX],
  parserOptions,
}: Partial<TypescriptOptions> = {}): Array<Linter.Config> {
  return [
    {
      // enabling parsing typescript files support
      name: "wonse/typescript/setup",
      files,
      languageOptions: {
        parser: ts.parser,
        parserOptions: {
          ecmaFeatures: { modules: true },
          project: true,
          ...parserOptions,
        },
      },
    },
    {
      name: "wonse/typescript/rules",
      files,
      plugins: ts.plugins,
      rules: ts.rules,
    },
  ];
}

export default function all(...params: Parameters<typeof typescript>): Array<Linter.Config> {
  return [...javascript(), ...typescript(...params)];
}
