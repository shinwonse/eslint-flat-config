import type { Linter } from 'eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export const a11yRules: Linter.RulesRecord = {
  ...jsxA11yPlugin.configs.recommended.rules,
} as const;
