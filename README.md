# @wonse/eslint-config

🎯 A collection of modern ESLint flat config presets for various JavaScript/TypeScript environments.

## 📦 Packages

This monorepo contains the following packages:

- 🔧 [@wonse/eslint-common](./packages/common) - Common ESLint rules shared across all presets
- ⚡️ [@wonse/eslint-js](./packages/js) - ESLint preset for JavaScript projects
- 🚀 [@wonse/eslint-next](./packages/next) - ESLint preset for Next.js projects
- ⚛️ [@wonse/eslint-react](./packages/react) - ESLint preset for React projects
- 🎵 [@wonse/eslint-remix](./packages/remix) - ESLint preset for Remix projects

## 🚀 Quick Start

Choose the appropriate preset for your project:

```bash
# For JavaScript projects
npm install -D @wonse/eslint-js

# For Next.js projects
npm install -D @wonse/eslint-next

# For React projects
npm install -D @wonse/eslint-react

# For Remix projects
npm install -D @wonse/eslint-remix
```

## 📝 Usage Example

```javascript
// eslint.config.js
import js from "@wonse/eslint-js";
// or
import next from "@wonse/eslint-next";
// or
import react from "@wonse/eslint-react";
// or
import remix from "@wonse/eslint-remix";

export default js(); // or next() or react() or remix();
```

## 🏗 Project Structure

```
packages/
├── common/     # Common ESLint rules
├── js/         # JavaScript preset
├── next/       # Next.js preset
├── react/      # React preset
└── remix/      # Remix preset
```

## 💻 Development

This project uses:

- 📦 pnpm for package management
- 🏃 Turborepo for build system
- 📘 TypeScript for development

### 🛠 Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT

## 👤 Author

wonse
