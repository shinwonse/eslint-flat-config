import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import baseConfig from './dist/index.js'

/** @type {import('eslint').ESLint.ConfigData[]} */
export default [
  ...baseConfig,
  {
    files: ['src/**/*.ts'],
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
      ...tsPlugin.configs['recommended'].rules,
    },
  },
  prettier,
] 