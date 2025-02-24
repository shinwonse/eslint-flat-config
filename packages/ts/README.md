# @wonse/eslint-ts

Shared ESLint configuration for TypeScript projects using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

- 🎯 Optimized for modern TypeScript development
- 🔄 Uses the new ESLint flat config system
- 🎨 Integrates with Prettier for consistent code formatting
- 🔍 Strict type checking rules enabled
- 📦 Extends JavaScript configuration with TypeScript-specific rules

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-ts eslint typescript

# Using yarn
yarn add --dev @wonse/eslint-ts eslint typescript

# Using pnpm
pnpm add -D @wonse/eslint-ts eslint typescript
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import tsConfig from '@wonse/eslint-ts';

export default [
  ...tsConfig,
  // Your custom configurations (optional)
];
```

### Configuration Details

The base configuration includes:

- All JavaScript rules from `@wonse/eslint-js`
- TypeScript parser configuration
- Strict type-checking rules
- TypeScript-specific best practices
- Integration with your project's `tsconfig.json`

### Extending the Configuration

You can extend or override the configuration in several ways:

1. **Adding New Rules**:
```js
import tsConfig from '@wonse/eslint-ts';

export default [
  ...tsConfig,
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
```

2. **Targeting Specific Files**:
```js
import tsConfig from '@wonse/eslint-ts';

export default [
  ...tsConfig,
  {
    files: ['src/**/*.ts'],
    rules: {
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
  },
];
```

3. **Custom Parser Options**:
```js
import tsConfig from '@wonse/eslint-ts';

export default [
  ...tsConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.build.json',
      },
    },
  },
];
```

## Included Rules

This configuration includes carefully selected rules from:

### TypeScript-Specific Rules

- Strict type checking enabled
- Prevents unsafe type assertions
- Enforces explicit return types where beneficial
- Ensures proper usage of generics
- Prevents unnecessary type declarations

### Type Assertions and Casting

- Prefers type assertions over casting
- Prevents unnecessary type assertions
- Ensures type assertions are safe

### Code Quality

- Prevents unused variables and types
- Enforces consistent type definitions
- Ensures proper error handling
- Prevents unreachable code

### Best Practices

- Enforces consistent type imports
- Prevents unsafe type assumptions
- Ensures proper null checks
- Enforces proper Promise handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Wonse Shin ([@shinwonse](https://github.com/shinwonse)) 