# Plugins Docs

Documentation site built with [Docusaurus](https://docusaurus.io/), set up for **multiple plugin doc sets** in one place.

**Live URL (after GitHub Pages deploy):**

- https://iamsince-1998.github.io/Plugins-Docs/

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

## 🧩 Organizing docs per plugin

- Keep each plugin in its own folder under `docs/`.
- Add each plugin section in `sidebars.js` under **Plugin Docs**.
- Suggested pages per plugin:
  - `overview.md`
  - `installation.md`
  - `quickstart.md`
  - `api-reference.md`
  - `troubleshooting.md`

---

## 🌐 Deploy to GitHub Pages

### Automatic (recommended)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **GitHub Actions**
4. Push any commit to `main` — it builds and deploys automatically ✅

### Manual

If you want to test a production bundle locally:

```bash
npm run build
npm run serve -- --host 0.0.0.0 --port 4173
```

---

## 📁 Project Structure

```text
Plugins-Docs/
├── docs/
│   ├── intro.md
│   ├── replicated-containers/
│   ├── guides/
│   └── api/
├── static/
├── src/css/custom.css
├── docusaurus.config.js
└── sidebars.js
```
