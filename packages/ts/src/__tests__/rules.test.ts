import tsPlugin from '@typescript-eslint/eslint-plugin';
import { RuleTester } from 'eslint';
import { describe, it } from 'vitest';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },
} as any);

describe('TypeScript ESLint Rules', () => {
  describe('Type Import/Export Rules', () => {
    it('should enforce consistent type imports', () => {
      ruleTester.run(
        '@typescript-eslint/consistent-type-imports',
        tsPlugin.rules['consistent-type-imports']! as any,
        {
          valid: [
            'import type { User } from "./types";',
            'import type { Post, Comment } from "./types";',
          ],
          invalid: [
            {
              code: 'import { type User, Post } from "./types";',
              errors: [{ messageId: 'typeImportRequiresImportType' }],
              output: 'import { Post } from "./types";\nimport type { User } from "./types";',
            },
          ],
        },
      );
    });

    it('should enforce consistent type exports', () => {
      ruleTester.run(
        '@typescript-eslint/consistent-type-exports',
        tsPlugin.rules['consistent-type-exports']! as any,
        {
          valid: [
            'export type { User };',
            'export type { Post, Comment };',
          ],
          invalid: [
            {
              code: 'export { type User };',
              errors: [{ messageId: 'preferTypeExport' }],
              output: 'export type { User };',
            },
          ],
        },
      );
    });
  });

  describe('Unused Variables Rule', () => {
    it('should handle unused variables', () => {
      ruleTester.run(
        '@typescript-eslint/no-unused-vars',
        tsPlugin.rules['no-unused-vars']! as any,
        {
          valid: [
            'function test(_unused: string) { return "test"; }',
            'const { _ignored, used } = obj; console.log(used);',
          ],
          invalid: [
            {
              code: 'function test(unused: string) { return "test"; }',
              errors: [{ messageId: 'unusedVar' }],
            },
            {
              code: 'const notUsed: string = "test";',
              errors: [{ messageId: 'unusedVar' }],
            },
          ],
        },
      );
    });
  });

  describe('Promise Function Rules', () => {
    it('should enforce async keyword for promise-returning functions', () => {
      ruleTester.run(
        '@typescript-eslint/promise-function-async',
        tsPlugin.rules['promise-function-async']! as any,
        {
          valid: [
            'async function fetchData(): Promise<string> { return "data"; }',
            'const fetchItems = async (): Promise<string[]> => { return []; }',
          ],
          invalid: [
            {
              code: 'function fetchData(): Promise<string> { return Promise.resolve("data"); }',
              errors: [{ messageId: 'missingAsync' }],
            },
          ],
        },
      );
    });
  });

  describe('Method Signature Style', () => {
    it('should enforce property signature for methods', () => {
      ruleTester.run(
        '@typescript-eslint/method-signature-style',
        tsPlugin.rules['method-signature-style']! as any,
        {
          valid: [
            'interface Test { method: () => void; }',
            'type MyType = { method: () => string; }',
          ],
          invalid: [
            {
              code: 'interface Test { method(): void; }',
              errors: [{ messageId: 'usePropertySignature' }],
              output: 'interface Test { method: () => void; }',
            },
          ],
        },
      );
    });
  });
}); 