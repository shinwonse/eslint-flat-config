import type { Linter } from 'eslint';

export const refreshRules: Linter.RulesRecord = {
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
} as const; 