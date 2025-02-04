import type { Linter } from 'eslint';

export const performanceRules: Linter.RulesRecord = {
  'react-perf/jsx-no-new-object-as-prop': 'error',
  'react-perf/jsx-no-new-array-as-prop': 'error',
  'react-perf/jsx-no-new-function-as-prop': 'error',
} as const; 