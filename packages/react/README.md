# @wonse/eslint-react

ESLint configuration for React projects with modern best practices.

## Features

- ✨ React specific rules
- 🎯 React Hooks rules
- ♿️ Accessibility (a11y) rules
- 🔒 TypeScript integration
- 🚀 Performance optimizations
- 💪 Strict mode options

## Installation

```bash
# npm
npm install -D @wonse/eslint-react eslint@^9.0.0

# yarn
yarn add -D @wonse/eslint-react eslint@^9.0.0

# pnpm
pnpm add -D @wonse/eslint-react eslint@^9.0.0
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import { react } from "@wonse/eslint-react";

export default [
  ...react(),
];
```

### Configuration Options

You can customize the configuration by passing options:

```js
import { react } from "@wonse/eslint-react";

export default [
  ...react({
    // Enable strict mode for React rules
    strict: true,
    // Enable accessibility rules
    a11y: true,
    // Enable React Hooks rules
    hooks: true,
  }),
];
```

## Included Rules

### React Rules
- Essential rules for React development
- Best practices for component structure
- JSX-specific rules
- Performance optimizations

### React Hooks Rules
- Rules of Hooks enforcement
- Dependencies validation
- Performance considerations

### Accessibility Rules
- ARIA roles and attributes
- Interactive elements
- Form controls
- Media elements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Related Packages

- [@wonse/eslint-ts](https://github.com/shinwonse/eslint-flat-config/tree/main/packages/ts)
- [@wonse/eslint-next](https://github.com/shinwonse/eslint-flat-config/tree/main/packages/next) 