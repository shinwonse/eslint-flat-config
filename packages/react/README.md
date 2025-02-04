# @wonse/eslint-react

Shared ESLint configuration for React projects using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

- 🎯 Optimized for modern React and TypeScript development
- 🔄 Uses the new ESLint flat config system
- 🎨 Integrates with Prettier for consistent code formatting
- ✅ Comprehensive test suite using ESLint's RuleTester
- 📦 Includes carefully selected plugins and rules:
  - `eslint-plugin-react`: Core React rules
  - `eslint-plugin-react-hooks`: React Hooks best practices
  - `eslint-plugin-react-hooks-extra`: Additional Hooks optimizations
  - `eslint-plugin-jsx-a11y`: Accessibility rules
  - `eslint-plugin-react-perf`: Performance optimizations
  - `eslint-plugin-react-refresh`: Fast Refresh support
  - `eslint-plugin-react-web-api`: Web API safety

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-react eslint

# Using yarn
yarn add --dev @wonse/eslint-react eslint

# Using pnpm
pnpm add -D @wonse/eslint-react eslint
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import createConfig from '@wonse/eslint-react';

export default createConfig();
```

### Custom Configuration

You can customize the configuration by passing options:

```js
import createConfig from '@wonse/eslint-react';

export default createConfig({
  // Specify files to lint (default: ['**/*.{jsx,tsx}'])
  files: ['src/**/*.tsx'],
  // TypeScript configuration
  typescript: {
    project: './tsconfig.json',
  },
  // React configuration
  react: {
    version: 'detect',
  },
});
```

## Included Rules

This configuration includes a carefully selected set of rules from various plugins:

### Core React Rules

- Enforces key prop in iterators
- Prevents duplicate props
- Enforces proper event handler naming
- Prevents useless fragments
- Controls JSX curly brace presence
- Prevents array index as key
- Prevents dangerous HTML injection

### React Hooks Rules

- Enforces Rules of Hooks
- Validates dependency arrays
- Prevents unused dependencies
- Optimizes hook usage patterns

### Accessibility (a11y) Rules

- Requires alt text for images
- Enforces ARIA props and roles
- Ensures keyboard event handlers
- Prevents positive tabindex
- Enforces interactive element patterns

### Performance Rules

- Prevents inline object creation
- Prevents inline array creation
- Prevents inline function creation
- Optimizes component rendering

### React Refresh Rules

- Ensures proper Fast Refresh support
- Controls component exports

## Testing

This package includes a comprehensive test suite that verifies all included ESLint rules are working as expected. The tests use ESLint's `RuleTester` class to validate both valid and invalid code patterns for each rule.

### Running Tests

```bash
# Using npm
npm test

# Using yarn
yarn test

# Using pnpm
pnpm test
```

### Test Coverage

The test suite covers:

- Core React Rules (e.g., jsx-key, jsx-no-useless-fragment)
- React Hooks Rules (e.g., rules-of-hooks, exhaustive-deps)
- Accessibility Rules (e.g., alt-text, click-events-have-key-events)
- Performance Rules (e.g., jsx-no-new-object-as-prop)
- React Refresh Rules (e.g., only-export-components)

Each rule is tested with:

- ✅ Valid code examples that should pass
- ❌ Invalid code examples that should fail
- 🔄 Autofix output where applicable

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Wonse Shin ([@shinwonse](https://github.com/shinwonse)) 