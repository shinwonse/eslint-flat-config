# ESLint Flat Config

Modern ESLint configurations for JavaScript and TypeScript projects. This monorepo contains a collection of shareable ESLint configurations designed to enforce best practices and maintain code quality.

## 📦 Packages

This monorepo consists of the following packages:

### [@wonse/eslint-common](./packages/common)

Common utilities and types shared across ESLint configurations.
- File glob patterns
- Type definitions
- Shared utilities

### [@wonse/eslint-js](./packages/js)

JavaScript ESLint configuration with modern best practices.
- Core JavaScript rules
- Unicorn plugin integration
- JSON file support
- Zero config setup

### [@wonse/eslint-ts](./packages/ts)

TypeScript ESLint configuration with strict type checking.
- Strong type safety
- Modern TypeScript patterns
- Best practices enforcement
- Extensible configuration

## 🚀 Quick Start

1. Install the desired configuration:

```bash
# For JavaScript projects
pnpm add -D @wonse/eslint-js

# For TypeScript projects
pnpm add -D @wonse/eslint-ts
```

2. Create `eslint.config.js` in your project root:

```javascript
// For JavaScript projects
import javascript from '@wonse/eslint-js';

export default [
  ...javascript(),
];

// For TypeScript projects
import typescript from '@wonse/eslint-ts';

export default [
  ...typescript(),
];
```

## ✨ Features

- 🔄 Modern ESLint flat config support
- 📝 Comprehensive documentation
- ⚡️ Zero config defaults
- 🛠 Highly customizable
- 🔒 Type-safe configurations

## 🔧 Development

This project uses pnpm workspaces. To get started:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## 📖 Documentation

Each package contains its own detailed documentation:

- [Common Package Documentation](./packages/common/README.md)
- [JavaScript Package Documentation](./packages/js/README.md)
- [TypeScript Package Documentation](./packages/ts/README.md)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

MIT

## ��‍💻 Author

wonse 