# @wonse/eslint-config

🎯 A collection of modern ESLint flat config presets for various JavaScript/TypeScript environments.

## 📦 Packages

This monorepo contains the following packages:

- 🔧 [@wonse/eslint-config-common](./packages/common) - Common ESLint rules shared across all presets
- ⚡️ [@wonse/eslint-config-js](./packages/js) - ESLint preset for JavaScript projects
- 🚀 [@wonse/eslint-config-next](./packages/next) - ESLint preset for Next.js projects

## 🚀 Quick Start

Choose the appropriate preset for your project:

```bash
# For JavaScript projects
npm install -D @wonse/eslint-config-js

# For Next.js projects
npm install -D @wonse/eslint-config-next
```

## 📝 Usage Example

```javascript
// eslint.config.js
import js from "@wonse/eslint-config-js";
// or
import next from "@wonse/eslint-config-next";

export default js(); // or next();
```

## 🏗 Project Structure

```
packages/
├── common/     # Common ESLint rules
├── js/         # JavaScript preset
└── next/       # Next.js preset
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
