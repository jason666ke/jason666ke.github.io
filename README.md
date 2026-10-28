# Chiwei Ke · Personal Homepage

A simple bilingual academic homepage built on the repository's existing Astro blog framework.

- Website: https://jason666ke.github.io/
- Author: Chiwei Ke / 柯炽炜
- Existing Chinese blog post retained; original starter examples are preserved in `examples/starter-posts/` and are not published.

## Update your information

Edit **`src/profile.ts`** on GitHub and commit your changes. It contains the name, affiliation, degree program, email, GitHub link, and research interests.

The short bilingual biography is in `src/pages/index.astro`. No publications or academic achievements have been added.

## Add a blog post

Create a Markdown file in `src/content/blog/`:

```markdown
---
title: "Your post title"
description: "A short description"
pubDate: 2026-10-28
---

Your article goes here.
```

The notes list, homepage, RSS feed, and sitemap update at build time.

## Local development

Requires a Node.js version supported by the locked Astro version.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## GitHub Pages

The existing `.github/workflows/deploy.yml` builds the Astro site and deploys it after a push to `main`.

If Pages has not been enabled, open the repository's **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.

Once the workflow succeeds, the site should be available at https://jason666ke.github.io/. Confirm it opens while logged out before using it as the OpenReview Homepage URL.

## Framework and license

Built with Astro, retaining the original repository license in `LICENSE`. Local Atkinson fonts are retained from the existing starter.
