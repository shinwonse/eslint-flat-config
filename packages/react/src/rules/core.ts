import type { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';

export const coreRules: Linter.RulesRecord = {
  ...reactPlugin.configs.recommended.rules,
  // Override some recommended rules
  'react/react-in-jsx-scope': 'off', // Not needed in modern React
  'react/prop-types': 'off', // We use TypeScript instead
} as const;
