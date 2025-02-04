import type { Linter } from 'eslint';

export const hooksRules: Linter.RulesRecord = {
  // React Hooks Rules
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',

  // React Hooks Extra Rules
  'react-hooks-extra/no-unused-deps': 'warn',
} as const; 