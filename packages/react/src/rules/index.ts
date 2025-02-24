import type { Linter } from 'eslint';
import { a11yRules } from './a11y';
import { coreRules } from './core';
import { hooksRules } from './hooks';
import { performanceRules } from './performance';
import { refreshRules } from './refresh';

export const rules: Linter.RulesRecord = {
  ...coreRules,
  ...hooksRules,
  ...a11yRules,
  ...performanceRules,
  ...refreshRules,
} as const;
