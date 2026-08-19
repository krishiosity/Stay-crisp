# CRISP

[![CI](https://github.com/<your-username>/crisp/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/<your-username>/crisp/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=informational)](.github/CONTRIBUTING.md)

CRISP is a lean, HTML-first landing page for a nootropic pouch brand — built to be fast, dependency-free, and easy to extend. It takes an **HTML-first, JavaScript-only-as-needed** approach, borrowing its repository conventions from [Shopify/Dawn](https://github.com/Shopify/dawn) while remaining a plain static site that runs anywhere.

[Getting started](#getting-started) | [Project structure](#project-structure) | [Developer tools](#developer-tools) | [Theming](#theming) | [Contributing](#contributing) | [Code of conduct](#code-of-conduct) | [License](#license)

- **Web-native in its purest form:** No framework, no build step required. One HTML file, one stylesheet, a few lines of JavaScript.
- **Lean, fast, and reliable:** Ships as static assets. Icons are inline SVG; imagery is CSS-driven placeholder gradients you can swap for real assets.
- **Progressively enhanced:** The page is fully readable with JavaScript disabled — the only script powers the light/dark theme toggle.
- **Functional, not pixel-perfect:** Semantic markup and design tokens keep the layout resilient across browsers and viewports.

## Getting started

No toolchain is required to view the site — just open the file.

```bash
git clone https://github.com/<your-username>/crisp.git
cd crisp
# open directly…
open index.html
# …or serve locally (recommended, so relative asset paths resolve cleanly)
python3 -m http.server 8080   # then visit http://localhost:8080
```

To work on the code with linting/formatting, install the dev dependencies:

```bash
npm install
```

## Project structure

```
crisp/
├── index.html                 # Page markup
├── assets/
│   ├── css/theme.css          # All styles + design tokens (:root / [data-theme])
│   ├── js/theme.js            # Theme toggle (light/dark)
│   └── img/                    # Drop real product / lifestyle imagery here
├── src/
│   └── SECTIONS.md            # Notes on each page section (hero, flavors, science…)
├── .github/
│   ├── workflows/ci.yml       # Lint + link-check on every push / PR
│   ├── ISSUE_TEMPLATE/
│   ├── CONTRIBUTING.md
│   └── CODE_OF_CONDUCT.md
├── .prettierrc.json
├── .gitignore
├── LICENSE.md
└── package.json
```

## Developer tools

- **Prettier** — formatting for HTML, CSS, and JS. Config in [`.prettierrc.json`](.prettierrc.json).
- **GitHub Actions** — [`ci.yml`](.github/workflows/ci.yml) runs a Prettier check and an HTML validation pass on every commit. A starting point — build off it.

```bash
npm run format      # write formatting
npm run lint        # check formatting (used by CI)
```

## Theming

All colors and layout tokens live at the top of `assets/css/theme.css` as CSS custom properties. Light is the default; dark is applied via `data-theme="dark"` on `<html>` and swaps the token block — no per-component overrides needed.

```css
:root            { --bg:#ffffff; --ink:#0a0a0a; --pink:#ff5a7a; /* … */ }
[data-theme="dark"] { --bg:#050505; --ink:#f4f4f2;              /* … */ }
```

The toggle in `assets/js/theme.js` flips that single attribute. To change the palette globally, edit the tokens — nothing else.

### Swapping in real imagery

Product pucks, editorial blocks, and testimonial cards use CSS gradient placeholders. Replace them by dropping files into `assets/img/` and pointing the relevant `.puck`, `.editorial .bg`, and `.tcard` rules at `background-image: url(...)`.

## Contributing

Contributions are welcome. Please read the [contributing guide](.github/CONTRIBUTING.md) for the development process and code principles.

## Code of conduct

Everyone participating is expected to follow the [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## License

Released under the [MIT License](LICENSE.md).

---

> This project is an independent landing page. It is **not** a Shopify theme and is not affiliated with or endorsed by Shopify. It merely follows the repository conventions popularized by Shopify/Dawn.
