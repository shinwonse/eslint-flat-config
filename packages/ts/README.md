# @wonse/eslint-ts

A comprehensive ESLint configuration for TypeScript projects that enforces strict type safety, modern TypeScript patterns, and best practices.

## Features

- 🔒 **Strong Type Safety**: Strict type checking rules to prevent runtime errors
- 🎯 **Modern Patterns**: Encourages usage of modern TypeScript features
- ✨ **Best Practices**: Enforces consistent code style and maintainable patterns
- 🛠 **Zero Config**: Works out of the box with recommended settings
- 🔧 **Customizable**: Easy to extend and customize for your project needs

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-ts

# Using yarn
yarn add --dev @wonse/eslint-ts

# Using pnpm
pnpm add -D @wonse/eslint-ts
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import typescript from '@wonse/eslint-ts';

export default [
  ...typescript(),
];
```

## Rule Categories

This configuration includes three main categories of rules:

### 1. Type Rules

Rules that enforce proper type system usage and type safety:

- `consistent-type-exports`: Ensures consistent type exports
- `consistent-type-imports`: Enforces consistent type imports
- `explicit-function-return-type`: Requires explicit return types
- `explicit-module-boundary-types`: Enforces clear API contracts
- `method-signature-style`: Standardizes interface method declarations
- And more...

### 2. Safety Rules

Rules that prevent runtime errors and catch common mistakes:

- `no-unsafe-call`: Prevents calling any typed values
- `no-floating-promises`: Ensures proper Promise handling
- `strict-boolean-expressions`: Enforces strict boolean conditions
- `no-unnecessary-condition`: Catches redundant conditions
- And more...

### 3. Best Practices

Rules that enforce modern TypeScript patterns and coding standards:

- `no-unused-vars`: Prevents dead code with smart exceptions
- `prefer-nullish-coalescing`: Encourages using ?? over ||
- `prefer-optional-chain`: Promotes using ?. for cleaner code
- `promise-function-async`: Ensures consistent async patterns
- And more...

## Configuration

### Default Configuration

The default configuration is designed to work out of the box with strict type checking enabled. It:

- Extends the `strict-type-checked` configuration from @typescript-eslint
- Enables all recommended rules with carefully chosen settings
- Disables conflicting base ESLint rules in favor of TypeScript-aware versions

### Customizing Rules

You can customize the configuration by spreading the rules and overriding specific settings:

```javascript
import typescript from '@wonse/eslint-ts';

export default [
  ...typescript(),
  {
    rules: {
      // Override specific rules
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];
```

## Recommended VSCode Settings

For the best development experience, we recommend the following VSCode settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript"
  ]
}
```

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.

## License

MIT

## Author

wonse 