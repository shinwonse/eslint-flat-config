import type { Linter } from 'eslint';

export const a11yRules: Linter.RulesRecord = {
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
  'jsx-a11y/role-has-required-aria-props': 'error',
  'jsx-a11y/role-supports-aria-props': 'error',
  'jsx-a11y/tabindex-no-positive': 'error',
  'jsx-a11y/click-events-have-key-events': 'error',
  'jsx-a11y/no-noninteractive-element-interactions': 'error',
  'jsx-a11y/no-static-element-interactions': 'error',
} as const; 