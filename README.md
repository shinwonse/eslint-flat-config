# eslint-flat-config

A collection of shareable ESLint configurations using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) system.

## Available Configurations

### [@wonse/eslint-js](./packages/js)

Base JavaScript configuration with modern best practices and carefully selected plugins.

```bash
npm install --save-dev @wonse/eslint-js
```

[Read more about @wonse/eslint-js](./packages/js/README.md)

## Features

- 📦 Modern ESLint flat config system
- 🎯 Optimized for different JavaScript environments
- 🔧 Easy to extend and customize
- 🎨 Prettier integration out of the box

## Project Structure

```
eslint-flat-config/
├── packages/
│   └── js/          # Base JavaScript configuration
└── package.json     # Monorepo root package.json
```

## Contributing

Contributions are always welcome! Please read our contributing guidelines before submitting a pull request.

### Development

This is a monorepo using pnpm workspaces. To get started:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test
```

## License

MIT © [Wonse Shin](https://github.com/shinwonse)
