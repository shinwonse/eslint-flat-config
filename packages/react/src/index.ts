import tsParser from '@typescript-eslint/parser';
import tsConfig from '@wonse/eslint-ts';
import type { ESLint } from 'eslint';
import prettier from 'eslint-config-prettier';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactHooksExtraPlugin from 'eslint-plugin-react-hooks-extra';
import reactPerformancePlugin from 'eslint-plugin-react-perf';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import { rules } from './rules';

const reactConfig: ESLint.ConfigData[] = [
  ...tsConfig,
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-hooks-extra': reactHooksExtraPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'react-refresh': reactRefreshPlugin,
      'react-perf': reactPerformancePlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules,
  },
  prettier,
] as const;

export default reactConfig;
