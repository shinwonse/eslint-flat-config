import type { ESLint } from 'eslint';
import regexp from 'eslint-plugin-regexp';

export const regexpRules: ESLint.ConfigData['rules'] = {
  ...regexp.configs.recommended.rules,
};

export const regexpPlugins = {
  regexp,
};
