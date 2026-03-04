---
id: installation
title: Installation
sidebar_position: 2
---

# Installation

## Package Managers

### npm
```bash
npm install my-project
```

### yarn
```bash
yarn add my-project
```

### pnpm
```bash
pnpm add my-project
```

## Manual Installation

If you prefer to install manually, download the latest release from [GitHub Releases](https://github.com/your-github-username/my-docs/releases) and extract it:

```bash
tar -xzf my-project-v1.0.0.tar.gz
cd my-project
npm install
```

## Verify Installation

```bash
npx my-project --version
# my-project v1.0.0
```

## Environment Variables

Create a `.env` file in the root of your project:

```env
MY_PROJECT_API_KEY=your_api_key_here
MY_PROJECT_ENV=development
MY_PROJECT_PORT=3000
```

:::tip
Never commit your `.env` file to version control. Add it to `.gitignore`.
:::

:::info
See the [Configuration guide](/guides/configuration) for all available environment variables.
:::
