import type { Linter } from "eslint";
import { typescript } from "@wonse/eslint-ts";
import { react } from "@wonse/eslint-react";
import { remix } from "./rules/remix";

export function remixConfig(): Array<Linter.Config> {
  return [...typescript(), ...react(), ...remix()];
}

export default remixConfig;
