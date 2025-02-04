# @wonse/eslint-ts

> TypeScript ESLint configuration preset with strict type checking and best practices.

## Features

- Strict type checking rules from `@typescript-eslint/eslint-plugin`
- Consistent type imports and exports
- Proper handling of unused variables
- Async/Promise function conventions
- Method signature style enforcement
- Integration with `@wonse/eslint-js` base rules

## Installation

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

```javascript
import tsConfig from '@wonse/eslint-ts';

export default tsConfig;
```

### Requirements

- Node.js >= 18.x
- ESLint >= 9.x
- TypeScript >= 5.x

## Rules

### Type Imports/Exports

Enforces consistent usage of type imports and exports:

```typescript
// ✅ Good
import type { User } from './types';
export type { Post } from './types';

// ❌ Bad
import { type User } from './types';
export { type Post } from './types';
```

### Unused Variables

Allows unused variables with underscore prefix:

```typescript
// ✅ Good
function handler(_unused: string) {
  // ...
}

// ❌ Bad
function handler(unused: string) {
  // ...
}
```

### Promise Functions

Enforces async keyword for functions returning promises:

```typescript
// ✅ Good
async function fetchData(): Promise<string> {
  return 'data';
}

// ❌ Bad
function fetchData(): Promise<string> {
  return Promise.resolve('data');
}
```

### Method Signatures

Enforces consistent method signature style in interfaces and type literals:

```typescript
// ✅ Good
interface Test {
  method: () => void;
}

// ❌ Bad
interface Test {
  method(): void;
}
```

## Extended Configurations

This configuration extends `@wonse/eslint-js` and includes additional TypeScript-specific rules. It's designed to work seamlessly with TypeScript projects while maintaining strict type checking and best practices.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Wonse Shin](https://github.com/shinwonse) 