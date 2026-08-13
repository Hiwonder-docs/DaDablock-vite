# DaDablock AI Documentation

This repository contains the DaDablock AI VitePress documentation site. The
documentation source files are Markdown files under `docs/docs/`.

## Local development

Install dependencies and start the local documentation server:

```bash
npm ci
npm run docs:dev
```

Build the production site and stage the artifacts:

```bash
npm run docs:build
npm run docs:stage-main
```

The staged production files are generated in `projects/DaDablock AI/en/latest/`.

## GitHub Pages deployment

The build artifacts under `projects/` are committed to the repository. Open
**Settings > Pages**, select **Deploy from a branch**, and choose **main** and
**/(root)**. Do not bind a custom domain.

The GitHub Pages direct URL is:

```text
https://GITHUB-USERNAME.github.io/DaDablock AI-vite/projects/DaDablock AI/en/latest/
```

The public-facing URL (via the baota Nginx reverse proxy) is:

```text
https://wiki-test.hiwonder.com/projects/DaDablock AI/en/latest/
```
