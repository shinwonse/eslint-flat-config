import js from '@eslint/js';
import type { ESLint } from 'eslint';

export const bestPracticesRules: ESLint.ConfigData['rules'] = {
  ...js.configs.recommended.rules,

  // Variables and declarations
  'no-var': 'error',
  'prefer-const': 'error',

  // Debugging
  'no-console': 'warn',
  'no-debugger': 'warn',
  'no-alert': 'warn',

  // Comparisons
  eqeqeq: ['error', 'always'],
};
