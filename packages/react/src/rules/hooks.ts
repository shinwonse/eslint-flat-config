import type { Linter } from 'eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export const hooksRules: Linter.RulesRecord = {
  ...reactHooksPlugin.configs.recommended.rules,
} as const;
