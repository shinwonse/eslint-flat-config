import type { ESLint } from 'eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { plugins, rules } from './rules';

const jsConfig: ESLint.ConfigData[] = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    plugins,
    rules,
  },
  prettier,
];

export default jsConfig;
