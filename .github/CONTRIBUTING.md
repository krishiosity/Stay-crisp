# Contributing to CRISP

Thanks for your interest in improving CRISP! This guide covers how to propose changes and the principles the code follows.

## Development process

1. Fork the repository and create a branch from `main`.
2. Make your change. Keep it focused — one concern per pull request.
3. Run the checks locally before opening a PR:
   ```bash
   npm install
   npm run lint          # Prettier formatting check
   npx html-validate index.html
   ```
4. Open a pull request describing **what** changed and **why**.

## Theme code principles

CRISP borrows its philosophy from [Shopify/Dawn](https://github.com/Shopify/dawn):

- **HTML first, JavaScript only as needed.** The page must be fully readable and navigable without JavaScript. Script is reserved for genuine enhancements (e.g. the theme toggle).
- **No unnecessary dependencies.** Prefer platform features and inline SVG over libraries. There is intentionally no build step to view the site.
- **Design tokens over one-off values.** Colors, spacing, and radii live as CSS custom properties in `assets/css/theme.css`. Add a token rather than hardcoding a value in a component.
- **Functional, not pixel-perfect.** Use semantic markup and progressive enhancement so the layout degrades gracefully.
- **Accessible by default.** Maintain color contrast in both themes, keep interactive elements keyboard-reachable, and label icons.

## Style

Formatting is enforced by Prettier (`.prettierrc.json`). Run `npm run format` before committing.

## Reporting bugs

Open an issue using the **Bug report** template and include steps to reproduce, expected vs. actual behavior, and your browser/OS.
