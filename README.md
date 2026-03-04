# Plugins Docs

Documentation site built with [Docusaurus](https://docusaurus.io/), set up for **multiple plugin doc sets** in one place.

**Live URL (after GitHub Pages deploy):**

- https://iamsince-1998.github.io/Plugins-Docs/

## Primary Plugin Docs

- **Replicated Containers**
  - Overview: `docs/replicated-containers/overview.md`
  - Installation: `docs/replicated-containers/installation.md`
  - Quickstart (Blueprint): `docs/replicated-containers/quickstart-blueprint.md`
  - Quickstart (C++): `docs/replicated-containers/quickstart-cpp.md`
  - API Reference: `docs/replicated-containers/api-reference.md`

## Live Documentation Website

- https://iamsince-1998.github.io/Plugins-Docs/

> If the site URL shows this README or a plain markdown page instead of the Docusaurus site,
> go to **Settings → Pages** and set **Source = GitHub Actions**.

## Local Preview

```bash
npm ci
npm run start
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

Use this:

1. GitHub repo → **Settings** → **Pages**
2. Under **Build and deployment** set **Source = GitHub Actions**
3. Do **not** keep **Deploy from a branch (main/root)**
4. Re-run the latest workflow or push one new commit

After that, open:

- https://iamsince-1998.github.io/Plugins-Docs/

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

## Production test

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
