import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { fixStyle: 'inline-type-imports' },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  '@typescript-eslint/explicit-module-boundary-types': ['error'],
  '@typescript-eslint/method-signature-style': ['error'],
  '@typescript-eslint/no-import-type-side-effects': ['error'],
  '@typescript-eslint/no-useless-empty-export': ['error'],
  '@typescript-eslint/promise-function-async': ['error'],
  '@typescript-eslint/require-array-sort-compare': ['error'],
  
  // Disabled rules that can be enabled per project
  '@typescript-eslint/no-unsafe-call': ['off'],
  '@typescript-eslint/no-explicit-any': ['off'],
  '@typescript-eslint/no-unsafe-return': ['off'],
  '@typescript-eslint/no-unsafe-assignment': ['off'],
  '@typescript-eslint/no-unsafe-member-access': ['off'],
  '@typescript-eslint/no-unsafe-argument': ['off'],
  '@typescript-eslint/no-empty-object-type': ['off'],
  '@typescript-eslint/no-unnecessary-type-parameters': ['off'],

  // Disable ESLint base rules in favor of TypeScript-specific ones
  'no-unused-vars': ['off'],
  'no-dupe-class-members': ['off'],
};
