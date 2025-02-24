# @wonse/eslint-js

Shared ESLint configuration for JavaScript projects using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

- 🎯 Optimized for modern JavaScript development
- 🔄 Uses the new ESLint flat config system
- 🎨 Integrates with Prettier for consistent code formatting
- ✅ Comprehensive test suite using ESLint's RuleTester
- 📦 Includes carefully selected plugins and rules:
  - `eslint-plugin-import`: Better import/export syntax handling
  - `eslint-plugin-simple-import-sort`: Automated import sorting
  - `eslint-plugin-promise`: Promise-related best practices
  - `eslint-plugin-regexp`: Regular expression safety and best practices

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-js eslint

# Using yarn
yarn add --dev @wonse/eslint-js eslint

# Using pnpm
pnpm add -D @wonse/eslint-js eslint
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import jsConfig from '@wonse/eslint-js';

export default [
  ...jsConfig,
  // Your custom configurations (optional)
];
```

### Configuration Details

The base configuration includes:

- Modern JavaScript features (ES2022)
- Module-based development
- Browser, ES2021, and Node.js globals
- Prettier integration for formatting
- Comprehensive set of plugins and rules

### Extending the Configuration

You can extend or override the configuration in several ways:

1. **Adding New Rules**:
```js
import jsConfig from '@wonse/eslint-js';

export default [
  ...jsConfig,
  {
    rules: {
      'no-console': 'off',
      'import/no-default-export': 'error',
    },
  },
];
```

2. **Targeting Specific Files**:
```js
import jsConfig from '@wonse/eslint-js';

export default [
  ...jsConfig,
  {
    files: ['src/**/*.js'],
    rules: {
      'no-console': 'warn',
    },
  },
];
```

3. **Adding Custom Plugins**:
```js
import jsConfig from '@wonse/eslint-js';
import somePlugin from 'eslint-plugin-some-plugin';

export default [
  ...jsConfig,
  {
    plugins: {
      'some-plugin': somePlugin,
    },
    rules: {
      'some-plugin/some-rule': 'error',
    },
  },
];
```

## Included Rules

This configuration includes a carefully selected set of rules from various plugins:

### JavaScript Best Practices

- Enforces strict equality (`===`) checks
- Prevents usage of `var`
- Encourages use of `const` where possible
- Warns about `console` statements
- Warns about `debugger` statements
- Warns about `alert` statements

### Import/Export Rules

- Sorts imports automatically by groups:
  - Built-in Node.js modules
  - External packages
  - Internal packages (with `@/` alias support)
  - Parent/sibling imports
  - Index imports
  - Object imports
  - Type imports
- Enforces consistent import ordering:
  - Alphabetical sorting within groups
  - Required newlines between groups
- Static analysis:
  - Prevents circular dependencies (max depth: 1)
  - Prevents self imports
  - Prevents useless path segments
  - Prevents absolute paths
  - Prevents webpack loader syntax
  - Prevents relative package imports
- Helpful warnings:
  - Warns about deprecated imports
  - Prevents mutable exports
  - Warns about unused modules
- Style guide:
  - No file extensions (except for .json)
  - Default exports are optional
  - Ensures imports come first in file
  - Prevents duplicate imports
  - Enforces newlines after imports

### Promise Handling

- Enforces best practices for promises
- Prevents common async/await mistakes

### Regular Expressions

- Ensures safe and optimal regex patterns
- Prevents common regex mistakes

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

- JavaScript Best Practices (e.g., no-var, no-console)
- Import/Export Rules (e.g., simple-import-sort)
- Promise Handling (e.g., require-await)
- Code Quality Rules (e.g., sonarjs/no-identical-expressions)

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
