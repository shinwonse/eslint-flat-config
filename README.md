# ESLint Flat Config Collection

A collection of modern ESLint configurations using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) system.

## Packages

This monorepo contains the following ESLint configurations:

### [@wonse/eslint-js](./packages/js) (v5.0.0)

Base JavaScript configuration with modern best practices.

- 🎯 Optimized for modern JavaScript development
- 📦 Includes essential plugins:
  - `eslint-plugin-import`: For import/export syntax
  - `eslint-plugin-promise`: For Promise-related best practices
  - `eslint-plugin-regexp`: For regular expression patterns
  - `eslint-plugin-simple-import-sort`: For consistent import ordering
- 🔍 Integrates with Prettier for consistent code style
- 🚀 Requires ESLint >=9.2.0

```bash
pnpm add -D @wonse/eslint-js
```

### [@wonse/eslint-ts](./packages/ts) (v5.0.0)

TypeScript-specific rules and configurations.

- 🎯 Built on top of @wonse/eslint-js
- 📝 Powered by @typescript-eslint/eslint-plugin and parser
- 🔄 Seamless integration with TypeScript projects
- ✨ Advanced TypeScript-specific rules for:
  - Type imports/exports consistency
  - Promise handling
  - Array operations
  - Method signatures
- 🚀 Requires ESLint >=9.2.0 and TypeScript >=5.0.0

```bash
pnpm add -D @wonse/eslint-ts
```

### [@wonse/eslint-react](./packages/react) (v5.0.0)

React and TypeScript configuration with modern best practices.

- 🎯 Built on top of @wonse/eslint-ts
- ⚛️ Comprehensive React ecosystem support:
  - `eslint-plugin-react`: Core React rules
  - `eslint-plugin-react-hooks`: Hooks-specific rules
  - `eslint-plugin-react-hooks-extra`: Additional hooks patterns
  - `eslint-plugin-react-perf`: Performance optimization rules
  - `eslint-plugin-react-refresh`: Fast Refresh compatibility
- ♿️ Accessibility (a11y) best practices via eslint-plugin-jsx-a11y
- 🔍 Prettier integration for consistent formatting
- 🚀 Requires ESLint >=9.2.0 and TypeScript >=5.0.0

```bash
pnpm add -D @wonse/eslint-react
```

## Features

- 🔄 Uses the new ESLint flat config system
- 🎨 Integrates with Prettier for consistent code formatting
- ✅ Comprehensive test suites for all configurations
- 📦 Carefully selected plugins and rules
- 🛠️ Highly customizable through options

## Usage

Each package exports an array of ESLint flat configurations that can be spread into your `eslint.config.js`.

### JavaScript Projects

```js
// eslint.config.js
import jsConfig from '@wonse/eslint-js';

export default [
  ...jsConfig,
  {
    // Optional: Additional custom rules
    files: ['src/**/*.{js,mjs,cjs}'],
    rules: {
      'no-console': 'warn',
    },
  },
];
```

### TypeScript Projects

```js
// eslint.config.js
import tsConfig from '@wonse/eslint-ts';

export default [
  ...tsConfig,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    // Optional: Additional custom rules
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
```

### React Projects

```js
// eslint.config.js
import reactConfig from '@wonse/eslint-react';

export default [
  ...reactConfig,
  {
    files: ['src/**/*.{tsx,jsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    // Optional: Additional custom rules
    rules: {
      'react/jsx-no-useless-fragment': ['error', {
        allowExpressions: true,
      }],
      'react-hooks/exhaustive-deps': 'error',
    },
  },
];
```

## Configuration Options

Each package exports a pre-configured array of ESLint configurations. You can extend these by spreading them into your own configuration array and adding additional rules or overrides.

### Common Rule Categories

| Category | Description |
|----------|-------------|
| `js` | Core JavaScript rules and best practices |
| `import` | Import/export organization and validation |
| `prettier` | Code formatting rules |

### TypeScript Rules

| Category | Description |
|----------|-------------|
| `typescript` | TypeScript-specific rules and type checking |
| `imports` | TypeScript import organization |

### React Rules

| Category | Description |
|----------|-------------|
| `react` | Core React rules and best practices |
| `hooks` | React Hooks rules |
| `jsx-a11y` | Accessibility rules |
| `react-refresh` | Fast Refresh compatibility |

## Development

This repository uses pnpm workspaces. To get started:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test
```

### Package Structure

```
packages/
  ├── js/          # Base JavaScript configuration
  ├── ts/          # TypeScript configuration
  └── react/       # React configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Guidelines

1. Write clear commit messages
2. Add tests for new rules or configurations
3. Update documentation when adding features
4. Follow the existing code style

## License

MIT

## Author

Wonse Shin ([@shinwonse](https://github.com/shinwonse))
