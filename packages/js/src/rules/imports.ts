import type { ESLint } from 'eslint';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export const importRules: ESLint.ConfigData['rules'] = {
  ...importPlugin.configs.recommended.rules,

  // Import sorting
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',

  // Import organization
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
};

export const importPlugins = {
  import: importPlugin,
  'simple-import-sort': simpleImportSort,
};
