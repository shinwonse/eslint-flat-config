import type { Linter } from 'eslint';

export const coreRules: Linter.RulesRecord = {
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react/jsx-no-undef': 'error',
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/jsx-handler-names': ['error', {
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on',
  }],
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  'react/no-array-index-key': 'error',
  'react/no-danger': 'error',
} as const; 