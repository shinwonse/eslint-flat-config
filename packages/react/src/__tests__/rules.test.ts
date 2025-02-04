import { RuleTester } from 'eslint';
import { describe, it } from 'vitest';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    parser: require('@typescript-eslint/parser'),
  },
} as any);

describe('React ESLint Rules', () => {
  describe('Core React Rules', () => {
    it('should validate jsx-key rule', () => {
      ruleTester.run(
        'react/jsx-key',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            'function App() { return items.map((item, index) => <div key={index}>{item}</div>); }',
            'function App() { return <>{items.map((item) => <div key={item.id}>{item.name}</div>)}</>; }',
          ],
          invalid: [
            {
              code: 'function App() { return items.map(item => <div>{item}</div>); }',
              errors: [{ messageId: 'missingKey' }],
            },
          ],
        },
      );
    });

    it('should validate jsx-no-useless-fragment rule', () => {
      ruleTester.run(
        'react/jsx-no-useless-fragment',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            'function App() { return <>{condition && <div>content</div>}</>; }',
            'function App() { return <div>content</div>; }',
          ],
          invalid: [
            {
              code: 'function App() { return <><div>content</div></>; }',
              errors: [{ messageId: 'uselessFragment' }],
              output: 'function App() { return <div>content</div>; }',
            },
          ],
        },
      );
    });
  });

  describe('React Hooks Rules', () => {
    it('should validate rules-of-hooks rule', () => {
      ruleTester.run(
        'react-hooks/rules-of-hooks',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            'function App() { const [state, setState] = useState(0); return <div>{state}</div>; }',
            'function App() { useEffect(() => { console.log("mounted") }, []); return null; }',
          ],
          invalid: [
            {
              code: 'function App() { if (condition) { useState(0); } return null; }',
              errors: [{ messageId: 'conditionalHook' }],
            },
          ],
        },
      );
    });

    it('should validate exhaustive-deps rule', () => {
      ruleTester.run(
        'react-hooks/exhaustive-deps',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            'function App() { useEffect(() => { console.log(value) }, [value]); return null; }',
            'function App() { useEffect(() => { console.log("once") }, []); return null; }',
          ],
          invalid: [
            {
              code: 'function App() { useEffect(() => { console.log(value) }, []); return null; }',
              errors: [{ messageId: 'missingDependencies' }],
            },
          ],
        },
      );
    });
  });

  describe('Accessibility Rules', () => {
    it('should validate alt-text rule', () => {
      ruleTester.run(
        'jsx-a11y/alt-text',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            '<img src="image.jpg" alt="Description" />',
            '<img src="image.jpg" alt="" role="presentation" />',
          ],
          invalid: [
            {
              code: '<img src="image.jpg" />',
              errors: [{ messageId: 'missingAlt' }],
            },
          ],
        },
      );
    });

    it('should validate click-events-have-key-events rule', () => {
      ruleTester.run(
        'jsx-a11y/click-events-have-key-events',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            '<div onClick={() => {}} onKeyPress={() => {}} role="button" tabIndex={0} />',
            '<button onClick={() => {}} />',
          ],
          invalid: [
            {
              code: '<div onClick={() => {}} role="button" />',
              errors: [{ messageId: 'missingKeyEvent' }],
            },
          ],
        },
      );
    });
  });

  describe('Performance Rules', () => {
    it('should validate jsx-no-new-object-as-prop rule', () => {
      ruleTester.run(
        'react-perf/jsx-no-new-object-as-prop',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            'const style = { color: "red" }; function App() { return <div style={style} />; }',
            'function App() { return <div className="red" />; }',
          ],
          invalid: [
            {
              code: 'function App() { return <div style={{ color: "red" }} />; }',
              errors: [{ messageId: 'noNewObjectProp' }],
            },
          ],
        },
      );
    });

    it('should validate jsx-no-new-function-as-prop rule', () => {
      ruleTester.run(
        'react-perf/jsx-no-new-function-as-prop',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            'const handleClick = () => {}; function App() { return <button onClick={handleClick} />; }',
            'function App() { return <div className="red" />; }',
          ],
          invalid: [
            {
              code: 'function App() { return <button onClick={() => {}} />; }',
              errors: [{ messageId: 'noNewFunctionProp' }],
            },
          ],
        },
      );
    });
  });

  describe('React Refresh Rules', () => {
    it('should validate only-export-components rule', () => {
      ruleTester.run(
        'react-refresh/only-export-components',
        { meta: {}, create: () => ({}) },
        {
          valid: [
            'export default function App() { return <div>Hello</div>; }',
            'export const App = () => <div>Hello</div>;',
          ],
          invalid: [
            {
              code: 'export const value = "not a component";',
              errors: [{ messageId: 'nonComponent' }],
            },
          ],
        },
      );
    });
  });
}); 