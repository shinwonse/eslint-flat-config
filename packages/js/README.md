# @wonse/eslint-js

Modern ESLint configuration for JavaScript projects with best practices and sensible defaults.

## Features

- 🎯 **Core Rules**: Comprehensive set of JavaScript best practices
- 🦄 **Unicorn Plugin**: Additional modern JavaScript patterns
- 📝 **JSON Support**: Built-in JSON file linting
- ⚡️ **Zero Config**: Works out of the box with recommended settings

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-js

# Using yarn
yarn add --dev @wonse/eslint-js

# Using pnpm
pnpm add -D @wonse/eslint-js
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import javascript from '@wonse/eslint-js';

export default [
  ...javascript(),
];
```

## Rule Categories

### Core JavaScript Rules

Rules that enforce JavaScript best practices and prevent common errors:

- Error Prevention (no-debugger, no-unreachable, etc.)
- Best Practices (prefer-const, no-var, etc.)
- Code Style (curly, semi, quotes, etc.)
- Modern JavaScript (object-shorthand, prefer-template, etc.)

### Unicorn Plugin Rules

Additional rules for modern JavaScript development:

- Modern Features (prefer-module, prefer-node-protocol, etc.)
- Code Quality (better-regex, error-message, etc.)
- Naming Conventions (filename-case, prevent-abbreviations)
- Best Practices (prefer-array-find, prefer-includes, etc.)

### JSON Rules

Rules for JSON file validation and formatting:

- Syntax Validation
- Formatting Rules
- Schema Validation
- Error Prevention

## Configuration

### Default Configuration

The default configuration is designed to work out of the box with modern JavaScript projects:

- Enforces ES2022+ features
- Promotes functional programming patterns
- Ensures consistent code style
- Prevents common errors

### Customizing Rules

You can customize the configuration by spreading the rules and overriding specific settings:

```javascript
import javascript from '@wonse/eslint-js';

export default [
  ...javascript(),
  {
    rules: {
      // Override specific rules
      'no-console': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
];
```

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.

## License

MIT

## Author

wonse 