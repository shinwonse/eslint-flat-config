import { RuleTester } from 'eslint';
import { describe, it } from 'vitest';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
} as any);

describe('ESLint Rules', () => {
  describe('Best Practices', () => {
    it('should validate no-var rule', () => {
      ruleTester.run(
        'no-var',
        { meta: {}, create: () => ({}) },
        {
          valid: ['let foo = "bar";', 'const foo = "bar";'],
          invalid: [
            {
              code: 'var foo = "bar";',
              errors: [{ messageId: 'unexpectedVar' }],
              output: 'let foo = "bar";',
            },
          ],
        },
      );
    });

    it('should validate no-console rule', () => {
      ruleTester.run(
        'no-console',
        { meta: {}, create: () => ({}) },
        {
          valid: ['const log = (msg) => {};'],
          invalid: [
            {
              code: 'console.log("test");',
              errors: [{ messageId: 'unexpected', data: { propertyName: 'log' } }],
            },
          ],
        },
      );
    });
  });

  describe('Import Rules', () => {
    it('should validate simple-import-sort/imports rule', () => {
      ruleTester.run(
        'simple-import-sort/imports',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            `
            import a from 'a';
            import b from 'b';
            import c from 'c';
          `,
          ],
          invalid: [
            {
              code: `
              import c from 'c';
              import b from 'b';
              import a from 'a';
            `,
              errors: [{ messageId: 'sort' }],
              output: `
              import a from 'a';
              import b from 'b';
              import c from 'c';
            `,
            },
          ],
        },
      );
    });
  });

  describe('Promise Rules', () => {
    it('should validate require-await rule', () => {
      ruleTester.run(
        'require-await',
        { meta: {}, create: () => ({}) },
        {
          valid: ['async function foo() { await bar(); }', 'function foo() { return "bar"; }'],
          invalid: [
            {
              code: 'async function foo() { return "bar"; }',
              errors: [{ messageId: 'missingAwait' }],
            },
          ],
        },
      );
    });
  });
});
