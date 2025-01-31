# @wonse/eslint-common

Common utilities and types for ESLint configurations. This package provides the foundation for other ESLint configuration packages in the monorepo.

## Features

- 🏷 **Type Definitions**: Comprehensive TypeScript types for ESLint configurations
- 🔍 **File Patterns**: Preconfigured glob patterns for different file types
- 🛠 **Utilities**: Helper functions for creating custom glob patterns
- 📦 **Zero Dependencies**: Only ESLint peer dependency

## Installation

```bash
# Using npm
npm install --save-dev @wonse/eslint-common

# Using yarn
yarn add --dev @wonse/eslint-common

# Using pnpm
pnpm add -D @wonse/eslint-common
```

## Usage

### Types

```typescript
import type { Feature, RuleConfig } from '@wonse/eslint-common';

// Define an ESLint feature
const myFeature: Feature = {
  plugins: {
    'my-plugin': myPlugin,
  },
  rules: {
    'my-rule': ['error', { option: true }],
  },
};

// Type-safe rule configuration
const myRule: RuleConfig<[{ option: boolean }]> = ['error', { option: true }];
```

### Glob Patterns

```typescript
import {
  GLOB_TS,
  GLOB_TSX,
  GLOB_TEST,
  makeGlobSrcFiles,
} from '@wonse/eslint-common';

// Use predefined globs
const tsConfig = {
  files: [GLOB_TS, GLOB_TSX],
  excludes: [GLOB_TEST],
};

// Create custom globs
const customGlob = makeGlobSrcFiles('src/features');
```

## Available Patterns

### Source Files
- `GLOB_SRC`: All JavaScript and TypeScript files
- `GLOB_REACT`: All React files (JSX/TSX)
- `GLOB_ALL`: All source files

### Language Specific
- `GLOB_JS`: JavaScript files
- `GLOB_JSX`: React JavaScript files
- `GLOB_TS`: TypeScript files
- `GLOB_TSX`: React TypeScript files
- `GLOB_GQL`: GraphQL files

### Test Files
- `GLOB_TEST`: Test file patterns
- `GLOB_TEST_SRC`: Test source files

### Configuration Files
- `GLOB_TSCONFIG`: TypeScript configuration
- `GLOB_VSCODE`: VSCode settings

### Storybook
- `GLOB_STORYBOOK_MAIN`: Storybook main configuration
- `GLOB_STORIES`: Story patterns
- `GLOB_STORIES_SRC`: Story source files

## Utility Functions

### makeGlobSrcFiles
Creates a glob pattern for source files with a specific base path.

```typescript
const componentGlob = makeGlobSrcFiles('src/components');
// Result: "src/components.{js,ts,jsx,tsx}"
```

### makeGlobJsFiles
Creates a glob pattern for JavaScript files with a specific base path.

```typescript
const jsGlob = makeGlobJsFiles('src/utils');
// Result: "src/utils.{js,mjs,cjs}"
```

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.

## License

MIT

## Author

wonse 