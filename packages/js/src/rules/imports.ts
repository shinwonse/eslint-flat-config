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

  // Import grouping
  'import/order': [
    'error',
    {
      groups: [
        'builtin', // Node.js built-in modules
        'external', // External packages
        'internal', // Internal packages
        ['parent', 'sibling'], // Parent and sibling directories
        'index', // Index file of the current directory
        'object', // Object imports
        'type', // Type imports
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      pathGroups: [
        {
          pattern: '@/**',
          group: 'internal',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      warnOnUnassignedImports: true,
    },
  ],

  // Static analysis
  'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
  'import/no-cycle': ['error', { maxDepth: 1 }],
  'import/no-self-import': 'error',
  'import/no-relative-packages': 'error',
  'import/no-absolute-path': 'error',
  'import/no-webpack-loader-syntax': 'error',

  // Helpful warnings
  'import/no-deprecated': 'warn',
  'import/no-mutable-exports': 'error',
  'import/no-unused-modules': ['warn', { unusedExports: true }],

  // Style guide
  'import/extensions': ['error', 'never', { json: 'always' }],
  'import/prefer-default-export': 'off',
};

export const importPlugins = {
  import: importPlugin,
  'simple-import-sort': simpleImportSort,
};
