import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';
import createConfig from '../index';

describe('ESLint Configuration', () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: createConfig()[0],
  } as any);

  describe('Best Practices', () => {
    it('should error on var usage', async () => {
      const code = 'var foo = "bar";';
      const results = await eslint.lintText(code);
      expect(results[0]?.messages).toContainEqual(
        expect.objectContaining({
          ruleId: 'no-var',
        }),
      );
    });

    it('should warn on console usage', async () => {
      const code = 'console.log("test");';
      const results = await eslint.lintText(code);
      expect(results[0]?.messages).toContainEqual(
        expect.objectContaining({
          ruleId: 'no-console',
          severity: 1, // warning
        }),
      );
    });
  });

  describe('Import Rules', () => {
    it('should error on unsorted imports', async () => {
      const code = `
        import c from 'c';
        import b from 'b';
        import a from 'a';
      `;
      const results = await eslint.lintText(code);
      expect(results[0]?.messages).toContainEqual(
        expect.objectContaining({
          ruleId: 'simple-import-sort/imports',
        }),
      );
    });

    it('should pass with properly sorted imports', async () => {
      const code = `
        import a from 'a';
        import b from 'b';
        import c from 'c';
      `;
      const results = await eslint.lintText(code);
      expect(results[0]?.messages).not.toContainEqual(
        expect.objectContaining({
          ruleId: 'simple-import-sort/imports',
        }),
      );
    });
  });

  describe('Promise Rules', () => {
    it('should error on async function without await', async () => {
      const code = 'async function foo() { return "bar"; }';
      const results = await eslint.lintText(code);
      expect(results[0]?.messages).toContainEqual(
        expect.objectContaining({
          ruleId: 'require-await',
        }),
      );
    });
  });

  describe('Code Quality Rules', () => {
    it('should error on identical expressions', async () => {
      const code = 'if (a === a) { console.log("same"); }';
      const results = await eslint.lintText(code);
      expect(results[0]?.messages).toContainEqual(
        expect.objectContaining({
          ruleId: 'sonarjs/no-identical-expressions',
        }),
      );
    });
  });
});
