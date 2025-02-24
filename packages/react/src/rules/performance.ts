import type { Linter } from 'eslint';
import reactPerfPlugin from 'eslint-plugin-react-perf';

export const performanceRules: Linter.RulesRecord = {
  ...reactPerfPlugin.configs.recommended.rules,
} as const;
