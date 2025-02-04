# @wonse/eslint-js

Shared ESLint configuration for JavaScript projects using the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

- 🎯 Optimized for modern JavaScript development
- 🔄 Uses the new ESLint flat config system
- 🎨 Integrates with Prettier for consistent code formatting
- 📦 Includes carefully selected plugins and rules:
  - `eslint-plugin-import`: Better import/export syntax handling
  - `eslint-plugin-simple-import-sort`: Automated import sorting
  - `eslint-plugin-sonarjs`: Code quality rules
  - `eslint-plugin-promise`: Promise-related best practices
  - `eslint-plugin-regexp`: Regular expression safety and best practices

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-js eslint

# Using yarn
yarn add --dev @wonse/eslint-js eslint

# Using pnpm
pnpm add -D @wonse/eslint-js eslint
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import createConfig from '@wonse/eslint-js';

export default createConfig();
```

### Custom Configuration

You can customize the configuration by passing options:

```js
import createConfig from '@wonse/eslint-js';

export default createConfig({
  // Specify files to lint (default: ['**/*.{js,mjs,cjs}'])
  files: ['src/**/*.js'],
});
```

## Included Rules

This configuration includes a carefully selected set of rules from various plugins:

### JavaScript Best Practices

- Enforces strict equality (`===`) checks
- Prevents usage of `var`
- Encourages use of `const` where possible
- Warns about `console` statements
- Warns about `debugger` statements
- Warns about `alert` statements

### Import/Export Rules

- Sorts imports automatically
- Ensures imports come first in file
- Prevents duplicate imports
- Enforces newlines after imports

### Code Quality (via SonarJS)

- Detects bugs and suspicious patterns
- Maintains code reliability
- Prevents complexity issues

### Promise Handling

- Enforces best practices for promises
- Prevents common async/await mistakes

### Regular Expressions

- Ensures safe and optimal regex patterns
- Prevents common regex mistakes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Wonse Shin ([@shinwonse](https://github.com/shinwonse))
