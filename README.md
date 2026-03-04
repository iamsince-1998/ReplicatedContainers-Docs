# Plugins Docs

This repository hosts documentation for my Unreal Engine plugins.

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

## Production Build Check

```bash
npm run build
npm run serve -- --host 0.0.0.0 --port 4173
```
