import type { ESLint } from 'eslint';
import sonarjs from 'eslint-plugin-sonarjs';

export const codeQualityRules: ESLint.ConfigData['rules'] = {
  ...sonarjs.configs.recommended.rules,
};

export const codeQualityPlugins = {
  sonarjs,
};
