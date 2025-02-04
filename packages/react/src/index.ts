import tsParser from '@typescript-eslint/parser';
import tsConfig from '@wonse/eslint-ts';
import type { ESLint } from 'eslint';
import prettier from 'eslint-config-prettier';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactHooksExtraPlugin from 'eslint-plugin-react-hooks-extra';
import reactPerformancePlugin from 'eslint-plugin-react-perf';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import reactWebApiPlugin from 'eslint-plugin-react-web-api';
import { rules } from './rules';

interface ReactConfigOptions {
  files?: string[];
  typescript?: {
    project?: string;
  };
  react?: {
    version?: string;
  };
}

const DEFAULT_OPTIONS: Required<ReactConfigOptions> = {
  files: ['**/*.{jsx,tsx}'],
  typescript: {
    project: './tsconfig.json',
  },
  react: {
    version: 'detect',
  },
};

export default function createReactConfig(options: ReactConfigOptions = {}): ESLint.ConfigData[] {
  const finalOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
    typescript: {
      ...DEFAULT_OPTIONS.typescript,
      ...options.typescript,
    },
    react: {
      ...DEFAULT_OPTIONS.react,
      ...options.react,
    },
  };

  return [
    ...tsConfig(),
    {
      files: finalOptions.files,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: finalOptions.typescript.project,
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        'react': reactPlugin,
        'react-hooks': reactHooksPlugin,
        'react-hooks-extra': reactHooksExtraPlugin,
        'react-web-api': reactWebApiPlugin,
        'jsx-a11y': jsxA11yPlugin,
        'react-refresh': reactRefreshPlugin,
        'react-perf': reactPerformancePlugin,
      },
      settings: {
        react: {
          version: finalOptions.react.version,
        },
      },
      rules,
    },
    prettier,
  ];
}
