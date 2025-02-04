# @wonse/eslint-flat-config

> Modern ESLint Flat Configurations for JavaScript and TypeScript Projects

This monorepo contains a collection of shareable ESLint configurations using the new [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) format.

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [@wonse/eslint-js](./packages/js) | [![npm](https://img.shields.io/npm/v/@wonse/eslint-js.svg)](https://npmjs.com/package/@wonse/eslint-js) | JavaScript/Node.js ESLint configuration |
| [@wonse/eslint-ts](./packages/ts) | [![npm](https://img.shields.io/npm/v/@wonse/eslint-ts.svg)](https://npmjs.com/package/@wonse/eslint-ts) | TypeScript ESLint configuration |

## Features

- 📦 Modern ESLint Flat Config format
- 🔄 Consistent code style across projects
- 🎯 Specialized configurations for JavaScript and TypeScript
- ✨ Automatic code formatting with Prettier integration
- 🚀 Easy to extend and customize

## Getting Started

Choose the configuration package that matches your project:

### For JavaScript/Node.js Projects

```bash
# Using pnpm
pnpm add -D @wonse/eslint-js

# Using npm
npm install --save-dev @wonse/eslint-js

# Using yarn
yarn add -D @wonse/eslint-js
```

### For TypeScript Projects

```bash
# Using pnpm
pnpm add -D @wonse/eslint-ts

# Using npm
npm install --save-dev @wonse/eslint-ts

# Using yarn
yarn add -D @wonse/eslint-ts
```

## Usage

Create an `eslint.config.js` file in your project root:

### JavaScript Projects

```javascript
import jsConfig from '@wonse/eslint-js';

export default jsConfig;
```

### TypeScript Projects

```javascript
import tsConfig from '@wonse/eslint-ts';

export default tsConfig;
```

## Requirements

- Node.js >= 18.x
- ESLint >= 9.x
- TypeScript >= 5.x (for @wonse/eslint-ts)

## Development

This repository uses pnpm workspaces and Turborepo for managing packages.

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Lint code
pnpm lint

# Format code
pnpm format
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Wonse Shin](https://github.com/shinwonse)

## Acknowledgments

- [ESLint](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier](https://prettier.io/)
