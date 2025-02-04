import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsConfig from '@wonse/eslint-js';
import type { ESLint } from 'eslint';
import { rules as tsRules } from './rules/typescript';

export default function createConfig(): ESLint.ConfigData[] {
  return [
    ...jsConfig(),
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: './tsconfig.json',
        },
      },
      plugins: {
        '@typescript-eslint': tsPlugin,
      },
      rules: {
        ...(tsPlugin.configs['strict-type-checked']?.rules ?? {}),
        ...tsRules,
      },
    } as unknown as ESLint.ConfigData,
  ] as const;
}
