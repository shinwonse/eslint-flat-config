import type { ESLint } from 'eslint';
import promise from 'eslint-plugin-promise';

export const promiseRules: ESLint.ConfigData['rules'] = {
  ...promise.configs.recommended.rules,
};

export const promisePlugins = {
  promise,
};
