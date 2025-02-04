# ESLint Flat Config Collection

A collection of modern ESLint configurations using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) system.

## Packages

This monorepo contains the following ESLint configurations:

### [@wonse/eslint-js](./packages/js)

Base JavaScript configuration with modern best practices.

- 🎯 Optimized for modern JavaScript development
- 📦 Includes plugins for imports, promises, and code quality
- 🔍 SonarJS integration for advanced static analysis

```bash
pnpm add -D @wonse/eslint-js
```

### [@wonse/eslint-ts](./packages/ts)

TypeScript-specific rules and configurations.

- 🎯 Built on top of @wonse/eslint-js
- 📝 TypeScript-specific rules and best practices
- 🔄 Seamless integration with TypeScript projects

```bash
pnpm add -D @wonse/eslint-ts
```

### [@wonse/eslint-react](./packages/react)

React and TypeScript configuration with modern best practices.

- 🎯 Built on top of @wonse/eslint-ts
- ⚛️ Comprehensive React and Hooks rules
- ♿️ Accessibility (a11y) best practices
- 🚀 Performance optimizations
- 🔄 Fast Refresh support

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

Each package can be used independently. Here's a quick example for each:

### JavaScript

```js
// eslint.config.js
import createJSConfig from '@wonse/eslint-js';

export default createJSConfig();
```

### TypeScript

```js
// eslint.config.js
import createTSConfig from '@wonse/eslint-ts';

export default createTSConfig();
```

### React

```js
// eslint.config.js
import createReactConfig from '@wonse/eslint-react';

export default createReactConfig();
```

## Custom Configuration

Each configuration can be customized with options. Here's an example:

```js
// eslint.config.js
import createReactConfig from '@wonse/eslint-react';

export default createReactConfig({
  files: ['src/**/*.tsx'],
  typescript: {
    project: './tsconfig.json',
  },
  react: {
    version: 'detect',
  },
});
```

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
