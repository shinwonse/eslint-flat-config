# @wonse/eslint-next

ESLint configuration for Next.js projects with modern best practices.

## Features

- 🚀 Next.js specific rules and best practices
- ⚛️ React and React Hooks rules
- ♿️ Accessibility (jsx-a11y) rules
- 📝 TypeScript integration
- 🔧 Performance optimizations
- 🎯 Strict mode options

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-next

# Using yarn
yarn add --dev @wonse/eslint-next

# Using pnpm
pnpm add -D @wonse/eslint-next
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import next from '@wonse/eslint-next';

export default next();
```

### Configuration Options

You can customize the configuration by passing options:

```js
import next from '@wonse/eslint-next';

export default next({
  // Enable TypeScript support (default: true)
  typescript: true,
  
  // Enable strict mode with additional rules (default: true)
  strict: true,
  
  // Custom file patterns to lint (default: ['src/**/*.{js,jsx,ts,tsx}'])
  files: ['src/**/*.{js,jsx,ts,tsx}'],
  
  // Next.js specific settings
  settings: {
    // Custom root directories for Next.js
    rootDir: ['src'],
  },
});
```

## Included Rules

### Next.js Rules
- App Router compatibility
- Performance optimizations
- Image and font optimizations
- Server components best practices

### React Rules
- JSX best practices
- Component patterns
- Performance optimizations
- State management

### React Hooks Rules
- Hooks usage patterns
- Dependencies management
- Performance considerations

### Accessibility Rules
- ARIA attributes
- Semantic HTML
- Keyboard navigation
- Screen reader compatibility

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT - see the [LICENSE](LICENSE) file for details.

## Related Packages

- [@wonse/eslint-ts](../ts) - TypeScript ESLint configuration
- [@wonse/eslint-react](../react) - React ESLint configuration
- [@wonse/eslint-common](../common) - Shared ESLint utilities 