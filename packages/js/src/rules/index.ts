import type { ESLint } from 'eslint';
import { bestPracticesRules } from './best-practices';
import { importPlugins, importRules } from './imports';
import { promisePlugins, promiseRules } from './promises';
import { regexpPlugins, regexpRules } from './regexp';
import { codeQualityPlugins, codeQualityRules } from './sonarjs';

export const rules: ESLint.ConfigData['rules'] = {
  ...bestPracticesRules,
  ...importRules,
  ...promiseRules,
  ...regexpRules,
  ...codeQualityRules,
};

export const pluginObjects = {
  ...importPlugins,
  ...promisePlugins,
  ...regexpPlugins,
  ...codeQualityPlugins,
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
