import type { Linter } from 'eslint';

export const webApiRules: Linter.RulesRecord = {
  'react-web-api/no-dom-globals': 'error',
} as const; 