import type { ESLint } from 'eslint';
import { bestPracticesRules } from './best-practices';
import { importPlugins, importRules } from './imports';
import { promisePlugins, promiseRules } from './promises';
import { regexpPlugins, regexpRules } from './regexp';

export const rules: ESLint.ConfigData['rules'] = {
  ...bestPracticesRules,
  ...importRules,
  ...promiseRules,
  ...regexpRules,
};

export const pluginObjects = {
  ...importPlugins,
  ...promisePlugins,
  ...regexpPlugins,
} as const;

type Plugin = {
  rules?: Record<string, unknown>;
  configs?: Record<string, unknown>;
};

// Convert plugin objects to flat config format
export const plugins = Object.entries(pluginObjects).reduce(
  (acc, [name, plugin]) => {
    acc[name] = {
      rules: (plugin as Plugin).rules || {},
    };
    return acc;
  },
  {} as Record<string, { rules: Record<string, unknown> }>,
);
