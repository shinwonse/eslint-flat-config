import type { Linter } from 'eslint';

export const hooksRules: Linter.RulesRecord = {
  // React Hooks Rules
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',

  // React Hooks Extra Rules
  'react-hooks-extra/no-useless-custom-hooks': 'warn',
} as const;
