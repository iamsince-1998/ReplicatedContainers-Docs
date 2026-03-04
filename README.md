# Plugins Docs

Documentation site built with [Docusaurus](https://docusaurus.io/), deployed to GitHub Pages.

## 🚀 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm start
```

Opens at `http://localhost:3000`. Hot-reloads as you edit.

### 3. Build

```bash
npm run build
```

Generates the static site into `./build`.

---

## ⚙️ Configure for your GitHub

Before deploying, update these fields in `docusaurus.config.js`:

```js
url: 'https://YOUR_GITHUB_USERNAME.github.io',
baseUrl: '/YOUR_REPO_NAME/',
organizationName: 'YOUR_GITHUB_USERNAME',
projectName: 'YOUR_REPO_NAME',
```

---

## 🌐 Deploy to GitHub Pages

### Automatic (recommended)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → gh-pages**
4. Push any commit to `main` — it deploys automatically ✅

### Manual

```bash
GIT_USER=your_github_username npm run deploy
```

---

## 📁 Project Structure

```
Plugins-Docs/
├── docs/
│   ├── intro.md              # Homepage
│   ├── guides/
│   │   ├── getting-started.md
│   │   ├── installation.md
│   │   └── configuration.md
│   └── api/
│       ├── overview.md
│       ├── authentication.md
│       ├── endpoints.md
│       └── errors.md
├── static/                   # Static assets
├── src/css/custom.css        # Custom styles
├── docusaurus.config.js      # Main config
└── sidebars.js               # Sidebar structure
```

## ✏️ Adding a new doc

1. Create a `.md` file anywhere inside `docs/`
2. Add a frontmatter `id` and `title`
3. Add it to `sidebars.js`

That's it!
