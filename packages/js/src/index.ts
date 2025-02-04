import type { ESLint } from 'eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { plugins, rules } from './rules';

export default function createConfig(options: { files?: string[] } = {}): ESLint.ConfigData[] {
  return [
    {
      files: options.files ?? ['**/*.{js,mjs,cjs}'],
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
    prettier, // should be last to override other formatting rules
  ];
}
