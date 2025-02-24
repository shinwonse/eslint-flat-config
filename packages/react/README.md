# @wonse/eslint-react

Shared ESLint configuration for React projects using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

- 🎯 Optimized for modern React development
- 🔄 Uses the new ESLint flat config system
- 🎨 Integrates with Prettier for consistent code formatting
- ⚛️ React-specific best practices and hooks rules
- 📦 Includes carefully selected plugins:
  - `eslint-plugin-react`: Core React rules
  - `eslint-plugin-react-hooks`: React Hooks rules
  - `eslint-plugin-react-hooks-extra`: Additional Hooks rules
  - `eslint-plugin-jsx-a11y`: Accessibility rules
  - `eslint-plugin-react-refresh`: Fast Refresh compatibility
  - `eslint-plugin-react-perf`: Performance rules

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-react eslint typescript

# Using yarn
yarn add --dev @wonse/eslint-react eslint typescript

# Using pnpm
pnpm add -D @wonse/eslint-react eslint typescript
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import reactConfig from '@wonse/eslint-react';

export default [
  ...reactConfig,
  // Your custom configurations (optional)
];
```

### Configuration Details

The base configuration includes:

- All TypeScript rules from `@wonse/eslint-ts`
- React-specific parser configuration
- JSX support
- React Hooks rules
- Accessibility (a11y) rules
- Performance optimization rules
- Integration with your project's `tsconfig.json`

### Extending the Configuration

You can extend or override the configuration in several ways:

1. **Adding New Rules**:
```js
import reactConfig from '@wonse/eslint-react';

export default [
  ...reactConfig,
  {
    rules: {
      'react/jsx-no-leaked-render': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
];
```

2. **Targeting Specific Files**:
```js
import reactConfig from '@wonse/eslint-react';

export default [
  ...reactConfig,
  {
    files: ['src/**/*.tsx'],
    rules: {
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
      }],
    },
  },
];
```

3. **Custom Settings**:
```js
import reactConfig from '@wonse/eslint-react';

export default [
  ...reactConfig,
  {
    settings: {
      react: {
        version: '18.2.0',
      },
    },
  },
];
```

## Included Rules

This configuration includes carefully selected rules from various plugins:

### React Core Rules

- Enforces function component style
- Prevents common JSX mistakes
- Ensures proper prop types usage
- Enforces consistent component organization

### React Hooks Rules

- Enforces Rules of Hooks
- Ensures proper dependencies in useEffect
- Prevents common hooks mistakes
- Optimizes hooks performance

### JSX Accessibility Rules

- Ensures proper ARIA attributes
- Enforces semantic HTML
- Requires alt text for images
- Ensures keyboard navigation

### Performance Rules

- Prevents unnecessary re-renders
- Optimizes memo usage
- Ensures proper key usage in lists
- Prevents expensive operations in render

### TypeScript Integration

- Full TypeScript support
- Proper types for props and state
- Type-aware rules
- Generic components support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Wonse Shin ([@shinwonse](https://github.com/shinwonse)) 