import type { Linter } from 'eslint';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export const refreshRules: Linter.RulesRecord = {
  ...reactRefreshPlugin.configs.recommended.rules,

  'react-refresh/only-export-components': 'off',
} as const;
